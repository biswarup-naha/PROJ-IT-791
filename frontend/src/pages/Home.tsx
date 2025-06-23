import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [rawInput, setRawInput] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const parseRoutingTable = (table: string) => {
        const routes: any[] = [];
        const lines = table.trim().split("\n");

        for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed) continue;

            const parts = trimmed.split(/\s+/);
            const protocol = parts[0];

            if (trimmed.includes("is directly connected")) {
                const destination = parts[1];
                const iface = parts[parts.length - 1];
                routes.push({
                    destination,
                    next_hop: "directly connected",
                    interface: iface,
                    protocol,
                });
            } else if (trimmed.includes("via")) {
                const destination = parts[1];
                const metric = parts[2].replace("[", "").replace("]", "");
                const next_hop = parts[4].replace(",", "");
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

    const handleSubmit = async () => {
        try {
            const parsed = parseRoutingTable(rawInput);
            await axios.post("http://localhost:8000/api/routing", parsed);
            setError(null);
            navigate("/result"); 
        } catch (err) {
            setError("Failed to parse or submit routing data.");
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-3xl mx-auto space-y-4">
                <h1 className="text-3xl font-bold">Input raw routing data</h1>
                <textarea
                    rows={10}
                    className="w-full p-4 rounded-lg border border-gray-600"
                    value={rawInput}
                    onChange={(e) => setRawInput(e.target.value)}
                    placeholder={`O    30.0.0.0/8 [110/65] via 192.168.1.1, 02:06:25, Serial2/0
C    10.0.0.0/8 is directly connected, FastEthernet0/0
C    20.0.0.0/8 is directly connected, Serial2/0`}
                />
                <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-blue-300 hover:bg-blue-500 rounded"
                >
                    Submit
                </button>
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </div>
    );
};

export default Home;
