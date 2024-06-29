import React from 'react'
import { FaRegPlusSquare } from "react-icons/fa";

function Faqs() {
  return (
    <div className='bg-black mb-8 py-4 '>
    <h1 className='text-center text-3xl font-semibold text-white'>FAQ'S </h1> 
    <h2 className='text-center text-xl text-white  '>Why Is Astrology So Accurate?</h2>
    <p className='px-12 mt-6 text-gray-400'>First and foremost, the accuracy of our astrology predictions is thanks to the expertise of the hundreds of knowledgeable and experienced astrologers we have on board. The precision in astrology comes from our astrologers' deep understanding of planets, planetary configurations, constellations, and how these celestial bodies influence human life and behavior as they move, shift, or even stay still.</p>   
     <div className='mt-6 border border-yellow-400 bg-gray-900 rounded-md   px-12 max-w-6xl mx-auto '>
       <div className='py-2 flex justify-between items-center'> 
           <p className='text-white'>Why Should You Choose Astrocaptain For An Astrology Horoscope?</p>
           <div className='p-1 border border-yellow-400 bg-yellow-400 rounded-sm'><FaRegPlusSquare className='bg-yellow-400' /></div>
        </div>  
         <p></p>
     </div>
    </div>
  )
}

export default Faqs