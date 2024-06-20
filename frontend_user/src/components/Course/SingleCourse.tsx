"use client";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { usePathname } from "next/navigation";
import { Row, Skeleton } from "antd";
import { FaRegImage, FaUser } from "react-icons/fa";
import Chapter from "./Chapter";

import test from "@/assets/images/educational-single.jpg";
import LatestCourse from "./LatestCourse";
interface BlogData {
  id: number;
  created_at: string;
  description: string;
  media_url: string;
  short_description: string;
  slug: string;
  thumbnail_url: string;
  title: string;
  type: string;
  updated_at: string;
}

const SingleCourse = () => {
  //   const path = usePathname();
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  //   const slug = path.replace("/activities/", "");
  //   // console.log(slug);

  //   useEffect(() => {
  //     // setLoading(true);
  //     const fetchPostData = async () => {
  //       const response = await fetch(
  //         `${process.env.ADMINURL}/api/getactivity?id=${slug}`
  //       );
  //       const results = await response.json();
  //       // console.log(results.result, "rtytuvbhijnokml");
  //       setBlogData(results.result);
  //       // console.log(results.result);

  //       setLoading(false);
  //     };
  //     fetchPostData();
  //   }, [slug]);

  return (
    <>
      <div className="md:py-16 py-8">
        <div className="xl:px-20 lg:px-8 px-5">
          <div className="flex flex-wrap">
            <div className="lg:w-4/6 w-full">
              {/* {loading ? (
                <>
                  <FaRegImage className="w-full text-gray-300 text-[700px] animate-pulse -mt-16 lg:-ml-10" />
                  <Skeleton
                    paragraph={{ rows: 20 }}
                    active
                    className="lg:-mt-20 p-10"
                  />
                </>
              ) : ( */}
              <div
                className=" bg-white rounded-2xl ddg"
                // style={{ boxShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
              >
                <div className="py-5">
                  <div className="relative overflow-hidden">
                    <img
                      className="drdr duration-700 "
                      width={"100%"}
                      src={test.src}
                      alt={`${process.env.ADMINURL}/uploads/activity/${blogData?.thumbnail_url}`}
                    />
                  </div>

                  <h3 className="lg:text-2xl text-xl uppercase text-[#222121] font-bold pt-5 pb-4 text-left">
                    data 1
                  </h3>
                  <div className="pb-0 pl-3 flex justify-between items-center px-10">
                    <ul className="flex gap-5">
                      <li className="text-xs flex items-center font-semibold">
                        <FaUser className="mr-2 text-[#ff2626]" />
                        BY Shiv
                      </li>
                      <li className="text-xs font-semibold">
                        Published on 15 June 2024
                        {/* {blogData?.created_at
                          ? format(
                              new Date(blogData.created_at),
                              "dd MMM, yyyy"
                            )
                          : ""} */}
                      </li>
                    </ul>
                  </div>
                  <div
                    style={{ textShadow: "0 0 1px #000, 0 0 0px #000" }}
                    className=" md:px-3 px-0 text-justify  my-6 font-thin"
                    // dangerouslySetInnerHTML={{
                    //   __html: blogData?.description || "",
                    // }}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rerum similique dolorum ex fuga ratione animi recusandae,
                    nemo quidem corporis unde porro rem et hic delectus repellat
                    illum? Nihil, quae voluptatibus? Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Rerum similique dolorum ex
                    fuga ratione animi recusandae, nemo quidem corporis unde
                    porro rem et hic delectus repellat illum? Nihil, quae
                    voluptatibus? Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Rerum similique dolorum ex fuga ratione
                    animi recusandae, nemo quidem corporis unde porro rem et hic
                    delectus repellat illum? Nihil, quae voluptatibus? Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                    similique dolorum ex fuga ratione animi recusandae, nemo
                    quidem corporis unde porro rem et hic delectus repellat
                    illum? Nihil, quae voluptatibus? Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Rerum similique dolorum ex
                    fuga ratione animi recusandae, nemo quidem corporis unde
                    porro rem et hic delectus repellat illum? Nihil, quae
                    voluptatibus? Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Rerum similique dolorum ex fuga ratione
                    animi recusandae, nemo quidem corporis unde porro rem et hic
                    delectus repellat illum? Nihil, quae voluptatibus? Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                    similique dolorum ex fuga ratione animi recusandae, nemo
                    quidem corporis unde porro rem et hic delectus repellat
                    illum? Nihil, quae voluptatibus? Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Rerum similique dolorum ex
                    fuga ratione animi recusandae, nemo quidem corporis unde
                    porro rem et hic delectus repellat illum? Nihil, quae
                    voluptatibus? Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Rerum similique dolorum ex fuga ratione
                    animi recusandae, nemo quidem corporis unde porro rem et hic
                    delectus repellat illum? Nihil, quae voluptatibus? Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                    similique dolorum ex fuga ratione animi recusandae, nemo
                    quidem corporis unde porro rem et hic delectus repellat
                    illum? Nihil, quae voluptatibus? Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Rerum similique dolorum ex
                    fuga ratione animi recusandae, nemo quidem corporis unde
                    porro rem et hic delectus repellat illum? Nihil, quae
                    voluptatibus? Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Rerum similique dolorum ex fuga ratione
                    animi recusandae, nemo quidem corporis unde porro rem et hic
                    delectus repellat illum? Nihil, quae voluptatibus? Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                    similique dolorum ex fuga ratione animi recusandae, nemo
                    quidem corporis unde porro rem et hic delectus repellat
                    illum? Nihil,
                  </div>
                </div>
              </div>
              {/* )} */}
            </div>
            <div className="lg:w-2/6 w-full">
              <Chapter />
              <LatestCourse />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
