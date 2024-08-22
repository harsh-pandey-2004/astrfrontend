import React from 'react'

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
         setArr((arr)=>{return [...arr,obj]})
      }

  return (
    <div className='h-3/4 w-1/2  mx-auto  bg-white rounded-md border border-black'>
        <div className='w-full bg-black text-white py-2 text-center rounded-t-md'>Select Languages You Know</div>
        <div className='flex flex-wrap  items-center gap-3 pt-6 px-4'>
            {Languages.map((obj)=>{return <button className='rounded-md px-3 py-1 bg-yellow-400 text-white ' onClick={LangHandler(arr,obj)}>{obj}</button>})}
        </div>
        
</div>
  )
}

export default EditLanguage