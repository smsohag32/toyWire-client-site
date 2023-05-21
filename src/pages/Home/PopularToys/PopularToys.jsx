import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./popularToys.css";
import { EffectCoverflow, Pagination } from "swiper";
import { useEffect, useState } from "react";
const PopularToys = () => {
  const [popularToys, sePopularToys] = useState([]);

  useEffect(() => {
    fetch(`https://toy-wire-server.vercel.app/popular`)
      .then((res) => res.json())
      .then((data) => {
        sePopularToys(data);
      });
  }, []);

  return (
    <div className="py-10">
      <div className="toy-container">
        <div className="text-center">
          <h2 className="text-2xl">Popular Robotic Toys Gallery</h2>

          <p>You may like this</p>
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
