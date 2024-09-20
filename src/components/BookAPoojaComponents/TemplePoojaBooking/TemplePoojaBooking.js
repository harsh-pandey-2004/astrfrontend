
import React, { useState,useEffect } from 'react';
import { usePoojaContext } from './TempleDataBookingContext'; 
import templeData from '../components/data'; 
import { motion } from 'framer-motion';
import TempleCard from '../components/TempleCard';
import axios from 'axios';


const TemplePoojaBooking = () => {
  const { formData } = usePoojaContext();
  const [templeData,setTempleData]=useState(null);
  useEffect(() => {
    const fetchTempleData = async () => {
      try {
          const response = await axios.post('https://astrobackend.onrender.com/api/templedetails', {
            name: formData.temple.value,
            poojaname: formData.pooja.value
          });
          
          setTempleData(response.data);
          // console.log(response.data)
        } catch (err) {
          console.log(err);
        } 
      
    };

    fetchTempleData();
  }, [formData]);
  // console.log(templeData);

  // Find the selected temple data
  // const selectedTempleData = templeData.find(temple => temple.name === formData.temple?.value);

  console.log('Form Data:', formData);
  // console.log('Selected Temple Data:', selectedTempleData);

  return (
    <div className="p-4 mt-12 mb-12 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-4 w-full">
      <h1 className="text-2xl font-bold text-center text-gray-800">Temple Pooja Booking</h1>
      
      {(
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-10'
          >
            {templeData && (
              <motion.div
                key={templeData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <TempleCard obj={templeData} />
              </motion.div>
            )}
          </motion.div>
          </>
      )}
    </div>
  );
};

export default TemplePoojaBooking;





