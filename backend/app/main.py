from fastapi import FastAPI, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from pydantic import BaseModel
import psycopg2
import psycopg2.extras
import os

app = FastAPI()

# CORS agar ReactJS bisa akses
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Untuk development, nanti diganti domain frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

conn = psycopg2.connect(
    dbname="iahVision",
    user="postgres",
    password="postgres",
    host="localhost",
    port="5432"
)


class UmpanBalikRequest(BaseModel):
    id_user: int
    umpan_balik: str

@app.get("/api/provinsi-cluster")
def get_provinsi_data(tahun: Optional[int] = Query(2024, ge=2010, le=2024)):
    with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cur:
        query = f"""
            SELECT 
                p.id_provinsi,
                p.provinsi,
                c.cluster_{tahun} AS cluster,
                ipm.ipm_{tahun} AS ipm,
                ahh.ahh_{tahun} AS ahh,
                ahs.ahs_{tahun} AS ahs,
                rls.rls_{tahun} AS rls,
                ppk.ppk_{tahun} AS ppk
            FROM provinsi p
            LEFT JOIN cluster c ON p.id_provinsi = c.id_provinsi
            LEFT JOIN ipm ON p.id_provinsi = ipm.id_provinsi
            LEFT JOIN ahh ON p.id_provinsi = ahh.id_provinsi
            LEFT JOIN ahs ON p.id_provinsi = ahs.id_provinsi
            LEFT JOIN rls ON p.id_provinsi = rls.id_provinsi
            LEFT JOIN ppk ON p.id_provinsi = ppk.id_provinsi
            ORDER BY p.id_provinsi
        """
        cur.execute(query)
        results = cur.fetchall()

    data = []
    for row in results:
        data.append({
            "id_provinsi": row["id_provinsi"],
            "provinsi": row["provinsi"],
            "cluster": row["cluster"],
            "ipm": row["ipm"],
            "ahh": row["ahh"],
            "ahs": row["ahs"],
            "rls": row["rls"],
            "ppk": row["ppk"],
        })
    return {"tahun": tahun, "data": data}

@app.post("/api/umpan-balik")
def post_umpan_balik(request: UmpanBalikRequest):
    with conn.cursor() as cur:
        try:
            cur.execute(
                "INSERT INTO umpan_baliks (umpan_balik) VALUES (%s)",
                (request.umpan_balik,)
            )
            conn.commit()
        except Exception as e:
            conn.rollback()
            raise HTTPException(status_code=500, detail="Gagal menyimpan umpan balik")
    return {"message": "Umpan balik berhasil disimpan"}