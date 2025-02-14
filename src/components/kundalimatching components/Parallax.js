import React from 'react'
import { Link } from 'react-router-dom';

const Parallax = () => {
  return (
    <div className=' flex flex-col items-center justify-center h-96 bg-fixed bg-parallax bg-cover mt-6'>
     <h1 className='text-4xl text-white text-center '>Explore Your Astrological Insights Today</h1>
     <div className='mt-2 flex flex-col md:flex-row justify-center items-center gap-8 py-2'> 
       <Link to="/chat-with-astrologer"><button className='border border-white rounded-full text-white px-12 py-3 hover:bg-white hover:text-black transition duration-300 '>ChatwithAstro</button></Link> 
        <Link to="/call-to-astrologer"><button className='border border-white rounded-full text-white px-12 py-3 hover:bg-white hover:text-black transition duration-300'>TalkwithAstro</button></Link>
     </div>
    
    </div>
  )
}

export default Parallax;