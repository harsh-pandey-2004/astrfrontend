import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IoStar } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import RatingsCard from './RatingsCard';

const SingleAstro = () => {
    const{id}=useParams();

  const[astrologer,setAstrologer]=useState({});

  useEffect(()=>{
    const fetchData = async () => {
      let response = await axios.get(
        `https://astrobackend.onrender.com/api/astrologer/${id}`
      );
      
      setAstrologer(response.data.Data);
    
   
    };
    fetchData();
  },[])
   
    

  const qualifications=[
    'CA Inter (Group I)',
    'Member of the Indian Council for Astrological Sciences',
    'Expert in Vedic Astrology (Parashara method)',
    'Practices Prashnam, Jaimini System of Astrology, Muhurtha Fixing, Numerology, Horoscope Matching and Medical Astrology'
  ];

  const ratingData = {
    overallRating: 4.3,
    totalReviews: 150,
    ratingBreakdown: [
      { stars: 5, count: 90 },
      { stars: 4, count: 30 },
      { stars: 3, count: 15 },
      { stars: 2, count: 10 },
      { stars: 1, count: 5 },
    ],
  };

  

  return (
    <div className='mb-12'>
      <div className='border rounded-md max-w-5xl mx-auto flex  gap-12 p-6  mt-6 bg-gradient-to-b from-orange-200 to-white'>


  
        <div className='flex flex-col items-center justify-center gap-1'>

          <img src={astrologer.image} height={250} width={250} className='bg-gray-200 rounded-full'/>
          <button className='border rounded-md px-2  bg-yellow-300'>Follow</button>
        </div>

        <div className='flex flex-col gap-3 justify-center  '>
              <p className='text-2xl font-semibold'> {astrologer.firstName}  {astrologer.lastName}</p>

            <div className='flex flex-col justify-center'>
              <p className='text-gray-700 text-lg'><span className='text-lg font-semibold pr-3'>Skills:</span>{astrologer.Skills}</p>
              <p className='text-gray-700 text-lg'><span className='text-lg font-semibold pr-3'>Language:</span>{astrologer.languages}</p>
              <p className='flex items-center text-lg font-semibold text-gray-700'>Rating:<span className='text-yellow-300 flex pl-3' ><IoStar /><IoStar /><IoStar /><IoStar /></span></p>
              <p className='text-lg text-gray-700 font-bold '>₹{astrologer.chatPrice}/min</p>
            </div>
        </div>

        <div className='flex flex-col  gap-16  justify-center   pl-12 '>
                  <div className='flex items-center'>

                       <div className=' flex flex-col items-center justify-center border-r border-black  py-3  pr-3 '>
                       <p className='font-bold text-xl'>{astrologer.experience}</p>
                       <p className='text-gray-700  text-lg'>years of exp</p>
                       </div>
                     
                      <p className='flex gap-1 items-center border-r  border-black px-4 py-7 text-gray-700  text-lg'><RiMessage2Fill />37K mins</p>
                      <p className='flex gap-1  items-center px-2 text-gray-700  text-lg'><FaPhone />41K mins</p>

                  </div>

                  <div className='flex gap-4 justify-center items-center '>
                    <button className='border rounded-md bg-green-600 text-white px-12 py-2'> Call Now</button>
                    <button className='border rounded-md bg-green-600 text-white px-12 py-2'>Chat Now</button>
                  </div>
        </div>





           






      </div>
                                 

      
            

        


                                   {/* About */}
      <div className='max-w-5xl mx-auto mt-6 border rounded-md p-6'>
        <h1 className='text-center text-2xl font-semibold'>About {astrologer.firstName}</h1>
        <p className='text-gray-700 text-base mt-2'>He is from Mambalam, Chennai, and speaks Tamil and English. He has done his CA Inter (Group I) and has 4 years’ experience as an astrologer. He is also a member of the Indian Council for Astrological Sciences. Though he began his career in the field of Accounting & Auditing, he began to pursue Vedic Astrology in his early 20s for pure passion. He is an avid reader of the ancient Shastras & Vedic Scriptures including Bhagavad Gita, Upanishads, Vyakarana, Smrithis & Puranas. He is an expert in Vedic Astrology (Parashara method). Besides, he also practices Prashnam, Jaimini System of Astrology, Muhurtha Fixing, Numerology, Horoscope Matching and Medical Astrology. He also uses Pushkara Navamsha technique and Subhathuva - Paabhthuva technique to make more accurate predictions. He can offer effective remedies for all problems and has helped many clients to achieve their goals in life.</p>
        <h1 className=' text-xl font-semibold mt-4'>Qualifications</h1>
            <ul className='list-disc list-inside text-gray-700 text-base mt-2'>
          {qualifications.map((qual, index) => (
            <li key={index}>{qual}</li>
          ))}
        </ul>
      </div>



       {/* Ratings Card */}
       <div className='max-w-5xl mx-auto mt-6 border rounded-md p-6'>

       <RatingsCard ratingData={ratingData} />
       
       </div>
      



    </div>
  )
}

export default SingleAstro