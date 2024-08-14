import React from 'react';
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const PaymentDetails = () => {


    const[couponModal,setCouponModal]=useState(false);

  return (<>
  <div className={`${couponModal ? "blur" :" bg-yellow-400"}   w-full  relative top-20 mb-24 py-12 `}>
    <div className="max-w-md mx-auto bg-white text-black p-6 rounded-lg shadow-md border border-gray-200 ">
      <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span>Recharge Amount</span>
          <span>₹ 200.00</span>
        </div>
        <div className="flex justify-between">
          <span>GST@18%</span>
          <span>₹ 36.00</span>
        </div>
        <div className="flex justify-between font-bold border-t border-gray-200 pt-4">
          <span>Total Amount</span>
          <span>₹ 236.00</span>
        </div>
      </div>
      
      <div className="bg-yellow-400 p-4 rounded-lg mb-6 text-center">
        <p className="font-semibold text-black">50% Extra</p>
        <p className="text-black">₹ 100.0 cashback in wallet after recharge</p>
      </div>
      
      <button onClick={()=>{setCouponModal(true);}} className="bg-black text-white font-semibold py-2 px-4 rounded w-full mb-6 hover:bg-gray-800 transition duration-300">
        Apply another coupon
      </button>
      
      <div className="space-y-2">
        <button className="flex items-center justify-center bg-yellow-400 text-black font-semibold py-2 px-4 rounded w-full hover:bg-yellow-500 transition duration-300">
          UPI
        </button>
        <button className="flex items-center justify-center bg-yellow-400 text-black font-semibold py-2 px-4 rounded w-full hover:bg-yellow-500 transition duration-300">
          Credit/Debit Card
        </button>
        <button className="flex items-center justify-center bg-yellow-400 text-black font-semibold py-2 px-4 rounded w-full hover:bg-yellow-500 transition duration-300">
          Net Banking
        </button>
      </div>
    </div>

</div>
    {/* Modal */}
    {couponModal &&
    <div className='flex flex-col gap-2 justify-center items-center w-fit p-2 rounded-md absolute top-1/4 left-1/2  border border-black bg-yellow-500'>
       <div className='flex  items-center gap-28'>
           <h1 className='font-semibold self-start'>Coupon Code</h1>
           <RxCross2 className='cursor-pointer' onClick={()=>{setCouponModal(false)}}/>

       </div>
        
        <div className='flex items-center gap-2'> 
            <input type="text" placeholder='Enter Coupon Code...' className='px-2 rounded-md ' />
            <button className='px-2 py-1 bg-black text-white text-sm rounded-md '>Apply</button>
        </div>

    </div>
    }
  </>);
};

export default PaymentDetails;
