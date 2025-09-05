import { useEffect, useState } from "react";

function Admin() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((err) => console.error("Error fetching quotes:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">📋 Customer Quotes</h1>

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
              quotes.map((q) => (
                <tr key={q.id} className="hover:bg-gray-100">
                  <td className="p-3 border">{q.id}</td>
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
  );
}

export default Admin;
