import { ImagePlus } from "lucide-react";
import React from "react";
import { useState } from "react";

function AddItem() {
  const [itemName, setitemName] = useState("");
  const [desc, setDesc] = useState("");
  const [quantity, setquantity] = useState("");
  const [butPrice, setbuyprice] = useState("");
  const [sellPrice, setSellprice] = useState("");
  const [file, setFile] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault(); // ⬅️ prevent page reload
    const result = {
      itemName,
      desc,
      quantity,
      butPrice,
      sellPrice,
    };
    console.log(result);
    alert("stored succesfully")
  };

  const handelCencel = () =>{
    setitemName("");
  setDesc("");
  setquantity("");
  setbuyprice("");
  setSellprice("");
  setFile(null);

  }

  return (
    <section className="text-xs px-16 bg-sky-50 rounded-lg shadow-2xl py-3">
      <h1 className="text-center text-xs m-2">Add new items</h1>
      <form action="">
        <div className="flex gap-4 mb-4 justify-between">
          <div className="flex flex-col">
            <label
              htmlFor="itemName1"
              className="mb-1 font-semibold text-gray-700"
            >
              Item Name
            </label>
            <input
              id="itemName1"
              type="text"
              value={itemName}
              onChange={(e) => setitemName(e.target.value)}
              className="border rounded-lg pl-2 py-1"
              placeholder="Enter item name"
            />
          </div>

          {/* Item Description */}
          <div className="flex flex-col">
            <label
              htmlFor="itemDesc"
              className="mb-1 font-semibold text-gray-700"
            >
              Description
            </label>
            <input
              id="itemDesc"
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="border rounded-lg pl-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter item description"
            />
          </div>
        </div>

        <div className="flex gap-4 mb-4 justify-between">
          {/* Quantity */}
          <div className="flex flex-col">
            <label
              htmlFor="quantity"
              className="mb-1 font-semibold text-gray-700"
            >
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setquantity(e.target.value)}
              className="border rounded-lg pl-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter quantity"
            />
          </div>

          {/* Buying Price */}
          <div className="flex flex-col">
            <label
              htmlFor="buyPrice"
              className="mb-1 font-semibold text-gray-700"
            >
              Buying Price
            </label>
            <input
              id="buyPrice"
              type="number"
              value={butPrice}
              onChange={(e) => setbuyprice(e.target.value)}
              className="border rounded-lg pl-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter buying price"
            />
          </div>
        </div>

        <div className="flex gap-4 mb-4 justify-between">
          {/* Selling Price */}
          <div className="flex flex-col">
            <label
              htmlFor="sellPrice"
              className="mb-1 font-semibold text-gray-700"
            >
              Selling Price
            </label>
            <input
              id="sellPrice"
              type="number"
              value={sellPrice}
              onChange={(e) => setSellprice(e.target.value)}
              className="border rounded-lg pl-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter selling price"
            />
          </div>

          <div>
            <h3>upload invoice</h3>
            <label className="border-2 m-auto border-dashed text-blue-600 flex items-center justify-center rounded-lg cursor-pointer flex-col">
              <span>
                <ImagePlus />
              </span>{" "}
              <span className="text-xs">upload Signature</span>
              <small>PNG/JPG, max 5 MB.</small>
              <input
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
        </div>

        {/* botton for submit */}
      </form>
      <div className="flex justify-between m-auto px-16">
        <div className="border px-3 rounded-lg hover:bg-green-500 hover:scale-125 hover:text-white">
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
        <div className="border px-3 rounded-lg hover:bg-red-700 hover:text-white">
          <button onClick={handelCencel}>Cencel</button>
        </div>
      </div>
    </section>
  );
}

export default AddItem;
