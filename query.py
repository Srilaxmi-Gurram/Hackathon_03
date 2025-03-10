from fastapi import APIRouter, Query
from models.tapas_model import TapasProcessor
import os

router = APIRouter(prefix="/query", tags=["Query Processing"])
tapas = TapasProcessor()

@router.get("/")
def query_csv(filename: str, question: str):
    file_path = os.path.join("uploaded_files", filename)
    if not os.path.exists(file_path):
        return {"error": "File not found"}

    response = tapas.query_csv(file_path, question)
    return response
