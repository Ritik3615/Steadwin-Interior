import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
// import  from "";


// Lazy Imports
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Privicy = lazy(() => import("./Pages/Privicy/Privicy"));
const Process = lazy(() => import("./Pages/WorkFlow/Process"));
const Admin = lazy(() => import("./Pages/Admin/Admin"));
const Interior = lazy(() => import("./Pages/Services/Interior"));
const Railing = lazy (() =>import("./Pages/Services/Railing"))
const Consultancy = lazy (() =>import("./Pages/Services/Consultancy"))
const Developer = lazy (() =>import("./Pages/Services/Developer"))
const Quote = lazy (() =>import("./Form/Quote"))


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // loader 4 sec ke liye hi dikhe
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privicy" element={<Privicy />} />
          <Route path="/process" element={<Process />} />
          <Route path="Admin" element={<Admin/>}/>
          <Route path="/Services/Interior" element={<Interior/>}/>
          <Route path="services/railing" element={<Railing/>}/>
          <Route path="/services/consultancy" element= {<Consultancy/>}/>
          <Route path="/services/developer" element= {<Developer/>}/>
          <Route path="/quote" element= {<Quote/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
