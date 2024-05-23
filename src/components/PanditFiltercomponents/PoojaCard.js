import React from 'react'

const PoojaCard = (props) => {
  return (
    <div 
   
    className='border rounded-lg flex flex-col items-center justify-center bg-yellow-100  h-60  overflow-hidden relative shadow-md shadow-gray-300 hover:shadow-lg hover:shadow-orange-400 transition '>
       

          {/* <img height={30} width={30} src="https://img.myloview.com/posters/ganesh-swastica-swastica-icon-swastica-swastik-3d-orange-background-unique-wallpaper-with-3d-ganpati-ganesh-icon-ganesh-swastica-700-237023604.jpg"
          className='rounded-full'/> */}
     
           <img src={props.obj.img}  className=' h-full  w-full   ' />
      
        


      
                 

       
       
        
        <div className='bg-orange-500  text-white font-semibold text-center w-full absolute bottom-0 py-4'>{props.obj.pooja}</div>
    </div>
  )
}

export default PoojaCard