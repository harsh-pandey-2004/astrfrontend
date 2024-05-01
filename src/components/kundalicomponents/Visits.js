import React from 'react'

function Visit() {
  return (
    <div className=' md:flex xs:flex-col gap-20 bg-black pl-12 py-6  mt-10  '>
        <img src="	https://aws.astrotalk.com/assets/images/group_554.1.webp"/>
        <div className='py-6 flex flex-col gap-6 '>
            <p className='text-white text-3xl tracking-wider'>Want to know more about kundli</p>
            <button className='text-black text-xl border  rounded-full bg-yellow-400 max-w-fit  py-2 px-10 
             hover:shadow-md hover:shadow-gray-200 hover:text-white transition duration-300'>Visit Here</button>
        </div>

    </div>
  )
}

export default Visit;