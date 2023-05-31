import { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { Fade } from "react-reveal";
const ToysBlogs = () => {
  const [isLike, setIsLike] = useState(false);
  //   const [isLike2, isLike2] = useState(false);

  return (
    <div className="bg-white">
      <div className="toy-container py-10">
        <div className="text-center bg-slate-100  py-2 opacity-80 mb-10">
          <h1 className="text-2xl font-bold">
            Discover the Exciting World of Toy Blogs
          </h1>
        </div>
        <div className="grid border-2 p-5 grid-cols-1 md:grid-cols-2 gap-7 md:flex-row">
          <div className="w-full relative">
            <Fade left>
              <article className="">
                <h4 className="text-lg font-semibold mb-2">
                  The Benefits of Educational Robotics Toys.
                </h4>
                <p className="text-gray-600 mb-4">By : Sohag Sheik</p>
                <p className="mb-2">
                  Educational robotics toys offer numerous benefits for
                  children. They provide hands-on learning experiences that
                  combine elements of coding, engineering, and problem-solving.
                  By engaging with robotics toys, children develop critical
                  thinking skills and learn to think logically and analytically.
                  They also enhance their creativity and imagination by
                  designing and building their own robots.
                </p>
              </article>
            </Fade>
            <span className="md:absolute pt-5 bottom-8 cursor-pointer text-3xl  text-red-500 left-0">
              {isLike ? <AiFillLike /> : <AiOutlineLike></AiOutlineLike>}
            </span>
          </div>
          <div className="w-full">
            <Fade right>
              <img
                className="w-full hover:scale-110 duration-1000 h-full"
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3RzfGVufDB8fDB8fHww&w=1000&q=80"
                alt=""
              />
            </Fade>
          </div>
        </div>
        <div className="grid grid-cols-1 border-2 p-5 mt-10 md:grid-cols-2 gap-7 md:flex-row">
          <div className="w-full relative">
            <Fade right>
              <article className="">
                <h4 className="text-lg font-semibold mb-2">
                  The Future of Robotics Toys.
                </h4>
                <p className="text-gray-600 mb-4">By : Sohag Sheik</p>
                <p className="mb-2">
                  Robotics toys have come a long way and continue to evolve at a
                  rapid pace. With advancements in technology, we can expect to
                  see even more innovative features in future robotics toys. One
                  exciting trend is the integration.of artificial intelligence
                  (AI) capabilities, allowing toys to interact and learn from
                  their environment. This opens up possibilities for more
                  realistic and intelligent robots that can adapt and respond.
                </p>
              </article>
            </Fade>
            <span
              onClick={() => setIsLike(!isLike)}
              className="md:absolute pt-5 bottom-8 cursor-pointer text-3xl  text-red-500 left-0"
            >
              {isLike ? <AiFillLike /> : <AiOutlineLike></AiOutlineLike>}
            </span>
          </div>
          <div className="w-full">
            <Fade left>
              <img
                className="w-full hover:scale-x-110 duration-1000 h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2m8V2e01osK5Bzo1_V5HgP933TYclNEGskNVZl9MCta70eP4zI4-DMCam4SPQ1w8njto"
                alt=""
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysBlogs;
