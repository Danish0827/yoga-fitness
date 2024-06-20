import Link from "next/link";
import React from "react";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

const Chapter = () => {
  return (
    <>
      <div className="block">
        <div className="w-full py-6 md:px-6 px-2 z-10">
          <h4 className="px-10 text-center py-5 bg-black text-white font-bold">
            Course features
          </h4>
          <ul className="py-4">
            <li className="flex items-center justify-between font-medium mb-3">
              <span className="flex items-center font-medium">
                <FaRegCalendarAlt className="mr-2" />
                Course duration
              </span>
              <p className="px-5 py-2 text-white bg-black rounded-lg">
                10 Hour
              </p>
            </li>
            <li className="flex items-center justify-between font-medium mb-3">
              <span className="flex items-center font-medium">
                <FaRegCalendarAlt className="mr-2" />
                Total Lectures
              </span>
              <p className="px-5 py-2 text-white bg-black rounded-lg">03</p>
            </li>
            <li className="flex items-center justify-between font-medium mb-3">
              <span className="flex items-center font-medium">
                <FaRegCalendarAlt className="mr-2" />
                Level
              </span>
              <p className="px-5 py-2 text-white bg-black rounded-lg">
                Beginner
              </p>
            </li>
            <li className="flex items-center justify-between font-medium mb-3">
              <span className="flex items-center font-medium">
                <FaRegCalendarAlt className="mr-2" />
                Course duration
              </span>
              <p className="px-5 py-2 text-white bg-black rounded-lg">
                10 Hour
              </p>
            </li>
          </ul>
          <h5 className="text-center bg-black text-white py-4 rounded-xl">
            Price - 60$
          </h5>
        </div>
      </div>
    </>
  );
};

export default Chapter;
