import React from 'react'
import { useLocation } from 'react-router-dom'
import { IoStar } from "react-icons/io5";
import RatingsCard from '../../Astrocomponents/RatingsCard';
import { useNavigate } from 'react-router-dom';
const BookPanditSub = () => {
  const location=useLocation();
  const Panditdata=location.state || {};
  const PanditId=Panditdata[0]._id;
  localStorage.setItem('PanditId',PanditId);
  console.log(Panditdata);
  const navigate=useNavigate();

  return (
    <div className='  lg:flex-row relative top-20 mb-28'>

        <div className=' flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:items-center  bg-gradient-to-b from-orange-200 to-[#f6c300] py-6 px-12'>
          <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVKZKE-sHagMcufyqtq803lJ-1fYDmnJglfQ&s"  className='h-56 w-56 rounded-full'/>
           
           <div>
            <p className=' font-bold text-2xl text-center lg:text-start'>{Panditdata[0].firstName}</p>
            <div className='flex flex-col '>
              <p className="text-gray-700 text-lg"><span className="text-lg font-semibold pr-3">Skills:</span>{Panditdata[0].Skills}</p>
              <p className="text-gray-700 text-lg"><span className="text-lg font-semibold pr-3">Languages:</span>{Panditdata[0].languages}</p>
               <p className='text-gray-700 text-lg flex items-center'><span className='text-lg font-semibold pr-3'>Rating:</span>
               <span className="text-yellow-300 flex pl-3">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </span></p>
            </div>
           </div>

           <div className="flex flex-col gap-16 justify-center">
          <div className="flex items-center justify-between sm:justify-center">
            <div className="flex flex-col items-center justify-center border-r border-black py-6 sm:pr-8 pr-3">
              <p className="font-bold text-xl">{Panditdata[0].experience}</p>
              <p className="text-gray-700 text-lg">years of exp</p>
            </div>
            <p className='font-semibold text-xl pl-3'>{Panditdata[0].city}</p>
          
          </div>
          <div className="flex gap-4 justify-center items-center">
            <button
              className="border rounded-md bg-black text-white px-12 py-2 hover:text-[#f6c300] hover:-translate-y-1 transition-all"
              onClick={()=>{navigate('/pandit-packages',{state:Panditdata})}}
            >
              Book Now
            </button>
          </div>
        </div>
        </div>



        {/* About Section */}

        <div className='px-12 pt-6'>
          <h1 className='text-center font-bold text-2xl'>About <span className='text-yellow-400'>{Panditdata[0].firstName}</span></h1>

          <p className='text-justify mt-4 font-serif'>Pandit Atul Kumar is a highly respected Vedic scholar and priest with over 15 years of experience in performing a wide range of poojas and rituals. He has conducted numerous ceremonies, including Griha Pravesh, Navagraha Pooja, Maha Mrityunjaya Jaap, and Satyanarayan Katha, bringing spiritual peace and prosperity to countless families. Known for his deep knowledge of Vedic traditions and meticulous attention to detail, Pandit Atul has also officiated many traditional Hindu weddings, ensuring that each ritual is performed with the utmost reverence and authenticity. Now, you can invite Pandit Atul to your home to lead these sacred ceremonies, making your spiritual journey more meaningful.</p>

        </div>


       {/* Ratings and Reviews */}
       <div className='px-12 mt-8 '>
       <RatingsCard ratingData={{
          overallRating: 4.3,
          totalReviews: 150,
          ratingBreakdown: [
            { stars: 5, count: 90 },
            { stars: 4, count: 30 },
            { stars: 3, count: 15 },
            { stars: 2, count: 10 },
            { stars: 1, count: 5 },
          ],
        }} />

       
       </div>
      


    </div>


  )
}

export default BookPanditSub