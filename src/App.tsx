import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/Home.tsx";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import About from "./components/About.tsx";
import Services from "./components/Services.tsx";
import Contact from "./components/Contact.tsx";
import ScrollButton from "./components/ScrollButton.tsx";
import {useEffect} from "react";

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
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
        <ScrollButton/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}