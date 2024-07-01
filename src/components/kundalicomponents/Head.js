import React from 'react'
import Vedio3 from "../../vedios/vedio3.mp4";
const Head = () => {
  return (
    <div className='flex   px-16 bg-black pb-2'>
       {/* <h1 className='text-center text-3xl font-semibold'>Instant Kundli Online</h1>
       <h2 className='text-center text-xl text-gray-600 font-semibold'>Get your kundli within seconds</h2>


       <div className='flex items-center px-12'>
            <div className='h-px w-full bg-black '></div>
            <img  style={{ backgroundColor: '#f5d713'}}  src="https://ia-prod-static-files.s3.amazonaws.com/static/img/icons/tool-icons/kundli.svg" height={70} width={70} className='rounded-full'/>
            <div className='h-px w-full bg-black '></div>
       </div>


       <div className='flex flex-col px-12 mt-2 gap-3'>
              <p className='text-xl text-gray-700 font-semibold  '>Unlock Your Destiny - Free Kundli with Detailed Predictions Online</p>
              <p className='text-slate-600 font-light '> Looking for your free Kundli from expert astrologers? Then you have come to the right place. The online free kundali available on Astrotalk is a 100% free and authentic free Kundli that has been prepared after consulting more than 50 expert astrologers on board. The free kundli is such that it can give you a glimpse  into various aspects of your life such as your career, love life, marriage, business and much more. The online kundli prepared by the free Kundali software here is no less than any traditional Kundli and can also be used for purposes like matching making, kundali matching for marriage or simply making future predictions.</p>
            <p className='text-slate-600 font-light'>Talking about future predictions, the kundali catered by Astrotalk to you is such that it considers the movement of all the planets in the native's life from the beginning of his or her life till as far as 100 years. Doing so helps you understand the reasons behind not only the ongoing circumstances but also what's to come for you in the future. So if in any way you are confused about life, the online kundli can be your saviour. Having said that, make sure you try the free online kundli, and let us know what you feel about it.</p>
       </div>
 */}
       
       <div className='w-1/2 outline pt-16 '>
       <h1 className=' text-white text-lg font-semibold pl-2   w-fit '>Astrology Facts...</h1>
       <div className='flex flex-col gap-2 text-white pl-2 mt-6'>
       <p className=' text-5xl'>Everything You Need</p>
       <p  className=' text-5xl'>To Know About</p>
       <p  className=' text-5xl'>Your Destiny</p>
       </div>
       <p className='mt-6 text-gray-400 pb-6 pl-2'>The Kundali, or birth chart, holds significant importance in Vedic astrology as it serves as a detailed map of an individual's life based on the positions of celestial bodies at the time of birth. It consists of twelve houses, each representing different aspects of life such as personality traits, health, career, relationships, and more. The placement of planets in these houses and their interactions provide insights into various facets of one's life journey.</p>
       
       </div>

       <div className='w-1/2  pt-16 '>
       <video  autoPlay loop muted className='pt-16 rounded-md  '>
              <source src={Vedio3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

       </div>

       




    </div>
  )
}

export default Head