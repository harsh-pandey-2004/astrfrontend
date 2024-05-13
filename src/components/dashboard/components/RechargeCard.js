import React from 'react'
import {motion} from "framer-motion";
function RechargeCard({obj} ) {
  return (
    <motion.div whileHover={{scale:1.1}}  transition={{duration:0.3}}
     className='flex flex-col w-1/8  border pt-8   gap-2 relative rounded-md shadow-md hover:cursor-pointer '>
          {obj.id==3 && <p className='text-xs text-center absolute top-0 left-7 text-red-400'>Most Popular</p>}
         <div className='text-center'>{obj.price}</div>
         <div className='text-center bg-green-100 text-xs py-1 text-green-800'>{obj.offer} Extra</div>
    </motion.div>
  )
}

export default RechargeCard