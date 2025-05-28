from fastapi import APIRouter, HTTPException
from app import forecasting, get_cluster
import redis
import json

router = APIRouter()

redis_client = redis.Redis(host='localhost', port=6379, db=0, decode_responses=True)

@router.get("/forecast/provinsi/{provinsi_name}")
async def forecast_by_provinsi(provinsi_name: str):
    key = f"forecast:{provinsi_name.lower()}"

    cached_data = redis_client.get(key)
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
    redis_client.set(key, json.dumps(result), ex=864000)
    return {"provinsi": provinsi_name, "data": result}

@router.get("/cluster/{year}")
async def get_cluster_route(year: int):
    if year < 2010 or year > 2024:
        raise HTTPException(status_code=400, detail="Tahun harus antara 2010 sampai 2024")

    try:
        df = get_cluster.get_cluster_by_year(year) 
        if df.empty:
            raise HTTPException(status_code=404, detail=f"Tidak ada data untuk tahun {year}")
        return {"data": df.to_dict(orient="records")}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")