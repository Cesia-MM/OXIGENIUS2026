import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

interface DataPoint {
  time: string;
  entrada: number;
  salida: number;
}

function CO2Chart() {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();

      const nuevaEntrada = Math.floor(700 + Math.random() * 300);
      const nuevaSalida = Math.floor(300 + Math.random() * 200);

      setData(prev => [
        ...prev.slice(-9), // mantiene solo los últimos 10 puntos
        {
          time: now,
          entrada: nuevaEntrada,
          salida: nuevaSalida
        }
      ]);
    }, 3000); // cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="p-4 rounded shadow"
      style={{ background: "#0d2a56", color: "white" }}
    >
      <h4 className="text-center mb-4">Historial de CO₂</h4>

      <ResponsiveContainer width="100%" height={300}>
       <LineChart data={[...data].reverse()}>
          <CartesianGrid strokeDasharray="3 3" stroke="#335" />
          <XAxis dataKey="time" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="entrada"
            stroke="#4da3ff"
            strokeWidth={3}
            name="Entrada CO₂"
          />
          <Line
            type="monotone"
            dataKey="salida"
            stroke="#4ade80"
            strokeWidth={3}
            name="Salida CO₂"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CO2Chart;
