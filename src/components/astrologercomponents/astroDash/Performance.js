import React from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Performance = () => {
  return (
    <div className='w-4/5 h-screen mt-20 pt-16  pb-24 absolute right-0 bg-gray-800 text-yellow-100 overflow-y-auto'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-center text-3xl text-yellow-300'>Performance Dashboard</h1>

        <button className='flex items-center gap-1 border px-2 py-1 rounded-lg mt-2 bg-yellow-500 text-black'>
          <p>Last 30 days Availability</p>
          <IoIosArrowDroprightCircle/>
        </button>

        <div className='flex items-center justify-between w-1/3 pl-24 mt-6 self-start'>
          <div className='flex items-center justify-center gap-1'>
            <div className='h-3 w-3 rounded-full bg-red-600'></div>
            <p className='text-sm text-yellow-300'>Poor</p>
          </div>

          <div className='flex items-center justify-center gap-1'>
            <div className='h-3 w-3 rounded-full bg-yellow-400'></div>
            <p className='text-sm text-yellow-300'>Average</p>
          </div>

          <div className='flex items-center justify-center gap-1'>
            <div className='h-3 w-3 rounded-full bg-green-600'></div>
            <p className='text-sm text-yellow-300'>Excellent</p>
          </div>
        </div>

        <div className='self-start mt-4 mx-auto max-w-3xl'>
          <h1 className='font-medium text-yellow-300'>Critical Performance Parameters</h1>

          <div className='flex flex-col gap-2'>
            <div className='rounded-lg border border-yellow-600 shadow-md shadow-yellow-600 py-3 px-4 mt-4 bg-black'>
              <p className='text-yellow-300'>PO Self Conversion %</p>
              <div className='h-2 w-full flex mt-2'>
                <div className='w-1/3 h-full bg-red-600 rounded-l-full'></div>
                <div className='w-1/3 h-full bg-yellow-400'></div>
                <div className='w-1/3 h-full bg-green-600 rounded-r-full'></div>
              </div>

              <div className='w-full flex justify-between pb-2 text-sm border-b border-yellow-600'>
                <p className='font-light text-yellow-300'>0.0</p>
                <p className='font-light text-yellow-300'>4.0</p>
                <p className='font-light text-yellow-300'>9.0</p>
                <p className='font-light text-yellow-300'>100</p>
              </div>

              <div className='w-full flex justify-between mt-2'>
                <p className='text-yellow-300'>Your score</p>
                <p className='font-light text-sm text-yellow-300'>12.0</p>
              </div>

              <div className='h-2 w-full rounded-full flex mt-2 bg-gray-700'>
                <div className='h-full bg-green-600 w-2/3 rounded-l-full'></div>
              </div>

              <p className='text-sm mt-2 text-yellow-300'>PO self conversion means that if you talk to 100 PO customers and 20 out of those customers do a paid transaction with you, then your PO conversion is 20%. It can change (increase/decrease) even if you did not work the previous day.</p>
              <p className='mt-2 text-yellow-300'>Rank: 4894</p>
            </div>

            <div className='rounded-lg border border-yellow-600 shadow-md shadow-yellow-600 py-3 px-4 mt-4 bg-black'>
              <p className='text-yellow-300'>Loyal User %</p>
              <div className='h-2 w-full flex mt-2'>
                <div className='w-1/3 h-full bg-red-600 rounded-l-full'></div>
                <div className='w-1/3 h-full bg-yellow-400'></div>
                <div className='w-1/3 h-full bg-green-600 rounded-r-full'></div>
              </div>

              <div className='w-full flex justify-between pb-2 text-sm border-b border-yellow-600'>
                <p className='font-light text-yellow-300'>0.0</p>
                <p className='font-light text-yellow-300'>12.0</p>
                <p className='font-light text-yellow-300'>23.0</p>
                <p className='font-light text-yellow-300'>100</p>
              </div>

              <div className='w-full flex justify-between mt-2'>
                <p className='text-yellow-300'>Your score</p>
                <p className='font-light text-sm text-yellow-300'>23.5</p>
              </div>

              <div className='h-2 w-full rounded-full flex mt-2 bg-gray-700'>
                <div className='h-full bg-green-600 w-2/3 rounded-l-full'></div>
              </div>

              <p className='text-sm mt-2 text-yellow-300'>Loyal User % measures the percentage of your loyal users. It can change (increase/decrease) even if you did not work the previous day.</p>
              <p className='mt-2 text-yellow-300'>Rank: 4894</p>
            </div>
          </div>

          <div className='self-start mt-12 mx-auto max-w-3xl'>
            <h1 className='font-medium text-yellow-300'>Profile Performance</h1>
            <div className='flex flex-col gap-2'>
              <div className='rounded-lg border border-yellow-600 shadow-md shadow-yellow-600 py-3 px-4 mt-4 bg-black'>
                <p className='text-yellow-300'>Average rating chat</p>
                <div className='h-2 w-full flex mt-2'>
                  <div className='w-1/3 h-full bg-red-600 rounded-l-full'></div>
                  <div className='w-1/3 h-full bg-yellow-400'></div>
                  <div className='w-1/3 h-full bg-green-600 rounded-r-full'></div>
                </div>

                <div className='w-full flex justify-between pb-2 text-sm border-b border-yellow-600'>
                  <p className='font-light text-yellow-300'>0.0</p>
                  <p className='font-light text-yellow-300'>4.0</p>
                  <p className='font-light text-yellow-300'>9.0</p>
                  <p className='font-light text-yellow-300'>100</p>
                </div>

                <div className='w-full flex justify-between mt-2'>
                  <p className='text-yellow-300'>Your score</p>
                  <p className='font-light text-sm text-yellow-300'>4.52</p>
                </div>

                <div className='h-2 w-full rounded-full flex mt-2 bg-gray-700'>
                  <div className='h-full bg-yellow-400 w-1/3 rounded-l-full'></div>
                </div>

                <p className='text-sm mt-2 text-yellow-300'>Average Chat Rating refers to the average rating received by an astrologer. It can change (increase or decrease) even if you did not work the previous day.</p>
                <p className='mt-2 text-yellow-300'>Rank: 9181</p>
              </div>

              <div className='rounded-lg border border-yellow-600 shadow-md shadow-yellow-600 py-3 px-4 mt-4 bg-black'>
                <p className='text-yellow-300'>Average rating call</p>
                <div className='h-2 w-full flex mt-2'>
                  <div className='w-1/3 h-full bg-red-600 rounded-l-full'></div>
                  <div className='w-1/3 h-full bg-yellow-400'></div>
                  <div className='w-1/3 h-full bg-green-600 rounded-r-full'></div>
                </div>

                <div className='w-full flex justify-between pb-2 text-sm border-b border-yellow-600'>
                  <p className='font-light text-yellow-300'>1.0</p>
                  <p className='font-light text-yellow-300'>4.5</p>
                  <p className='font-light text-yellow-300'>4.75</p>
                  <p className='font-light text-yellow-300'>5</p>
                </div>

                <div className='w-full flex justify-between mt-2'>
                  <p className='text-yellow-300'>Your score</p>
                  <p className='font-light text-sm text-yellow-300'>5</p>
                </div>

                <div className='h-2 w-full rounded-full flex mt-2 bg-gray-700'>
                  <div className='h-full bg-green-600 w-full rounded-full'></div>
                </div>

                <p className='text-sm mt-2 text-yellow-300'>Average Call Rating refers to the average rating received by an astrologer for calls. It can change (increase or decrease) even if you did not work the previous day.</p>
                <p className='mt-2 text-yellow-300'>Rank: 9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
