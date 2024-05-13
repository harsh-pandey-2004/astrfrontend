import React from 'react'
import { FaHome } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../RechargeData';
import RechargeCard from '../components/RechargeCard';

function Transactions() {
       
    const[clicked,setClicked]=useState(false);
    const[recharge,setRecharge]=useState(false);
    const[token,setToken]=useState(false);


   

  return (
    <div className='h-screen w-full'>
        <nav className='flex items-center gap-4 pl-8 py-2 bg-slate-100'>
            <Link to="/"><div><FaHome /></div></Link>
            
            {clicked ?  ( recharge ? <p>Add Money To Wallet</p>:<p>Payment Logs</p>): (recharge ? <p>Add Money To Wallet</p> : <p>Transactions</p> )  }
             {token && <p>Payment Details</p>}
            
        </nav>
        




        {!recharge &&
        <div className='px-8 flex flex-col gap-4 h-full'>
            <div className=' flex gap-2 mt-2 pt-1'>
                <button className={`${!clicked ? "bg-yellow-200" : "bg-gray-200"} border  rounded-md px-4 py-2  text-sm hover:bg-yellow-200 transition duration-300`} onClick={()=>{setClicked(false)}}>Wallet Transactions</button>
                <button  className={`${clicked ? "bg-yellow-200" : "bg-gray-200"} border  rounded-md px-4  py-2 text-sm hover:bg-yellow-200 transition duration-300`} onClick={()=>{setClicked(true)}}>Payment Logs</button>
            </div>


            <h1 className='text-center text-xl font-semibold'>Transactions</h1>

           
             <div className='flex items-center gap-2'>
               {clicked==false && <p className='text-base text-green-700'>Available balance:₹ 0</p>} 
                <button className='border border-green-700 rounded-md px-4 py-1 text-sm text-green-700 hover:text-white hover:bg-green-600 transition duration-500' onClick={()=>{setRecharge(true)}}>Recharge</button>
             </div>


             <div className='h-full flex justify-center items-center '>
                <p className='text-slate-400 text-xl text-center'>No sufficient data available!</p>
             </div>
           

        </div>
        }






        {
            recharge &&
            <div className='flex flex-col gap-4'>
                    <h1 className='text-center font-medium text-3xl pt-2'>Add Money to Wallet</h1>

                    <div>
                        <p className='text-center text-gray-600'>Available balance:</p>
                        <p className='text-center text-2xl'>₹ 0</p>

                    </div>



                    <div className='px-8'>
                        <h1 className='text-xl'>Popular Recharge</h1>


                        <div className='grid grid-cols-6 gap-6 mt-8'>
                            {data.map((obj)=>{return <RechargeCard key={obj.id} obj={obj}    onClick={()=>{setToken(true)}} />})}
                        </div>
                    </div>
                

            </div>
        }
    </div>
  )
}

export default Transactions