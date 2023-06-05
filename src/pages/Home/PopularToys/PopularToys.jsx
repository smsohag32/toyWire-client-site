import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./popularToys.css";
import { EffectCoverflow, Pagination } from "swiper";
import { useEffect, useState } from "react";
import Spinner from "../../../components/Spinner";
const PopularToys = () => {
  const [popularToys, setPopularToys] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchDada = async () => {
      const res = await fetch(`https://toy-wire-server.vercel.app/popular`);
      const data = await res.json();
      setPopularToys(data);
      setLoading(false);
    };
    fetchDada();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="py-20">
      <div className="toy-container">
        <div className="text-center">
          <h2 className="text-2xl">Popular Robotic Toys Gallery</h2>

          <p className="secondary-text">You may like this</p>
        </div>

        <div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="popularToyImg"
          >
            {popularToys &&
              popularToys.map((popularToy) => (
                <SwiperSlide key={popularToy._id}>
                  <img src={popularToy?.img} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularToys;
