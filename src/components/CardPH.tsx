import Card from "react-bootstrap/Card";

function CardPH() {
  const ph = 7.2; // valor de ejemplo

  return (
    <div className="d-flex justify-content-center mt-4">
      <Card
        bg="warning"     
        text="light"
        style={{ width: "18rem" }}
        className="text-center shadow"
      >
        <Card.Header>pH del Agua</Card.Header>

        <Card.Body>
          <Card.Title>{ph}</Card.Title>
          <Card.Text>Rango aceptable</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardPH;