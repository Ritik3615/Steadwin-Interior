import { ArrowDownCircleIcon, ArrowUpLeftFromCircle } from "lucide-react";
import React from "react";
import { BiLeftTopArrowCircle } from "react-icons/bi";
import { BsFillPiggyBankFill } from "react-icons/bs";
import Transaction from "./Transaction";

function Dashboard() {
  return (
    <>
      <div className="border-b py-2 ">
        <h1 className="ml-3">Dashboard</h1>
      </div>

      <div className="p-3">business overview</div>
      <div className="p-3 space-x-2 grid grid-cols-3">
        <div className="border py-2 px-4 rounded bg-gradient-to-b from-green-100 to-green-300 text-white">
          <p className="text-sm flex gap-2 text-green-600">
            <span className="">
              <ArrowDownCircleIcon />
            </span>
            to collect
          </p>
          <div className="text-2xl text-black">R</div>
        </div>
        <div className="border rounded py-2 px-2 bg-gradient-to-r from-red-100 to-red-300 text-white">
          <p className="text-sm flex text-red-600 gap-2">
            <span className="text-sm">
              <ArrowUpLeftFromCircle />
            </span>
            <span>To pay</span>
          </p>
          <div className="text-2xl text-black">R</div>
        </div>
        <div className="border rounded py-2 px-2 bg-gradient-to-r from-yellow-100 to-yellow-300 text-white">
          <p className="text-sm flex gap-2 text-yellow-600">
            <BsFillPiggyBankFill />
            total cash + bank
          </p>
          <div className="text-2xl text-black">R</div>
        </div>
      </div>
      <Transaction/>
    </>
  );
}

export default Dashboard;
