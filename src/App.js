import React, { useState } from "react";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import TimeLine from "./components/TimeLine";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies2";
import Experience from "./components/Experience";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./components/Projects";



function App() {
  const [menuOpen,setMenuOpen]=useState(false);
  // console.log(menuOpen);
  return (
    <>
    <HeaderPhone  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header  menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
    <Home/> 
    <Projects/>
    <Experience/>
    {/* <TimeLine/> */}
    <Services/>
    {/* <Testimonial/> */}
    <Technologies/>
    <Contact/>
    <Toaster/>
    <Footer/>

    </>
  );
}

export default App;
