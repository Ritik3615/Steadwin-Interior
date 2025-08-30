import { useState } from "react";

function Form() {
  const[name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const[email,setEmail] = useState("")
  const [error, setError] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Phone:", phone);


    if (!name || !phone|| !email) {
      setError("Look this section");
      return;
    }

    // Check Number
    if (!/^\d{10}$/.test(phone)) {
      setError("Enter a Valid numbr");
      return;
    }

    setError("");
    alert("We will connect You shortly");
    setName("");
    setPhone("");
    setEmail("");
  };
  return (
    <>
      <div className="h-96 w-96 border-2 border-black-500 rounded-lg shadow-black flex justify-center items-center flex-col  m-10 bg-gray-400 p-10">
        <h2 className="mb-4 text-3xl">Get your Cotation</h2>
        <form className=" m-3 flex flex-col gap-4 max-w-md" >
            {
                error && (
                    <p className="text-red-600 font-medium">{error}</p>
                )
            }
          {/* <label htmlFor="Name">Enter Your Name</label> */}
          <input
            type="text"
            placeholder="Good Name"
            className="border-2 border-black p-2 item-center w-80 rounded-lg bg-white text-black"
            value={name}
            onChange={(e) =>setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Phone"
            className="border-2 border-black p-2 item-center w-80 rounded-lg bg-white text-black"
            value={phone}
            onChange={(e => setPhone(e.target.value))}
          />
          <input type="email"
          placeholder="Enter email"
          className="border-2 border-black p-2 item-center w-80 rounded-lg bg-white text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick   ={handleSubmit} className="border-2 border-black p-2 items-center w-80 rounded-lg bg-red-400 text-black">submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
