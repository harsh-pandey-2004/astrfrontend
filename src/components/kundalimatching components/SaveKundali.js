import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
const SaveKundli = () => {
  return (
    <div className='md:w-2/5 xs:w-full flex flex-col gap-1'>
        <p className='text-xl text-gray-700 font-semibold text-center'>SavedKundli</p>
        <div className='p-2  border-[1px] rounded-lg flex  flex-col justify-center gap-5 items-center shadow-md h-full xs:h-full py-5'>
               <p className='text-gray-400'>Please login to check your saved horoscope!</p>
               <button className='flex  items-center gap-1 border rounded-full px-3 py-1 bg-yellow-300 text-sm hover:shadow-md hover:shadow-gray-400 transition duration-300'><BsFillPersonFill /><span>Login</span></button>
        </div>
        
    </div>
  )
}
export default SaveKundli