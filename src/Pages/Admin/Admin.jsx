import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [quotes, setQuotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch customer quotes
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/fetchdata`)
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((err) => console.error("Error fetching quotes:", err));

    // Auto logout when tab/window closes
    const handleUnload = () => {
      sessionStorage.removeItem("token");
    };
    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">
          📋 Customer Quotes
        </h1>

        <button
          onClick={handleLogout}
          className="mb-6 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
        >
          Logout
        </button>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3 border">ID</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Property</th>
                <th className="p-3 border">Message</th>
              </tr>
            </thead>
            <tbody>
              {quotes.length > 0 ? (
                quotes.map((q, index) => (
                  <tr key={q.id} className="hover:bg-gray-100">
                    <td className="p-3 border">{index + 1}</td>
                    <td className="p-3 border">{q.name}</td>
                    <td className="p-3 border">{q.email}</td>
                    <td className="p-3 border">{q.phone}</td>
                    <td className="p-3 border">{q.property}</td>
                    <td className="p-3 border">{q.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-3 text-center text-gray-500">
                    No quotes found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Admin;
