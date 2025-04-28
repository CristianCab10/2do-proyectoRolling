import Carousel from "react-bootstrap/Carousel";

const CarouselC = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img src="./images/psico2.jpg" className="w-100" />
          <Carousel.Caption>
            <h3 className="text-dark bg-warning">PSICOLOGIA</h3>
            <p className="text-dark bg-warning">
              Estudio del comportamiento, el desarrollo y las necesidades de los
              niños y adolescentes
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="./images/psico.png" alt="" className="w-100" />
          <Carousel.Caption>
            <h3 className="text-white bg-danger w-100">FONOAUDIOLOGIA</h3>
            <p className="text-white bg-danger">
              Evaluación, diagnóstico, prevención y tratamiento de trastornos de
              la comunicación
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="./images/terapia.png" alt="" className="w-100" />
          <Carousel.Caption>
            <h3 className="text-warning bg-secondary">TERAPIA OCUPACIONAL</h3>
            <p className="text-warning bg-secondary">
              Ayuda a los niños a desarrollar habilidades para la vida diaria
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselC;
