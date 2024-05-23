import React from 'react'

const Stat = (props) => {
  return (
    <div className='flex flex-col  sm:flex-row items-center justify-evenly gap-3  w-full py-8 bg-gradient-to-t from-black to-yellow-400 text-white'>
        <div>
                <p className='text-xl'>{props.amount}</p>
                <p>Total {props.type}</p>
        </div>


        <div>
                <p className='text-xl'>{props.live} Million Minutes</p>
                <p>Total Minutes of Live Pooja</p>
        </div>


        <div>
                <p className='text-xl'>{props.customers} Million</p>
                <p>Total Customers</p> 
        </div>
    </div>
  )
}

export default Stat