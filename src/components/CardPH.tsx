import Card from "react-bootstrap/Card";

function CardPH() {
  const ph = 7.2;        // valor de ejemplo
  const temperatura = 24; // valor de ejemplo

  return (
    <div className="d-flex justify-content-center mt-4">
      <Card
        bg="warning"        
        text="light"
        style={{ width: "20rem" }}
        className="text-center shadow"
      >
        <Card.Header>Calidad del Agua</Card.Header>

        <Card.Body>
          <Card.Title>pH: {ph}</Card.Title>
          <Card.Text>Temperatura: {temperatura} °C</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardPH;
