import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpenCheckIcon, ZapIcon, ServerIcon, UploadIcon, TerminalIcon } from "lucide-react";

const HowItWorks: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-800 flex flex-col">

      {/* Header */}
      <header className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 drop-shadow-md">
          How It Works
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
          Understand the process behind our automated SDN Routing Configurator powered by FastAPI and React.
        </p>
      </header>

      {/* Step-by-step Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/70 p-6 rounded-xl shadow-xl border border-blue-100 hover:scale-105 transition">
            <TerminalIcon className="text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">1. Input Raw Routing Table</h3>
            <p>
              Users paste routing table output copied from Cisco routers or Packet Tracer simulation into the input form on the homepage.
            </p>
          </div>

          <div className="bg-white/70 p-6 rounded-xl shadow-xl border border-blue-100 hover:scale-105 transition">
            <BookOpenCheckIcon className="text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">2. Parsing & Conversion</h3>
            <p>
              The frontend parses the raw text and converts it to structured JSON including fields like destination, next hop, protocol, and metric.
            </p>
          </div>

          <div className="bg-white/70 p-6 rounded-xl shadow-xl border border-blue-100 hover:scale-105 transition">
            <UploadIcon className="text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">3. Data Submission via REST API</h3>
            <p>
              The parsed JSON is sent to the backend through a POST request to the `/api/routing` endpoint powered by FastAPI.
            </p>
          </div>

          <div className="bg-white/70 p-6 rounded-xl shadow-xl border border-blue-100 hover:scale-105 transition">
            <ServerIcon className="text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">4. Backend Storage</h3>
            <p>
              The backend receives and stores the structured routing data in a JSON file named <code>routing_table.json</code>.
            </p>
          </div>

          <div className="md:col-span-2 bg-white/70 p-6 rounded-xl shadow-xl border border-blue-100 hover:scale-105 transition">
            <ZapIcon className="text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">5. Visualization</h3>
            <p>
              Upon successful data submission, the user is redirected to the <code>/result</code> page where the routing data is rendered beautifully in a responsive table using custom React components.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Summary */}
      <section className="py-16 bg-white/50 backdrop-blur-sm mt-12">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">⚙️ Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 text-center">
          <div className="bg-white/80 p-6 rounded-xl shadow-md border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-600">Frontend</h4>
            <p>React (Vite), Tailwind CSS, shadcn/ui</p>
          </div>
          <div className="bg-white/80 p-6 rounded-xl shadow-md border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-600">Backend</h4>
            <p>FastAPI, Python 3.12, uvicorn</p>
          </div>
          <div className="bg-white/80 p-6 rounded-xl shadow-md border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-600">Simulation</h4>
            <p>Cisco Packet Tracer</p>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="text-center mt-12 mb-10">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold shadow-md"
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
