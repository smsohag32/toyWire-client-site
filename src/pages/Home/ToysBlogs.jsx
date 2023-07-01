import BlogCard from "../../components/BlogCard";
import Spinner from "../../components/Spinner";
import useBlogs from "../../hooks/useBlogs";
const ToysBlogs = () => {
  const { blogs, loading } = useBlogs();

  return (
    <div className="bg-white my-10">
      <div className="toy-container py-10">
        <h1 className="primary-text font-bold text-4xl my-8">
          Blogs in Toys Technology
        </h1>
        {loading && <Spinner />}
        <div>
          {blogs.length > 0 &&
            blogs
              .slice(0, 4)
              .map((blog) => <BlogCard key={blog?._id} blog={blog}></BlogCard>)}
        </div>
      </div>
    </div>
  );
};

export default ToysBlogs;
