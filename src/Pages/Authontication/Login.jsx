import { useState } from "react";
import { useNavigate } from "react-router-dom";
import video from "/videoes/uhd_30fps.mp4";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();
  // temporary frontend password
  if (username === "steadwin" && password === "steadwin@123") {
    localStorage.setItem("token", "frontend-pass"); // save dummy token
    navigate("/admin"); // go to admin
  } else {
    setError("❌ Invalid credentials");
  }
};

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <img
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        src={video}
      />

      {/* Overlay */}
      <div className="absolute w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="bg-gray-900 bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-2xl w-96 flex flex-col items-center"
        >
          <h2 className="text-3xl font-extrabold mb-6 text-center tracking-wide text-white">
            Admin Login
          </h2>

          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-4 rounded-md bg-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded-md bg-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className={`w-full p-3 rounded-md font-semibold text-lg transition-colors ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="mt-4 text-gray-300 text-sm text-center">
            Unauthorized access is prohibited.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
