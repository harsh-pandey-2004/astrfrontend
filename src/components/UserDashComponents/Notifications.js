import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Notifications = () => {
  return (
    <div className='h-screen flex flex-col items-center gap-6 font-semibold text-xl relative top-20 mb-36'>
        <div className='w-full bg-gray-800 flex items-center gap-2 py-2 px-16'>
       <Link to="/"> <FaHome className='text-yellow-400'/> </Link>
        <p className='text-yellow-400 text-sm '>Notifications</p>
        </div>
        
        
       <p className='w-fit px-8 py-2  bg-yellow-400 text-xl rounded-md '> Notifications</p>
       
       <div className='w-[70%] mx-auto  p-2 flex flex-col gap-4 '>
         

         <div className='text-base rounded-md border p-2 shadow '>
           <p className=' font-bold text-lg flex justify-between'>Welcome Famous Astrologer Virat 🙏<span className='text-xs text-gray-600 font-normal'>9 Aug 2024</span></p> 
           <p className='font-normal text-base'>NitinS is a well-read Numerologist who also has a good hold on Lal Kitab astrology. He believes in making a difference through his community-building pursuit thus guides people on issues like Marriage, Career, Love, etc. Let's welcome him together.</p>
         </div>

         <div className='text-base rounded-md border p-2 shadow '>
           <p className=' font-bold text-lg flex justify-between'>Welcome Famous Astrologer Virat  🙏<span className='text-xs text-gray-600 font-normal'>9 Aug 2024</span></p> 
           <p className='font-normal text-base'>NitinS is a well-read Numerologist who also has a good hold on Lal Kitab astrology. He believes in making a difference through his community-building pursuit thus guides people on issues like Marriage, Career, Love, etc. Let's welcome him together.</p>
         </div>

         <div className='text-base rounded-md border p-2 shadow '>
           <p className=' font-bold text-lg flex justify-between'>Welcome Famous Astrologer Virat 🙏<span className='text-xs text-gray-600 font-normal'>9 Aug 2024</span></p> 
           <p className='font-normal text-base'>NitinS is a well-read Numerologist who also has a good hold on Lal Kitab astrology. He believes in making a difference through his community-building pursuit thus guides people on issues like Marriage, Career, Love, etc. Let's welcome him together.</p>
         </div>

         <div className='text-base rounded-md border p-2 shadow '>
           <p className=' font-bold text-lg flex justify-between' >Welcome Famous Astrologer Virat 🙏 <span className='text-xs text-gray-600 font-normal'>9 Aug 2024</span></p> 
           <p className='font-normal text-base'>NitinS is a well-read Numerologist who also has a good hold on Lal Kitab astrology. He believes in making a difference through his community-building pursuit thus guides people on issues like Marriage, Career, Love, etc. Let's welcome him together.</p>
         </div>

        
          
       </div>
       
       
       
       
    </div>

      

  )
}

export default Notifications