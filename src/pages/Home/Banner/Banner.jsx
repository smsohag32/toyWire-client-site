import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./banner.css";
import { Autoplay, FreeMode, Thumbs } from "swiper";
const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="relative w-full">
            <img
              className=""
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
          </div>
          <div className="absolute">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit mollitia iusto expedita modi magni fugit nobis
              quisquam labore, odit obcaecati officia, aspernatur doloremque
              necessitatibus, officiis inventore accusamus sit sunt dolores!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              className=""
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
          </div>
          <div className="absolute">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit mollitia iusto expedita modi magni fugit nobis
              quisquam labore, odit obcaecati officia, aspernatur doloremque
              necessitatibus, officiis inventore accusamus sit sunt dolores!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </div>
          <div className="absolute">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut non
            minima possimus deserunt alias, itaque accusamus nostrum veritatis
            reiciendis reprehenderit error autem rem. Necessitatibus beatae
            sapiente quibusdam magni vero saepe?
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
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
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
