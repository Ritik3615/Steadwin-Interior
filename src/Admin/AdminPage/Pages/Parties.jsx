import React from "react";
import { BiMoney } from "react-icons/bi";

function Parties() {
  return (
    <div className="p-6">
      <h1 className="text-center font-semibold text-3xl p-2 text-blue-500">
        Parties
      </h1>
      <div className="flex justify-around mb-4 gap-4 ">
        <div className="border w-1/2 rounded-2xl bg-green-300">
          <p className="p-2">All parties</p>
        </div>
        <div className="border w-1/2 rounded-2xl bg-green-50">
          <p className="p-2">To collect</p>
          <p className="flex gap-2 p-2"><BiMoney/> 0</p>
        </div>
      </div>
      <table className="w-full border border-gray-300 ">
        <thead>
          <tr className="border font-serif">
            <th className="border">Party name</th>
            <th className="border">Category</th>
            <th className="border">Mobile Number</th>
            <th className="border">Party Number</th>
            <th className="border">Blance</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Parties;
