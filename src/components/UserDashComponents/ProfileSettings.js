import React from 'react';
import { FaBell, FaComments, FaCalendarAlt, FaLanguage, FaEdit, FaSignOutAlt, FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import ProfileEditComponent from './ProfileEditComponent';
import { RxCross2 } from "react-icons/rx";
const ProfileSettings = () => {

   const[editMode,setEditMode]=useState(false);


   function CloseModal(){
    setEditMode(false);
   }
  return (<>
    <div className="max-w-md mx-auto bg-white text-black p-6 rounded-lg shadow-md border border-gray-200 relative top-28 mb-24">
      <h2 className="text-xl font-bold mb-4 text-center">Profile Settings</h2>

      <ul className="space-y-4">
        <li className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center">
            <FaBell className="text-yellow-400 mr-3" />
            <span>Notifications</span>
          </div>
          <button className="text-yellow-400 hover:underline">Manage</button>
        </li>

        <li className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center">
            <FaComments className="text-yellow-400 mr-3" />
            <span>Astromall Chat</span>
          </div>
          <button className="text-yellow-400 hover:underline">Manage</button>
        </li>

        <li className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center">
            <FaCalendarAlt className="text-yellow-400 mr-3" />
            <span>Live Events</span>
          </div>
          <button className="text-yellow-400 hover:underline">Manage</button>
        </li>

        <li className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center">
            <FaLanguage className="text-yellow-400 mr-3" />
            <span>My Language</span>
          </div>
          <button className="text-yellow-400 hover:underline">Edit</button>
        </li>

        <li className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center">
            <FaEdit className="text-yellow-400 mr-3" />
            <span >Edit Profile</span>
          </div>
         <button onClick={()=>{setEditMode(true)}} className="text-yellow-400 hover:underline">Edit</button>
        </li>

        <li className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center">
            <FaSignOutAlt className="text-yellow-400 mr-3" />
            <span>Logout from all other devices</span>
          </div>
          <button className="text-red-600 hover:underline">Logout</button>
        </li>

        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaTrashAlt className="text-yellow-400 mr-3" />
            <span>Delete My Account</span>
          </div>
          <button className="text-red-600 hover:underline">Delete</button>
        </li>
      </ul>
    </div>


    {/* editprofile Modal */}
    { editMode &&
  <div className='absolute top-28  w-full  '>
    <div onClick={()=>{setEditMode(false)}} className="absolute top-1 right-72 cursor-pointer rounded-full h-8 w-8  pl-2 pt-2 bg-white"><RxCross2/></div>
  <ProfileEditComponent CloseModal={CloseModal}/>
  </div>}

  <div className='h-32 mb-72'>

  </div>

  <div className='h-32 mb-72'>

</div>

 



    </> );
};

export default ProfileSettings;
