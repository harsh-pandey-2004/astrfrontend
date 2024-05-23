import React from 'react'
import { Link } from 'react-router-dom';
const PanditCard = (props) => {
  return (
    <div className='flex flex-col  justify-between  items-center bg-yellow-50 py-2 px-4 border border-yellow-100   rounded-lg shadow-md shadow-gray-300 hover:shadow-orange-400 transition'>
     <div className='flex  justify-between items-center  w-full   py-2 border-b border-yellow-400 '> 
            
             <Link to={`/panditprofile/${props.obj.id}`} >
             <img src={props.obj.img} height={75} width={75} className='border border-green-500 rounded-full bg-orange-200  ' />
             </Link>
             

             <div>
             <p className='text-lg font-medium text-center' >{props.obj.name}</p>
             <p className='text-sm text-slate-500'>{props.obj.poojas} Poojas</p>
             </div>
            
     </div>



          <div className='flex justify-between  py-2  w-full'> 

          <div className='flex flex-col items-start  justify-center  w-full '>
                 <p className='text-slate-600 text-sm  font-medium '>{props.obj.service}</p>
                 <p className='text-slate-500 text-sm '>Exp:{props.obj.exp}</p>
                 <p className='text-slate-500 text-sm '>{props.obj.language}</p>
                 <p className='text-slate-500 text-sm '>{props.obj.location}</p>
          </div>


          <div className='flex flex-col items-end  w-full justify-between  '>
     
                       <p className=' text-center text-green-500 pr-2 '>₹{props.obj.price}</p>
                          
                        <Link to={`/panditprofile/${props.obj.id}`}>
                              <button className='max-w-fit px-4 mb-2 border border-green-500 rounded-md text-green-500 mr-2 hover:shadow hover:shadow-green-800 '>View</button>
                        </Link>  
          </div>
   
          </div>

   
    </div>
  )
}

export default PanditCard;