import React from 'react';
import { useLocation } from 'react-router-dom';

import pinimg from "../../../images/pinimg.webp"
const Header = () => {
  const location=useLocation();
  const {details}=location.state;
  return (
    <header className="text-center mb-2">
      <h1 className="text-xl md:text-3xl font-bold ">Kundli Matching Report</h1>
      <div className=" flex items-center justify-center gap-3 md:gap-6 mt-3   ">
        <p className='border px-3 py-1  rounded-md text-sm  md:text-xl text-white     bg-yellow-500   '>{details.boy.name}</p> 
        <img src={pinimg} height={80} width={80} />
        <p className='border px-3 py-1  rounded-md text-sm md:text-xl text-white    bg-yellow-500  '>{details.girl.name}</p> 
        </div>
    </header>
  );
};

export default Header;
