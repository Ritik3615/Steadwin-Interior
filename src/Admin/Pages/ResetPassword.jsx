import React, { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const res = await fetch("http://localhost:8080/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword: password }),
      });

      if (!res.ok) throw new Error("Invalid OTP or server error");

      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Reset Password
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Enter OTP you received and set your new password.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="New Password"
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all"
          >
            Reset Password
          </button>
        </form>

        {status === "loading" && (
          <p className="text-blue-600 text-center mt-4">Verifying...</p>
        )}
        {status === "success" && (
          <p className="text-green-600 text-center mt-4">
            Password reset successful!  
            <a className="text-blue-600 underline" href="/">
              Login now
            </a>
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mt-4">
            Invalid OTP or expired. Try again.
          </p>
        )}

        <div className="mt-5 text-center">
          <a
            href="/login"
            className="text-blue-700 hover:underline text-sm font-medium"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}
