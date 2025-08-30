import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Privicy from "./Pages/Privicy/Privicy";
import Process from "./Pages/WorkFlow/Process";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/privicy" element={<Privicy/>}/>
        <Route path="/Process" element={<Process/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
