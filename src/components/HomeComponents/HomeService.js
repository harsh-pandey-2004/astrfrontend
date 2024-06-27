import React from 'react';
import {motion} from "framer-motion";


function HomeService({obj,myVariable}) {
  return (
    <motion.div  whileHover={{scale:0.9}}   transition={{duration:0.4}}  className={`${myVariable && " mr-40 "}  flex flex-col items-center justify-center gap-2  rounded-md  py-4 px-2 md:h-72 md:w-56 sm:h-36 sm:w-36     border-b-4 border-b-yellow-400 shadow-md hover:shadow-xl hover:shadow-yellow-600 hover:cursor-pointer bg-white `}>
       
        <img src={obj.img}
        height={100} width={100} className='self-center rounded-full '/>

        <p className='text-center  text-base font-semibold'>{obj.title}</p>
        <p className='text-sm text-gray-700 font-light w-full text-center'>{obj.desc}</p>
    </motion.div>
  )
}

export default HomeService;