import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./banner.css";
import { Autoplay, FreeMode, Thumbs } from "swiper";
import Spinner from "../../../components/Spinner";
const Banner = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/offers`)
      .then((res) => res.json())
      .then((offersData) => {
        setOffers(offersData);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <Spinner />;
  }
  console.log(offers);
  return (
    <div className=" h-full">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Autoplay, Thumbs]}
        className="mySwiper2 banner"
      >
        {offers &&
          offers.map((offer) => (
            <SwiperSlide key={offer._id}>
              <div className="w-full">
                <img
                  className="relative h-full contrast-75  brightness-50"
                  src={offer.img}
                />
                <div className="absolute text-white top-0 h-full left-0 bg-gradient-to-b from-[#1b1b1b] to-[rgba(21, 21, 21, 0)] bg-opacity-10 justify-center right-0 ">
                  <div className="flex toy-container md:mt-10 sm:mt-5 lg:mt-14 flex-col lg:flex-row items-center h-full">
                    <div className="text-left sm:space-y-3 md:space-y-3 lg:space-y-3 mt-2 p-2 w-full h-full bg-opacity-20">
                      <h2 className="text-white leading-tight opacity-90 text-xl  md:text-3xl text-center md:text-left">
                        {offer.title}
                      </h2>
                      <p className="w-full text-xs text-center md:text-left md:text-lg px-5 opacity-70">
                        {offer.description}
                      </p>
                    </div>
                    <div className="w-full flex flex-col gap-3 items-center justify-center h-full mb-5">
                      <button className="btn primary-btn outline-none border-none">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Autoplay, Thumbs]}
        className="mySwiper"
      >
        {offers &&
          offers.map((offer) => (
            <SwiperSlide key={offer._id}>
              <img src={offer.img} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banner;
