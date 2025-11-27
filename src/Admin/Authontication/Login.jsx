import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useAuth } from "../context/Authcontext";
import { Link, useNavigate } from "react-router-dom";
import OfferSlides from "../Pages/OfferSlides";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Admin, SubAdmin, User

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: userid, password }),
        }
      );

      if (!response.ok) {
        alert("Invalid credentials");
        return;
      }

      const data = await response.json();

      console.log("LOGIN RAW RESPONSE:", data);

      // Build REAL user object
      const user = {
        name: data.name,
        email: data.email,
        role: data.role,
      };

      // Save token
      login({ token: data.token, user });

      // Redirect based on backend role (not frontend radio button)
      if (data.role === "ADMIN") navigate("/admin/dashboard");
      else if (data.role === "SUBADMIN") navigate("/subadmin/dashboard");
      else navigate("/user/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <>
      <div
        className="h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/image-bg.png')" }}
      >
        <div className="absolute bg-black inset-0 opacity-30"></div>
        <div className="relative flex justify-center items-center flex-col pt-3">
          <img src={logo} alt="Logo" className="h-20 mx-auto rounded-full" />
          <h1 className="text-2xl font-bold bg-blue-100 px-2 rounded-2xl mt-2">
            Steadwin group
          </h1>
        </div>

        <div className="relative h-[400px] w-[900px] bg-sky-700 grid grid-cols-2 justify-center items-center m-auto mt-5 rounded-3xl shadow-2xl">
          <div className="p-5 text-white text-center">
            <h1 className="text-3xl px-2 rounded-xl font-bold text-white">
              Login
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
              <input
                type="text"
                value={userid}
                onChange={(e) => setUserid(e.target.value)}
                placeholder="Enter UserId"
                className="px-2 py-1 rounded-2xl border-2 mx-7 text-black"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="px-2 py-1 rounded-2xl border-2 mx-7 text-black"
              />

              {/* <div className="mt-5 flex gap-5 mx-7">
                {["Admin", "SubAdmin", "User"].map((r) => (
                  <label key={r} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="role"
                      value={r}
                      checked={role === r}
                      onChange={() => setRole(r)}
                    />
                    <span className="bg-sky-100 px-2 rounded-2xl text-black">
                      {r}
                    </span>
                  </label>
                ))}
              </div> */}

              <button
                type="submit"
                className="bg-slate-400 text-black px-4 py-1 text-xl font-semibold rounded-2xl mx-6 hover:bg-green-600 hover:text-white hover:scale-105 transition-transform"
              >
                Submit
              </button>
            </form>

            <p className="p-2">
              <Link
                className="text-white hover:text-blue-900"
                to="/ForgotPassword"
              >
                forget password
              </Link>
            </p>
          </div>

          <div className="relative p-5 text-white text-center h-full w-full shadow-2xl">
            <OfferSlides />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
