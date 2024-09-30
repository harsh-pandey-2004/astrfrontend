import React from 'react';

const Bookings = ({ response }) => {
  return (
    <div className=' md:mt-20 w-full h-screen pt-4  bg-gray-800 overflow-y-auto '>
      <h1 className='text-3xl font-bold text-yellow-500 mb-4 text-center'>Booking Details for {response.name}</h1>
      <div className='w-full max-w-2xl mx-auto'>
        {response.bookings.length > 0 ? (
          response.bookings.map((booking) => (
            <div key={booking._id} className='border border-yellow-400 rounded-md bg-yellow-100 p-4 mb-4 shadow-lg'>
            <h2 className='text-xl font-semibold text-yellow-600 mb-2'>Pooja: {booking.bookingId.poojaName}</h2>
            <p className='text-gray-800'><strong>YajMan Name:</strong> {booking.bookingId.userName}</p>
            <p className='text-gray-800'><strong>Address:</strong> {booking.bookingId.address}</p>
            <p className='text-gray-800'><strong>Day:</strong> {booking.bookingId.Day}</p>
            <p className='text-gray-800'><strong>Time:</strong> {booking.date.join(', ')}</p>
            {/* <p className='text-gray-800'><strong>Package:</strong> {booking.bookingId.Package}</p> */}
            <p className='text-gray-800'><strong>Price:</strong> {booking.bookingId.Price} INR</p>
            <p className='text-gray-800'><strong>Rashi:</strong> {booking.bookingId.Rashi}</p>
            <p className='text-gray-800'><strong>Gotra:</strong> {booking.bookingId.Gotra}</p>
            <p className='text-gray-800'><strong>Nakshatra:</strong> {booking.bookingId.Nakshatra}</p>
            <p className='text-gray-800'><strong>Pin Code:</strong> {booking.bookingId.pinCode}</p>
          </div>
          
          ))
        ) : (
          <p className='text-gray-700'>No bookings found for this pandit.</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
