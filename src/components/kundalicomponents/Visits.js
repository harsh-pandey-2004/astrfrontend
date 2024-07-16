import React from 'react'
import { Link } from 'react-router-dom';

function Visit() {
  return (
    <div className='flex flex-col items-center justify-center gap-6 md:flex-row   md:gap-20 bg-black md:pl-12 py-6  mt-10 ' >
        <img src="https://static.vecteezy.com/system/resources/previews/000/624/288/original/zodiac-astrological-symbol-horoscope-the-sun-and-the-moon-astrology-mystical-vector.jpg" height={100} width={200} className='rounded-full  '/>
        <div className='md:py-6 flex flex-col   gap-6 '>
            <p className='text-white text-3xl tracking-wider text-center md:text-start '>Discover your ideal partner with our matchmaking service.</p>
           <Link to="/how-to-read"><button className='text-black text-xl border  rounded-full bg-white max-w-fit  py-2 px-10 
             hover:bg-yellow-400 hover:text-black transition duration-300 ml-24 md:ml-0'>Visit Here</button></Link> 
        </div>

    </div>
  )
}

export default Visit;