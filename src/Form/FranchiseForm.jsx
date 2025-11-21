import React, { useState } from "react";

export default function FranchiseForm() {
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    addresh: "",
    pincode: "",
    businessSpace: "",
    budget: "",
    businessType: "",
    howYouKnow: "",
  });

  // Validate fields
  const validateForm = () => {
    let temp = {};

    if (!form.title) temp.title = "Please select a title.";
    if (!form.firstName) temp.firstName = "First name is required.";
    if (!form.lastName) temp.lastName = "Last name is required.";
    if (!form.email) temp.email = "Email is required.";
    if (!form.phone) temp.phone = "Phone number is required.";
    if (!form.city) temp.city = "City is required.";
    if (!form.state) temp.state = "State is required.";
    if (!form.addresh) temp.addresh = "Address is required.";
    if (!form.pincode) temp.pincode = "Pincode is required.";
    if (!form.businessSpace) temp.businessSpace = "Business space is required.";
    if (!form.budget) temp.budget = "Budget is required.";
    if (!form.businessType) temp.businessType = "Business type is required.";
    if (!form.howYouKnow) temp.howYouKnow = "Please fill this.";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form submitted:", form);
  };

  const inputClass = (field) =>
    `w-full p-3 rounded border shadow-sm focus:ring-2 ${
      errors[field]
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-blue-500"
    }`;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="bg-gray-50 max-w-5xl mx-auto p-10 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-10">
          Franchise Application Form
        </h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          {/* TITLE */}
          <div>
            <select
              name="title"
              className={inputClass("title")}
              onChange={handleChange}
            >
              <option value="">Title</option>
              <option>Mr</option>
              <option>Ms</option>
              <option>Mrs</option>
            </select>
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          <div></div>

          {/* FIRST NAME */}
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className={inputClass("firstName")}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* LAST NAME */}
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className={inputClass("lastName")}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={inputClass("email")}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className={inputClass("phone")}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* CITY */}
          <div>
            <input
              type="text"
              name="city"
              placeholder="City"
              className={inputClass("city")}
              onChange={handleChange}
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>

          {/* STATE */}
          <div>
            <select
              name="state"
              className={inputClass("state")}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              {[
                "Maharashtra",
                "Karnataka",
                "Tamil Nadu",
                "Delhi",
                "Uttar Pradesh",
                "Gujarat",
                "Telangana",
                "West Bengal",
                "Rajasthan",
                "Kerala",
                "Punjab",
                "Haryana",
                "Bihar",
                "Odisha",
              ].map((st) => (
                <option key={st}>{st}</option>
              ))}
            </select>
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">{errors.state}</p>
            )}
          </div>

          {/* ADDRESS FULL WIDTH */}
          <div className="md:col-span-2">
            <textarea
              name="addresh"
              placeholder="Full Address"
              className={inputClass("addresh")}
              rows="2"
              onChange={handleChange}
            ></textarea>
            {errors.addresh && (
              <p className="text-red-500 text-sm mt-1">{errors.addresh}</p>
            )}
          </div>

          {/* PINCODE */}
          <div>
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              className={inputClass("pincode")}
              onChange={handleChange}
            />
            {errors.pincode && (
              <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
            )}
          </div>

          {/* BUSINESS SPACE */}
          <div>
            <input
              type="text"
              name="businessSpace"
              placeholder="Business Space (sqft)"
              className={inputClass("businessSpace")}
              onChange={handleChange}
            />
            {errors.businessSpace && (
              <p className="text-red-500 text-sm mt-1">
                {errors.businessSpace}
              </p>
            )}
          </div>

          {/* BUDGET */}
          <div className="md:col-span-2">
            <input
              type="text"
              name="budget"
              placeholder="Your Budget (₹)"
              className={inputClass("budget")}
              onChange={handleChange}
            />
            {errors.budget && (
              <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
            )}
          </div>

          {/* BUSINESS TYPE */}
          <div className="md:col-span-2">
            <select
              name="businessType"
              className={inputClass("businessType")}
              onChange={handleChange}
            >
              <option value="">Business Type</option>
              <option>New Business</option>
              <option>Existing Fabrication Shop</option>
              <option>Interior / Builder</option>
              <option>Contractor / Architect</option>
            </select>
            {errors.businessType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.businessType}
              </p>
            )}
          </div>

          {/* HOW YOU KNOW */}
          <div className="md:col-span-2">
            <textarea
              name="howYouKnow"
              placeholder="How did you hear about us?"
              className={inputClass("howYouKnow")}
              rows="3"
              onChange={handleChange}
            ></textarea>
            {errors.howYouKnow && (
              <p className="text-red-500 text-sm mt-1">{errors.howYouKnow}</p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 py-3 rounded text-white font-bold hover:bg-blue-700 transition cursor-pointer"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
