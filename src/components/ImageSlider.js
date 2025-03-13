import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import accelera from "../images/accelera-logo.png";
import apollo from "../images/apollo-logo.png";
import bfgoodrich from "../images/bfgoodrich-logo.png";
import bridgestone from "../images/bridgestone-logo.png";
import continental from "../images/continental-logo.png";
import avon from "../images/avon-logo.png";
const images = [accelera, apollo, bridgestone, continental, bfgoodrich , avon];

const ImageSlider = () => {
  return (
    <section className="commonhomepagespacetopandbottom brandsmainbox">
      <div className="container-fluid">
        <div className="tyrebrandsssheading ">
          <h3>Tyre Brands</h3>
        </div>
        <div className="w-full max-w-4xl mx-auto p-4 m-3">
          <Swiper
            modules={[ Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="rounded-lg"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="img-fluid"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
