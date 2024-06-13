import React from 'react';

const Basic = () => {
  return (
    <div className="container mx-auto py-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg shadow-md bg-white p-6">
          <h2 className="text-xl font-semibold mb-4">Basic Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="font-semibold">Name:</div>
            <div>Harsh</div>
            <div className="font-semibold">Date:</div>
            <div>01/01/1990</div>
            <div className="font-semibold">Time:</div>
            <div>03:22 PM</div>
            <div className="font-semibold">Place:</div>
            <div>Delhi, Delhi, India</div>
            <div className="font-semibold">Latitude:</div>
            <div>28.65</div>
            <div className="font-semibold">Longitude:</div>
            <div>77.23</div>
            <div className="font-semibold">Timezone:</div>
            <div>GMT<span>+</span>5.5</div>
            <div className="font-semibold">Sunrise:</div>
            <div>7:14:10</div>
            <div className="font-semibold">Sunset:</div>
            <div>17:35:10</div>
            <div className="font-semibold">Ayanamsha:</div>
            <div>23.71738</div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg shadow-md bg-white p-6">
          <h2 className="text-xl font-semibold mb-4">Avakhada Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="font-semibold">Varna:</div>
            <div>Vaishya</div>
            <div className="font-semibold">Vashya:</div>
            <div>Nara</div>
            <div className="font-semibold">Yoni:</div>
            <div>Ashva</div>
            <div className="font-semibold">Gan:</div>
            <div>Rakshasa</div>
            <div className="font-semibold">Nadi:</div>
            <div>Adhya</div>
            <div className="font-semibold">Sign:</div>
            <div>Aquarius</div>
            <div className="font-semibold">Sign Lord:</div>
            <div>Saturn</div>
            <div className="font-semibold">Nakshatra-Charan:</div>
            <div>Shatabhisha</div>
            <div className="font-semibold">Yog:</div>
            <div>Siddhi</div>
            <div className="font-semibold">Karan:</div>
            <div>Bav</div>
            <div className="font-semibold">Tithi:</div>
            <div>ShuklaPanchami</div>
            <div className="font-semibold">Yunja:</div>
            <div>Antya</div>
            <div className="font-semibold">Tatva:</div>
            <div>Air</div>
            <div className="font-semibold">Name alphabet:</div>
            <div>Go</div>
            <div className="font-semibold">Paya:</div>
            <div>Copper</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
