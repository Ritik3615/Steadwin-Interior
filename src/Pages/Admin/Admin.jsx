import React from "react";
import { Wrench, AlertTriangle } from "lucide-react";

function Admin() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-700">
      {/* Icon */}
      <Wrench size={60} className="text-yellow-500 animate-bounce mb-4" />

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-2">Page Under Process</h1>

      {/* Subtext */}
      <p className="text-lg text-gray-500 flex items-center gap-2">
        <AlertTriangle className="text-orange-500" size={20} />
        Our team is working on this page. Please check back soon!
      </p>
    </div>
  );
}

export default Admin;
