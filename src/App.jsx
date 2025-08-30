import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";

// Lazy Imports
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Privicy = lazy(() => import("./Pages/Privicy/Privicy"));
const Process = lazy(() => import("./Pages/WorkFlow/Process"));

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
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
