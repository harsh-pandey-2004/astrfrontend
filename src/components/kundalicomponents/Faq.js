import React, { useState } from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";

function Faq() {
  const[slot,setSlot]=useState(0);
 
  return (
    <div className='bg-black mb-8 py-12 '>
    <h1 className='text-center text-3xl font-semibold text-white'>FAQ'S </h1> 
    <h2 className='text-center text-xl text-white  '>Everything You Need to Know About Your  Kundli</h2>
    <p className='px-12 mt-6 text-gray-400'>Your Kundli, or birth chart, is a comprehensive astrological tool that provides personalized insights into various aspects of your life based on the positions of celestial bodies at the time of your birth. It serves as a roadmap that astrologers use to decipher your personality traits, strengths, weaknesses, and potential life events. By analyzing the planetary positions and their influences on different astrological houses—each representing specific aspects such as health, career, relationships, finances, and spirituality—astrologers can predict future trends and significant life events. Kundli matching, a key use of the Kundli, assesses compatibility between couples before marriage by evaluating factors like emotional harmony, financial stability, and the longevity of the relationship. Additionally, the Kundli's planetary periods (Dasha and Bhukti) reveal the influence of planets during specific phases of your life, aiding in decision-making and planning. In cases where unfavorable planetary positions or doshas (flaws) are identified, astrologers may recommend remedial measures such as wearing specific gemstones, performing rituals, or chanting mantras to mitigate negative effects and enhance positive outcomes in life. Understanding your Kundli empowers you with valuable insights and guidance to navigate life's challenges and opportunities based on astrological principles.</p>   
     <div className='mt-6 border border-yellow-400 bg-gray-900 rounded-md   px-12 max-w-6xl mx-auto '>
       <div className='py-2 flex justify-between items-center'> 
           <p className='text-white py-2'>What is Janam Kundli?</p>
           <div className='p-1 border border-yellow-400 bg-yellow-400 rounded-sm'  >{slot==1 ? <FaRegMinusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(-1);}}/>:<FaRegPlusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(1);}}/>}</div>
        </div>  
         {slot==1 && <p className='text-white pb-4 '>Kundli is a chart prepared in astrology depending on the precise date, place, and time of birth of an individual. It figures out the placement of all the planets and signs, along with the Sun and Moon at the time of your birth. Along with all this, it also shows the other astrological aspects and relevant information about a newborn individual. With all these details, astrologers calculate your ascendant status as well as your rising sign of the native. Also, it provides a diligent insight into how a person would become, how would you do in your life—future, and how your life’s scenario is in the present.</p>}
     </div>

     <div className='mt-6 border border-yellow-400 bg-gray-900 rounded-md   px-12 max-w-6xl mx-auto '>
       <div className='py-2 flex justify-between items-center'> 
           <p className='text-white py-2'> What is Dasamsa or D10 Chart in Kundli reading?</p>
           <div className='p-1 border border-yellow-400 bg-yellow-400 rounded-sm'  >{slot==2 ? <FaRegMinusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(-2);}}/>:<FaRegPlusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(2);}}/>}</div>
        </div>  
         {slot==2 && <p className='text-white pb-4'>Dasamsa, also known as the D10 chart in Vedic astrology, is a specialized divisional chart that holds significant importance in the analysis of an individual's career and professional life. It is derived from the birth chart (Kundli), which is divided into various divisional charts (Varga charts) to provide detailed insights into specific aspects of life. Dasamsa, being the 10th divisional chart, specifically focuses on career matters, including profession, achievements, status in society, and overall success in professional endeavors.</p>}
     </div>

     <div className='mt-6 border border-yellow-400 bg-gray-900 rounded-md   px-12 max-w-6xl mx-auto '>
       <div className='py-2 flex justify-between items-center'> 
           <p className='text-white py-2'> What is Dasha in Kundli analysis?</p>
           <div className='p-1 border border-yellow-400 bg-yellow-400 rounded-sm'  >{slot==3 ? <FaRegMinusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(-3);}}/>:<FaRegPlusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(3);}}/>}</div>
        </div>  
         {slot==3 && <p className='text-white pb-4'> Dasha refers to a crucial aspect of Vedic astrology that examines the influence of planetary periods (known as Dashas) on an individual's life journey. Dashas represent specific time periods during which a particular planet exerts its predominant influence over various aspects of life, as indicated by the birth chart (Kundli).</p>}
     </div>

     <div className='mt-6 border border-yellow-400 bg-gray-900 rounded-md   px-12 max-w-6xl mx-auto '>
       <div className='py-2 flex justify-between items-center'> 
           <p className='text-white py-2'>How to know Mahadasha in Kundli?</p>
           <div className='p-1 border border-yellow-400 bg-yellow-400 rounded-sm'  >{slot==4 ? <FaRegMinusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(-4);}}/>:<FaRegPlusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(4);}}/>}</div>
        </div>  
         {slot==4 && <p className='text-white pb-4'>In Kundli analysis, identifying the Mahadasha involves a systematic examination of planetary periods known as Dashas, particularly focusing on the major periods governed by different planets. The Mahadasha sequence, typically determined by the position of the Moon in a specific Nakshatra (lunar mansion) at the time of birth, follows a structured order within the chosen Dasha system, such as Vimshottari Dasha.Astrologers calculate the Mahadasha periods based on the degrees of the Moon in its Nakshatra and interpret the subsequent planetary rulerships that influence various aspects of life. Each Mahadasha spans several years and is further divided into Antardashas (sub-periods) ruled by different planets, known as Bhuktis.</p>}
     </div>
    </div>
  )
}

export default Faq;