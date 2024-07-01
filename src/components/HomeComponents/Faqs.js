import React, { useState } from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";

function Faqs() {
  const[slot,setSlot]=useState(0);
 
  return (
    <div className='bg-black mb-8 py-12 '>
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
           <p className='text-white py-2'>How Can Online Astrology Help Me In Predicting The Future?</p>
           <div className='p-1 border border-yellow-400 bg-yellow-400 rounded-sm'  >{slot==2 ? <FaRegMinusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(-2);}}/>:<FaRegPlusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(2);}}/>}</div>
        </div>  
         {slot==2 && <p className='text-white pb-4'>Online astrology can be of two types. One, you can visit a website and find astrology tools available on the same. Then all you need to do is enter some details like your date of birth, time of your birth, place of birth, etc. and you will have for yourself a contentful report describing you better than anyone else ever would. Meanwhile, the other way around is to directly get in touch with the astrologers (over a call or chat) we have on board to get the same information in a much detailed manner. Online astrology may look modern but when it comes to making predictions about your future, the old school way of calculating the position of the stars and planets is used to provide you the most accurate results. Simply say, online astrology is just a change of mode of communication between an astrologer and the one who seeks to know about their past, present and future. However, the ways to come to these answers is still old school and one one of the most authentic one.</p>}
     </div>

     <div className='mt-6 border border-yellow-400 bg-gray-900 rounded-md   px-12 max-w-6xl mx-auto '>
       <div className='py-2 flex justify-between items-center'> 
           <p className='text-white py-2'>How reliable is the Astrocaptain app?</p>
           <div className='p-1 border border-yellow-400 bg-yellow-400 rounded-sm'  >{slot==3 ? <FaRegMinusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(-3);}}/>:<FaRegPlusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(3);}}/>}</div>
        </div>  
         {slot==3 && <p className='text-white pb-4'>Interestingly, the AstroCaptain app is designed to cater to all your astrology needs. Beyond the primary "Talk to Astrologers" and "Call to Astrologers" features, where the best astrologers from around the world are available to assist you, AstroCaptain also offers many free features for users to enjoy. These include free live sessions on the app, allowing you to consult with astrologers at no cost. AstroCaptain also provides daily, weekly, monthly, and yearly horoscopes prepared by expert astrologers, helping you foresee your future. Additionally, AstroCaptain offers free Kundli, free matchmaking, and other features, all crafted by expert astrologers and available at any time. If you require astrology products such as Rudraksha, Yantras, Gemstones, Reiki healing, etc., these are also available on the app. AstroCaptain is a one-stop destination for all your astrology needs, making it a highly reliable choice.</p>}
     </div>

     <div className='mt-6 border border-yellow-400 bg-gray-900 rounded-md   px-12 max-w-6xl mx-auto '>
       <div className='py-2 flex justify-between items-center'> 
           <p className='text-white py-2'>How much does Astrocaptain cost?</p>
           <div className='p-1 border border-yellow-400 bg-yellow-400 rounded-sm'  >{slot==4 ? <FaRegMinusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(-4);}}/>:<FaRegPlusSquare className='bg-yellow-400 hover:cursor-pointer' onClick={()=>{setSlot(4);}}/>}</div>
        </div>  
         {slot==4 && <p className='text-white pb-4'>Simply put, AstroCaptain suits your budget. With the "First Chat Free" feature, it becomes even more affordable. On AstroCaptain, users can access services ranging from as low as Rs 10 per minute to Rs 250 per minute. The astrologers on AstroCaptain charge according to their experiences, both in their personal lives and their time on the app. A lower fee doesn't mean an astrologer is not good; it might simply mean they are new to the app and want to keep their prices affordable for users. Interestingly, some astrologers deliberately keep their consultation prices low as their primary goal is to help others with their talent. In a nutshell, you will find both affordable and premium astrologers on AstroCaptain, but rest assured that all of them are experts at what they do, having been thoroughly vetted by other expert astrologers before joining the app.






</p>}
     </div>
    </div>
  )
}

export default Faqs