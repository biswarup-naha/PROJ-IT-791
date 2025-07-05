import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoaderOverlay from './ui/LoaderOverlay'; // <- Import it
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [rawInput, setRawInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  const parseRoutingTable = (table: string) => {
    const routes: any[] = [];
    const lines = table.trim().split('\n');

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      const parts = trimmed.split(/\s+/);
      const protocol = parts[0];

      if (trimmed.includes('is directly connected')) {
        const destination = parts[1];
        const iface = parts[parts.length - 1];
        routes.push({
          destination,
          next_hop: 'directly connected',
          interface: iface,
          protocol,
        });
      } else if (trimmed.includes('via')) {
        const destination = parts[1];
        const metric = parts[2].replace('[', '').replace(']', '');
        const next_hop = parts[4].replace(',', '');
        const iface = parts[6];
        routes.push({
          destination,
          next_hop,
          interface: iface,
          protocol,
          metric,
        });
      }
    }

    return { routes };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLoader(true);
  };

  const handleLoaderComplete = async () => {
    try {
      const parsed = parseRoutingTable(rawInput);
      await axios.post('http://localhost:8000/api/routing', parsed);
      setError(null);
      navigate('/result');
    } catch (err) {
      setError('Failed to parse or submit routing data.');
      console.error(err);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-100 text-gray-800 flex flex-col relative">

      {/* Loader Overlay */}
      {showLoader && <LoaderOverlay onComplete={handleLoaderComplete} />}

      {/* Header */}
      <header className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 drop-shadow-md">
          Automated SDN Routing Configurator
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
          Paste your routing data and automate the configuration process.
        </p>
      </header>

      {/* Features */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          <div className="bg-white/70 p-6 rounded-xl shadow-xl border border-blue-100 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">1. Accepts Raw Routing Data</h3>
            <p>Input raw routing table output from Cisco routers or Packet Tracer.</p>
          </div>
          <div className="bg-white/70 p-6 rounded-xl shadow-xl border border-blue-100 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">2. Parses and Converts</h3>
            <p>Automatically converts routing data to structured JSON using FastAPI backend.</p>
          </div>
          <div className="bg-white/70 p-6 rounded-xl shadow-xl border border-blue-100 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">3. View Parsed Table</h3>
            <p>Visualize your routes cleanly in a beautiful and responsive table.</p>
          </div>
        </div>
      </section>

      {/* Input Form */}
      <section className="py-10 px-4 w-full max-w-4xl mx-auto">
        <form onSubmit={handleSubmit}>
          <label className="block text-xl font-semibold mb-2 text-center">Paste Your Raw Routing Table Below</label>
          <textarea
            rows={10}
            className="w-full p-4 border rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder={`O    30.0.0.0/8 [110/65] via 192.168.1.1, 02:06:25, Serial2/0\nC    10.0.0.0/8 is directly connected, FastEthernet0/0\nC    20.0.0.0/8 is directly connected, Serial2/0`}
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
            required
          />
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold shadow-md"
            >
              Connect IPs to Automate
            </button>
          </div>
          {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-blue-800 text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div>
            <h4 className="font-bold text-lg mb-2">SDN AutoConfig Tool</h4>
            <p>
              Automates the configuration and assessment of routing tables in a single administrative domain using FastAPI and React.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Project Info</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><Link to="/contact"><a href="#" className="hover:underline">Contact</a></Link></li>
              <li><Link to="/howItWorks"><a href="#" className="hover:underline">How it Works</a></Link></li>
              <li><a href="#" className="hover:underline">API Docs</a></li>
              <li><a href="#" className="hover:underline">GitHub Repository</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Contributors</h4>
            <ul className="text-sm space-y-1">
              <li>Biswarup Naha</li>
              <li>Dona Murmu</li>
              <li>Sourav Karmakar</li>
              <li>Avanish</li>
              <li>Hemdatta Das</li>
              <li className="mt-2 font-semibold text-blue-200">Guided by: Mrs. Nabanita Das</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs mt-6 text-blue-200">
          © 2025 Automated SDN Tool – B.Tech Final Year Project, All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Home;
