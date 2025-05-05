import { BrowserRouter as Router, Routes, Route } from "react-router";
import NavbarC from "./components/navbar/NavbarC";
import FooterC from "./components/footer/FooterC";
import HomePage from "./pages/HomePage";
import Error404Page from "./pages/Error404Page";
import ContactPage from "./pages/ContactPage";
import SobreNosotrosPage from "./pages/SobreNosotrosPage";

const App = () => {
  //js

  return (
    /*html* React exige un contenedoer pero div da conflicto por ese se crea la etiqueta vacia llamada fragment (componente de etiqueta vacia*/
    <>
      <Router>
        <NavbarC />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
        <FooterC />
      </Router>
    </>
  );
};

export default App;
