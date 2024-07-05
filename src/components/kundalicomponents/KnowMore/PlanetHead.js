import React from 'react'

const PlanetHead = () => {
  return (
    <div className='md:flex xs:flex-col    px-12 bg-black pb-2  bg-parallaz bg-fixed bg-cover '>
      <div className='md:w-3/4 flex flex-col gap-6 pl-6'>
            <h1 className='text-7xl text-white mt-32 font-bold'>About the Planets</h1>
            <p className=' text-lg text-white w-3/4 mb-8'>The Astrological system has nine planets: Sun ,Moon ,Mars ,Mercury ,Jupiter ,Venus ,Saturn ,North Node and South Node</p>
     
            <div className='flex items-center gap-40 text-white mb-32'>
               <p className='flex items-center text-2xl'><span className='text-6xl font-semibold pr-6 text-yellow-500'>9 </span>Planets</p> <p className='flex items-center text-2xl'> <span className='text-6xl font-semibold pr-6 text-yellow-500'>27 </span> Nakshatras</p>
         
            </div>
      </div>
     
   
      

       




    </div>
  )
}

export default PlanetHead;