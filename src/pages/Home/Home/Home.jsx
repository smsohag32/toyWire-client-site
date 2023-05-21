import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter";
import PopularToys from "../PopularToys/PopularToys";
import ToysBlogs from "../ToysBlogs";
import ToysCategories from "../ToysCategories/ToysCategories";
import Trending from "../Trending";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  const popularProducts = useLoaderData();
  return (
    <div className="">
      <Banner />
      <PopularToys popularProducts={popularProducts} />
      <ToysCategories />
      <Trending />
      <ToysBlogs />
      <NewsLetter />
    </div>
  );
};

export default Home;
