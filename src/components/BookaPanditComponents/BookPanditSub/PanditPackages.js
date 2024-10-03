import React, { useEffect } from 'react';
import { LuDot } from "react-icons/lu";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState} from 'react';
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';

function PanditPackages() {
  const navigate = useNavigate();
  const location = useLocation();
  const PanditData = location.state;
  console.log(PanditData);
  const PujaName = localStorage.getItem('selectedPooja');


  const [material, setMaterial] = useState(false);
  const [PoojaDetails,setPoojaDetails]=useState(null);

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



    useEffect(()=>{
     
      const fetchPujaDetails=async()=>{
        try{
          const response=await axios.get("https://astrobackend.onrender.com/api/PoojaDetailsByName",{params:{PujaName}});
          console.log(response.data.data);
           setPoojaDetails(response.data.data);

        }catch(err){
          console.log(err);
        }
      }

      if(PujaName){
        fetchPujaDetails();
      }


    },[]);



  return (
    <div className="mb-20 pb-16 relative top-20 bg-gray-100">
      <h1 className='text-center text-4xl font-bold pt-12'>
        Select Your <span className='text-yellow-400'>{PujaName} Arrangement</span>
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

      


{PoojaDetails != null && (
        <div className='px-12'>
          <div className="w-full mx-auto bg-white text-black p-6 rounded-lg shadow-lg mt-10">
            {/* Image and Description Side by Side */}
            <div className="flex  items-center gap-12 mb-6 ">
              <img src={PoojaDetails.images[0]} alt="Puja" className="w-1/3 h-auto rounded-lg mr-4" />
              <div className="w-1/2">
                <h1 className="text-4xl text-center font-extrabold text-yellow-400 mb-4">{PoojaDetails.poojaName}</h1>
                <p className="mb-4 text-gray-500 font-semibold text-lg text-center">{PoojaDetails.description}</p>
                <p className="mb-4 text-gray-500 font-semibold italic text-center">{PoojaDetails.sloks}</p>
              </div>
            </div>

            {/* Significance Section */}
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Significance</h2>
            <p className="mb-4 text-gray-500">{PoojaDetails.significance}</p>

           
            <div className='flex items-center gap-32 '>
               {/* Ingredients Section */}
              <div className='w-1/2 '>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-4 ">
              {PoojaDetails.Ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-500">{ingredient}</li>
              ))}
            </ul>
              </div>

              <div className='w-1/2  '><img src={PoojaDetails.images[1]} className='rounded-md '/></div>
            
            </div>
           

            {/* Procedure Section */}
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Procedure</h2>
            {PoojaDetails.Procedure.map((step, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-bold text-black">{step.step}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}

           
         

           
          </div>
        </div>
      )}

    </div>
  );
}

export default PanditPackages;
