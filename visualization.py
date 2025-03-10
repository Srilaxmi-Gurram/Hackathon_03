from fastapi import APIRouter
import pandas as pd
import os

router = APIRouter(prefix="/visualization", tags=["Visualization"])

@router.get("/")
def get_chart_data(filename: str, column: str):
    file_path = os.path.join("uploaded_files", filename)
    if not os.path.exists(file_path):
        return {"error": "File not found"}

    df = pd.read_csv(file_path)

    if column not in df.columns:
        return {"error": f"Column '{column}' not found"}

    chart_data = df[column].value_counts().reset_index()
    chart_data.columns = ["label", "value"]

    return chart_data.to_dict(orient="records")
