import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "../components/ImageSlider";
import KumbhInfo from "../components/KumbhInfo";
import { useMediaQuery } from "@chakra-ui/react";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import { useEffect } from "react";
export default function AboutPage() {
  const [isLargerThan980] = useMediaQuery("(min-width: 980px)");
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []); // Empt

  return (
    <>
      {!isLargerThan980 ? <MobileHeader></MobileHeader> : <Header></Header>}
      <Header2></Header2>
      <ImageSlider />
      <KumbhInfo />
      <Footer></Footer>
    </>
  );
}
