"use client";
import React, { useEffect } from "react";
import aboutMen from "@/assets/images/energetic-female-fitness-trainer-ai-generated.jpg";
import Link from "next/link";
// import YogaData from "@/data/YogaClassData";
import { useParams } from "next/navigation";
import { yogaData } from "@/data/YogaClassData";

interface SingleConsultProps {
  settitlechild: any;
}
const SingleConsult: React.FC<SingleConsultProps> = ({ settitlechild }) => {
  const slugParams = useParams();
  const { slug } = slugParams;

  const filteredData = yogaData?.filter((item) => item.slug === slug);

  useEffect(() => {
    if (filteredData && filteredData.length > 0) {
      settitlechild(filteredData[0].title);
    }
  }, [filteredData, settitlechild]);

  if (!filteredData || filteredData.length === 0) {
    return <div>No data found for this consultation.</div>;
  }

  return (
    <>
      <div className="block">
        <div className="py-28 lg:px-10">
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 w-full m-auto">
              <div className="px-4">
                <div className="overflow-hidden relative rounded-xl mb-10 lg:mb-0">
                  <img
                    style={{
                      textShadow: "0 0 30px #ed7936, 0 0 0px #ed7936 ",
                    }}
                    className="xl:w-[75%] w-full rounded-2xl lg:m-auto -z-10"
                    src={filteredData[0].image.src}
                    alt={filteredData[0].title}
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full m-auto">
              <div className="px-4">
                <h3 className="font-bold lg:text-left text-center lg:text-3xl md:text-2xl text-xl mb-5">
                  {filteredData[0].title}
                </h3>
                <p className="mb-3 text-justify text-[#555]">
                  {filteredData[0].description}
                </p>
                <div className="block m-auto lg:pt-2 pt-5 text-center lg:text-left">
                  <Link href="/consultation">
                    <button
                      className={`px-10 py-3 rounded-lg bg-[#f2ead7] text-black hover:text-white hover:bg-black font-bold`}
                    >
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleConsult;
