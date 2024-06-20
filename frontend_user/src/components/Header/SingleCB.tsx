import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RiVidicon2Line } from "react-icons/ri";
import test from "@/assets/images/educational-single.jpg";
import { GoPlay } from "react-icons/go";
import { Button } from "antd";

const SingleCB = () => {
  return (
    <>
      <div className="flex flex-wrap bg-gray-100 p-4">
        <div className="lg:w-4/12 w-full mb-4 md:mb-5 px-3">
          <div className="p-8 bg-white shadow-lg rounded-md">
            <h4 className="lg:px-10 text-center py-5 mb-5 bg-black text-white font-bold rounded-md">
              Course Heading
            </h4>
            <ul>
              <Link href="/profile/42">
                <li className="flex items-center gap-3 lg:text-xl md:text-lg font-medium mb-4 hover:text-[#ed7936] transition-colors">
                  <RiVidicon2Line className="text-[#ed7936] text-xl" />
                  Title 1
                  {/* <MdKeyboardDoubleArrowRight className="text-xl" /> */}
                </li>
              </Link>
              <Link href="/profile/43">
                <li className="flex items-center gap-3 lg:text-xl md:text-lg font-medium mb-4 hover:text-[#ed7936] transition-colors">
                  <RiVidicon2Line className="text-[#ed7936] text-xl" />
                  Title 2
                  {/* <MdKeyboardDoubleArrowRight className="text-xl" /> */}
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="lg:w-8/12 w-full">
          <div className="px-4 py-10 bg-white shadow-lg rounded-md">
            <h3 className="text-2xl font-semibold pb-4">Title 1</h3>
            <div className="relative">
              <img
                className="w-full h-auto rounded-md"
                src={test.src}
                alt="Educational content"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-md">
                <GoPlay className="text-5xl text-white cursor-pointer" />
              </div>
            </div>
            <p className="py-7 text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              placeat assumenda dignissimos, iusto beatae optio, tempore cumque
              a impedit voluptatibus minima eius sunt numquam aspernatur
              recusandae quae fugiat, molestiae dolor?
            </p>
            <div className="flex justify-between items-center">
              <Button className="text-white bg-black hover:bg-gray-800 transition-colors md:text-xl font-extrabold md:h-12">
                Previous
              </Button>
              <Button className="text-white bg-black hover:bg-gray-800 transition-colors md:text-xl font-extrabold md:h-12">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCB;
