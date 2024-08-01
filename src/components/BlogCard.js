import React from "react";
import Pexel from "../images/pexels-photo-3183181.webp"

const BlogCard = ({ title, category, content, index }) => {
  return (
<div class=" mx-auto bg-white shadow-xl rounded-lg overflow-hidden mb-4 cursor-pointer hover:shadow-2xl relative">
  <img
    src={Pexel}
    alt="1"
    class="w-full h-40 sm:h-60 object-cover"
  />
  <div class="p-4 flex flex-col justify-between h-full">
    <div>
      <h2 class="text-xl font-bold text-gray-800">{title}</h2>
      <p class="text-sm text-gray-600 mt-1">{category}</p>
      <p class="text-gray-700">{content}</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Read More
      </button>
    </div>
   
    
  </div>
</div>




  
  
  );
};

export default BlogCard;
