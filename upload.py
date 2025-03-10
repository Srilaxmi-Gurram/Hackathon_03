from fastapi import APIRouter, UploadFile, File
import pandas as pd
import os

router = APIRouter(prefix="/upload", tags=["File Upload"])
UPLOAD_DIR = "uploaded_files"

os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/")
async def upload_file(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as f:
        f.write(await file.read())

    # Check if the file is a valid CSV
    try:
        df = pd.read_csv(file_path)
    except Exception as e:
        os.remove(file_path)
        return {"error": "Invalid CSV file"}

    return {"filename": file.filename, "columns": list(df.columns)}
