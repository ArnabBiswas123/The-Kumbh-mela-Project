import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import Dashboardpage from "./pages/Dashboardpage";
import KumbhAdmin from "./pages/KumbhAdmin";
import CreateSection from "./components/KumbhAdmin/CreateSection";
import EditSection from "./components/KumbhAdmin/EditSection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/kumbhinfo" element={<AboutPage></AboutPage>}></Route>
        <Route path="/adminlogin" element={<LoginPage></LoginPage>}></Route>
        <Route path="/dashboard" element={<Dashboardpage></Dashboardpage>}></Route>
        <Route path="/kumbhadmin" element={<KumbhAdmin></KumbhAdmin>}></Route>
        <Route path="/createsection" element={<CreateSection></CreateSection>}></Route>
        <Route path="/editsection" element={<EditSection></EditSection>}></Route>
      </Routes>
    </>
  );
}

export default App;
