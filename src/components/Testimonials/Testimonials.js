import React, { Fragment } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
// banner image
import Jerrell from "../../assets/images/testimonials/jerrell.webp";
import Emmaline from "../../assets/images/testimonials/Emmaline.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../styles/components/swiperSlider.css";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <Fragment>
      <section className="my-8 bg-white">
        <div className="pl-3 pb-2">
          <h1 className="text-xl font-bold border-b-2 w-16 border-stone-800">
            {" "}
            Testimonials
          </h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="cursor-pointer text-center">
              <div>
                <img className="rounded-full " src={Jerrell} alt="" />
              </div>
              <div className="py-5">
                <h1 className="font-semibold text-[15px]">Foot Wear</h1>

                 <h2 className="text-gray-400 text-2xl" >
                  {" "}
                  <FontAwesomeIcon icon={faPause} />{" "}
                </h2>
                <p className="text-gray-400 pb-3" >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, qui.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer text-center">
              <div>
                <img className="rounded-full" src={Emmaline} alt="" />
              </div>
              <div className="py-5">
                <h1 className="font-semibold text-[15px]">Elegant Bags</h1>
                 <h2 className="text-gray-400 text-2xl" >
                  {" "}
                  <FontAwesomeIcon icon={faPause} />{" "}
                </h2>
                <p className="text-gray-400 pb-3" >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, qui.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </Fragment>
  );
};

export default Testimonials;
