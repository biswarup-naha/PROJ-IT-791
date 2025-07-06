from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from pydantic import BaseModel
import json
import os
import re

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # your React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_FILE = "routing.json"

class RawRoutingInput(BaseModel):
    data: str


class Route(BaseModel):
    destination: str
    next_hop: str
    interface: str
    protocol: Optional[str] = None
    metric: Optional[str] = None

class RoutingTable(BaseModel):
    routes: List[Route]

def parse_routing_data(raw_text: str) -> RoutingTable:
    import re
    routes = []

    lines = raw_text.strip().splitlines()

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Match dynamic (e.g., OSPF) routes
        match_dynamic = re.match(
            r"(\w+)\s+(\d+\.\d+\.\d+\.\d+/\d+)\s+\[(.*?)\]\s+via\s+(\d+\.\d+\.\d+\.\d+),.*?,\s*(\S+)",
            line
        )
        if match_dynamic:
            protocol, destination, metric, next_hop, interface = match_dynamic.groups()
            routes.append(Route(
                destination=destination,
                next_hop=next_hop,
                interface=interface,
                protocol=protocol,
                metric=metric
            ))
            continue

        # Match connected routes
        match_connected = re.match(
            r"(\w+)\s+(\d+\.\d+\.\d+\.\d+/\d+)\s+is directly connected,?\s*(\S+)",
            line
        )
        if match_connected:
            protocol, destination, interface = match_connected.groups()
            routes.append(Route(
                destination=destination,
                next_hop="—",
                interface=interface,
                protocol=protocol,
                metric=None
            ))
            continue

    return RoutingTable(routes=routes)


@app.post("/api/routing")
def store_routing_table(payload: RawRoutingInput):
    try:
        parsed_data = parse_routing_data(payload.data)
        with open(DATA_FILE, "w") as f:
            json.dump(parsed_data.model_dump(), f, indent=4)
        return {"message": "Routing table saved successfully."}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Parsing failed: {str(e)}")


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

