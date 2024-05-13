import React from 'react'
import { useState } from 'react';
function OrderHistory() {

   const[clicked,setClicked]=useState(1);

  return (
    <div className='h-screen w-full'>   

       <div className='flex justify-evenly gap-4  w-11/12 mx-auto px-2 py-4 border-b border-slate-200'>
            <button className={`${clicked == 1 ? "bg-yellow-300" : "hover:bg-slate-300 transition "} w-1/6 py-2 border rounded-full text-sm bg-slate-100 `} onClick={()=>{setClicked(1)}}>Call</button>

            <button className={`${clicked == 2 ? "bg-yellow-300" : "hover:bg-slate-300 transition"} w-1/6 py-2 border rounded-full text-sm bg-slate-100`} onClick={()=>{setClicked(2)}}>chat</button>

            <button className={`${clicked == 3 ? "bg-yellow-300" : "hover:bg-slate-300 transition"} w-1/6 py-2 border rounded-full text-sm bg-slate-100`} onClick={()=>{setClicked(3)}}>Report</button>

            <button className={`${clicked == 4 ? "bg-yellow-300" : "hover:bg-slate-300 transition"} w-1/6 py-2 border rounded-full text-sm bg-slate-100`} onClick={()=>{setClicked(4)}}>Pandit</button>

            <button className={`${clicked == 5 ? "bg-yellow-300" : "hover:bg-slate-300 transition"} w-1/6 py-2 border rounded-full text-sm bg-slate-100`} onClick={()=>{setClicked(5)}}>Prashad</button>

            <button className={`${clicked == 6 ? "bg-yellow-300" : "hover:bg-slate-300 transition"} w-1/6 py-2 border rounded-full text-sm bg-slate-100`} onClick={()=>{setClicked(6)}}>Vastu</button>   
       </div>

       <div className='h-full flex justify-center items-center '>
                <p className='text-slate-400 text-xl text-center'>No sufficient data available!</p>
       </div>


    </div>
  )
}

export default OrderHistory