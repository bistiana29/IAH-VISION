from sqlalchemy import create_engine

DATABASE_URL = "postgresql+psycopg2://postgres:postgres@localhost:5432/iahVision"
engine = create_engine(DATABASE_URL)