import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import autogrip from "../images/autogrip-logo.webp";
import gtradial from "../images/gt-radial-logo.webp";
import runway from "../images/runway-logo.webp";
import michelinbrand from "../images/michelin-logo-brand.webp";
import falkenbrand from "../images/falken-logo-brand.webp";
const images = [autogrip, gtradial, michelinbrand, falkenbrand, runway];

const ImageSlider = () => {
  return (
    <section className="commonhomepagespacetopandbottom brandsmainbox">
      <div className="container">
        <div className="commonheading text-center mb-4">
          <h3>Tyre Brands</h3>
        </div>
        <div className="w-full max-w-4xl mx-auto p-4 m-3">
          <Swiper
            modules={[ Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="rounded-lg shadow-lg"
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
