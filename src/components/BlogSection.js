import React from "react";
import BlogCard from "./BlogCard";
import CategoryList from "./CategoryList";

const BlogSection = ({ blogs, categories }) => {
  return (
    <div className="flex gap-5 py-8 flex-col-reverse md:flex-row">
      <div className="w-full">
          <h1 className=" text-2xl font-bold mb-5  py-4 ">Latest Blogs</h1>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 px-4">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              category={blog.category}
              content={blog.content}
            />
          ))}
        </div>
        </div>
        <div className="w-full md:w-1/2">
        <CategoryList categories={categories} />
  
        </div>
    
    </div>
  );
};

export default BlogSection;
