import React, { useState } from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";

function Faqs() {
  const[slot,setSlot]=useState(0);
 
  return (
    <div className='bg-black mb-8 py-4 '>
    <h1 className='text-center text-3xl font-semibold text-white'>FAQ'S </h1> 
    <h2 className='text-center text-xl text-white  '>Why Is Astrology So Accurate?</h2>
    <p className='px-12 mt-6 text-gray-400'>First and foremost, the accuracy of our astrology predictions is thanks to the expertise of the hundreds of knowledgeable and experienced astrologers we have on board. The precision in astrology comes from our astrologers' deep understanding of planets, planetary configurations, constellations, and how these celestial bodies influence human life and behavior as they move, shift, or even stay still.</p>   
     <div className='mt-6 border border-yellow-400 bg-gray-900 rounded-md   px-12 max-w-6xl mx-auto '>
       <div className='py-2 flex justify-between items-center'> 
           <p className='text-white py-2'>Why Should You Choose Astrocaptain For An Astrology Horoscope?</p>
           <div className='p-1 border border-yellow-400 bg-yellow-400 rounded-sm'  >{slot==1 ? <FaRegMinusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(-1);}}/>:<FaRegPlusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(1);}}/>}</div>
        </div>  
         {slot==1 && <p className='text-white pb-4'>AstroCaptain has consistently received high praise across various platforms, cultivating a satisfied and loyal user base. Our rigorous recruitment process ensures that only the finest astrologers join AstroCaptain, guaranteeing top-notch service for all your astrology needs.
Our extensive range of services includes online Kundli matching, horoscope predictions, daily and weekly horoscopes, numerology, tarot readings, shopping, and free blogs, among many others.
Additionally, if you encounter any issues, you can directly reach out to the CEO to address your concerns. Exceptional service is our top priority, and we are committed to achieving it in every interaction with you.</p>}
     </div>

     <div className='mt-6 border border-yellow-400 bg-gray-900 rounded-md   px-12 max-w-6xl mx-auto '>
       <div className='py-2 flex justify-between items-center'> 
           <p className='text-white py-2'>Why Should You Choose Astrocaptain For An Astrology Horoscope?</p>
           <div className='p-1 border border-yellow-400 bg-yellow-400 rounded-sm'  >{slot==2 ? <FaRegMinusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(-2);}}/>:<FaRegPlusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(2);}}/>}</div>
        </div>  
         {slot==2 && <p className='text-white pb-4'>AstroCaptain has consistently received high praise across various platforms, cultivating a satisfied and loyal user base. Our rigorous recruitment process ensures that only the finest astrologers join AstroCaptain, guaranteeing top-notch service for all your astrology needs.
Our extensive range of services includes online Kundli matching, horoscope predictions, daily and weekly horoscopes, numerology, tarot readings, shopping, and free blogs, among many others.
Additionally, if you encounter any issues, you can directly reach out to the CEO to address your concerns. Exceptional service is our top priority, and we are committed to achieving it in every interaction with you.</p>}
     </div>

     <div className='mt-6 border border-yellow-400 bg-gray-900 rounded-md   px-12 max-w-6xl mx-auto '>
       <div className='py-2 flex justify-between items-center'> 
           <p className='text-white py-2'>Why Should You Choose Astrocaptain For An Astrology Horoscope?</p>
           <div className='p-1 border border-yellow-400 bg-yellow-400 rounded-sm'  >{slot==3 ? <FaRegMinusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(-3);}}/>:<FaRegPlusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(3);}}/>}</div>
        </div>  
         {slot==3 && <p className='text-white pb-4'>AstroCaptain has consistently received high praise across various platforms, cultivating a satisfied and loyal user base. Our rigorous recruitment process ensures that only the finest astrologers join AstroCaptain, guaranteeing top-notch service for all your astrology needs.
Our extensive range of services includes online Kundli matching, horoscope predictions, daily and weekly horoscopes, numerology, tarot readings, shopping, and free blogs, among many others.
Additionally, if you encounter any issues, you can directly reach out to the CEO to address your concerns. Exceptional service is our top priority, and we are committed to achieving it in every interaction with you.</p>}
     </div>

     <div className='mt-6 border border-yellow-400 bg-gray-900 rounded-md   px-12 max-w-6xl mx-auto '>
       <div className='py-2 flex justify-between items-center'> 
           <p className='text-white py-2'>Why Should You Choose Astrocaptain For An Astrology Horoscope?</p>
           <div className='p-1 border border-yellow-400 bg-yellow-400 rounded-sm'  >{slot==4 ? <FaRegMinusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(-4);}}/>:<FaRegPlusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(4);}}/>}</div>
        </div>  
         {slot==4 && <p className='text-white pb-4'>AstroCaptain has consistently received high praise across various platforms, cultivating a satisfied and loyal user base. Our rigorous recruitment process ensures that only the finest astrologers join AstroCaptain, guaranteeing top-notch service for all your astrology needs.
Our extensive range of services includes online Kundli matching, horoscope predictions, daily and weekly horoscopes, numerology, tarot readings, shopping, and free blogs, among many others.
Additionally, if you encounter any issues, you can directly reach out to the CEO to address your concerns. Exceptional service is our top priority, and we are committed to achieving it in every interaction with you.</p>}
     </div>
    </div>
  )
}

export default Faqs