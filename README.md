# Automated Configuration and Assessment of Network Devices in a Single Administrative Domain (Software Defined Networking)

This project is a SDN-based tool designed to **automate configuration and assessment of network devices** in a single administrative domain. It leverages **FastAPI** and **React** to provide a modern web interface and RESTful APIs for processing and visualizing router configuration data such as routing tables.

---

## 🚀 Features

- ✅ Accepts raw routing table input (e.g., from Cisco routers).
- ✅ Parses and converts the routing data into structured JSON.
- ✅ Stores the structured data in a backend file (`routing.json`).
- ✅ Renders the routing table beautifully using a modern React UI.
- ✅ Fully automated backend–frontend integration with REST APIs.
- ✅ Route information includes: destination, next-hop, protocol, metric, and interface.

---

## 🧱 Tech Stack

| Layer           | Tech Used                    |
|-----------------|------------------------------|
| Language        | Python 3.12, TypeScript      |
| Backend         | FastAPI (with CORS enabled)  |
| Frontend        | React (Vite), Tailwind CSS   |
| UI Components   | shadcn/ui, lucide-react      |
| API Calls       | Axios                        |
| Package manager | bun, uv                      |
| Dev Tools       | VSCode, Browser DevTools     |
| Simulation      | Cisco Packet Tracer          |

---

## 📦 Project Structure

```

project/
├── routing_simulator.py           # Console-based version
├── routing.py                     # Python parser for routing table text
├── routing_table_input.txt        # Sample input from a router
├── routing_table.json             # Output after parsing
├── backend/
│   └── main.py                    # FastAPI app (handles POST/GET routing data)
├── frontend/
│   ├── Home.tsx                  # Raw input form + POST logic
│   ├── RoutingTable.tsx          # Table view after GET
│   ├── App.tsx                   # Routing using react-router-dom
│   └── main.tsx                  # Entry point with <App />

```

---

## ⚙️ Setup Instructions

### Prerequisites

Ensure the following are installed:

- **Python 3.12 + uv**
- **Node.js + bun**
- **Cisco Packet Tracer** (for simulated routing output)

---

### 🔧 Backend Setup (FastAPI)

1. Navigate to `backend/` and install dependencies:
   ```bash
   uv add fastapi uvicorn pydantic
   ```

2. Run the FastAPI server:

   ```bash
   uv run uvicorn app:app --reload --port 8000
   ```

---

### 💻 Frontend Setup (React + Vite)

1. Navigate to `frontend/`:

   ```bash
   cd frontend
   bun install   # or pnpm install
   ```

2. Run the development server:

   ```bash
   bun run dev
   ```

---

## 🧪 How to Use

### 1. Get Routing Table

Copy raw routing table output from Packet Tracer or a real router:

```
C    10.0.0.0/8 is directly connected, FastEthernet0/0
C    20.0.0.0/8 is directly connected, Serial2/0
O    30.0.0.0/8 [110/65] via 20.0.0.2, 02:06:25, Serial2/0
```

---

### 2. Paste and Submit

- Paste the routing table into the **Home page** (`/`)
- Click **Submit** → routing data is parsed and POSTed to backend
- Redirected to `/result` → shows a beautiful routing table

---

## 📤 API Endpoints

| Method | Endpoint         | Description                    |
|--------|------------------|--------------------------------|
| POST   | `/api/routing`   | Save parsed routing data       |
| GET    | `/api/routing`   | Retrieve routing data as JSON  |

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## 👥 Contributors

- Biswarup Naha
- Dona Murmu
- Sourav Karmakar
- Avanish
- Hemdatta Das  
**Guided by:** Mrs. Nabanita Das

---

## 🙏 Acknowledgments

- [Python](https://www.python.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [React](https://reactjs.org/)
- [Cisco Packet Tracer](https://www.netacad.com/)

