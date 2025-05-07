import os
import pandas as pd
from sqlalchemy import create_engine
from dotenv import load_dotenv
from pathlib import Path

load_dotenv(dotenv_path=".env")

DATA_DIR = Path("/app/data")

# DB Connection URL
db_url = f"postgresql://{os.getenv('POSTGRES_USER')}:{os.getenv('POSTGRES_PASSWORD')}@db:{os.getenv('POSTGRES_PORT')}/{os.getenv('POSTGRES_DB')}"
engine = create_engine(db_url)

# Load CSV
kab_kota_prov = pd.read_csv(DATA_DIR/"kab_kota_prov_clean.csv")
ipm = pd.read_csv(DATA_DIR/"ipm_clean.csv")
ahh = pd.read_csv(DATA_DIR/"ahh_clean.csv")
ahs = pd.read_csv(DATA_DIR/"ahs_clean.csv")
rls = pd.read_csv(DATA_DIR/"rls_clean.csv")
pengeluaran = pd.read_csv(DATA_DIR/"pengeluaran_clean.csv")

# Masukkan ke masing-masing tabel
kab_kota_prov.to_sql("kab_kota_prov", engine, if_exists="append", index=False)
ipm.to_sql("ipm", engine, if_exists="append", index=False)
ahh.to_sql("ahh", engine, if_exists="append", index=False)
ahs.to_sql("ahs", engine, if_exists="append", index=False)
rls.to_sql("rls", engine, if_exists="append", index=False)
pengeluaran.to_sql("pengeluaran_perkapita", engine, if_exists="append", index=False)