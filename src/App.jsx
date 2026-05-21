import React from "react";
import "./App.css";
 import Home from "./components/Home"
import Education from "./components/Education"
 import Contacts from "./components/Contacts"
import Skills from "./components/Skills"
 import About from "./components/About"
 import Navbar from "./components/Navbar"
 import Footer from "./components/Footer"
//import Data from "./components/Data"


function App(){
  return(
    <>
    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Contacts/> 
    <Navbar/>
    <Footer/>
    {/* <Data/> */}
    </>
  )
}
export default App;
