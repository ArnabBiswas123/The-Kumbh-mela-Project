import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useMediaQuery } from "@chakra-ui/react";
import Header from './components/Header';
import Footer from './components/Footer';
import Header2 from './components/Header2';
import MobileHeader from './components/MobileHeader'
import AboutPage from "./pages/AboutPage";

function App() {
  const [isLargerThan980] = useMediaQuery('(min-width: 980px)')

  return (
    <>
     {!isLargerThan980?<MobileHeader></MobileHeader>:<Header></Header>}
    <Header2></Header2>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/kumbhinfo" element={<AboutPage></AboutPage>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
