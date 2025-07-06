import React, { useEffect, useState } from "react";
import axios from "axios";
import { Badge } from "@/pages/ui/badge";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/pages/ui/table";
import { Card, CardContent } from "@/pages/ui/card";
import { NetworkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Route = {
  destination: string;
  next_hop: string;
  interface: string;
  protocol?: string;
  metric?: string;
};

const getProtocolBadge = (protocol?: string) => {
  switch (protocol) {
    case "O":
      return <Badge className="bg-blue-100 text-blue-700">OSPF</Badge>;
    default:
      return <Badge className="bg-gray-100 text-gray-700">Direct</Badge>;
  }
};

const RoutingTable: React.FC = () => {
  const [routingData, setRoutingData] = useState<Route[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoutes = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8000/api/routing");
        setRoutingData(res.data.routes);
      } catch (err) {
        setError("Failed to fetch routing data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRoutes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-800 py-16 px-6">
      <Card className="max-w-6xl mx-auto rounded-3xl shadow-2xl bg-white/70 backdrop-blur-xl border border-blue-100">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <NetworkIcon className="h-7 w-7 text-blue-700" />
            <h2 className="text-3xl font-bold text-blue-800 drop-shadow-sm">
              Parsed Routing Table
            </h2>
          </div>

          {loading ? (
            <p className="text-blue-600 text-lg animate-pulse">Loading routing data...</p>
          ) : error ? (
            <p className="text-red-500 text-lg">{error}</p>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Destination</TableHead>
                    <TableHead>Next Hop</TableHead>
                    <TableHead>Interface</TableHead>
                    <TableHead>Protocol</TableHead>
                    <TableHead>Metric</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {routingData.map((route, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{route.destination}</TableCell>
                      <TableCell>
                        {route.next_hop === "via"
                          ? "Remote"
                          : "Directly Connected"}
                      </TableCell>
                      <TableCell>{route.interface}</TableCell>
                      <TableCell>{getProtocolBadge(route.protocol)}</TableCell>
                      <TableCell>{route.metric || "—"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="text-center mt-10">
                <button
                  onClick={() => navigate("/")}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold shadow-md"
                >
                  ⬅ Back to Home
                </button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RoutingTable;
