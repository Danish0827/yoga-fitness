import Link from "next/link";
import React from "react";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { RiVidicon2Line } from "react-icons/ri";

import test from "@/assets/images/educational-single.jpg";

const RecommendedCourses = () => {
  return (
    <>
      <div className="block py-4 pt-12 lg:px-16">
        <div className="block">
          <h4 className="flex items-center gap-3 text-xl font-medium mb-7 hover:text-[#ed7936]  pl-5">
            <RiVidicon2Line className="text-[#ed7936] " />
            Recommended Courses
            {/* <MdKeyboardDoubleArrowRight /> */}
          </h4>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-full px-4 z-10 mb-3">
            <Link href={`profile/slug`}>
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
                      <span className="flex items-center text-justify duration-100 text-[#ed7936] text-[18px] font-semibold md:text-[15px]">
                        <FaRegCalendarAlt className="mr-1" /> Lesson
                      </span>
                      <span className="flex items-center text-justify duration-100 text-[#ed7936] text-[18px] font-semibold md:text-[15px]">
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
          <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-full px-4 z-10 mb-3">
            <Link href={`profile/slug`}>
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
                      <span className="flex items-center text-justify duration-100 text-[#ed7936] text-[18px] font-semibold md:text-[15px]">
                        <FaRegCalendarAlt className="mr-1" /> Lesson
                      </span>
                      <span className="flex items-center text-justify duration-100 text-[#ed7936] text-[18px] font-semibold md:text-[15px]">
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
        </div>
      </div>
    </>
  );
};

export default RecommendedCourses;
