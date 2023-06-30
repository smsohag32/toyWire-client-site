import { useEffect, useState } from "react";
// import Spinner from "../../components/Spinner";
import ToyCard from "../../components/ToyCard";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
const Trending = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://toy-wire-server.vercel.app/trending`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTrendingData(data);
      });
  }, []);

  return (
    <div className="toy-container py-10">
      <div>
        <h2 className="text-2xl font-bold mb-2">Trending Toys Collection</h2>
        <p className="text-gray-700 md:max-w-3xl">
          Explore the exciting world of robotics with our collection of trending
          robotics toys. These innovative toys combine fun and education,
          allowing kids to learn about coding, engineering, and problem-solving
          while having a blast.
        </p>
      </div>
      <hr className="mt-5" />
      {loading && <Spinner />}
      <div className="grid my-8 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {trendingData &&
          trendingData.map((toy) => <ToyCard key={toy._id} toy={toy} />)}
      </div>
      <div className="flex items-center pt-8 justify-end">
        <Link to="/alltoys" className="primary-btn">
          See All Products
        </Link>
      </div>
    </div>
  );
};

export default Trending;
