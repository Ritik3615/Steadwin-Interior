import React, { useEffect, useState } from "react";

function MoneyManage() {
  const [balance, setBalance] = useState(0); // from API
  const [amount, setAmount] = useState("");
  const [isAdd, setIsAdd] = useState(true);
  const [remark, setRemark] = useState("");

  // Fetch current balance from API
  useEffect(() => {
    fetch("/api/balance") // replace with your backend endpoint
      .then((res) => res.json())
      .then((data) => setBalance(data.balance))
      .catch((err) => console.error("Error fetching balance:", err));
  }, []);

  const newBalance = isAdd
    ? balance + Number(amount || 0)
    : balance - Number(amount || 0);

  const handleSave = async (e) => {
    e.preventDefault();

    if (!amount) return;

    const payload = {
      type: isAdd ? "ADD" : "REDUCE",
      amount: Number(amount),
      remark,
      date: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save transaction");

      // update balance after successful save
      setBalance(newBalance);

      // clear fields
      setAmount("");
      setRemark("");
    } catch (err) {
      console.error("Error saving transaction:", err);
    }
  };

  return (
    <section className="px-5 py-3 text-xs">
      <h3 className="py-3">Adjust Money in</h3>
      <div className="border p-2 w-full rounded-[4px]">Cash</div>

      <h3 className="py-3">Add or Reduce Money</h3>
      <div className="flex gap-8">
        <div
          onClick={() => setIsAdd(true)}
          className={`border px-3 py-2 rounded-[4px] cursor-pointer ${
            isAdd ? "bg-green-100 border-green-500" : "bg-amber-50"
          }`}
        >
          + Add Money
        </div>
        <div
          onClick={() => setIsAdd(false)}
          className={`border px-3 py-2 rounded-[4px] cursor-pointer ${
            !isAdd ? "bg-red-100 border-red-500" : "bg-amber-50"
          }`}
        >
          - Reduce Money
        </div>
      </div>

      <div className="flex gap-8 py-8">
        <div className="space-y-2">
          <div>Current Balance</div>
          <div>₹{balance}</div>
        </div>
        <div className="space-y-2">
          <div>Date</div>
          <div>{new Date().toLocaleDateString()}</div>
        </div>
      </div>

      <div className="text-green-500 font-semibold">ENTER AMOUNT</div>

      <form onSubmit={handleSave} className="space-y-4">
        <label className="text-[20px] border-b flex items-center gap-2">
          {isAdd ? "+ ₹" : "- ₹"}
          <input
            type="number"
            name="rupee"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="outline-none p-1"
          />
        </label>

        <div className="pt-8">New Balance: ₹{newBalance}</div>

        <div className="pt-8">
          <h5>Add Remark</h5>
          <input
            type="text"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Optional remark..."
          />
        </div>

        <div className="flex justify-center gap-10">
          <button
            type="button"
            className="border rounded-[4px] bg-red-200 hover:bg-red-700 hover:text-white px-8 py-2"
            onClick={() => {
              setAmount("");
              setRemark("");
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="border rounded-[4px] bg-green-200 hover:bg-green-800 hover:text-white px-8 py-2"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
}

export default MoneyManage;
