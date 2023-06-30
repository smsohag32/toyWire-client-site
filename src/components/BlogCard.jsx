import React from "react";

const BlogCard = () => {
  return (
    <div className="grid p-5 grid-cols-1 md:grid-cols-2 gap-7 md:flex-row">
      <article className="">
        <h4 className="text-lg font-semibold mb-2">
          The Benefits of Educational Robotics Toys.
        </h4>
        <p className="text-gray-600 mb-4">By : Sohag Sheik</p>
        <p className="mb-2">
          Educational robotics toys offer numerous benefits for children. They
          provide hands-on learning experiences that combine elements of coding,
          engineering, and problem-solving. By engaging with robotics toys,
          children develop critical thinking skills and learn to think logically
          and analytically. They also enhance their creativity and imagination
          by designing and building their own robots.
        </p>
        <p className="mt-4">25/01/2023</p>
      </article>
      <div className="w-full" data-aos="fade-left">
        <img
          className="w-full rounded-sm  hover:scale-110 duration-1000 h-full"
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3RzfGVufDB8fDB8fHww&w=1000&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default BlogCard;
