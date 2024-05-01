import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
const SavedKundli = () => {
  return (
    <div className=' md:w-2/5 xs:w-full flex flex-col gap-3  '>
        <p className='text-xl text-gray-700 font-semibold '>SavedKundli</p>
        <div className='p-3  border-[1px] rounded-lg flex  flex-col justify-center gap-5 items-center shadow-md pt-56 pb-44 '>
               <p className='text-gray-400'>Please login to check your saved horoscope!</p>
               <button className='flex  items-center gap-1 border rounded-full px-3 py-1 bg-yellow-300 text-sm hover:shadow-md hover:shadow-gray-400 transition duration-300'><BsFillPersonFill /><span>Login</span></button>
        </div>
        
    </div>
  )
}

export default SavedKundli;