import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
const SaveKundli = () => {
  return (
    <div className='w-full flex flex-col gap-1 px-4 md:px-12 mt-6'>
        <p className='text-xl text-gray-700 font-semibold text-start'>Saved Matches</p>
        <div className='px-2 py-4  border-[1px] rounded-lg flex  flex-col justify-center gap-5 items-center shadow-md h-full xs:h-full '>
               <p className='text-gray-400'>Please login to check your saved horoscope!</p>
               <button className='flex  items-center gap-1 border rounded-full px-3 py-1 bg-black text-white text-sm hover:shadow-md hover:shadow-gray-400 transition duration-300'><BsFillPersonFill /><span>Login</span></button>
        </div>
        
    </div>
  )
}
export default SaveKundli