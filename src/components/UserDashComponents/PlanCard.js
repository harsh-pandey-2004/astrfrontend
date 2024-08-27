import React from 'react'
import {motion} from "framer-motion";
import { IoStar } from "react-icons/io5";
function PlanCard({obj} ) {
  return (
    <motion.div whileHover={{scale:1.1}}  transition={{duration:0.3}}
     className='flex flex-col w-1/8  border pt-8   gap-2 relative rounded-md shadow-md hover:cursor-pointer '>
          {obj.id==3 && <p className='text-xs text-center absolute top-0 left-0 rounded-t-md text-red-600 bg-orange-200 w-full flex items-center justify-center'><IoStar /> Most Popular</p>}
         <div className='text-center'>{obj.price}</div>
         <div className='text-center bg-green-600 text-xs py-1 text-yellow-400 rounded-b-md'>{obj.offer} Extra</div>
    </motion.div>
  )
}

export default PlanCard