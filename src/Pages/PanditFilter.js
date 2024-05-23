import React, { useState } from 'react';
import { PanditData } from '../components/kundalicomponents/Data';
import PanditCard from '../components/BookaPanditComponents/PanditCard';
import { IoSearchSharp } from "react-icons/io5";
import PanditTestimonial from '../components/BookaPanditComponents/PanditTestimonial';


const PanditFilter = () => {
            const[location,setLocation]=useState();
            const[pooja,setPooja]=useState();
            const[arr,setArr]=useState(PanditData);

      function FilterByLocation(){
        setArr( arr.filter((obj)=>{
          return obj.location == `${location}` ;
        }))
      }


      
      function FilterByPooja(){
        setArr( arr.filter((obj)=>{
          return obj.service == `${pooja}` ;
        }))
      }

     
       
    //  function Sortin(){
    //   const sortedArr = [...arr].sort((a, b) => a.price - b.price);
    //   setArr(sortedArr);  
      
    //  }


     const SortCardsByPrice = (e) => {
      const value = e.target.value;
      let sorted;
      if (value === 'ascending') {
        sorted = [...arr].sort((a, b) => a.price - b.price);
      } else if (value === 'descending') {
        sorted = [...arr].sort((a, b) => b.price - a.price);
      } else {
        sorted = PanditData; // Reset to original order
      }
      setArr(sorted);
    };


  return (
    <div 
    className=" relative top-20 lg:top-0  pt-6 mb-12 w-full">
        <h1 className=' text-2xl text-center font-sans font-semibold md:text-3xl text-[#f6c003]'>
            Book a Pandit </h1>
        <p className="text-xl text-center font-sans font-semibold text-[#f1d980] md:text-2xl">Book  Pandit  by  location and type of Pooja</p>
        

        <div className=" md:flex  gap-8  xs:flex-col    md:justify-between xs:justify-center     w-full  px-24  mt-8">


            
            <div className='border flex items-center rounded-full bg-gray-100 px-4 text-slate-400 border-yellow-400'>
                     <label htmlFor='sort'>Sort by :</label>
                      
                      <select   onChange={SortCardsByPrice} id="sort" className='bg-gray-100 focus:outline-none '>
                            
                             <option value="ascending" >Price:Low to High</option>
                             <option value="descending">Price:High to Low</option>
             
                      </select>
            </div>
           


            <div className='md:flex xs:flex-col   gap-8 '>
                    <div className="flex items-center border rounded-full px-2    border-yellow-400  relative py-2 bg-gray-100">
          <input
            placeholder="Search by Location"
            className="  focus:outline-none pl-2 bg-gray-100   "
           onChange={(e)=>{setLocation(e.target.value);}}/>
          <button className="absolute right-8 top-2  py-1  "
          onClick={FilterByLocation}>
            <IoSearchSharp  />
          </button>
                    </div>

                   <div className="SearchBar flex items-center border rounded-full px-2 py-2  border-yellow-400 relative  md:mt-0 sm:mt-4 bg-gray-100">
          <input
            placeholder="Search by Pooja"
            className=" focus:outline-none pl-2 bg-gray-100"
           onChange={(e)=>{setPooja(e.target.value);}} />
          <button className="absolute right-8 top-2  py-1   "
          onClick={FilterByPooja}>
            <IoSearchSharp />
          </button>
                   </div>

            </div>
          
       
      </div>
     

        <div className="flex flex-col  items-center justify-center w-screen  mt-2">
        <div className="flex items-center px-12  w-full mt-2">
          <div className="h-px w-full bg-[#f1d980] "></div>
          <img src="https://aws.astrotalk.com/assets/images/astrotalk-mini-logo.webp" />
          <div className="h-px w-full bg-[#f1d980] "></div>
        </div>
      </div>




     
    

      <div className=' panditfil  max-w-5xl mx-auto  grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-4   pt-6  '>
        {arr.map((obj,id)=>{return <PanditCard key={id} obj={obj} /> })}
      </div>


     
    
      <PanditTestimonial/>
     



    </div>

  )
}

export default PanditFilter