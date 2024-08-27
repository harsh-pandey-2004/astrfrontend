import React from 'react'

const DeleteModal = ({DelModal}) => {
  return (
    <div className='flex flex-col justify-center items-center px-3 py-2 rounded-md bg-black text-yellow-500 w-fit mx-auto'>
        <p>Are you sure you want to delete your account?</p>
        <div className='flex items-center gap-3'>
            <button className='px-3  text-white bg-red-600 rounded-md'>Yes</button> 
            <button className='px-3  text-white bg-green-600 rounded-md' onClick={DelModal}>No</button>
        </div>
    </div>
  )
}

export default DeleteModal