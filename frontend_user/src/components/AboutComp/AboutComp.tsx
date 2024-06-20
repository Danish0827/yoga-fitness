import Image from "next/image";
import Link from "next/link";
import React from "react";

import imageabout from "@/assets/images/pexels-oluremi-adebayo-1507823-2908175 (1).jpg";
import mandala from "@/assets/images/ornaments-leaves.svg";
// const { bgImages } = expertiseData;

const AboutComp = () => {
  return (
    <>
      <div
        className="block py-12"
        // style={{
        //   background: `url(${bgImages.src})`,
        // }}
      >
        <div className="block pb-2 lg:pb-7">
          <h2
            style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
            className="lg:text-5xl md:text-4xl text-3xl pb-4 text-center uppercase font-bold text-[#000]"
          >
            <span className="font-semibold text-red-500">About </span> Acharya
            Shiv
          </h2>
        </div>
        <div className="relative">
          <div className="absolute top-24 right-0 -z-10">
            <img
              className="rotate-180 opacity-40"
              src={mandala.src}
              alt="Mandala"
            />
          </div>
        </div>
        <div className="lg:flex px-4 lg:px-24 m-auto">
          <div className="lg:w-1/2 w-full lg:px-6 m-auto fade-in-left sfgfg">
            <div className="relative">
              <img
                width={"w-full"}
                src={imageabout.src}
                alt="About Acharya Shiv"
              />
              {/* <h4 className="text-white text-xl font-semibold text-center py-2 absolute top-0 w-full h-full flex items-center justify-center bg-[#00000066]"></h4> */}
            </div>
          </div>
          <div className="lg:w-1/2 w-full md:px-6 lg:pr-0 py-6 m-auto fade-in-right">
            <div className="md:w-full ml-auto">
              <h3 className="text-3xl folksco-color font-bold pb-3 text-left">
                Acharya Shiv
              </h3>
              <p className="text-justify text-[#666] xl:text-[18px] font-normal mb-2 md:text-[15px]">
                Acharya Shiv is dedicated Yoga Teacher, & Meditation practiced
                Counsellor adept in classical Yoga style, Vedant & Human
                Psychology & Behaviour, who integrates physical practice with
                mindfulness and meditation. Additionally, he provides counseling
                services, offering holistic support to his students&apos; mental
                and emotional well-being. His approach fosters a balanced and
                harmonious lifestyle, promoting overall health and personal
                growth. Passionate about giving back to society, he actively
                participate in charity work and community services through BET
                (Bharadwaj Education Trust).
              </p>
              <div className="block m-auto pt-5">
                <Link href="/about">
                  <button className="px-10 py-3 rounded-lg bg-[#f1efea] text-black hover:text-red-500 font-bold">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComp;
