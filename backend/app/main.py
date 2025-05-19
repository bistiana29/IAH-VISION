from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from .get_cluster import get_cluster_by_year

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/cluster")
def cluster_per_year(tahun: int = Query(..., ge=2010, le=2024)):
    data = get_cluster_by_year(tahun)
    if not data:
        return {"error": f"Tidak ada data untuk tahun {tahun}"}
    return {"tahun": tahun, "data": data}