import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth(); // context se login function le liya
  const navigate = useNavigate();

  const [role, setRole] = useState(""); // Admin, SubAdmin, User
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const person = ["Admin", "SubAdmin", "User"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userid || !password || !role) {
      alert("Please fill all fields");
      return;
    }

    // fake authentication (backend connect karoge to api call karna)
    const userData = {
      name: userid,
      role: role,
      token: "dummy-jwt-token", // yaha backend se real token aayega
    };
    console.log(userData)
    login(userData); // context me save

    // role ke hisaab se navigate
    if (userData.role === "Admin") {
      navigate("/admin/dashboard");
    } else if (userData.role === "SubAdmin") {
      navigate("/SubAdmin/dashboard");
    } else {
      navigate("/user/dashboard");
    } // redirect
  };

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/bgimage.jpg')" }}
    >
      <div className="absolute bg-black inset-0 opacity-30"></div>
      <div className="relative flex justify-center items-center flex-col pt-3">
        <img src={logo} alt="Logo" className="h-20 mx-auto rounded-full" />
        <h1 className="text-2xl font-bold bg-blue-100 px-2 rounded-2xl mt-2">
          Steadwin group
        </h1>
      </div>

      <div className="relative h-[400px] w-[450px] flex flex-col justify-center items-center m-auto mt-5 rounded-3xl shadow-2xl bg-white/20">
        <h1 className="text-3xl px-2 rounded-xl font-bold text-white">
          Steadwin Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 mt-5 text-white"
        >
          <input
            type="text"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            placeholder="Enter UserId"
            className="placeholder-blue-50 px-2 py-1 rounded-2xl border-2 text-black"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="placeholder-blue-50 px-2 py-1 rounded-2xl border-2 text-black"
          />

          <div className="mt-5 flex gap-5">
            {person.map((p) => (
              <label key={p} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value={p}
                  checked={role === p}
                  onChange={() => setRole(p)}
                />
                <span className="bg-sky-100 px-2 rounded-2xl text-black">
                  {p}
                </span>
              </label>
            ))}
          </div>

          <button
            type="submit"
            className="bg-slate-400 text-black px-4 py-1 text-xl font-semibold rounded-2xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
