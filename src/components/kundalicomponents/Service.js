import React from 'react';
import {motion} from "framer-motion";


function Service({obj}) {
  return (
    <motion.div  whileHover={{scale:0.9}}   transition={{duration:0.2}}  className=' Carousel flex flex-col items-center gap-2 border rounded-md  py-4 px-2 md:h-72 md:w-56 sm:h-36 sm:w-36     border-b-4 border-b-yellow-400 shadow-md hover:shadow-lg'>
       
        <img src={obj.img}
        height={100} width={100} className='self-center'/>

        <p className='text-center  text-sm font-semibold'>{obj.title}</p>
        <p className='text-sm text-gray-400 font-light w-full text-center'>{obj.desc}</p>
    </motion.div>
  )
}

export default Service;