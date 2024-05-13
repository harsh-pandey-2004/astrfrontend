import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
const Testimonial = () => {
  return (
    <div className=' md:flex xs:flex-col  md:items-center md:justify-evenly  md:px-20 xs:px-6  '>
          <img src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/3/woman-with-laptop-smiling.png"
          height={300} width={300} className='mx-auto'/>
         
         
         
          <div className='Test flex flex-col  gap-2 w-1/2 mx-auto '>

            <div className='h-10 w-10 rounded-full bg-blue-400 relative'>
            <FaQuoteLeft className="absolute top-3 right-3 " />
            </div>
        
           <p >"We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it."</p>
               
          </div>


    </div>
  )
}

export default Testimonial