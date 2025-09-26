import React from "react";

function PurchaseOrder({ orderData }) {
  // orderData structure (example)
  // {
  //   orderNo: "PO-1001",
  //   date: "26/09/2025",
  //   vendor: { name: "ABC Supplies", phone: "+91 9999999999", address: "Mumbai" },
  //   items: [
  //     { id: 1, name: "Printer", quantity: 2, price: 12000 },
  //     { id: 2, name: "Ink Cartridge", quantity: 10, price: 800 },
  //   ]
  // }

  const subtotal =
    orderData?.items?.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    ) || 0;

  return (
    <div className="p-8 max-w-4xl mx-auto border rounded shadow bg-white">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">Purchase Order</h1>

      {/* Vendor Info */}
      <div className="mb-6 border p-4 rounded bg-gray-50">
        <p><strong>Vendor Name:</strong> {orderData?.vendor?.name || "----"}</p>
        <p><strong>Contact:</strong> {orderData?.vendor?.phone || "----"}</p>
        {orderData?.vendor?.address && (
          <p><strong>Address:</strong> {orderData.vendor.address}</p>
        )}
      </div>

      {/* Order Info */}
      <div className="flex justify-between mb-6">
        <p><strong>Order No:</strong> {orderData?.orderNo || "----"}</p>
        <p><strong>Date:</strong> {orderData?.date || "----"}</p>
      </div>

      {/* Items Table */}
      <table className="w-full border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">S.No</th>
            <th className="p-2 border">Item</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Unit Price</th>
            <th className="p-2 border">Total</th>
          </tr>
        </thead>
        <tbody>
          {orderData?.items?.length > 0 ? (
            orderData.items.map((item, index) => (
              <tr key={item.id}>
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{item.name}</td>
                <td className="p-2 border">{item.quantity}</td>
                <td className="p-2 border">₹{item.price}</td>
                <td className="p-2 border">₹{item.quantity * item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-2 border text-center" colSpan="5">
                No items added
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Total Section */}
      <div className="flex justify-end mb-4">
        <div className="w-1/3">
          <div className="flex justify-between p-2 border-t font-bold text-lg">
            <span>Subtotal:</span>
            <span>₹{subtotal}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center mt-6 text-gray-600 italic">
        This is a system-generated Purchase Order.
      </p>
    </div>
  );
}

export default PurchaseOrder;
