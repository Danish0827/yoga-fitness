"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Slider1 from "@/assets/images/slider-1.jpg";
import Slider2 from "@/assets/images/slider-2.jpg";
import Slider3 from "@/assets/images/Slider-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const App: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 100000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-96 md:h-[600px] lg:h-dvh"
      >
        <SwiperSlide
          // key={slider.id}
          className="bg-black relative z-20 top-20"
        >
          <div className="">
            <img
              width={"100%"}
              // height={"100vh"}
              className="lg:h-dvh md:h-[600px] h-[310px] object-cover lg:-mt-16"
              src={Slider1.src}
              // alt={slider.meta.heading}
            />
          </div>
          <div className="absolute lg:top-[45%] md:top-[35%] top-28 lg:pl-28 pl-4 z-20 text-white lg:text-3xl text-md">
            <h3 className="new-font font-bold">Consultation</h3>
            <h3 className="new-font font-bold">Yoga Classes</h3>
          </div>
          <div className="absolute lg:top-[45%] top-28 right-0 lg:pr-28  md:top-[35%] pr-4 z-20 text-white lg:text-3xl text-md">
            <h3 className="new-font font-bold">Meditation</h3>
            <h3 className="new-font font-bold">Charity</h3>
          </div>
          <div className="w-full text-center absolute bottom-28 lg:pr-7 pr-4 z-20 text-white lg:text-2xl text-md">
            <p className="new-font font-nornal">Let me Consult You</p>
          </div>
          <div className="block absolute bottom-0 h-full bg-[#0000003a] text-center w-full"></div>
        </SwiperSlide>
        <SwiperSlide
          // key={slider.id}
          className="bg-black relative z-20 top-20"
        >
          <div className="">
            <img
              width={"100%"}
              // height={"100vh"}
              className="lg:h-dvh md:h-[600px] h-[310px] object-cover lg:-mt-20"
              src={Slider2.src}
              // alt={slider.meta.heading}
            />
          </div>
          <div className="absolute lg:top-[35%] top-36 lg:right-28 right-0 lg:pr-7 pr-4 z-20 text-white lg:text-[40px] text-md">
            <h3 className="new-font font-bold">
              Join Our Yoga & Meditation Class
            </h3>
          </div>
          <div className="block absolute bottom-0 h-full bg-[#0000003a] text-center w-full"></div>
        </SwiperSlide>
        <SwiperSlide
          // key={slider.id}
          className="bg-black relative z-20 top-20"
        >
          <div className="">
            <img
              width={"100%"}
              // height={"100vh"}
              className="lg:h-dvh md:h-[600px] h-[310px] object-cover lg:-mt-10"
              src={Slider3.src}
              // alt={slider.meta.heading}
            />
          </div>

          <div className="block absolute bottom-0 h-full bg-[#0000003a] text-center w-full"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default App;
