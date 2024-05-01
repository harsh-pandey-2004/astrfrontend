import React from "react";
import BlogSection from "../components/BlogSection";

const BlogPage = () => {
  const blogs = [
    {
      title: "Understanding Zodiac Signs",
      category: "Astrology Basics",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      title: "Mercury Retrograde and Its Effects",
      category: "Planetary Influences",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      title: "Love Compatibility in Astrology",
      category: "Relationships",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    // Add more blogs as needed
  ];

  const categories = [
    "Astrology Basics",
    "Planetary Influences",
    "Relationships",
  ];

  return (
    <div>
      <div className="  text-center relative top-24 lg:top-0">
        <BlogSection blogs={blogs} categories={categories} />
      </div>
    </div>
  );
};

export default BlogPage;
