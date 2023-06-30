import { useState } from "react";
import ToyCard from "../../components/ToyCard";
import BlogCard from "../../components/BlogCard";
const ToysBlogs = () => {
  return (
    <div className="bg-white my-12">
      <div className="toy-container py-10">
        <h1 className="primary-text font-bold text-4xl my-8">
          Blogs in Toys Technology
        </h1>

        <BlogCard />
      </div>
    </div>
  );
};

export default ToysBlogs;
