import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";
import data from './Plans';
import PlanCard from './PlanCard';

const Recharge = () => {
  return (
    <div  className='h-screen flex flex-col items-center  font-semibold text-xl relative top-20 mb-36'>
         <div className='w-full bg-gray-800 flex items-center gap-2 py-2 px-16'>
       <Link to="/"> <FaHome className='text-yellow-400'/> </Link>
       <p className='text-yellow-400 text-sm'>Add Money To  Wallet</p>
        </div>


        <p className='text-center mt-3 font-semibold text-2xl'>Add Money To Wallet</p>
        <p className='text-sm text-gray-500 mt-3'>Available balance :</p>
        <p className='flex items-center'><LuIndianRupee/>10</p>


        <p className='mt-3 text-start w-full px-16 font-semibold'>Popular Recharge</p>


        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6  gap-12 w-full px-16 pt-6'>
         {data.map((obj)=>{return  <Link to="paymentdetails"><PlanCard obj={obj}/></Link>})}

        </div>
    </div>
  )
}

export default Recharge