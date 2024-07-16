import React from 'react'
import Vedio5 from "../../../vedios/vedio5.mp4";
const KnowHead = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row  px-4 md:px-16 bg-black pb-2'>
      
       <div className='w-full md:w-1/2 outline pt-4 md:pt-16 '>
       <h1 className=' text-white text-lg font-semibold md:pl-2   w-fit '>How to read Kundli...</h1>
       <div className='flex flex-col gap-2 text-white md:pl-2 mt-6'>
       <p className='text-3xl md:text-5xl'>Explore Your Mysterious</p>
       <p  className='text-2xl md:text-5xl'>Birth Chart Related</p>
       <p  className='text-xl md:text-5xl'>Insights</p>
       </div>
       <p className='mt-6 text-gray-400 pb-6 md:pl-2'>Kundli making and  perusing in India is one of the old hones utilized for foreseeing one's future and revelation of life occasions. Too called a birth chart or horoscope, a Kundli involves the karmic outline of the person's past,  & future occasions, imagined after learning  development of planets, star groupings and much more. It may be a conviction that once a individual has the chart of his life arranged</p>
       
       </div>

       <div className='w-full md:w-1/2  pt-4 md:pt-16 '>
       <video  autoPlay loop muted className=' md:pt-16 rounded-md  '>
              <source src={Vedio5} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

       </div>

       




    </div>
  )
}

export default KnowHead