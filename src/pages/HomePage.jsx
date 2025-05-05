import React from "react";
import CarouselC from "../components/carousel/CarouselC";
import AcordeonC from "../components/acordeon/AcordeonC";
import ParallaxBackground from "../components/parallax/ParallaxBackground";
import BannerAutismoC from "../components/bannerAutismo/BannerAutismoC";

const HomePage = () => {
  return (
    <>
      <ParallaxBackground />
      <BannerAutismoC />
      <AcordeonC />
      <CarouselC />
    </>
  );
};

export default HomePage;
