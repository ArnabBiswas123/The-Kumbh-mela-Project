import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import Dashboardpage from "./pages/Dashboardpage";
import KumbhAdmin from "./pages/KumbhAdmin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/kumbhinfo" element={<AboutPage></AboutPage>}></Route>
        <Route path="/adminlogin" element={<LoginPage></LoginPage>}></Route>
        <Route path="/dashboard" element={<Dashboardpage></Dashboardpage>}></Route>
        <Route path="/kumbhadmin" element={<KumbhAdmin></KumbhAdmin>}></Route>
      </Routes>
    </>
  );
}

export default App;
