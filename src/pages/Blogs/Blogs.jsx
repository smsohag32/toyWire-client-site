import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const { blogs } = useLoaderData();
  const { question, ans } = blogs;
  return <div></div>;
};

export default Blogs;
