import React from 'react'

const NewKundli = () => {


    function getMonthName(monthIndex) {
        const months = [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        return months[monthIndex];
      }

  return (
    <div className=' md:w-3/5 xs:w-full flex flex-col gap-3'>
        <p className='text-xl text-gray-700 font-semibold '>New Kundli</p>
        <form className='p-3 border-[1px] rounded-lg flex flex-col gap-4 shadow-md'>
            <div className='flex flex-col gap-1'>
                 <label htmlFor='name'>Name </label>
                 <input type="text"
                  placeholder='Enter Name'
                  id="name"
                  className='border  rounded-md p-1 focus:outline-none'/>
            </div>


            <div className='flex flex-col gap-1'>
                 <label htmlFor='name'>Gender </label>
                 <select className='border  rounded-md p-1 text-slate-600 focus:outline-none'>
                           <option>Male</option>
                           <option>Female</option>
                 </select>
            </div>



               
               
               
               {    /* Birth Details */}

            <div className='flex flex-col gap-3'>
               <p>Birth Details</p>
               <div className='md:flex xs:flex-col flex-wrap w-full justify-between  '>
                      <div className='flex flex-col '>
                              <label>Day</label>
                              <select className='border  rounded-md p-1 focus:outline-none pr-32'>
                                <option disabled>Day</option>
                              {[...Array(30).keys()].map(date => (
                                     <option key={date + 1} value={date + 1}>{date + 1}</option>
                              ))}
                              </select>
                      </div>



                      <div className='flex flex-col '>
                               <label>Month</label>
                               <select className='border  rounded-md p-1 focus:outline-none pr-32'>
                               <option disabled>Month</option>
                               {Array.from({ length: 12 }, (_, index) => (
                                       <option key={index + 1} value={index + 1}>{getMonthName(index)}</option>
                                ))}
                               </select>


                      </div>



                      <div className='flex flex-col '>
                              <label>Year</label>
                              <select defaultValue={1990} className='border  rounded-md p-1 focus:outline-none pr-32'>
                              <option disabled>Year</option>
                              {Array.from({ length: 2025 - 1928 }, (_, index) => (
                              <option key={1928 + index} value={1928 + index}>{1928 + index}</option>
                               ))}
                              </select>


                      </div>

                        

               </div>


               <div className='md:flex xs:flex-col flex-wrap w-full justify-between '>
                      <div className='flex flex-col '>
                              <label>Hour</label>
                              <select defaultValue={15} className='border  rounded-md p-1 focus:outline-none pr-32'>
                                <option disabled>Hour</option>
                              {[...Array(24).keys()].map(hour => (
                                     <option key={hour } value={hour }>{hour }</option>
                              ))}
                              </select>
                      </div>



                      <div className='flex flex-col '>
                               <label>Minute</label>
                               <select defaultValue={22} className='border  rounded-md p-1 focus:outline-none pr-28'>
                               <option disabled>Minute</option>
                               {[...Array(60).keys()].map(min => (
                                     <option key={min } value={min }>{min }</option>
                              ))}
                               </select>


                      </div>



                      <div className='flex flex-col '>
                              <label>Second</label>
                              <select defaultValue={10} className='border  rounded-md p-1 focus:outline-none pr-24'>
                              <option disabled>Seconds</option>
                              {[...Array(60).keys()].map(sec => (
                                     <option key={sec } value={sec }>{sec }</option>
                              ))}
                              </select>


                      </div>

                        

               </div>

            </div>


            {/* Birth place */}


            <div className='flex flex-col gap-1'>
                <label>Birth Place</label>
                <input type="text" 
                placeholder='Enter your birth place'
                className='border  rounded-md p-1 focus:outline-none'/>
            </div>


            <button className='border mt-2 rounded-full py-2 text-yellow-400 bg-gray-800 hover:bg-yellow-400 hover:text-black transition duration-400 hover:border shadow-xl'>Generate Horoscope</button>

               

        </form>
    </div>
  )
}

export default NewKundli