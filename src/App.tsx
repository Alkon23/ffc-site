import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/Home.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About.tsx";
import Services from "./components/Services.tsx";
import Contact from "./components/Contact.tsx";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
