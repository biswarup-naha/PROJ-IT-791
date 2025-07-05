from ncclient import manager

def main():
    with manager.connect(
        host="192.168.152.133",
        port=830,
        username="developer",
        password="C1sco12345",
        hostkey_verify=False,
        device_params={"name": "csr"},
        allow_agent=False,
        look_for_keys=False
    ) as m:
        print("✅ Connected to R1")
        config = m.get_config(source="running").data_xml
        print("📦 Running Config:\n")
        print(config)

if __name__ == "__main__":
    main()
