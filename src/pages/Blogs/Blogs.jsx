import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import Blog from "./Blog";
import faqImg from "../../assets/banner/faq.png";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  // spinner
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="bg-slate-100">
      <div
        className="w-full flex justify-center items-center h-[400px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),url('${faqImg}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center text-white backdrop-blur-md items-center">
          <h3 className="text-3xl secondary-text mb-2">Read Blogs </h3>
          <p>
            <small className="opacity-70">
              Tips, Stories, and Parenting Advice
            </small>
          </p>
        </div>
      </div>
      <div className="toy-container py-10 grid gap-8">
        {blogs && blogs.map((blog) => <Blog key={blog._id} blog={blog}></Blog>)}
      </div>
    </div>
  );
};

export default Blogs;
