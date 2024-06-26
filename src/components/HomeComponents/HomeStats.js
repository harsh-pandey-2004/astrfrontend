import React from 'react'

const HomeStats = () => {
  return (
    <div className='flex flex-col  sm:flex-row items-center justify-evenly gap-3  w-full py-8 bg-gradient-to-t from-black to-yellow-400 text-white'>
        <div>
                <p className='text-xl'>29,335</p>
                <p>Total Astrologers</p>
        </div>


        <div>
                <p className='text-xl'>499 Million Minutes</p>
                <p>Total Chat/Call Minutes</p>
        </div>


        <div>
                <p className='text-xl'>70.4 Million</p>
                <p>Total Customers</p> 
        </div>
    </div>
  )
}

export default HomeStats;