import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/kumbhinfo" element={<AboutPage></AboutPage>}></Route>
        <Route path="/adminlogin" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
