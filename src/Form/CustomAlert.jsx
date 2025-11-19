import { useState } from "react";

export default function CustomAlert() {
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    setShow(true);
  };

  return (
    <>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Submit
      </button>

      {show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-xl text-center">
            <h2 className="text-xl font-semibold mb-4">
              Thank you! We have received your contact.
            </h2>

            <button
              onClick={() => setShow(false)}
              className="px-3 py-2 bg-green-600 text-white rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
