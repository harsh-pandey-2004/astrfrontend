import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
const SavedKundli = () => {
  return (
    <div className=' w-full flex flex-col gap-3  '>
        <p className='text-xl text-gray-700 font-semibold '>SavedKundli</p>
        <div className='py-4  border-[1px] rounded-lg flex  flex-col justify-center gap-5 items-center shadow-md  '>
               <p className='text-gray-400'>Please login to check your saved horoscope!</p>
               <button className='flex  items-center gap-1 border rounded-full px-3 py-1 bg-black text-sm hover:shadow-md hover:shadow-gray-400 transition duration-300'><BsFillPersonFill /><span className='text-white pr-3'>Login</span></button>
        </div>
        
    </div>
  )
}

export default SavedKundli;