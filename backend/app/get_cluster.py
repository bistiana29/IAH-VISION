from sqlalchemy import text
from .connect_database import SessionLocal

def get_cluster_by_year(tahun: int):
    session = SessionLocal()
    try:
        query = text(f"""
            SELECT p.id_provinsi, p.provinsi, c.cluster_{tahun} AS cluster
            FROM cluster c
            JOIN provinsi p ON p.id_provinsi = c.id_provinsi
            WHERE cluster_{tahun} IS NOT NULL
        """)
        result = session.execute(query).mappings().fetchall()

        return [
            {
                "id_provinsi": row["id_provinsi"],
                "provinsi": row["provinsi"],
                "cluster": row["cluster"]
            }
            for row in result
        ]
    finally:
        session.close()