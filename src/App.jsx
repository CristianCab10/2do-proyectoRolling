import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import FooterC from "./components/footer/FooterC";
import LoginPage from "./pages/LoginPage";
import RegisterPacient from "./pages/RegisterPacient";
import RegisterDoctorPage from "./pages/RegisterDoctorPage";
import RegisterAdminPage from "./pages/RegisterAdminPage";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/aboutus" element={<aboutUsPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/registerPacient" element={<RegisterPacient/>}/>
      <Route path="/registerDoctor" element={<RegisterDoctorPage/>}/>
      <Route path="/registerAdmin" element={<RegisterAdminPage/>}/>
      </Routes>
      <FooterC/>
    </Router>
    </>
  );
};

export default App;
