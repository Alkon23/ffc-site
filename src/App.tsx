import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/Home.tsx";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import About from "./components/About.tsx";
import Services from "./components/services/Services.tsx";
import Contact from "./components/Contact.tsx";
import {useEffect} from "react";
import FloatingActions from "./components/fab/FloatingActions.tsx";
import Service, {SERVICES} from "./components/services/Service.tsx";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/services/personal" element={<Service type={SERVICES.Personal}/>}/>
          <Route path="/services/couple" element={<Service type={SERVICES.Couple}/>}/>
          <Route path="/services/group" element={<Service type={SERVICES.Group}/>}/>
          <Route path="/services/online" element={<Service type={SERVICES.Online}/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
        <FloatingActions/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}