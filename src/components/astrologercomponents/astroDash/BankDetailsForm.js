import React, { useState } from "react";

const BankDetailsForm = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [upiId, setUpiId] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Account Number:", accountNumber);
    console.log("UPI ID:", upiId);
    console.log("Account Holder Name:", accountHolderName);
  };

  return (<div className="bg-gray-800 h-screen  pt-[1px] mt-20">
   
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-black border border-yellow-400 p-8 rounded-lg shadow-lg w-[50%] mx-auto mt-12"
      >
        <h2 className="text-lg font-bold mb-4 p-4 bg-yellow-400 text-center w-full rounded">
          Bank Details Form
        </h2>

        <div className="mx-3">
          <label htmlFor="accountNumber" className="block text-lg mb-2 font-sans text-white">
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            className="form-input outline-none rounded bg-transparent text-white placeholder:text-gray-400 border-2 w-full py-2 px-3"
            placeholder="Enter your account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>

        <div className="mx-3 mt-4">
          <label htmlFor="upiId" className="block text-lg mb-2 font-sans text-white">
            UPI ID
          </label>
          <input
            type="text"
            id="upiId"
            className="form-input outline-none rounded bg-transparent text-white placeholder:text-gray-400 border-2 w-full py-2 px-3"
            placeholder="Enter your UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            required
          />
        </div>

        <div className="mx-3 mt-4">
          <label htmlFor="accountHolderName" className="block text-lg mb-2 font-sans text-white">
            Account Holder's Name
          </label>
          <input
            type="text"
            id="accountHolderName"
            className="form-input outline-none rounded bg-transparent text-white placeholder:text-gray-400 border-2 w-full py-2 px-3"
            placeholder="Enter the account holder's name"
            value={accountHolderName}
            onChange={(e) => setAccountHolderName(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-400 hover:box-shadow1 text-black font-sans py-2 px-4 rounded-lg w-[95%] mx-auto mt-6"
        >
          Submit
        </button>
      </form>
    
     </div>
  );
};

export default BankDetailsForm;
