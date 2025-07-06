import React, { useEffect, useState } from "react";
import axios from "axios";
import { Badge } from "@/pages/ui/badge";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/pages/ui/table";
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

    const navigate = useNavigate();
    return (
        <Card className="max-w-5xl mx-auto mt-10 shadow-xl border rounded-2xl">
            <CardContent className="p-6">
                <h2 className="text-2xl font-semibold flex items-center justify-center gap-2 mb-4">
                    <NetworkIcon className="h-6 w-6" /> Routing Table
                </h2>

                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
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
                                <button
                                    onClick={()=>navigate("/")}
                                    className="px-6 py-2 bg-blue-300 hover:bg-blue-700 rounded"
                                >
                                    Back
                                </button>
                            </>
                )}
            </CardContent>
        </Card>
    );
};

export default RoutingTable;
