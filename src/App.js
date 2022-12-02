import React, { useState } from "react";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import TimeLine from "./components/TimeLine";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";



function App() {
  const [menuOpen,setMenuOpen]=useState(false);
  console.log(menuOpen);
  return (
    <>
    <HeaderPhone  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header  menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
    <Home/> 
    <Work/>
    <TimeLine/>
    <Services/>
    <Testimonial/>
    <Technologies/>
    <Contact/>
    <Toaster/>
    <Footer/>

    </>
  );
}

export default App;
