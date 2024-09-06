import React from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';


export const BlogDetails = () => {
    const location =useLocation();
    const blog =location.state;
     const {id}=useParams();
     console.log(id);
    console.log(blog);
    console.log(blog.midhead);
    console.log(blog.foothead);
   
  return (
    <div className='relative top-24  mb-96'>
    <h1 className='text-3xl text-center font-bold pt-8'><span className='text-yellow-400'>{blog.title}</span>: A Beginner's Guide</h1>
    <h2 className='text-center mt-3 font-bold text-xs uppercase'>{blog.name} <span className='mx-2'>/</span> {blog.date}<span className='mx-2'>/</span> <span className='text-yellow-400'>{blog.category}</span></h2>

    <img src={blog.img} className="w-3/4 h-3/4 mx-auto mt-12"/>

    <p className='px-36 text-justify mt-12 font-sans text-lg'>{blog.headcontent}</p>

   <h3 className='px-36 font-bold text-3xl mt-10'>{blog.subhead}</h3>

   <p className='px-36 text-justify mt-10 font-sans text-lg'>
   {blog.subheadcontent}
    </p> 

   <h4 className='px-36 font-bold text-2xl mt-10'>{blog.midhead}</h4>

     {id==0 && blog.data.map((obj)=>{return <div>
      <p className='px-36 text-justify mt-10 font-sans text-xl font-semibold'>{obj.title}</p>
    <div className="flex gap-6 items-center px-36 mt-10  ">
      <img src={obj.image} className='w-1/3 h-56'/>
      <div className='flex flex-col'>
        <p><span className='text-yellow-400 font-semibold'>Element</span>: {obj.element}</p>
        <p><span className='text-yellow-400 font-semibold'>Traits</span>: {obj.traits}</p>
        <p><span className='text-yellow-400 font-sans text-lg text-justify'>Description</span>: {obj.description}</p>
      </div>
    </div>
     </div>})} 


     {
      id==1 && blog.data.map((obj)=>{return <div className='px-36'>

        <p className=' text-justify mt-10 font-sans text-xl font-semibold'>{obj.title}</p>
        <div className='flex gap-6 items-center mt-10'>
          <img src={obj.image} className='w-1/3 h-56'/>
        <div className='flex flex-col'>
        <p ><span className='text-yellow-400 font-sans text-lg text-justify '>Description</span>: {obj.description}</p>
        <p ><span className='text-yellow-400 font-sans text-lg text-justify '>Advice</span>: {obj.advice}</p>
        </div>
        </div>
      </div>})
     }


     {
      id==2 && blog.data.map((obj)=>{return <div className='px-36'>
         <p className=' text-justify mt-10 font-sans text-xl font-semibold'>{obj.title}</p>
        <div className='flex gap-6 items-center mt-10'>
          <img src={obj.image} className='w-1/3 h-56'/>
        <div className='flex flex-col'>
        <p ><span className='text-yellow-400 font-sans text-lg text-justify '>Description</span>: {obj.description}</p>
        <p ><span className='text-yellow-400 font-sans text-lg text-justify '>Advice</span>: {obj.pairing}</p>
        </div>
        </div>
      </div>})
     }



{
      id==3 && blog.data.map((obj)=>{return <div className='px-36'>
         <p className=' text-justify mt-10 font-sans text-xl font-semibold'>{obj.title}</p>
        <div className='flex gap-6 items-center mt-10'>
          <img src={obj.image} className='w-1/3 h-56'/>
        <div className='flex flex-col'>
        <p ><span className='text-yellow-400 font-sans text-lg text-justify '>Description</span>: {obj.description}</p>
        <p ><span className='text-yellow-400 font-sans text-lg text-justify '>AstroSignificance</span>: {obj.AstroSignificance}</p>
        </div>
        </div>
      </div>})
     }



{
  id==4 && blog.data.map((obj)=>{return <div className='px-36'>
    <p className=' text-justify mt-10 font-sans text-xl font-semibold'>{obj.title}</p>
   <div className='flex gap-6 items-center mt-10'>
     <img src={obj.image} className='w-1/3 h-56'/>
   <div className='flex flex-col'>
   <p ><span className='text-yellow-400 font-sans text-lg text-justify '>Description</span>: {obj.description}</p>
   <p ><span className='text-yellow-400 font-sans text-lg text-justify '>Example</span>: {obj.example}</p>
   </div>
   </div>
 </div>})
}







     
     


    

   
    <h4 className='px-36 font-bold text-2xl mt-10'>{blog.foothead}</h4>
     <p className='font-sans text-lg text-justify px-36 mt-8'>{blog.footdesc}</p>
    

     <h4 className='px-36 font-bold text-2xl mt-10'>Final Thoughts</h4>
    <p className='font-sans text-lg text-justify px-36 mt-8'>
   {blog.finalthoughts}
    </p>
    </div>
  )
}
