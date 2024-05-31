import React, { useState } from 'react'
import { RxDotFilled } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";

const Profile = () => {

          const[profileData,setProfileData]=useState({
            phone:"9595959595",mail:"RamaKrishna@gmail.com",
          })



          const[readphone,setReadphone]=useState(true);
          const[readmail,setReadmail]=useState(true)

          function ChangeHandler(e){
                const{name,value,type}=e.target
                setProfileData((prevstate)=>{
                    return {
                        ...prevstate,
                        [name]:value
                    }
                })

          }

         


          const [skills, setSkills] = useState(['Vedic Chanting', 'Astrology']);
          const [newSkill, setNewSkill] = useState('');
        
          const handleAddSkill = () => {
            if (newSkill.trim() && !skills.includes(newSkill)) {
              setSkills([...skills, newSkill.trim()]);
              setNewSkill('');
            }
          };
        
          const handleDeleteSkill = (skillToDelete) => {
            setSkills(skills.filter(skill => skill !== skillToDelete));
          };


          

  return (
    <div className='w-4/5 h-screen py-4 absolute right-0 bg-orange-50 overflow-y-auto'>
              <h1 className='text-center text-3xl  '>Welcome!   Pandit RamaKrishna</h1>

              <div className=' md:w-3/5 xs:w-full     mx-auto mt-6 rounded-lg px-4 pb-2  shadow-md bg-yellow-100'>
                <div className=' border-b border-black pb-2 '>
                         <div className='md:flex xs:flex-col gap-28  pt-2 '>

<div className='flex gap-1 md:flex-col '>
    <p className='text-gray-600 '>FirstName</p>
          <p className='bg-yellow-100'>RamaKrishna</p>
</div>

<div className='flex  gap-1 md:flex-col '>
    <p className='text-gray-600' >LastName</p>
    <p className='bg-yellow-100'>Murthy</p>
</div>

                         </div>

                         <div className='md:flex xs:flex-col  gap-36  mt-4'>
                    <div className='flex gap-1 md:flex-col  '>
                         <p className='text-gray-600'>Gotra</p>
                         <p className='bg-yellow-100'>Kashyap</p>
                    </div>

                    

                    <div className='flex md:flex-col '>
                        <label htmlFor='gender' className='text-gray-600'>Gender</label>
                        <p className='bg-yellow-100'>Male</p>
                    </div>
                         </div>

                </div>




                <div className=' md:flex xs:flex-col  md:justify-between mt-6 border-b border-black  pb-2'>

                    <div >
                    <p className='text-gray-600 text-center'>Experience</p>
                    

                    <div>

                       <p className='text-center'>12+ Years</p>
                    </div>
                                

                    </div>

                  
                         <div className='flex md:flex-col pl-12  justify-center items-center'>
                            <p className='text-gray-600'>Live in(city)</p>
                            <p className='bg-yellow-100'>Delhi</p>
                         </div>

                         <div className='flex md:flex-col justify-center items-center'>
                         <p className='text-gray-600'>Languages</p>
                         <p className='bg-yellow-100'>Hindi,Tamil</p>
                         </div>

                  
                    
                  
                    
                    
                    
                </div>



                      <div className=' flex flex-col gap-4  '>
                             <div className='flex flex-col gap-2  '>

                              
                              

                     {/* Skills */}

     <div className="mt-4  rounded  w-full max-w-md">
       
                <h2 className="text-xl mb-2">Skills</h2>
         <ul className="mb-4">
          {skills.map(skill => (
            <li key={skill} className="flex justify-between items-center mb-2">
              <span className='text-gray-600'>{skill}</span>
              <button
                className="bg-yellow-300  px-2 py-1 rounded"
                onClick={() => handleDeleteSkill(skill)}
              >
                Delete
              </button>
            </li>
          ))}
           </ul>
        <div className="md:flex xs:flex-col mb-4">
          <input
            type="text"
            className="border px-2 flex-grow mr-2 rounded-md focus:outline-none bg-yellow-50"
            placeholder="Add a new skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded"
            onClick={handleAddSkill}
          >
            Add
          </button>
        </div>
      </div>



              


                       <div  className='   w-1/3 '>
                               
                              
                               <div className='flex  gap-2 w-1/2'>
                             <label htmlFor='phone' className='text-gray-600'>Phone:</label>
                             <button className='text-sm  ' onClick={()=>{setReadphone(false)}}> <FaRegEdit /></button>
                             <input id="phone" type="number" name="phone" value={profileData.phone}
                             className='bg-yellow-100 focus:outline-none' 
                             onChange={ChangeHandler}  readOnly={readphone}/>
                               </div>
                           </div>
                               



                           
                               
                                <div className='flex  gap-2 w-1/2   '>
                          <label htmlFor='mail' className='text-gray-600'>Email:</label>
                          <button className='text-sm  ' onClick={()=>{setReadmail(false)}}> <FaRegEdit /></button>
                          <input id="mail" type="email"  name="mail" value={profileData.mail}
                          className='focus:outline-none bg-yellow-100 text-sm ' 
                          onChange={ChangeHandler} readOnly={readmail}/>
                          


                                </div>

                              </div>

 
                              <div className=' flex  items-center justify-center w-full gap-2 '>
                                    <button className='px-4  py-1 border  rounded-md text-black  bg-yellow-300 '>Logout</button>
                                    <button className='px-4 py-1 border  rounded-md text-black bg-yellow-300'>Delete Profile</button>
                              </div>
                        
                      </div>
              </div>
    
        
    </div>
  )
}

export default Profile;