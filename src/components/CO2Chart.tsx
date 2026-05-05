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
import { SENSOR_URL } from "../url/sensores";

interface DataPoint {
  time: string;
  entrada: number;
  salida: number;
}

function CO2Chart() {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => { //URL
    const interval = setInterval(() => {
      fetch(SENSOR_URL)
        .then((res) => res.json())
        .then((json) => {
          //  Si el ESP32 aún manda {} no hace nada
          if (json.mqEntrada == null || json.mqSalida == null) return;

        const now = new Date();
    const time = new Date().toLocaleTimeString("es-MX", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
          setData((prev) => [
            ...prev.slice(-9), // mantiene solo los últimos 10 puntos
            {
              time,
              entrada: json.mqEntrada,
              salida: json.mqSalida,
            },
          ]);
        })
        .catch((err) =>
          console.error("Error leyendo datos del ESP32:", err)
        );
    }, 10000); // se actualiza cada 10 segundos

    return () => clearInterval(interval);
  }, []);
  const lastTwoTicks = data.slice(-2).map((d) => d.time);


  return (
    <div
  className="p-4 shadow w-100"
  style={{
    background: "#0d2a56",
    color: "white",
    borderRadius: "12px",
    margin: "0 auto",
  }}
>
      <h4 className="text-center mb-4">Historial de CO₂</h4>

      <ResponsiveContainer width="100%" height={300}>
        {/*  Lo más reciente a la izquierda */}
       <LineChart
       data={[...data].reverse()}
        margin={{ top: 20, right: 20, left: 0, bottom: 30 }}
       >
          <CartesianGrid strokeDasharray="3 3" stroke="#335" />

          <XAxis
  dataKey="time"
  stroke="#fff"
  ticks={lastTwoTicks}
  allowDuplicatedCategory={false}
  tickMargin={6}
  tickFormatter={(value) => value.slice(0, 8)}  
/>



          <YAxis
  stroke="#fff"
  width={45}
  domain={[0, 1000]}
  
/>


          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="entrada"
            stroke="#4da3ff"
            strokeWidth={3}
            name="Entrada CO₂"
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="salida"
            stroke="#4ade80"
            strokeWidth={3}
            name="Salida CO₂"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CO2Chart;
