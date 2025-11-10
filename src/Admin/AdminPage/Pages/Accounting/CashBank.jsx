import React, { useState, useEffect } from "react";
import { BiTransfer } from "react-icons/bi";
import { BsPlusSquare } from "react-icons/bs";
import { PiPlusMinus } from "react-icons/pi";
import DateRangePicker from "./Pages/DateRangePicker";
import MoneyManage from "./Pages/MoneyManage";
import TransferBalance from "./Pages/TransferBalance";
import AddAccount from "./Pages/AddAccount";
import axios from "axios";

function CashBank() {
  const [open, setOpen] = useState(false);
  const [Transfer, setTransfer] = useState(false);
  const [Account, setAddAccount] = useState(false);
  const [totalBalance, setTotalBalance] = useState(0);
  const [cashInHand, setCashInHand] = useState(0);
  const [userId, setUserId] = useState(1); // ← Replace with actual logged-in user ID

  // Fetch balance from backend
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          `http://localhost:904/account/total-balance?userId=${userId}`
        );

        if (response.data) {
          setTotalBalance(response.data.totalBalance || 0);
          setCashInHand(response.data.cashInHand || 0);
        }
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, [userId]);

  return (
    <>
      {/* top navbar */}
      <div className="h-14 px-8 flex justify-between items-center text-xs border-b">
        <div className="font-semibold">
          <h1>Back and Cash</h1>
        </div>
        <div className="flex gap-3">
          <div className="border p-2 rounded-[5px] ">
            <button
              className="cursor-pointer flex gap-1"
              onClick={() => setOpen(true)}
            >
              <span>
                <PiPlusMinus />
              </span>
              <span>Add/Reduce Money</span>
            </button>
          </div>
          <div className="border p-2 rounded-[5px] ">
            <button
              className="cursor-pointer flex gap-1"
              onClick={() => setTransfer(true)}
            >
              <span>
                <BiTransfer />
              </span>
              <span>Transfer Money</span>
            </button>
          </div>
          <div className="border p-2 rounded-[5px] bg-blue-600 text-white">
            <button
              className="cursor-pointer flex gap-1"
              onClick={() => setAddAccount(true)}
            >
              <span>
                <BsPlusSquare />
              </span>
              <span>Add new Account</span>
            </button>
          </div>
        </div>
      </div>

      {/* main portion */}
      <div className="grid grid-cols-[20%_80%] px-8 text-xs gap-5">
        <div className="border-r">
          <div className="py-4 flex justify-between border-b font-semibold px-2">
            <span>Total balance:</span>
            <span>{totalBalance}</span>
          </div>
          <div className="border-b py-2 px-2 bg-sky-100">cash</div>
          <div className="py-4 px-2 border-b flex justify-between font-semibold">
            <span>Cash In Hand:</span>
            <span>{cashInHand}</span>
          </div>
          <div className="py-4 px-2 border-b flex justify-between font-semibold">
            <span className="text-gray-500">Bank Accounts</span>
            <span className="text-blue-700 cursor-pointer">+ Add New Bank</span>
          </div>
        </div>

        {/* right side */}
        <div>
          <div className="border-b py-5 cursor-pointer">
            <span className="border-r p-2 py-5 border-l">Transaction</span>
          </div>
          <div className="">
            <div className="p-3">
              <DateRangePicker />
            </div>
          </div>
        </div>
      </div>

      {/* Adjust Balance Modal */}
      {open && (
        <div className="fixed inset-0 h-10/12 w-1/3 bg-gray-200 text-black m-auto rounded-lg shadow-2xl">
          <div className="flex justify-between px-5 py-2 border-b">
            <div className="text-xs">Adjust Balance</div>
            <button
              className="cursor-pointer hover:text-red-800"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
          <MoneyManage />
        </div>
      )}

      {/* Transfer Money Modal */}
      {Transfer && (
        <div className="fixed inset-0 h-10/12 w-1/3 bg-gray-200 m-auto rounded-lg shadow-2xl">
          <div className="flex justify-between px-5 py-3 border-b">
            <span className="text-xs">Money Transfer</span>
            <button
              onClick={() => setTransfer(false)}
              className="hover:text-red-800 w-5"
            >
              ✕
            </button>
          </div>
          <TransferBalance />
        </div>
      )}

      {/* Add Account Modal */}
      {Account && (
        <div className="fixed inset-0 h-10/12 w-1/3 bg-sky-100 rounded-[4px] m-auto">
          <div className="flex justify-between px-5 py-3">
            <span>Add Account</span>
            <button
              className="cursor-pointer"
              onClick={() => setAddAccount(false)}
            >
              ✕
            </button>
          </div>
          <AddAccount />
        </div>
      )}
    </>
  );
}

export default CashBank;
