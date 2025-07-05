from fastapi import FastAPI
from ncclient import manager

app = FastAPI()

@app.get("/")
def fetch_running_config():
    with manager.connect(
        host="10.10.20.50",
        port=830,
        username="admin",
        password="C1sco12345",
        hostkey_verify=False,
        device_params={"name": "csr"},
        allow_agent=False,
        look_for_keys=False
    ) as m:
        print("✅ Connected to R1")
        config = m.get_config(source="running").data_xml
        return {"config": config}
