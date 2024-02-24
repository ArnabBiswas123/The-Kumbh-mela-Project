import React from 'react'
import MainImage from '../components/MainImage';
import AboutKumbh from '../components/AboutKumbh';
import KumbhDates from '../components/KumbhDates';
import KumbhMelaAccommodation from '../components/KumbhMelaAccommodation';
import KumbhMelaPackages from '../components/KumbhMelaPackages';

export default function HomePage() {


  return (
    <>
    
    <MainImage></MainImage>
    <KumbhDates></KumbhDates>
    <AboutKumbh></AboutKumbh>
    <KumbhMelaPackages></KumbhMelaPackages>
    <KumbhMelaAccommodation></KumbhMelaAccommodation>
   
    </>
  )
}
