import React from 'react'
import Vedio3 from "../../vedios/vedio3.mp4";
const Head = () => {
  return (
    <div className=' flex flex-col-reverse md:flex-row   px-4  md:px-16 bg-black pb-2'>
      
       {/* <div className='md:w-1/2 xs:w-full outline  md:pt-16 '>
       <h1 className=' text-white text-lg font-semibold pl-2 pt-6 md:pt-0 w-fit '>Astrology Facts...</h1>
       <div className='flex flex-col gap-2 text-white pl-2 mt-6'>
       <p className='text-3xl md:text-5xl'>Everything You Need</p>
       <p  className='text-2xl md:text-5xl'>To Know About</p>
       <p  className='text-xl md:text-5xl'>Your Destiny</p>
       </div>
       <p className='mt-6 text-gray-400 pb-6 pl-2'>The Kundali, or birth chart, holds significant importance in Vedic astrology as it serves as a detailed map of an individual's life based on the positions of celestial bodies at the time of birth. It consists of twelve houses, each representing different aspects of life such as personality traits, health, career, relationships, and more. The placement of planets in these houses and their interactions provide insights into various facets of one's life journey.</p>
      
       </div> */}
         <div className='w-full  md:w-1/2 outline md:pt-16 '>
    <h1 className=' text-white text-lg font-semibold pl-2  pt-6 md:pt-0 w-fit '>Astrology Facts...</h1>
    <div className='flex flex-col gap-2 text-white pl-2 mt-6'>
    <p className=' text-3xl md:text-5xl'>Everything You Need</p>
    <p  className=' text-2xl md:text-5xl'>To Know About</p>
    <p  className='text-xl md:text-5xl'>Your Compatibility</p>
    </div>
    <p className='mt-6 text-gray-400 pb-6 pl-2'>Kundli Milan or Kundali Matching holds significant importance when planning for marriage. It involves matching the Kundlis  of the prospective bride and groom, ensuring compatibility before marriage. This traditional practice, also known as Gun Milan or Horo Matching, has been a  part of India's cultural heritage for centuries.If you're contemplating marriage , seeking compatibility with someone you admire, AstroCaptain can assist you.</p>
    
    </div>

       <div className='w-full md:w-1/2  pt-4 md:pt-16 '>
       <video  autoPlay loop muted className='md:pt-16 rounded-md  '>
              <source src={Vedio3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

       </div>

       




    </div>
  )
}

export default Head