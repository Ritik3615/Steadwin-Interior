import { ImagePlus } from "lucide-react";
import { useState } from "react";

function Settings() {
  const [File, setFile] = useState(0);
  const [CompanyName, setCompanyName] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [State, setState] = useState("");
  const [PinCode, setPinCode] = useState("");
  const [City, setCity] = useState("");
  const [PanNumber, setPanNumber] = useState("");
  const [GstNumber, setGstNumber] = useState("");
  const [BusinessType, setBusinessType] = useState("");
  const [Signature, setSignature] = useState(0);

  const saveChanges = async () => {
    const formData = new FormData();
    formData.append("Business_Name", CompanyName);
    formData.append("Business_Mobile_Number", MobileNumber);
    formData.append("Business_Email", Email);
    formData.append("Business_Address", Address);
    formData.append("Business_State", State);
    formData.append("Business_PinCode", PinCode);
    formData.append("Business_City", City);
    formData.append("Business_PanNumber", PanNumber);
    formData.append("Business_GstNumber", GstNumber);
    formData.append("Business_BusinessType", BusinessType);

    if (File) {
      formData.append("Business_Logo", File);
    }

    if (Signature) {
      formData.append("Business_Signature", Signature);
    }

    try{
      const response  = await fetch("http://localhost:900/profile/create", {
        method:"POST",
        body:formData
      });
      const result = await response.json();
      console.log("Success:", result);
      alert("Changes Saved Successfully");
    }
    catch(error){
      console.error("Error:", error);
      alert("Failed to save changes");
    }
  };

  const cencelChanges = () => {
    setFile(null);
    setCompanyName("");
    setMobileNumber("");
    setEmail("");
    setAddress("");
    setState("");
    setPinCode("");
    setCity("");
    setPanNumber("");
    setGstNumber("");
    setBusinessType("");
    setSignature(null);
    alert("Changes Cenceled");
  };
  return (
    <>
      {/* top section  */}
      <div className="w-full border-b border-gray-500 p-2 h-14 px-3 flex justify-between">
        {/* left side */}
        <div className="flex gap-2 text-center m-auto">
          <div className="">
            <h1 className="text-black">Business Settings</h1>
            <p className="text-xs">
              Edit your company settings and information
            </p>
          </div>
          <div className="text-center border m-auto p-2 rounded-lg bg-blue-400 text-white text-xs hover:bg-slate-400 ">
            <button>Create new Business</button>
          </div>
        </div>

        {/* right side */}
        <div className="flex gap-3 m-auto">
          <div className="text-center border p-2 rounded-lg bg-blue-400 text-white text-xs hover:scale-105 hover:bg-red-700 ">
            <button className="w-20" onClick={cencelChanges}>
              Cencel
            </button>
          </div>
          <div className="text-center border p-2 rounded-lg bg-blue-400 text-white text-xs hover:scale-110  hover:bg-green-700 ">
            <button className="w-28" onClick={saveChanges}>
              save changes
            </button>
          </div>
        </div>
      </div>

      {/* main settings page */}
      <div className="w-full h-[calc(100vh-56px)] p-7 gap-3 grid grid-cols-2 text-center text-gray-600 text-xs">
        {/* left side */}
        <div className="p-5">
          {/* <h1>Settings Page Coming Soon...left</h1> */}
          <div className="flex gap-3 items-center justify-left mt-10">
            <div className="w-32">
              <label className="border-2 m-auto border-dashed text-blue-600 flex p-6 items-center justify-center rounded-lg cursor-pointer flex-col">
                <span>
                  <ImagePlus />
                </span>{" "}
                <span className="text-xs">upload logo</span>
                <small>PNG/JPG, max 5 MB.</small>
                <input
                  type="file"
                  className="hidden"
                  // value={File}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
            </div>
            <div>
              <h3 className="text-left mb-2">
                Business Name <span className="text-red-500">*</span>
              </h3>
              <input
                type="text"
                className="border border-gray-500 p-2 rounded-md placeholder:text-xs w-72 text-xs"
                placeholder="Enter Business Name"
                value={CompanyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
          </div>
          {/* 2nd section */}
          <div className="grid grid-cols-2 gap-3 text-gray-600 text-left mt-7 mb-3 w-full">
            <div>
              <h3>company Mobile Number</h3>
              <input
                type="text"
                placeholder="Enter Company Number"
                className="border border-gray-600 rounded-md p-2"
                value={MobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div>
              <h3>company E-mail</h3>
              <input
                type="email"
                placeholder="Enter Company Number"
                className="border border-gray-600 rounded-md p-2 "
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h3 className="text-left mb-2"> Billing Address</h3>
            <input
              type="text"
              placeholder="Enter Address"
              className="border border-gray-600 rounded-md p-2 w-full"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* 3rd section */}
          <div className="grid grid-cols-2 gap-3 text-gray-600 text-left mt-7 mb-3 w-full">
            <div>
              <h3>State</h3>
              <input
                type="text"
                placeholder="Enter State"
                className="border border-gray-600 rounded-md p-2"
                value={State}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div>
              <h3>Pin code</h3>
              <input
                type="email"
                placeholder="Enter Pin code"
                className="border border-gray-600 rounded-md p-2"
                value={PinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h3 className="text-left mb-2"> City</h3>
            <input
              type="text"
              placeholder="Enter City"
              className="border border-gray-600 rounded-md p-2 w-full"
              value={City}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          {/* 4th section */}
          <div>
            <h3 className="text-left mb-2 mt-3"> Pan Number</h3>
            <input
              type="text"
              placeholder="Enter Pan Number"
              className="border border-gray-600 rounded-md p-2 w-full"
              value={PanNumber}
              onChange={(e) => setPanNumber(e.target.value)}
            />
          </div>
        </div>

        {/* right side */}
        <div className="p-5">
          <h1>Settings Page Coming Soon...right</h1>
          <div>
            <h3 className="text-left mb-2 mt-3"> GST Number</h3>
            <input
              type="text"
              placeholder="Enter GST Number"
              className="border border-gray-600 rounded-md p-2 w-full"
              value={GstNumber}
              onChange={(e) => setGstNumber(e.target.value)}
            />
          </div>

          <div>
            <h3 className="text-left mb-2 mt-3"> Business Type</h3>
            <input
              type="text"
              placeholder="Enter Business Type"
              className="border border-gray-600 rounded-md p-2 w-full"
              value={BusinessType}
              onChange={(e) => setBusinessType(e.target.value)}
            />
          </div>

          <div>
            <h3 className="text-left mb-2 mt-3"> Upload Signature</h3>
            <label className="border-2 m-auto border-dashed text-blue-600 flex p-6 items-center justify-center rounded-lg cursor-pointer flex-col w-1/4">
              <span>
                <ImagePlus />
              </span>{" "}
              <span className="text-xs">upload Signature</span>
              <small>PNG/JPG, max 5 MB.</small>
              <input
                type="file"
                className="hidden"
                // value={Signature}
                onChange={(e) => setSignature(e.target.files[0])}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
