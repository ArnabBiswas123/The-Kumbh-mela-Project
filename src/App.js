import Header from "./components/Header";
import Header2 from "./components/Header2"
import MainImage from "./components/MainImage";
import AboutKumbh from "./components/AboutKumbh";
import KumbhDates from "./components/KumbhDates";
import KumbhMelaPackages from "./components/KumbhMelaPackages";
import KumbhMelaAccommodation from "./components/KumbhMelaAccommodation";
import Footer from "./components/Footer";
import MobileHeader from "./components/MobileHeader";
import { useMediaQuery } from "@chakra-ui/react";

function App() {

  const [isLargerThan980] = useMediaQuery('(min-width: 980px)')


  return (
   <>
      {/* <Header></Header> */}
      {isLargerThan980?<Header></Header>:<MobileHeader></MobileHeader>}
      <Header2></Header2>
      <MainImage></MainImage>
      <KumbhDates></KumbhDates>
      <AboutKumbh></AboutKumbh>
      <KumbhMelaPackages></KumbhMelaPackages>
      <KumbhMelaAccommodation></KumbhMelaAccommodation>
      <Footer></Footer>
      {/* <MobileHeader></MobileHeader> */}
      </>
  );
}

export default App;
