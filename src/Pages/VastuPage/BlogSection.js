import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const GrahPoojaSection = () => {
  const navigate = useNavigate()
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  // }, []);

  return (
    <section className="bg-yellow-100 py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6" >Congrats on Getting Your New Home!</h2>
        <p className="text-lg text-gray-700 mb-8" >
          Moving into a new home is a significant milestone. To ensure prosperity and peace in your new abode, it is essential to perform a Grah Pooja. This ancient ritual helps purify the space, ward off negative energies, and invite positive vibrations, ensuring a harmonious living environment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 shadow-xl rounded-lg" >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Grah Pooja is Important</h3>
            <p className="text-gray-600">
              Grah Pooja is a traditional Hindu ceremony performed to cleanse and purify a new home before moving in. It is believed to remove any negative energies and bring positive vibes to the household. The ritual includes chanting of mantras and offering prayers to various deities, seeking their blessings for a peaceful and prosperous life.
            </p>
          </div>
          <div className="bg-white p-6 shadow-xl rounded-lg" >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of Grah Pooja</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Purifies the home environment</li>
              <li>Brings positive energy and vibes</li>
              <li>Ensures peace and prosperity</li>
              <li>Removes any negative influences</li>
              <li>Invokes blessings from deities</li>
            </ul>
          </div>
        </div>
        <button
          className="bg-yellow-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 duration-300"
          
          onClick={()=>navigate("/grahpooja")}
        >
          How to Perform Grah Pooja
        </button>
      </div>
    </section>
  );
};

export default GrahPoojaSection;
