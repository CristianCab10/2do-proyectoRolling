import NavbarC from "./components/navbar/NavbarC";
import CarouselC from "./components/carousel/CarouselC";
import FooterC from "./components/footer/FooterC";
import AcordeonC from "./components/acordeon/AcordeonC";
import ParallaxBackground from "./components/parallax/ParallaxBackground";
import BannerAutismoC from "./components/bannerAutismo/BannerAutismoC";

const App = () => {
  //js
  let nombre = "Daniel";

  return (
    /*html* React exige un contenedoer pero div da conflicto por ese se crea la etiqueta vacia llamada fragment (componente de etiqueta vacia*/
    <>
      <NavbarC />
      <ParallaxBackground />
      <BannerAutismoC />
      <AcordeonC />
      <CarouselC />

      <FooterC />
    </>
  );
};

export default App;
