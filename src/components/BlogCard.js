import React from "react";

const BlogCard = ({ title, category,name,date,img, index }) => {
  return (
<div class="group mx-auto bg-white shadow-xl rounded-lg overflow-hidden mb-4 cursor-pointer hover:shadow-2xl relative w-full">
 <div className="overflow-hidden"> <img
    src={img}
    alt="1"
    className="w-full h-40 sm:h-60 object-cover group-hover:scale-110 transition duration-500"
  /></div>
  <div class="p-4 flex flex-col justify-between h-full">
    <div> 
      <h2 class="text-xl font-bold text-gray-800 text-start hover:text-red-500">{title}</h2>
      <div className="flex items-center">
        <p class="text-xs  mt-3 bg-yellow-400 text-black w-fit font-semibold px-2 py-1 rounded-md uppercase">{category} </p>
        <p className="mt-3 px-3 text-gray-800 text-xs font-bold uppercase">/ <span className="px-1">{name}</span>/ </p>
      
      </div>
      <p className="text-start text-xs font-bold  mt-3">{date}</p>
      
      {/* <p class="text-gray-700">{content}</p> */}
      {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Read More
      </button> */}
    </div>
   
    
  </div>
</div>




  
  
  );
};

export default BlogCard;
