"use client";
import Link from "next/link";
import React, { useState } from "react";
import mandala from "@/assets/images/ornaments-leaves.svg";

import test from "@/assets/images/educational-single.jpg";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

const Course = () => {
  const [loading, setLoading] = useState();

  return (
    <>
      <div className="block py-12 bg-[#ffffff]">
        <div className="block pb-2 lg:pb-7">
          {/* <h2
            style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
            className="lg:text-5xl md:text-4xl text-3xl pb-4 text-center uppercase font-bold text-[#000]"
          >
            <span className="font-semibold text-red-500">B</span>log
          </h2> */}
        </div>
        <div className="relative">
          <div className="absolute top-96 right-0 ">
            <img className="rotate-180 opacity-40" src={mandala.src} alt="" />
          </div>
        </div>

        {/* {loading && page === 1 ? (
          <div className="lg:flex flex-wrap px-4 md:px-5">
            {Array(3)
              .fill(3)
              .map((_, index) => (
                <div
                  className="xl:w-1/3 lg:w-1/2 w-full py-6 md:px-1 px-3 z-10"
                  key={index}
                >
                  <FaRegImage className="w-full text-gray-300 text-[700px] animate-pulse -mt-44" />
                  <Skeleton className="-mt-44" />
                </div>
              ))}
          </div>
        ) : (
          <> */}

        <div className="lg:flex flex-wrap px-4 md:px-24">
          {/* {blogs.map(({ id, slug, created_at, title, thumbnail_url }) => ( */}
          <div className="xl:w-1/3 lg:w-1/2 w-full py-6 md:px-6 px-3 z-10">
            <Link href={`course/slug`}>
              <div
                className="bg-white rounded-2xl dgdg"
                style={{
                  boxShadow: "0 0 3px #ed7936, 0 0 0px #ed7936",
                }}
              >
                <div className="relative overflow-hidden rounded-t-2xl lg:h-auto xl:h-[230px] 2xl:h-auto">
                  <img
                    className="duration-700"
                    width={"100%"}
                    height={"300px"}
                    src={test.src}
                    alt="Acharya Shiv"
                  />
                  {/* <p className="px-2 py-1 absolute bottom-5 right-4 bg-[#ed7936] rounded-md text-white font-semibold z-1">
                    ₹ 1999
                  </p> */}
                </div>
                <div className="xl:px-7 px-4 py-5">
                  <h3 className="xl:text-xl text-lg uppercase text-[#222121] font-bold pb-4 text-left">
                    {/* {title} */}fdsf
                  </h3>
                  <div className="flex gap-5 items-center justify-between">
                    <div className="flex gap-5">
                      <span className="flex items-center text-justify duration-100 text-[#ed7936] text-[14px] font-semibold md:text-[16px]">
                        <FaRegCalendarAlt className="mr-1" />5 Lessons
                      </span>
                      <span className="flex items-center text-justify duration-100 text-[#ed7936] text-[14px] font-semibold md:text-[16px]">
                        <FaRegClock className="mr-1" /> 05h 45m
                      </span>
                    </div>

                    <p className="px-2 py-1  bg-[#ed7936] rounded-md text-white font-semibold z-1">
                      ₹ 1999
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* ))} */}
        </div>
        {/* </>
        )} */}
      </div>
    </>
  );
};

export default Course;
