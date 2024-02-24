import React from 'react'
import MainImage from '../components/MainImage';
import AboutKumbh from '../components/AboutKumbh';
import KumbhDates from '../components/KumbhDates';
import KumbhMelaAccommodation from '../components/KumbhMelaAccommodation';
import KumbhMelaPackages from '../components/KumbhMelaPackages';
import { useMediaQuery } from "@chakra-ui/react";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";

export default function HomePage() {
  const [isLargerThan980] = useMediaQuery("(min-width: 980px)");

  return (
    <>
       {!isLargerThan980 ? <MobileHeader></MobileHeader> : <Header></Header>}
      <Header2></Header2>
    <MainImage></MainImage>
    <KumbhDates></KumbhDates>
    <AboutKumbh></AboutKumbh>
    <KumbhMelaPackages></KumbhMelaPackages>
    <KumbhMelaAccommodation></KumbhMelaAccommodation>
    <Footer></Footer>
    </>
  )
}
