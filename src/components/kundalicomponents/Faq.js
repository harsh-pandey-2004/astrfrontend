import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";


import { RxCross1 } from "react-icons/rx";

function Faq() {
  const[slot,setSlot]=useState(0);
 
  return (
    <div className=' mb-8 pb-12 px-4 md:px-12 mt-8 '>
    <h1 className='text-center text-3xl font-semibold text-black'>Frequently Asked Questions </h1> 
    {/* <h2 className='text-center text-xl text-white  '>Why Is Astrology So Accurate?</h2>
    <p className='px-12 mt-6 text-gray-400'>First and foremost, the accuracy of our astrology predictions is thanks to the expertise of the hundreds of knowledgeable and experienced astrologers we have on board. The precision in astrology comes from our astrologers' deep understanding of planets, planetary configurations, constellations, and how these celestial bodies influence human life and behavior as they move, shift, or even stay still.</p>    */}
     <div className='mt-6  border-b border-black      max-w-[85rem] mx-auto transition-all duration-500 ease-in-out'>
       <div className='py-2 flex justify-between items-center'> 
           <p className='font-semibold py-2'>What is Janam Kundli?</p>
           <div className='p-1   rounded-sm '  >{slot==1 ? <RxCross1 className=' hover:cursor-pointer  ' onClick={()=>{setSlot(-1);}}/>:<FaPlus className=' hover:cursor-pointer' onClick={()=>{setSlot(1);}}/>}</div>
        </div>  
       
 <div className={`overflow-hidden transition-all duration-500 ease-in-out ${slot === 1 ? 'max-h-screen' : 'max-h-0'}`}>
          <p className='pb-6'>
          Kundli is a chart prepared in astrology depending on the precise date, place, and time of birth of an individual. It figures out the placement of all the planets and signs, along with the Sun and Moon at the time of your birth. Along with all this, it also shows the other astrological aspects and relevant information about a newborn individual. With all these details, astrologers calculate your ascendant status as well as your rising sign of the native. Also, it provides a diligent insight into how a person would become, how would you do in your life—future, and how your life’s scenario is in the present.
          </p>
        </div>
     </div>

     <div className=' border-b border-black      max-w-[85rem] mx-auto '>
       <div className='py-2 flex justify-between items-center'> 
           <p className='font-semibold  py-2'>What is Dasamsa or D10 Chart in Kundli reading?</p>
           <div className='p-1  rounded-sm'  >{slot==2 ? <RxCross1 className=' hover:cursor-pointer' onClick={()=>{setSlot(-2);}}/>:<FaPlus className=' hover:cursor-pointer' onClick={()=>{setSlot(2);}}/>}</div>
        </div>  
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${slot === 2 ? 'max-h-screen' : 'max-h-0'}`}>
          <p className='pb-6'>
          Dasamsa, also known as the D10 chart in Vedic astrology, is a specialized divisional chart that holds significant importance in the analysis of an individual's career and professional life. It is derived from the birth chart (Kundli), which is divided into various divisional charts (Varga charts) to provide detailed insights into specific aspects of life. Dasamsa, being the 10th divisional chart, specifically focuses on career matters, including profession, achievements, status in society, and overall success in professional endeavors.
          </p>
        </div>
     </div>

     <div className=' border-b border-black      max-w-[85rem] mx-auto '>
       <div className='py-2 flex justify-between items-center'> 
           <p className=' font-semibold py-2'>What is Dasha in Kundli analysis?</p>
           <div className='p-1  rounded-sm'  >{slot==3 ? <RxCross1 className=' hover:cursor-pointer' onClick={()=>{setSlot(-3);}}/>:<FaPlus className=' hover:cursor-pointer' onClick={()=>{setSlot(3);}}/>}</div>
        </div>  
        
    
         <div className={`overflow-hidden transition-all duration-500 ease-in-out ${slot === 3 ? 'max-h-screen' : 'max-h-0'}`}>
          <p className='pb-6'>
          Dasha refers to a crucial aspect of Vedic astrology that examines the influence of planetary periods (known as Dashas) on an individual's life journey. Dashas represent specific time periods during which a particular planet exerts its predominant influence over various aspects of life, as indicated by the birth chart (Kundli).
          </p>
        </div>
      
       </div>

     <div className=' border-b border-black     max-w-[85rem] mx-auto '>
       <div className='py-2 flex justify-between items-center'> 
           <p className=' font-semibold py-2'>How to know Mahadasha in Kundli?</p>
           <div className='p-1  rounded-sm'  >{slot==4 ? <RxCross1 className=' hover:cursor-pointer' onClick={()=>{setSlot(-4);}}/>:<FaPlus className=' hover:cursor-pointer' onClick={()=>{setSlot(4);}}/>}</div>
        </div>  
         
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${slot == 4 ? 'max-h-screen' : 'max-h-0'}`}>
          <p className='pb-6'>In Kundli analysis, identifying the Mahadasha involves a systematic examination of planetary periods known as Dashas, particularly focusing on the major periods governed by different planets. The Mahadasha sequence, typically determined by the position of the Moon in a specific Nakshatra (lunar mansion) at the time of birth, follows a structured order within the chosen Dasha system, such as Vimshottari Dasha.Astrologers calculate the Mahadasha periods based on the degrees of the Moon in its Nakshatra and interpret the subsequent planetary rulerships that influence various aspects of life. Each Mahadasha spans several years and is further divided into Antardashas (sub-periods) ruled by different planets, known as Bhuktis.</p>
        </div>
     </div>
    </div>
  )
}

export default Faq