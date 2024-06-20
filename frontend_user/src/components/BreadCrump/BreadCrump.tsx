"use client";
import React from "react";
import Header from "../Header/Header";

interface LayoutProps {
  title: string; // Define the type of the title prop as string
}

const BreadCrump: React.FC<LayoutProps> = ({ title = "" }) => {
  return (
    <>
      <Header />
      <div className="about-image">
        <div className=" bg-[#00000082] pt-40 pb-24 lg:pt-56 lg:pb-32">
          <div className="lg:px-20">
            <h5
              style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
              className={`text-[#f1efea] uppercase text-center text-3xl md:text-4xl lg:text-5xl font-bold ${title}`}
            >
              {title}
            </h5>
            {/* <h2
              style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
              className="lg:text-5xl md:text-4xl text-3xl pb-4 text-center uppercase font-bold text-[#fff]"
            >
              <span className=" text-red-500">About </span> Acharya Shiv
            </h2> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrump;
