"use client";

import React from "react";
import Image from "next/image";
import mandala from "@/assets/images/ornaments-leaves.svg";
import imagesm from "@/assets/images/shiv-image.jpg";

const AboutAcharya = () => {
  return (
    <div className="block py-12">
      <div className="relative hidden lg:block">
        <div className="absolute right-0 top-24 z-[9]">
          <img
            className="rotate-180 opacity-50 xl:w-full w-96"
            src={mandala.src}
            alt="Mandala Decoration"
          />
        </div>
      </div>
      <div className="lg:flex px-4">
        <div className="lg:w-1/2 w-full lg:px-6">
          <div className="md:w-full m-auto">
            <div className="flex flex-wrap">
              <div className="w-full mt-auto md:px-2 pb-2">
                <div className="relative text-white">
                  <img
                    className="ml-auto xl:w-[90%] w-full"
                    src={imagesm.src}
                    alt="Acharya Shiv"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full md:px-6 lg:pr-0 py-6 m-auto lg:relative -left-12 bg-white lg:mb-0">
          <div className="md:w-full ml-auto">
            <h3 className="text-2xl folksco-color font-bold pb-3 text-left">
              ABOUT ACHARYA SHIV
            </h3>
            <p className="text-justify text-[#666] xl:text-[17px] font-normal mb-2 md:text-[15px]">
              Acharya Shiv is a dedicated Yoga Teacher, & Meditation practiced
              Counsellor adept in classical Yoga style, Vedant & Human
              Psychology & Behaviour, who integrates physical practice with
              mindfulness and meditation. Additionally, he provides counseling
              services, offering holistic support to his students' mental and
              emotional well-being. His approach fosters a balanced and
              harmonious lifestyle, promoting overall health and personal
              growth. Passionate about giving back to society, he actively
              participates in charity work and community services through BET
              (Bharadwaj Education Trust).
            </p>
            <p className="text-justify text-[#666] xl:text-[17px] font-normal mb-2 lg:text-[15px]">
              Acharya Shiv is a devoted Yoga Teacher and Meditation Counselor
              with expertise in classical Yoga, Vedanta, and Human Psychology
              and Behavior. He seamlessly combines physical practice with
              mindfulness and meditation, providing holistic support for his
              students' mental and emotional well-being. His approach encourages
              a balanced and harmonious lifestyle, enhancing overall health and
              personal growth. Committed to giving back to society, he actively
              engages in charity work and community services through the
              Bharadwaj Education Trust (BET).
            </p>
            <p className="text-justify text-[#666] xl:text-[18px] font-semibold mb-2 md:text-[15px]">
              Shiv has left no stone unturned in his journey of inner
              exploration. Curious to explore human consciousness in its depth,
              he can help you reinforce your faith in life, love & health back
              again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAcharya;
