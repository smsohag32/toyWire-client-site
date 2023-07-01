import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="grid p-5 grid-cols-1 md:grid-cols-2 gap-7 md:flex-row">
      <article className=" flex flex-col flex-wrap gap-1 ">
        <h4 className="text-lg md:text-2xl font-semibold mb-2">
          {blog?.title}
        </h4>
        <p className="text-gray-600 mb-4">By : {blog?.author}</p>
        <p className="mb-2">{blog?.content}</p>
        <p className="mt-auto">{blog?.date}</p>
      </article>
      <div className="w-full overflow-x-hidden" data-aos="fade-left">
        <img
          className="w-full rounded-sm  duration-1000 h-full"
          src={blog?.image}
          alt="blog image"
        />
      </div>
    </div>
  );
};

export default BlogCard;
