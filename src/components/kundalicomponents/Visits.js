import React from 'react'
import { Link } from 'react-router-dom';

function Visit() {
  return (
    <div className=' md:flex xs:flex-col gap-20 bg-black pl-12 py-6  mt-10 ' >
        <img src="https://static.vecteezy.com/system/resources/previews/000/624/288/original/zodiac-astrological-symbol-horoscope-the-sun-and-the-moon-astrology-mystical-vector.jpg" height={100} width={200} className='rounded-full'/>
        <div className='py-6 flex flex-col gap-6 '>
            <p className='text-white text-3xl tracking-wider'>Discover your ideal partner with our matchmaking service.</p>
           <Link to="/how-to-read"><button className='text-black text-xl border  rounded-full bg-white max-w-fit  py-2 px-10 
             hover:bg-yellow-400 hover:text-black transition duration-300'>Visit Here</button></Link> 
        </div>

    </div>
  )
}

export default Visit;