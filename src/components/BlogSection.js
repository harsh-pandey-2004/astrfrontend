import React from "react";
import BlogCard from "./BlogCard";
import CategoryList from "./CategoryList";
import  {Link}  from "react-router-dom";


const BlogSection = ({ blogs, categories }) => {
    

  

  return (
    <div className="flex gap-5 py-8 flex-col-reverse md:flex-row">
      <div className="w-full">
          <h1 className=" text-4xl font-bold mb-5  pt-4 "><span className="text-yellow-400">Latest</span> Blogs</h1>
          <p className="w-2/3 mx-auto ">Discover insightful blogs on astrology, including zodiac signs, horoscopes, Vedic practices, and more. Explore the cosmic forces shaping our lives.</p>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 px-4 mt-8">
          {blogs.map((blog, index) => (
   <Link to={`/blogdetails/${index}`} state={blog}>   <BlogCard
              key={index}
              title={blog.title}
              category={blog.category}
              name={blog.name}
              date={blog.date}
              img={blog.img}
             
              
            /> </Link> 
          ))}
        </div>
        </div>
        {/* <div className="w-full md:w-1/2">
        <CategoryList categories={categories} />
  
        </div> */}
    
    </div>
  );
};

export default BlogSection;
