import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditLanguage = ({arr,setArr}) => {
   
    const Languages = [
        "English",
        "Hindi",
        "Assamese",
        "Bengali",
        "Bodo",
        "French",
        "German",
        "Gujarati",
        "Kannada",
        "Kashmiri",
        "Konkani",
        "Maithili",
        "Malayalam",
        "Manipuri",
        "Marathi",
        "Marwari",
        "Nepali",
        "Odia",
        "Punjabi",
        "Sanskrit",
        "Sindhi",
        "Spanish",
        "Tamil",
        "Telugu",
        "Urdu"
      ];
      
        

      const LangHandler=(arr,obj)=>{
        if(!arr.includes(obj)) {setArr((arr)=>{return [...arr,obj]})}
        else{
          if(arr.length == 1){toast.warning('Minimum 1 Selection required',{
            position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
          })}
         else{ 
      setArr(()=>{return arr.filter((lan)=>{return lan!=obj ;})})}
        }
      }

  return (
    <div className='h-3/4 w-full  overflow-y-auto sm:w-1/2  mx-auto  bg-white rounded-md border border-black'>
        <div className='w-full bg-black text-white py-2 text-center rounded-t-md'>Select Languages You Know</div>
        <div className='grid grid-cols-2   md:flex md:flex-wrap  items-center gap-3 pt-6 px-4'>
            {Languages.map((obj)=>{return <button className={`${arr.includes(obj) ? "bg-black text-yellow-400" : "bg-yellow-400 text-white"} rounded-md px-3 py-1 ` } onClick={()=>{LangHandler(arr,obj)}}>{obj}</button>})}
        </div>
        <ToastContainer/>
</div>
  )
}

export default EditLanguage