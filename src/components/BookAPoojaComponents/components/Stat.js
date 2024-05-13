import React from 'react'

const Stat = () => {
  return (
    <div className='flex flex-col  sm:flex-row items-center justify-evenly gap-3  w-full py-8 bg-gradient-to-t from-black to-yellow-400 text-white'>
        <div>
                <p className='text-xl'>22,758+</p>
                <p>Total Pooja</p>
        </div>


        <div>
                <p className='text-xl'>711 Million Minutes</p>
                <p>Total Minutes of Live Pooja</p>
        </div>


        <div>
                <p className='text-xl'>45.5 Million</p>
                <p>Total Customers</p> 
        </div>
    </div>
  )
}

export default Stat