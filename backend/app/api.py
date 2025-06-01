from sqlalchemy import text, exc, Table, Column, Integer, String, Text, MetaData, insert, TIMESTAMP
from app import connect_database, forecasting
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Literal
import pandas as pd
import redis
import json

router = APIRouter()
metadata = MetaData()

# endpoint forecasting
@router.get("/forecast/provinsi/{provinsi_name}")
async def forecast_by_provinsi(provinsi_name: str):
    key = f"forecast:{provinsi_name.lower()}"

    cached_data = connect_database.redis_client.get(key)
    if cached_data:
        return {"provinsi": provinsi_name, "data": json.loads(cached_data)}

    factors = ['ipm', 'ahh', 'ahs', 'rls', 'ppk']
    result = {}

    for factor in factors:
        df = forecasting.get_data_factor(factor)

        df_filtered = df[df['provinsi'].str.lower() == provinsi_name.lower()]
        if df_filtered.empty:
            raise HTTPException(status_code=404, detail=f"Provinsi '{provinsi_name}' tidak ditemukan")

        prov_id = df_filtered.iloc[0]['id_provinsi']

        df_forecast = forecasting.forecasting_with_mlflow(
            df, id_col="id_provinsi", factor_name=factor, provinsi_id=prov_id
        )

        all_years = [str(y) for y in range(2010, 2027)]
        data = df_forecast[df_forecast['provinsi'].str.lower() == provinsi_name.lower()][all_years].iloc[0].to_dict()

        result[factor] = data
    connect_database.redis_client.set(key, json.dumps(result), ex=864000)
    return {"provinsi": provinsi_name, "data": result}

# endpoint clustering
@router.get("/cluster/{year}")
async def get_cluster_data(year: int):
    if year < 2010 or year > 2024:
        raise HTTPException(status_code=400, detail="Tahun harus antara 2010 sampai 2024")

    column_names = [
        f"cluster_{year}", f"ipm_{year}", f"ahh_{year}",
        f"ahs_{year}", f"rls_{year}", f"ppk_{year}"
    ]

    query = f"""
        SELECT p.provinsi,
               c.{column_names[0]} AS cluster,
               ipm.{column_names[1]} AS ipm,
               ahh.{column_names[2]} AS ahh,
               ahs.{column_names[3]} AS ahs,
               rls.{column_names[4]} AS rls,
               ppk.{column_names[5]} AS ppk
        FROM provinsi p
        JOIN cluster c ON p.id_provinsi = c.id_provinsi
        JOIN ipm ON p.id_provinsi = ipm.id_provinsi
        JOIN ahh ON p.id_provinsi = ahh.id_provinsi
        JOIN ahs ON p.id_provinsi = ahs.id_provinsi
        JOIN rls ON p.id_provinsi = rls.id_provinsi
        JOIN ppk ON p.id_provinsi = ppk.id_provinsi
    """

    try:
        df = pd.read_sql(text(query), connect_database.engine)
        if df.empty:
            raise HTTPException(status_code=404, detail=f"Tidak ada data untuk tahun {year}")
        return {"data": df.to_dict(orient="records")}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error saat mengambil data: {str(e)}")

# endpoint factor
@router.get("/{factor}/{year}/{category}")
def get_factor_data(
    factor: Literal["ipm", "ahh", "ahs", "rls", "ppk"],
    year: int,
    category: Literal["all", "top10", "bottom10"]
):
    column_name = f"{factor}_{year}"

    base_query = f"""
        SELECT p.id_provinsi, p.provinsi, a.{column_name}
        FROM {factor} a
        JOIN provinsi p ON a.id_provinsi = p.id_provinsi
    """

    if category == "top10":
        base_query += f" ORDER BY a.{column_name} DESC LIMIT 10"
    elif category == "bottom10":
        base_query += f" ORDER BY a.{column_name} ASC LIMIT 10"

    try:
        with connect_database.engine.connect() as connection:
            result = connection.execute(text(base_query)).fetchall()
    except exc.SQLAlchemyError as e:
        raise HTTPException(status_code=400, detail=f"Database error: {str(e)}")

    return [
        {"id_provinsi": r[0], "provinsi": r[1], "nilai": r[2]}
        for r in result
    ]

# endpoint feedback (umpan_baliks)
class UmpanBalik(BaseModel):
    nama: str
    email: EmailStr
    umpan_balik: str

@router.post("/umpan-balik")
async def post_umpan_balik(data: UmpanBalik):
    try:
        query = text("""
            INSERT INTO umpan_baliks (nama, email, umpan_balik, created_at)
            VALUES (:nama, :email, :umpan_balik, :created_at)
        """)
        
        with connect_database.engine.begin() as conn:
            conn.execute(query, {
                "nama": data.nama,
                "email": data.email,
                "umpan_balik": data.umpan_balik,
                "created_at": datetime.utcnow()
            })
        
        return {"message": "Umpan balik berhasil dikirim."}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Gagal menyimpan umpan balik: {str(e)}")