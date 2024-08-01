import React from 'react';
import girl from "../../../images/girl.webp"

const UserDetails = ({details}) => {
  return (
    <div className="flex flex-col  md:flex-row  items-center justify-center gap-6 my-4 px-4 md:px-20">
      <div className=' border  border-black rounded-md hover:shadow-xl  transition duration-300  w-full md:w-1/2 '>
        <h3 className="text-lg  border-b text-white bg-black rounded-t-md  pl-2 py-2 flex items-center gap-3"> 
        <img src="https://www.svgrepo.com/show/119307/groom.svg" className=' rounded-full bg-yellow-500' height={30} width={30} />
        <p className='text-yellow-500'>Basic Details</p>
        <p className='border border-yellow-500 rounded-md text-sm px-1 text-yellow-500'>male</p>
        </h3>
        <div className='flex flex-col gap-2 mt-3 '>
        <p className='border-b  border-black pb-3 pl-2  text-sm md:text-base'><strong className='pr-40 '>Name :</strong>  {details.boy.name}</p>
        <p  className='border-b  border-black pb-3 pl-2 text-sm md:text-base'><strong className='pr-16 '>Birth Date & Time :</strong> 1 January 1998 | 1:1</p>
        <p  className='border-b   border-black pb-3 pl-2 text-sm md:text-base'><strong className='pr-32 '>Birth Place :</strong> {details.boy.birthPlace}</p>
        <p className='pb-3 pl-2 text-sm md:text-base'><strong className='pr-28 '>Janam Rashi :</strong> Capricorn</p>
        </div>
      </div>
      <div className='border border-black  rounded-md hover:shadow-xl transition duration-300 w-full md:w-1/2'>
        <h3 className="text-lg  border-b text-white bg-black rounded-t-md pl-2 py-2 flex items-center gap-3 ">
            <img src={girl} height={30} width={30} className='rounded-full bg-yellow-500 '/>
            <p className='text-yellow-500'>Basic Details</p>
            <p className='border border-yellow-500 rounded-md text-sm px-1 text-yellow-500'>female</p>
            </h3>
        <div className='flex flex-col gap-2 mt-3 '>
        <p className='border-b border-black pb-3 pl-2 text-sm md:text-base'><strong className='pr-40'>Name:</strong> {details.girl.name}</p>
        <p className='border-b border-black pb-3 pl-2 text-sm md:text-base'><strong className='pr-16'>Birth Date & Time:</strong> {details.girl.day} {details.girl.month} {details.girl.year} | {details.girl.hour}:{details.girl.minute}</p>
        <p className='border-b border-black pb-3 pl-2 text-sm md:text-base'><strong className='pr-32'>Birth Place:</strong> {details.girl.birthPlace}</p>
        <p className='pb-3 pl-2 text-sm md:text-base'><strong className='pr-32'>Janam Rashi:</strong> Scorpio</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
