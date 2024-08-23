import React from 'react';
import {motion} from "framer-motion";



const Horoscope = ({obj,onClick}) => {
  return (
    <motion.div  whileHover={{scale:0.9}}   transition={{duration:0.2}} className=' flex flex-col items-center gap-2'>
        <img src={obj.img} onClick={() => onClick(obj)}   className='rounded-full  border-2 border-yellow-400 self-center w-52 bg-cover h-52 '/>
        <p className=' text-xl font-light'>{obj.title}</p>
        <p className='text-gray-500 font-light'>{obj.range}</p>
    </motion.div>
  )
}

export default Horoscope;