import React from 'react'
import { useParams } from 'react-router-dom';
import { PanditData } from '../components/kundalicomponents/Data';
import { BiMessageDetail } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { PoojaArray } from '../components/kundalicomponents/Data';
import PoojaCard from '../components/PanditFiltercomponents/PoojaCard';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';



const PanditProfile = () => {
    const {id}=useParams();
   
    const profile=PanditData.filter((obj)=>{return obj.id == `${id}`})[0];

   
   

   

    const[formData,setFormData]=useState({
        typeOfPooja: '',
        location: '',
        date: null,
        materials: '',
        time: '',
        amPm: 'AM',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };


      const handleDateChange = (date) => {
        setFormData((prevData) => ({
          ...prevData,
          date: date,
        }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Perform your form submission logic here
      };





  return (
 <div className='  mb-12 max-w-5xl mx-auto  bg'>
        
        <h1 className='text-center my-4 text-base font-normal bg-yellow-300 max-w-fit px-2 rounded-md'>{profile.name}'s Profile</h1>
   
    <div className='md:flex xs:flex-col  gap-6 border border-gray-400 rounded-lg   '>

        {/* ProfileCard */}
        <div className='flex gap-12 items-center justify-center px-6 py-4  md:w-1/3 xs:w-full   ' >   
            <div className='flex flex-col items-center gap-4  w-full pr-6  md:border-r md:border-gray-400 xs:border-none '>
              
                   <img src={profile.img}   height={200} width={200} className='border border-green-500 rounded-full bg-orange-200 ' />
                  
              
                
                <button className='bg-yellow-300 px-2 py-1 rounded-md font-normal hover:shadow-md hover:shadow-gray-600'>Follow</button>
            
                <div className='flex flex-col items-center  gap-2  mx-auto'>
            <div className='flex flex-col gap-2  '>
                <div className='flex justify-between'>
                    <p className='text-2xl  font-semibold max-w-fit  '>{profile.name}</p>
                    
                </div>
                
                <p className=' text-slate-500'>{profile.service}</p>
                <p className=' text-slate-500 '>{profile.language}</p>
                <p className=' text-slate-500'>Exp: {profile.exp}</p>
                <p className='text-green-600'>{profile.price}/hr of Pooja</p>
                  
            </div>


            <div className='flex gap-8'>
                <p className='flex items-center gap-2 text-slate-500'><BiMessageDetail />  <span className='text-slate-500 font-semibold'>73K</span> mins</p>
                <p className='flex items-center gap-2 text-slate-500'><BsTelephone /> <span className='text-slate-500 font-semibold'>3K</span> mins</p>
            </div>

            {/* <div className='flex gap-20 items-center mt-2'>
               
                     
                    <button className='flex gap-12 items-center text-green-600 border border-green-700 rounded-full pl-6 pr-20 py-2  hover:shadow-lg hover:shadow-gray-400 transition shadow-md'>
                              <img src="https://aws.astrotalk.com/assets/images/chatoffline/online-status-chat.webp"    height={20} width={20}/>
                              <p> Start Chat</p>  
                    </button>
               
                   
                    <button className='flex gap-12 items-center text-green-600 border border-green-700 rounded-full pl-6 pr-20 py-2 hover:shadow-lg hover:shadow-gray-400 transition shadow-md'>
                              <img src="https://aws.astrotalk.com/assets/images/chatoffline/online-status-call.webp"   height={20} width={20}/>
                              <p> Start Call</p>  
                    </button>
              
               
                
            </div> */}
                </div>
            </div>


          


            
        </div>




                <div className='flex flex-col items-center justify-center gap-4 '>

                                             {/* Booking Form */}
                    <div className='w-full flex flex-col gap-2 items-center justify-between  mx-auto '>
                                  <h1 className='text-center text-xl font-semibold mt-2'>Booking Form</h1>

                                  <form className='flex flex-col gap-3 w-full self-start pl-6  px-4 py-2  mx-auto border rounded-md'
                                  onSubmit={handleSubmit}>
                                       <input   name="typeOfPooja" value={formData.typeOfPooja}  onChange={handleChange} type='text' placeholder='Type of Pooja' className='border focus:outline-none rounded w-full px-7  text-gray-500 hover:bg-slate-100 hover:cursor-pointer transition '/>
                                       <input type='text'   name="location"  value={formData.location}  onChange={handleChange} placeholder='Enter your Location' className='border focus:outline-none rounded w-full px-7  text-gray-500 hover:bg-slate-100 hover:cursor-pointer transition'/>
                                       <DatePicker className="date-picker border rounded w-full px-7  text-gray-500 focus:outline-none hover:bg-slate-100 hover:cursor-pointer transition"
                                        placeholderText="Select your Prefered Date"
                                        selected={formData.date}
                                        onChange={handleDateChange}
                                        dateFormat="MM/dd/yyyy"/>
                                       <input type='text' name="materials"  value={formData.materials}   onChange={handleChange}  placeholder='Materials required' className='border focus:outline-none rounded w-full px-7  text-gray-500 hover:bg-slate-100 hover:cursor-pointer transition'/>
                                       <div className='relative  '>
     <input type='time'  name="time"  value={formData.time}  onChange={handleChange} placeholder='Slect your preferred Time' className='border focus:outline-none rounded w-full px-7  text-gray-500 hover:bg-slate-100 hover:cursor-pointer transition'/>
     <select  name="amPm"  value={formData.amPm} className='w-1/6 absolute left-20  top-1 text-gray-500 focus:outline-none'>
          <option>AM</option>
          <option>PM</option>
     </select>
                                       </div>
                                       <button type="submit" className='border rounded-md px-4  border-green-500 text-green-600 hover:bg-green-600 hover:text-white shadow-sm shadow-gray-400 h-1/6 py-1'>Book Now</button>
     
                                  </form>
                    </div>
                                  
                                 




                                               {/* About */}
                        <div className=' flex flex-col items-center   pr-2 max-w-xl  mx-auto  ' >
            <h2 className='text-center text-xl font-semibold'>About Me</h2>
            <p className='pl-6  text-sm text-slate-600 mt-2 '>Pandit Arjun, an esteemed spiritual mentor based in India, offers profound insights and compassionate guidance to seekers on their spiritual paths. Rooted in ancient Vedic traditions, Pandit Arjun's consultations blend timeless wisdom with modern understanding, ensuring personalized attention and support for each individual.
Specializing in various life domains including Marriage, Career, Love, Wealth, and Property, Pandit Arjun provides tailored guidance and effective remedies that resonate with  accuracy.  






           </p>
            
                        </div>


                      
                        {/* <div className='flex  flex-col gap-12 '>

<img src="https://th.bing.com/th/id/OIP.P7I23QpE3DtA-ox-aRT2bQAAAA?rs=1&pid=ImgDetMain"
height={200} width={200} 
className='rounded-lg border border-black'/>

<img src="https://bizimages.withfloats.com/actual/61212c9ce21b4e00017c8004.jpg"
height={200} width={200} 
className='rounded-lg border border-black'/>
                        </div> */}


                      
                        
                        



                </div>
      

       
    </div>




                  {/* Specializations */}

                  <div className=' mt-4 pt-4'>
                    <h1 className='text-2xl  text-gray-700 font-bold  text-center'>Specializations</h1>

                    <div className='  grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-4 mt-6'>
                        {PoojaArray.map((obj,id)=>{return <PoojaCard key={id} obj={obj}/>})}
                    </div>
                 
                  </div>




    <div className='md:flex xs:flex-col gap-8 mt-12  ' >

           {/* Rating */}

           <div className='w-1/2 border  border-gray-400 rounded-lg flex flex-col justify-center mx-auto   pl-4 '>
                             <p className='text-xl  text-gray-700 font-bold  text-start'>Rating & Reviews</p>


                            <div className='md:flex xs:flex-col  gap-10 pl-12  '>
                                   <div className=' w-1/3 flex flex-col gap-2 items-center mt-12'>
                          <p className='text-3xl text-gray-800 font-semibold'>4.80</p>
                          <p className='flex text-sm'><IoIosStarOutline  /><IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /><IoIosStarOutline /></p>
                          <p className='text-sm flex items-center'><IoPersonSharp /><span className='ml-1 text-red-700 font-semibold'>New !</span></p>
                                   </div>

 
                                   <div className='flex flex-col  w-full pt-4'>

                        <div className='flex items-center gap-2 pr-12 text-xl text-slate-500 font-semibold'>
                            5
                            <div className='h-3 w-full bg-green-500 rounded-full'></div>
                        </div>

                        <div className='flex items-center gap-2 pr-24 text-xl text-slate-500 font-semibold'>
                            4
                           <div className='h-3 w-full bg-green-500 rounded-full'></div>
                        </div>

                        <div className='flex items-center gap-2 pr-36 text-xl text-slate-500 font-semibold'>
                            3
                            <div className='h-3 w-full bg-green-500 rounded-full'></div>
                        </div>

                        <div className='flex items-center gap-2 pr-44 text-xl text-slate-500 font-semibold'>
                            2
                            <div className='h-3 w-full bg-green-500 rounded-full'></div>
                        </div>

                        <div className='flex items-center gap-2 pr-44 text-xl text-slate-500 font-semibold'>
                            1
                            <div className='h-3 w-1/2 bg-green-500 rounded-full'></div>
                        </div>
                                   </div>
                            </div>
                       </div>
          
          
                        {/* Similar */}
           <div className='w-1/2 border border-gray-400 rounded-lg py-4 pl-4 mx-auto'>
            <p className='text-xl  text-gray-700 font-bold'>Check Similar Pandits</p>
            <div className='md:flex xs:flex-col justify-evenly pt-6 '>
                <div className='  flex flex-col items-center mr-3 gap-1 border rounded-md border-gray-400 shadow-md shadow-gray-300 px-8  py-2 hover:cursor-pointer '>
                    <img  src="https://aws.astrotalk.com/consultant_pic/p-47858.jpg" height={70} width={70} className='border rounded-full bg-slate-200'/>
                    <p className='text-sm text-slate-800 font-normal'>Shushruta</p>
                    <p className='text-xs text-gray-600 '>₹ 28/min</p>
                </div>

                <div className='flex flex-col items-center mr-3 gap-1 border rounded-md border-gray-400 shadow-md shadow-gray-300 px-8  py-2 hover:cursor-pointer'>
                     <img  src="https://aws.astrotalk.com/consultant_pic/p-47858.jpg" height={70} width={70} className='border rounded-full bg-slate-200'/>
                    <p className='text-sm text-slate-800 font-normal'>Shushruta</p>
                    <p className='text-xs text-gray-600 '>₹ 28/min</p>
                </div>

                <div className='flex flex-col items-center mr-3 gap-1 border rounded-md border-gray-400 shadow-md shadow-gray-300 px-8  py-2 hover:cursor-pointer'>
                    <img  src="https://aws.astrotalk.com/consultant_pic/p-47858.jpg" height={70} width={70} className='border rounded-full bg-slate-200'/>
                    <p className='text-sm text-slate-800 font-normal'>Shushruta</p>
                    <p className='text-xs text-gray-600 '>₹ 28/min</p>
                </div>
            </div>

           </div>


                    

</div>
      
</div>

  )
}

export default PanditProfile