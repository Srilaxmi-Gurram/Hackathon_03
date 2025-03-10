from fastapi import FastAPI
from routes import upload, query, visualization, reports

app = FastAPI(title="DataQueryAI Backend")

# Include Routes
app.include_router(upload.router)
app.include_router(query.router)
app.include_router(visualization.router)
app.include_router(reports.router)

@app.get("/")
def home():
    return {"message": "Welcome to DataQueryAI Backend"}
