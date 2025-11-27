import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const res = await fetch("http://localhost:8080/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("User not found or server error");

      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Forgot Password
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Enter your registered email to receive an OTP.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
          >
            Send OTP
          </button>
        </form>

        {status === "loading" && (
          <p className="text-blue-600 text-center mt-4">Sending OTP...</p>
        )}
        {status === "success" && (
          <p className="text-green-600 text-center mt-4">
            OTP Sent! Check your email.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mt-4">
            Failed to send OTP. Try again.
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
