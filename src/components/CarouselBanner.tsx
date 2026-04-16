import Carousel from "react-bootstrap/Carousel";

function CarouselBanner() {
  return (
    <Carousel className="mb-4">

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/Alga.jpg"
          alt="Alga"
        />
        <Carousel.Caption>
          <h1>Oxygenuis</h1>
          <p>Biofiltro</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/tecnologia.avif"
          alt="tecnologia"
        />
        <Carousel.Caption>
          <h3>Innovación</h3>
          <p>Tecnología sustentable</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/dos.png"
          alt="Alga"
        />
       
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselBanner;