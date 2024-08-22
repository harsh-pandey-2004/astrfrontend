import React from 'react';
import { FaBell, FaComments, FaCalendarAlt, FaLanguage, FaEdit, FaSignOutAlt, FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import ProfileEditComponent from './ProfileEditComponent';
import { RxCross2 } from "react-icons/rx";
import EditLanguage from './EditLanguage';
import DeleteModal from './DeleteModal';
const ProfileSettings = () => {

   const[editMode,setEditMode]=useState(false);
   const[editlang,setEditLang]=useState(false);
   const[delAccount,setDelAccount]=useState(false);
  

   const [arr,setArr]=useState(["Hindi","English","Tamil","Sanskrit"]);

   function CloseModal(){
    setEditMode(false);
   }

   function DelModal(){
     setDelAccount(false);
   }

  return (<>
    <div className={`${delAccount || editlang ?"blur":"bg-white"} max-w-md mx-auto  text-black p-6 rounded-lg shadow-md border border-gray-200 relative top-28 mb-24`}>
      <h2 className="text-xl font-bold mb-4 text-center"> Profile Settings </h2>

      <ul className="space-y-4">
        <li className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center">
            <FaBell className="text-yellow-400 mr-3"/>
            <span>Notifications</span>
          </div>
          <button className="text-yellow-400 hover:underline">Manage</button>
        </li>

        <li className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center">
            <FaComments className="text-yellow-400 mr-3"/>
            <span>Astromall Chat</span>
          </div>
          <button className="text-yellow-400 hover:underline">Manage</button>
        </li>

        <li className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center">
            <FaCalendarAlt className="text-yellow-400 mr-3"/>
            <span>Live Events</span>
          </div>
          <button className="text-yellow-400 hover:underline">Manage</button>
        </li>

        {/* <li className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center">
            <FaLanguage className="text-yellow-400 mr-3" />
            <span>My Language</span>
          </div>
          <button onClick={()=>{setEditLang(true)}} className="text-yellow-400 hover:underline hover:cursor-pointer">Edit</button>
        </li> */}

        <li className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center">
            <FaEdit className="text-yellow-400 mr-3"/>
            <span >Edit Profile</span>
          </div>
         <button onClick={()=>{setEditMode(true)}} className="text-yellow-400 hover:underline">Edit</button>
        </li>

        <li className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center">
            <FaSignOutAlt className="text-yellow-400 mr-3"/>
            <span>Logout from all other devices</span>
          </div>
          <button className="text-red-600 hover:underline">Logout</button>
        </li>

        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaTrashAlt className="text-yellow-400 mr-3" />
            <span>Delete My Account</span>
          </div>
          <button className="text-red-600 hover:underline" onClick={()=>{setDelAccount(true)}}>Delete</button>
        </li>
      </ul>

     
    </div>


    <div className=" max-w-md px-6 mx-auto relative top-12 flex flex-col items-center justify-center border-b pb-2 border rounded-lg py-2 shadow-md">
      <div className='flex items-center justify-between w-full'>
          <div className="flex items-center">
            <FaLanguage className="text-yellow-400 mr-3" />
            <span>My Language</span>

          </div>
       
          <button onClick={()=>{setEditLang(true)}} className="text-yellow-400 hover:underline hover:cursor-pointer">Edit</button>
      </div>

      <div className='flex flex-wrap gap-3 pt-3 '>
           {arr.map((obj)=>{return <p className='rounded-full py-1 px-3 border bg-yellow-400 text-white'>{obj}</p>})}
      </div>
    </div>


    {/* editprofile Modal */}
    { editMode &&
  <div className='absolute top-28  w-full  '>
    <div onClick={()=>{setEditMode(false)}} className="absolute top-1 right-72 cursor-pointer rounded-full h-8 w-8  pl-2 pt-2 bg-white"><RxCross2/></div>
  <ProfileEditComponent CloseModal={CloseModal}/>
  </div>}

    {/* editLanguage Modal */}
   {editlang && <div className='absolute top-72 w-full  h-screen'>
    <div onClick={()=>{setEditLang(false)}} className="absolute top-1 right-80 cursor-pointer rounded-full h-8 w-8  pl-2 pt-2 bg-white"><RxCross2/></div>
      <EditLanguage arr={arr} setArr={setArr}/>
    </div>}


   {/* Delete Modal */}
   {
    delAccount && <div className='absolute top-72 w-full  h-screen'>
    <div onClick={()=>{setDelAccount(false)}} className="absolute top-1 right-96 cursor-pointer rounded-full h-8 w-8  pl-2 pt-2 bg-white"><RxCross2/></div>
      <DeleteModal DelModal={DelModal}/>
    </div>
   }




  <div className='h-32 mb-72'>

  </div>

  <div className='h-32 mb-72'>

</div>

 



    </> );
};

export default ProfileSettings;
