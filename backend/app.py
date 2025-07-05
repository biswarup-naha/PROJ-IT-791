from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import json
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # your React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_FILE = "routing.json"

class Route(BaseModel):
    destination: str
    next_hop: str
    interface: str
    protocol: Optional[str] = None
    metric: Optional[str] = None

class RoutingTable(BaseModel):
    routes: List[Route]

@app.post("/api/routing")
def store_routing_table(data: RoutingTable):
    with open(DATA_FILE, "w") as f:
        json.dump(data.model_dump(), f, indent=4)
    return {"message": "Routing table saved successfully."}

@app.get("/api/routing")
def get_routing_table():
    if not os.path.exists(DATA_FILE):
        raise HTTPException(status_code=404, detail="No routing data found.")
    with open(DATA_FILE, "r") as f:
        data = json.load(f)
    return data

@app.get("/api/netconf")
def get_routing_table():
    if not os.path.exists(DATA_FILE):
        raise HTTPException(status_code=404, detail="No routing data found.")
    with open(DATA_FILE, "r") as f:
        data = json.load(f)
    return data

