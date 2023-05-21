import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter";
import PopularToys from "../PopularToys/PopularToys";
import ToysBlogs from "../ToysBlogs";
import ToysCategories from "../ToysCategories/ToysCategories";
import Trending from "../Trending";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <PopularToys />
      <ToysCategories />
      <Trending />
      <ToysBlogs />
      <NewsLetter />
    </div>
  );
};

export default Home;
