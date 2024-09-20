import React from 'react';
import { LuDot } from "react-icons/lu";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

function PanditPackages() {
  const navigate = useNavigate();
  const location = useLocation();
  const PanditData = location.state;
  console.log(PanditData);
  const Pooja = localStorage.getItem('selectedPooja');

  const [material, setMaterial] = useState(false);

  const materials = [
    'Durga Idol or Picture',
    'Kalash (Sacred Pot)',
    'Mango Leaves',
    'Coconut',
    'Red Cloth for Goddess Durga',
    'Rice (Akshat)',
    'Roli (Kumkum)',
    'Moli (Sacred Thread)',
    'Flowers (Marigold, Red Hibiscus)',
    'Paan Leaves',
    'Betel Nuts',
    'Fruits (Banana, Apple)',
    'Panchmeva (5 types of dry fruits)',
    'Diya (Lamp)',
    'Camphor',
    'Incense Sticks',
    'Sweets (Prasad)',
    'Gangajal (Holy Water)',
    'Turmeric (Haldi)',
    'Sindoor (Vermilion)',
    'Dhoop (Fragrant Smoke)',
    'Chunri (Sari for Goddess)',
    'Bell (Ghanti)',
    'Aarti Thali',
  ];

  return (
    <div className="mb-20 pb-16 relative top-20 bg-gray-100">
      <h1 className='text-center text-4xl font-bold pt-12'>
        Select Your <span className='text-yellow-400'>{Pooja} Arrangement</span>
      </h1>
      <div className={`${material && "blur"} flex flex-col justify-center items-center md:flex-row md:items-center gap-6 px-12 mt-12`}>
        {/* Package Cards */}
        <div className='border flex flex-col w-full p-6 rounded-lg bg-white hover:cursor-pointer hover:scale-105 hover:transition duration-150'>
          <h2 className='text-xl font-semibold'> Complete Pooja Package</h2>
          <p className='text-gray-500 text-lg font-semibold'>(Includes Pandit and all Pooja Materials)</p>
          <p className='text-yellow-400 text-3xl font-semibold mt-3'>₹ 10,000</p>
          <p className='text-gray-500 mt-3'>
            Experience a complete and seamless Pooja ceremony with our 'Pandit with Materials' package. Our expert Pandits will arrive with all the essential materials required for the Pooja, ensuring a hassle-free and divine experience. Enjoy a spiritually enriching ceremony with everything you need, right at your doorstep.
          </p>
          <p className='flex items-center text-gray-500'><LuDot className='text-3xl mt-3'/> Comprehensive Pooja Setup</p>
          <p className='flex items-center text-gray-500'><LuDot className='text-3xl'/> Convenient Service</p>
          <p className='flex items-center text-gray-500'><LuDot className='text-3xl'/> Expert Guidance</p>
          <p className='flex items-center text-gray-500'><LuDot className='text-3xl'/> Time-Saving</p>
          <p className='text-blue-500 hover:underline ' onClick={() => { setMaterial(true) }}>Click here to view the Materials Included</p>
          <button className='mx-auto mt-3 w-fit py-3 px-6 rounded-md bg-yellow-400 text-white font-bold' onClick={() => { navigate('/pandit-booking', { state: PanditData }) }}>Book Now</button>
        </div>

        <div className='border flex flex-col w-full p-6 rounded-lg bg-white hover:cursor-pointer hover:scale-105 hover:transition duration-150'>
          <h2 className='text-xl font-semibold'> Pandit Only Package</h2>
          <p className='text-gray-500 font-semibold text-lg'>Includes Pandit Services (Materials Not Included)</p>
          <p className='text-yellow-400 text-3xl font-semibold mt-3'>₹ 6000</p>
          <p className='text-gray-500 mt-3'>
            Opt for our 'Only Pandit' package for a personalized Pooja experience. Our seasoned Pandits will come prepared to conduct the ceremony, and you can provide the materials yourself. This package is perfect for those who prefer to manage the Pooja essentials independently while still receiving expert guidance and performance.
          </p>
          <p className='flex items-center text-gray-500'><LuDot className='text-3xl mt-3' /> Customized Materials</p>
          <p className='flex items-center text-gray-500'><LuDot className='text-3xl' /> Expert Services</p>
          <p className='flex items-center text-gray-500'><LuDot className='text-3xl' /> Flexible Budget</p>
          <p className='flex items-center text-gray-500'><LuDot className='text-3xl' /> Personalized Experience</p>
          <button className='mx-auto mt-3 w-fit py-3 px-6 rounded-md bg-yellow-400 text-white font-bold' onClick={() => { navigate('/pandit-booking', { state: PanditData }) }}>Book Now</button>
        </div>
      </div>

      {/* Materials Modal */}
      {
        material && (
          <div className='absolute top-28 left-72 border rounded-md bg-yellow-300 text-black p-3'>
            <div className='w-fit rounded-full p-2 bg-white hover:cursor-pointer' onClick={() => { setMaterial(false) }}><RxCross2 /></div>
            <h2 className="text-xl font-bold mb-4">Durga Puja Materials</h2>
            <ul className="list-disc list-inside">
              {materials.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )
      }

      {/* Importance of Durga Puja Section */}
      <div className='mt-16 bg-white text-yellow-400 py-6 mx-12 px-6 rounded-lg'>
        <h2 className='text-3xl font-bold text-center mb-6 '>Importance and Procedure of Durga Puja</h2>

        <div className='text-black'>
          <p className='mb-4 text-gray-500  text-lg font-sans'>
            Durga Puja is a celebration of the victory of good over evil. It symbolizes the triumph of Goddess Durga over the demon Mahishasura. The Puja is marked by devotion, rituals, and joy. It brings communities together and instills spiritual positivity in individuals' lives.
          </p>
          
          <div className='flex items-center'>
          <ol className='list-decimal list-inside mb-4 '>
          <h3 className='text-2xl font-semibold mb-2 '>Procedure of Durga Puja</h3>
            <li className='font-sans text-gray-700'>Setting up the sacred space with a Durga idol or picture.</li>
            <li className='font-sans text-gray-700'>Placing Kalash, filled with water, at the center of the Pooja area.</li>
            <li className='font-sans text-gray-700'>Invocation of Goddess Durga through mantras and Aarti.</li>
            <li className='font-sans text-gray-700'>Offering flowers, fruits, and sweets (Prasad) to the Goddess.</li>
            <li className='font-sans text-gray-700'>Recitation of Durga Saptashati or other scriptures.</li>
            <li className='font-sans text-gray-700'>Performing the Aarti with lamps and camphor.</li>
            <li className='font-sans text-gray-700'>Concluding with prayers and blessings from the Goddess.</li>
          </ol>
           {/* Durga Puja Image */}
        <div className='flex justify-center mt-6 w-1/2'>
          <img src="https://media.istockphoto.com/id/461790589/photo/durga-puja-festival.jpg?s=1024x1024&w=is&k=20&c=XpUoCzIBIBGTzElOYqhwNexZVw9UqU0ST8_kHrqkuZw=" alt="Durga Puja Ceremony" className='rounded-lg shadow-lg h-72' />
        </div>
          </div>
          
          <p className='mt-4 text-yellow-400'>
            Performing Durga Puja at home or in the community fosters harmony, peace, and prosperity. It is an act of spiritual devotion and marks the beginning of new positive energies in one’s life.
          </p>
        </div>

       
      </div>
    </div>
  );
}

export default PanditPackages;
