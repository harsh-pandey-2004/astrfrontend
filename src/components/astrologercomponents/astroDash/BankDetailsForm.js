import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const BankDetailsForm = () => {

  const[slug,setSlug]=useState('');
   const[formData,setFormData]=useState({account:"",upi:"",holder:""});

   const location=useLocation();

   useEffect(()=>{
    const pathParts=location.pathname.split('/');
    const fetchedSlug=pathParts[2];
    setSlug(fetchedSlug);
   },[location])
   


  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prevData)=>({...prevData,[name]:value}));

  }


  

  const handleSubmit =async (e) => {
   
    e.preventDefault();
    console.log(formData);


    const updatedFormData = {
     
        
          account: formData.account,
          upi: formData.upi,
          holder: formData.holder
        
      
    };

  

    try{
      console.log({"bank":updatedFormData});
      
      const response=await axios.patch(
        `https://astrobackend.onrender.com/api/update-astrologer-profile/${slug}`,
        {bank:[updatedFormData]} ,
         {
          headers: {
            "Content-Type": "application/json" 
          }
        });
        console.log(response.data);
    }catch(err){
      console.log(err);
      console.log("Error while Patching");
    }


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
            name="account"
            value={formData.account}
            onChange={handleChange}
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
            name="upi"
            value={formData.upi}
            onChange={handleChange}
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
            name="holder"
            value={formData.holder}
            onChange={handleChange}
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
