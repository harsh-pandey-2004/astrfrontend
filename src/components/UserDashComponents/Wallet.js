import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TbCurrencyRupee } from "react-icons/tb";
import TransactionTable from './TransactionTable';
import TransactionDetailsTable from './TransactionDetailsTable';
const Wallet = () => {

    const[curTab,setCurTab]=useState("Wallet");

  return (
    <div  className='h-screen   text-xl relative top-20 mb-36'>
         <div className='w-full bg-gray-800 flex items-center gap-2 py-2 px-16'>
       <Link to="/"> <FaHome className='text-yellow-400'/> </Link>
        <p className='text-yellow-400 text-sm '>Transactions</p>
        </div>

        <div className='flex items-center gap-2 px-16 mt-2'>
            <button   onClick={()=>{setCurTab("Wallet")}} className={` ${curTab=="Wallet" ? "bg-yellow-400 text-black" : " bg-gray-800 text-white"} text-base border px-4 py-2 rounded-md  font-normal hover:bg-yellow-400`}>Wallet Transactions</button>
            <button onClick={()=>{setCurTab("Payment")}} className={` ${curTab=="Payment" ? "bg-yellow-400 text-black" : " bg-gray-800 text-white"}  text-base border px-4 py-2 rounded-md font-normal hover:bg-yellow-400`}>Payment Logs</button>
        </div>
        
        <p className='text-center mt-3 font-semibold text-xl'>Transactions</p>


        <div className='mt-3 px-16 flex items-center justify-between mb-6'>
            <div className='flex items-center text-base  gap-6'>
             { curTab=="Wallet" &&  <p className='text-green-700 font-normal flex items-center'>Available balance : <span className='flex items-center'><TbCurrencyRupee />20</span></p>}
                <Link to="/recharge"><button className='border rounded-md px-3 py-1 border-green-700 text-green-700 font-normal hover:bg-green-700 hover:text-white transition'  >Recharge</button></Link> 
            </div>

           

            
            


        </div>



       {curTab=="Wallet" && <TransactionTable/>}
       {curTab=="Payment" && <TransactionDetailsTable/>}
        
        </div>
  )
}

export default Wallet