import React from "react";
import consultationData from "@/data/consultationData";
import Link from "next/link";
import Image from "next/image";
import mandala from "@/assets/images/ornaments-leaves.svg";

const Consultation = () => {
  const { consultationItem } = consultationData;

  return (
    <>
      <div className="relative">
        <div className="absolute right-0 top-24 -z-10">
          <img
            className="rotate-180 opacity-30"
            src={mandala.src}
            alt="Mandala Decoration"
          />
        </div>
      </div>
      <div className="md:pt-20 pt-10">
        <div className="block pb-7">
          <h2
            style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
            className="uppercase lg:text-5xl md:text-4xl text-3xl pb-4 text-center font-bold text-[#000]"
          >
            <span className="font-semibold text-red-500">Cons</span>ultation
          </h2>
        </div>
        <div className="relative">
          <div className="absolute top-64 -z-10">
            <img
              className="opacity-40"
              src={mandala.src}
              alt="Mandala Decoration"
            />
          </div>
        </div>
        <div className="w-full xl:px-28 lg:px-24 md:px-20 px-8">
          <div className="flex flex-wrap justify-center">
            {consultationItem.map((items, index) => (
              <div
                key={index}
                className="xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 my-3"
              >
                <Link href={items.slug}>
                  <div className="">
                    <img
                      className="m-auto"
                      src={items.image.src}
                      alt={items.title}
                    />
                    <h5 className="pt-5 h-20 text-center font-semibold lg:text-xl md:text-xl text-lg">
                      {items.title}
                    </h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultation;
