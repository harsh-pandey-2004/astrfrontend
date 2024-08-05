import React, { useState } from 'react';
import temples from './data';
import TempleCard from './TempleCard';
import { motion } from 'framer-motion';

const Destinations = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Show 5 more temples when clicked
  };

  return (
    <div className='flex flex-col gap-8 lg:px-12 px-5 py-6 w-full mt-2'>
      <h1 className="text-2xl font-semibold text-center">Top E-Pooja Destinations</h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'
      >
        {temples.slice(0, visibleCount).map((obj) => (
          <TempleCard key={obj.id} obj={obj} />
        ))}
      </motion.div>

      {visibleCount < temples.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="bg-[#f6c300] text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Destinations;
