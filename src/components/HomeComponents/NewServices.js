import React from 'react'

const NewServices = () => {
  return (
    <div className='px-12 py-4 outline  bg-black'>
        <h1 className='text-3xl font-semibold text-start pb-4 text-white'> Astro Services That we Provide</h1>
        <div className='flex items-center '>
            <div className='w-2/5'>
              <p className='text-gray-400'>Our services include booking poojas, astrology consultations, Vastu making, and more. We aim to provide spiritual guidance, harmony in living spaces, and personalized astrological insights to enhance your overall well-being and spiritual journey.</p>
             <div className='grid grid-cols-2 gap-4  mt-8'>
                <div className='border border-yellow-400 h-34 rounded-md  p-2'>
                    <p className='text-white'>Vastu Making</p>
                    <p className='text-gray-400'>Achieve harmony and balance in your home with our expert Vastu making services.</p>
                </div>

                <div className='border border-yellow-400  h-34 p-2 rounded-md '>
                    <p className='text-white'>Free Kundli</p>
                    <p className='text-gray-400'>Get your personalized Kundli for free, offering deep insights into your life and future.</p>
                </div>

                <div className='border border-yellow-400  h-34 p-2 rounded-md '>
                    <p className='text-white'>Compatibility</p>
                    <p className='text-gray-400'>Discover your compatibility with personalized astrological insights for harmonious relationships.</p>
                </div>

                <div className='border border-yellow-400  h-34 p-2 rounded-md '>
                    <p className='text-white'>Prasaad</p>
                    <p className='text-gray-400'>Enjoy sacred prasad delivered to your doorstep, bringing divine blessings and positivity.</p>
                </div>
             </div>
             </div>


            <div className='w-2/5'></div>
        </div>
    </div>
  )
}

export default NewServices