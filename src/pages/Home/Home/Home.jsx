import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter";
import PopularToys from "../PopularToys/PopularToys";
import ToysCategories from "../ToysCategories/ToysCategories";
import Trending from "../Trending";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <PopularToys />
      <ToysCategories />
      <Trending />
      <NewsLetter />
    </div>
  );
};

export default Home;
