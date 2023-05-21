import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter";
import PopularToys from "../PopularToys/PopularToys";
import ToysCategories from "../ToysCategories/ToysCategories";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <PopularToys />
      <ToysCategories />
      <NewsLetter />
    </div>
  );
};

export default Home;
