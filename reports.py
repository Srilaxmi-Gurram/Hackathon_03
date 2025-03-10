from fastapi import APIRouter, Response
import pandas as pd
import os

router = APIRouter(prefix="/reports", tags=["Reports"])

@router.get("/download")
def download_report(filename: str, file_type: str = "csv"):
    file_path = os.path.join("uploaded_files", filename)

    if not os.path.exists(file_path):
        return {"error": "File not found"}

    df = pd.read_csv(file_path)

    if file_type == "excel":
        excel_path = file_path.replace(".csv", ".xlsx")
        df.to_excel(excel_path, index=False)
        with open(excel_path, "rb") as f:
            data = f.read()
        return Response(content=data, media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")

    with open(file_path, "rb") as f:
        data = f.read()
    return Response(content=data, media_type="text/csv")
