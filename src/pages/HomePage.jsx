import AcordeonC from "../components/acordeon/AcordeonC"
import BannerAutismoC from "../components/bannerAutismo/BannerAutismoC"
import CarouselC from "../components/carousel/CarouselC"
import NavbarC from "../components/navbar/NavbarC"
import ParallaxBackground from "../components/parallax/ParallaxBackground"


const HomePage = () => {
  return (
    <>
    <NavbarC/>
    <ParallaxBackground/>
    <BannerAutismoC/>
    <AcordeonC/>
    <CarouselC/>
    </>
  )
}

export default HomePage