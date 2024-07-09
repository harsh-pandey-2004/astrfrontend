import React from 'react'
import temples from './data';
import TempleCard from './TempleCard';
import {motion} from 'framer-motion'
const Destinations = () => {
  return (
    <div className='flex flex-col gap-8 lg:px-12 px-5 py-6 w-full mt-2 '>
       <h1  className="text-2xl font-semibold text-center">Top E-Pooja Destinations</h1>

       <motion.div   initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-4  gap-10'>
        { temples.map((obj)=>{return <TempleCard key={obj.id} obj={obj}/>})}
       </motion.div>

    </div>
  )
}

export default Destinations