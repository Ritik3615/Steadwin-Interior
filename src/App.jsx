import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import AdminApp from "./Admin/AdminApp";
import PrivateRoute from "./Admin/Components/PrivateRoute";
import { AuthProvider } from "./Admin/context/Authcontext";
import SubAdminApp from "./Admin/SubAdmin/SubAdminApp";
import { useAuth } from "./Admin/context/Authcontext";

// Lazy load pages
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Privicy = lazy(() => import("./Pages/Privicy/Privicy"));
const Process = lazy(() => import("./Pages/WorkFlow/Process"));
// const Admin = lazy(() => import("./Pages/Admin/Admin"));
const Interior = lazy(() => import("./Pages/Services/Interior"));
const Railing = lazy(() => import("./Pages/Services/Railing"));
const Consultancy = lazy(() => import("./Pages/Services/Consultancy"));
const Developer = lazy(() => import("./Pages/Services/Developer"));
const Quote = lazy(() => import("./Form/Quote"));
const Login = lazy(() => import("./Admin/Authontication/Login"));
const Gallery = lazy(() => import("./Pages/Gallery/Gallery"));
const Brouchure = lazy(() => import("./Pages/Brouchure/Brouchure"));
const AdminHome = lazy(() => import("./Components/AdminHome"));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <AuthProvider>
        {/* Hide Navbar on login */}
        {!location.pathname.startsWith("/login") &&
          !location.pathname.toLowerCase().startsWith("/admin") &&
          !location.pathname.toLowerCase().startsWith("/subadmin") && (
            <Navbar />
          )}

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/privicy"
            element={
              <Suspense fallback={<Loader />}>
                <Privicy />
              </Suspense>
            }
          />
          <Route
            path="/process"
            element={
              <Suspense fallback={<Loader />}>
                <Process />
              </Suspense>
            }
          />

          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/subadmin/*"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute>
                  <SubAdminApp />
                </PrivateRoute>
              </Suspense>
            }
          />

          <Route
            path="/admin/*"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute>
                  <AdminApp user={user} />
                </PrivateRoute>
              </Suspense>
            }
          />

          <Route
            path="/services/interior"
            element={
              <Suspense fallback={<Loader />}>
                <Interior />
              </Suspense>
            }
          />
          <Route
            path="/services/railing"
            element={
              <Suspense fallback={<Loader />}>
                <Railing />
              </Suspense>
            }
          />
          <Route
            path="/services/consultancy"
            element={
              <Suspense fallback={<Loader />}>
                <Consultancy />
              </Suspense>
            }
          />
          <Route
            path="/services/developer"
            element={
              <Suspense fallback={<Loader />}>
                <Developer />
              </Suspense>
            }
          />
          <Route
            path="/quote"
            element={
              <Suspense fallback={<Loader />}>
                <Quote />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<Loader />}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            path="/brouchure"
            element={
              <Suspense fallback={<Loader />}>
                <Brouchure />
              </Suspense>
            }
          />
          <Route
            path="/home"
            element={
              <Suspense fallback={<Loader />}>
                <AdminHome />
              </Suspense>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
