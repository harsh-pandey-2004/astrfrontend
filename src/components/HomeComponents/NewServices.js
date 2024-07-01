import React, { useState } from 'react'

const NewServices = () => {
    const[service,setService]=useState("kundli");
  return (
    <div className='md:pl-20 pb-12  bg-black NewServices pt-10'>
        <h1 className='text-3xl  font-semibold text-start pb-4 text-white '> Astro Services That we Provide</h1>
        <div className='md:flex xs:flex-col  items-center  gap-36  '>
            <div className='md:w-2/5 w-full'>
              <p className='text-gray-400'>Our services include booking poojas, astrology consultations, Vastu making, and more. We aim to provide spiritual guidance, harmony in living spaces, and personalized astrological insights to enhance your overall well-being and spiritual journey.</p>
             <div className='grid grid-cols-2 gap-4  mt-8 outline '>
             <div className={`border ${service=="kundli" ? " shadow-md shadow-yellow-400 border-yellow-400" : "border-slate-700"}  h-34 rounded-md  p-2 hover:cursor-pointer  transition`}  onClick={()=>{setService("kundli");}}>
                    <p className='text-white'>Free Kundli</p>
                    <p className='text-gray-400'>Get your personalized Kundli for free, offering deep insights into your life and future.</p>
                </div>



                <div className={`border ${service=="vastu" ? "shadow-md shadow-yellow-400 border-yellow-400" : "border-slate-700"}  h-34 rounded-md  p-2 hover:cursor-pointer  transition`} onClick={()=>{setService("vastu");}}>
                    <p className='text-white'>Vastu Making</p>
                    <p className='text-gray-400'>Achieve harmony and balance in your home with our expert Vastu making services.</p>
                </div>

            

                <div className={`border ${service=="compatibility" ? "border-yellow-400 shadow-md shadow-yellow-400" : "border-slate-700"}  h-34 rounded-md  p-2 hover:cursor-pointer  transition`}  onClick={()=>{setService("compatibility");}}>
                    <p className='text-white'>Compatibility</p>
                    <p className='text-gray-400'>Discover your compatibility with personalized astrological insights for harmonious relationships.</p>
                </div>

                <div className={`border ${service=="prasaad" ? " shadow-md shadow-yellow-400 border-yellow-400" : "border-slate-700"}  h-34 rounded-md  p-2 hover:cursor-pointer  transition`}  onClick={()=>{setService("prasaad");}}>
                    <p className='text-white'>Prasaad</p>
                    <p className='text-gray-400'>Enjoy sacred prasad delivered to your doorstep, bringing divine blessings and positivity.</p>
                </div>
             </div>
             </div>


            <div className='ServiceImg md:w-2/5 w-full   p-2  rounded-md border border-yellow-400  shadow-md shadow-yellow-400  '>
              {service=="kundli" && <div className='overflow-hidden'><img src="https://media.istockphoto.com/id/1387867659/photo/couple-holding-hands-at-beach.jpg?s=1024x1024&w=is&k=20&c=Z0PnGfGpIO5USDHsohPV3IldKPjEIA3IUo_PYJvQY9E=" className='rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 '/> </div>}
              { service=="vastu" && <div className='overflow-hidden'> <img src="https://media.istockphoto.com/id/1156187680/photo/asian-traditional-vishuddha-chakra-symbol.jpg?s=1024x1024&w=is&k=20&c=tTIKjLszDr_TgvsnNBBRPPsUjQWC3LtHz-Ha_8cG2GQ=" className='rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 '/> </div>}
              {service=="compatibility" && <div className='overflow-hidden'><img src="https://media.istockphoto.com/id/1314780540/photo/indian-traditional-wedding-ceremony-photography.jpg?s=1024x1024&w=is&k=20&c=elzlmgFzBjKr0DdOvejGao5iP26yDorzW3emSrY7w5Y=" className='rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 '/> </div> }
              {service=="prasaad" && <div className='overflow-hidden'> <img src="https://cdn.cdnparenting.com/articles/2019/03/22122134/1018347370-H-1024x700.jpg" className='rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 '/> </div> }
              {/* <img src="https://astrokundli.net/wp-content/uploads/2023/10/free-kundli-matching-1.jpeg" /> */}
            </div>
        </div>
    </div>
  )
}

export default NewServices