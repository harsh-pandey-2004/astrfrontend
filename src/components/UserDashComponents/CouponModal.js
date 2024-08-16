import React from 'react'

const CouponModal = () => {
  return (
    <div className='flex flex-col justify-center items-center w-fit p-2 rounded-md '>
        <h1 className='font-semibold '>Coupon Code</h1>
        <div className='flex items-center'>
            <input type="text" placeholder='Enter your Coupon Here' />
            <button className='px-2 py-1 bg-yellow-400 text-black'>Apply</button>
        </div>

    </div>
  )
}

export default CouponModal