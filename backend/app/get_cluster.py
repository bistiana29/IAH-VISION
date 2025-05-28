import pandas as pd
from sqlalchemy import create_engine

engine = create_engine("postgresql+psycopg2://postgres:postgres@localhost:5432/iahVision")

def get_cluster_by_year(year: int):
    if year < 2010 or year > 2024:
        raise ValueError("Tahun harus antara 2010 sampai 2024")

    query = f"""
        SELECT p.provinsi, c.cluster_{year} as cluster,
               ipm.ipm_{year} as ipm,
               ahh.ahh_{year} as ahh,
               ahs.ahs_{year} as ahs,
               rls.rls_{year} as rls,
               ppk.ppk_{year} as ppk
        FROM provinsi p
        JOIN cluster c ON p.id_provinsi = c.id_provinsi
        JOIN ipm ON p.id_provinsi = ipm.id_provinsi
        JOIN ahh ON p.id_provinsi = ahh.id_provinsi
        JOIN ahs ON p.id_provinsi = ahs.id_provinsi
        JOIN rls ON p.id_provinsi = rls.id_provinsi
        JOIN ppk ON p.id_provinsi = ppk.id_provinsi
    """
    df = pd.read_sql(query, engine)
    return df