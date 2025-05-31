import warnings
warnings.filterwarnings("ignore")

import mlflow
import numpy as np
import pandas as pd
from darts import TimeSeries
from darts.metrics import mape
from app import connect_database
from sqlalchemy import create_engine
from darts.models import Theta, Prophet, LinearRegressionModel, NaiveDrift, NaiveSeasonal

# Atur URI MLflow
mlflow.set_tracking_uri("file:///D:/6.Teknologi Web Service/IAH-VISION/mlruns")

def get_data_factor(factor: str) -> pd.DataFrame:
    query = f"""
        SELECT p.id_provinsi, p.provinsi, f.*
        FROM provinsi p
        JOIN {factor} f ON p.id_provinsi = f.id_provinsi
    """
    df = pd.read_sql(query, connect_database.engine)
    df = df.loc[:, ~df.columns.duplicated()]

    # Rename kolom tahun (misal ipm_2010 jadi 2010)
    rename_map = {col: col.replace(f"{factor}_", "") for col in df.columns if col.startswith(f"{factor}_")}
    df.rename(columns=rename_map, inplace=True)

    return df

def forecasting_with_mlflow(
    df: pd.DataFrame,
    id_col: str,
    factor_name: str,
    start_year=2010,
    end_year=2024,
    predict_years=2,
    provinsi_id=None  # optional: forecast hanya untuk provinsi ini
) -> pd.DataFrame:

    df = df.loc[:, ~df.columns.duplicated()]
    years = [str(y) for y in range(start_year, end_year + 1)]
    time_index = pd.date_range(start=f"{start_year}-12-31", periods=len(years), freq="Y")

    models = [
        Theta(),
        Prophet(),
        LinearRegressionModel(lags=4),
        NaiveDrift(),
        NaiveSeasonal(K=12)
    ]

    mlflow.set_experiment(f"Forecasting_{factor_name}_Monitor")

    results = []

    if provinsi_id is not None:
        df = df[df[id_col] == provinsi_id]

    for idx, row in df.iterrows():
        prov_id = row[id_col]
        values = row[years].values.astype(float)

        ts = TimeSeries.from_times_and_values(time_index, values)
        train, val = ts[:-predict_years], ts[-predict_years:]

        best_model = None
        best_mape = float('inf')
        best_model_name = None

        for model in models:
            model_name = model.__class__.__name__
            try:
                model.fit(train)
                pred = model.predict(len(val))
                score = mape(val, pred)

                if score < best_mape:
                    best_mape = score
                    best_model = model
                    best_model_name = model_name
            except Exception as e:
                print(f"Error model {model_name} untuk provinsi {prov_id}: {e}")

        if best_model:
            future_pred = best_model.predict(predict_years).values().flatten()
        else:
            future_pred = [np.nan] * predict_years

        with mlflow.start_run(run_name=f"{factor_name}_provinsi_{prov_id}"):
            mlflow.set_tag("prov_id", prov_id)
            mlflow.set_tag("factor", factor_name)
            mlflow.log_param("best_model", best_model_name)
            mlflow.log_metric("mape", best_mape)

        results.append({
            id_col: prov_id,
            "provinsi": row["provinsi"],
            "best_model": best_model_name,
            "mape_validasi": best_mape,
            **{str(end_year + i + 1): future_pred[i] for i in range(predict_years)}
        })

    df_pred = pd.DataFrame(results)
    df_final = df.merge(df_pred, on=[id_col, "provinsi"], how="left")

    all_years = [str(y) for y in range(start_year, end_year + predict_years + 1)]
    df_final[all_years] = df_final[all_years].astype(float)

    return df_final