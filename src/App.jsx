import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FooterC from "./components/footer/FooterC";
import RegisterPacient from "./pages/RegisterPacient";
import RegisterDoctorPage from "./pages/RegisterDoctorPage";
import RegisterAdminPage from "./pages/RegisterAdminPage";
import LoginPacientPage from "./pages/LoginPacientPage";
import LoginDoctorPage from "./pages/LoginDoctorPage";
import LoginAdminPage from "./pages/LoginAdminPage";
import AdminPage from "./pages/AdminPage";
import AdminPacientPage from "./pages/AdminPacientPage";
import AdminDoctorPage from "./pages/AdminDoctorPage";
import PacientPage from "./pages/PacientPage";
import ListaDeTurnos from "./pages/ListaDeTurnos";
import DoctorPage from "./pages/DoctorPage";
import ListaDePacientes from "./pages/ListaDePacientes";
import SobreNosotrosPage from "./pages/SobreNosotrosPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<aboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/NosotrosC" element={<SobreNosotrosPage />} />
          <Route path="/registerPacient" element={<RegisterPacient />} />
          <Route path="/loginPacient" element={<LoginPacientPage />} />
          <Route path="/pacient" element={<PacientPage />} />
          <Route path="/registerDoctor" element={<RegisterDoctorPage />} />
          <Route path="/loginDoctor" element={<LoginDoctorPage />} />
          <Route path="/registerAdmin" element={<RegisterAdminPage />} />
          <Route path="/loginAdmin" element={<LoginAdminPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/adminPacient" element={<AdminPacientPage />} />
          <Route path="/adminDoctor" element={<AdminDoctorPage />} />
          <Route path="/listaDeTurnos" element={<ListaDeTurnos />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/listaDePacientes" element={<ListaDePacientes />} />
        </Routes>
        <FooterC />
      </Router>
    </>
  );
};

export default App;
