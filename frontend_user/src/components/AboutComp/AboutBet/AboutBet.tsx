"use client";
import React from "react";
import aboutMen from "@/assets/images/energetic-female-fitness-trainer-ai-generated.jpg";
import aboutMen1 from "@/assets/images/men2.jpg";

const aboutBet = () => {
  return (
    <>
      <div className="block">
        <div className="lg:pt-20 md:pt-16 pt-12 lg:px-10">
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 w-full">
              <div className="px-4">
                <div className="lg:h-[600px] overflow-hidden relative rounded-xl mb-10">
                  {/* <div className="bg-[#0000008a] relative z-20 top-0 bottom-0 left-0 right-0"> */}
                  <img
                    style={{
                      textShadow: "0 0 30px #ed7936, 0 0 0px #ed7936 ",
                    }}
                    className="lg:w-[400px] w-[280px] rounded-2xl lg:m-8 -z-10"
                    src={aboutMen.src}
                    alt=""
                  />
                  {/* </div> */}
                  <img
                    style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
                    className="absolute lg:top-20 top-12 lg:left-[350px] left-[165px] lg:w-72 w-48 rounded-2xl z-30"
                    src={aboutMen1.src}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full m-auto">
              <div className="px-4">
                <h3 className="font-bold lg:text-3xl md:text-2xl text-xl mb-5">
                  About Bet
                </h3>
                <p className="mb-3 text-justify text-[#555]">
                  Bharadwaj Education Trust is dedicated to enhancing the
                  well-being of individuals and communities through the
                  promotion of yoga, meditation, spiritual wisdom, Ancient
                  Indian civilisation & values, charity, spreading love &
                  kindness along way.
                </p>
                <p className="mb-3 text-justify text-[#555]">
                  We believe that Higher knowledge, Charity, Kindness & Love
                  belongs to each and everyone irrespective of caste, creed,
                  society & class. Our initiatives are designed to support this
                  holistic approach to serve mankind
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutBet;
