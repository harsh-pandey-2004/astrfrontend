import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
const Testimonial = () => {
  return (
    <div className=' md:flex xs:flex-col  md:items-center md:justify-evenly  md:px-20 xs:px-6  '>
          <img src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/3/woman-with-laptop-smiling.png"
          height={300} width={350} className='mx-4'/>
         
         
         
          <div className=' flex flex-col  gap-3 w-[80%]  ml-5 mr-2 pt-6 pb-10'>

            <div className='h-10 w-10 rounded-full bg-[#f6c300] relative'>
            <FaQuoteLeft className="absolute top-3 right-3 " />
            </div>
        
           <p >"We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it."</p>
               
          </div>


    </div>
  )
}

export default Testimonial