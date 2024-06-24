import React from 'react';
import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';

const RatingsCard = ({ ratingData }) => {
  const { overallRating, totalReviews, ratingBreakdown } = ratingData;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className='flex items-center'>
        {[...Array(fullStars)].map((_, index) => (
          <IoStar key={index} className='text-yellow-400' />
        ))}
        {halfStar && <IoStarHalf className='text-yellow-400' />}
        {[...Array(emptyStars)].map((_, index) => (
          <IoStarOutline key={index} className='text-yellow-400' />
        ))}
      </div>
    );
  };

  return (
    <div className='border rounded-md p-6 bg-white shadow-lg max-w-md  mt-6'>
      <h2 className='text-2xl font-semibold mb-4'>Ratings & Reviews</h2>
      <div className='flex items-center mb-4'>
        <div className='text-4xl font-bold mr-2'>{overallRating}</div>
        <div className='flex flex-col'>
          {renderStars(overallRating)}
          <div className='text-gray-600'>{totalReviews} Reviews</div>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        {ratingBreakdown.map((item, index) => (
          <div key={index} className='flex items-center'>
            <div className='flex items-center w-24'>
              {renderStars(item.stars)}
            </div>
            <div className='w-full bg-gray-200 rounded-full h-2 mx-2'>
              <div
                className='bg-green-400 h-2 rounded-full'
                style={{ width: `${(item.count / totalReviews) * 100}%` }}
              ></div>
            </div>
            <div className='text-gray-600'>{item.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingsCard;
