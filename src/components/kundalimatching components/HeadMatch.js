import React from 'react'
import Vedio7 from "../../vedios/vedio7.mp4";
const HeadMatch = () => {
  return (
    <div className='flex   px-16 bg-black pb-2'>
      
       
    <div className='w-1/2 outline pt-16 '>
    <h1 className=' text-white text-lg font-semibold pl-2   w-fit '>Astrology Facts...</h1>
    <div className='flex flex-col gap-2 text-white pl-2 mt-6'>
    <p className=' text-5xl'>Everything You Need</p>
    <p  className=' text-5xl'>To Know About</p>
    <p  className=' text-5xl'>Your Compatibility</p>
    </div>
    <p className='mt-6 text-gray-400 pb-6 pl-2'>Kundli Milan or Kundali Matching holds significant importance when planning for marriage. It involves matching the Kundlis  of the prospective bride and groom, ensuring compatibility before marriage. This traditional practice, also known as Gun Milan or Horo Matching, has been a  part of India's cultural heritage for centuries.If you're contemplating marriage , seeking compatibility with someone you admire, AstroCaptain can assist you.</p>
    
    </div>

    <div className='w-1/2  pt-16 '>
    <video  autoPlay loop muted className='pt-16 rounded-md  '>
           <source src={Vedio7} type="video/mp4" />
           Your browser does not support the video tag.
         </video>

    </div>

    




 </div>
  )
}

export default HeadMatch