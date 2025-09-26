import React from "react";

function SalesInvoice({ invoiceData }) {
  // invoiceData structure (example):
  // {
  //   invoiceNo: "INV-001",
  //   date: "26/09/2025",
  //   customer: { name: "John Doe", phone: "+91 9876543210", address: "Delhi" },
  //   items: [
  //     { id: 1, name: "Laptop", quantity: 1, price: 50000 },
  //     { id: 2, name: "Mouse", quantity: 2, price: 500 },
  //   ],
  //   taxRate: 5
  // }

  const subtotal =
    invoiceData?.items?.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    ) || 0;

  const tax = (subtotal * (invoiceData?.taxRate || 0)) / 100;
  const grandTotal = subtotal + tax;

  return (
    <div className="p-8 max-w-4xl mx-auto border rounded shadow bg-white">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">Sales Invoice</h1>

      {/* Customer Info */}
      <div className="mb-6 border p-4 rounded bg-gray-50">
        <p><strong>Name:</strong> {invoiceData?.customer?.name || "----"}</p>
        <p><strong>Mobile:</strong> {invoiceData?.customer?.phone || "----"}</p>
        {invoiceData?.customer?.address && (
          <p><strong>Address:</strong> {invoiceData.customer.address}</p>
        )}
      </div>

      {/* Invoice Info */}
      <div className="flex justify-between mb-6">
        <p><strong>Invoice No:</strong> {invoiceData?.invoiceNo || "----"}</p>
        <p><strong>Date:</strong> {invoiceData?.date || "----"}</p>
      </div>

      {/* Items Table */}
      <table className="w-full border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">S.No</th>
            <th className="p-2 border">Item</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Total</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData?.items?.length > 0 ? (
            invoiceData.items.map((item, index) => (
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
                No items available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Total Section */}
      <div className="flex justify-end mb-4">
        <div className="w-1/3">
          <div className="flex justify-between p-2 border-t">
            <span className="font-semibold">Subtotal:</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between p-2 border-t">
            <span className="font-semibold">Tax ({invoiceData?.taxRate || 0}%):</span>
            <span>₹{tax}</span>
          </div>
          <div className="flex justify-between p-2 border-t font-bold text-lg">
            <span>Grand Total:</span>
            <span>₹{grandTotal}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center mt-6 text-gray-600 italic">
        Thank you for your business!
      </p>
    </div>
  );
}

export default SalesInvoice;
