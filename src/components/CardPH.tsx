import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { SENSOR_URL } from "../url/sensores";

function CardPH() {
  const [ph, setPh] = useState<number | null>(null);
  const [temp, setTemp] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(SENSOR_URL)
        .then((res) => res.json())
        .then((json) => {
          if (json.ph == null || json.tempC == null) return;

          setPh(json.ph);
          setTemp(json.tempC);
        })
        .catch((err) =>
          console.error("Error leyendo pH / temperatura:", err)
        );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex justify-content-center mt-4">
      <Card
        bg="warning"
        text="dark"
        style={{ width: "20rem" }}
        className="text-center shadow"
      >
        <Card.Header>Calidad del Agua</Card.Header>

        <Card.Body>
          <Card.Title>pH: {ph ?? "—"}</Card.Title>
          <Card.Text>
            Temperatura: {temp ?? "—"} °C
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardPH;
