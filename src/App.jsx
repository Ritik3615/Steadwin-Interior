import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import AdminHome from "./Components/AdminHome";

// Lazy Imports
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Privicy = lazy(() => import("./Pages/Privicy/Privicy"));
const Process = lazy(() => import("./Pages/WorkFlow/Process"));
const Admin = lazy(() => import("./Pages/Admin/Admin"));
const Interior = lazy(() => import("./Pages/Services/Interior"));
const Railing = lazy(() => import("./Pages/Services/Railing"));
const Consultancy = lazy(() => import("./Pages/Services/Consultancy"));
const Developer = lazy(() => import("./Pages/Services/Developer"));
const Quote = lazy(() => import("./Form/Quote"));
const Login = lazy(() => import("../src/Pages/Authontication/Login"));
const Gallery = lazy(() => import("./Pages/Gallery/Gallery"));
const Brouchure = lazy(() => import("./Pages/Brouchure/Brouchure"));

function App() {
  const [loading, setLoading] = useState(true);
  // console.log(import.meta.env.VITE_BACKEND_URL);
  useEffect(() => {
    // loader 3 sec ke liye hi dikhe
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
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route path="/services/interior" element={<Interior />} />
          <Route path="/services/railing" element={<Railing />} />
          <Route path="/services/consultancy" element={<Consultancy />} />
          <Route path="/services/developer" element={<Developer />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Brouchure" element={<Brouchure />} />
          <Route path="/Home" element={<AdminHome />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
