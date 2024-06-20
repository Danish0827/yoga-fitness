"use client";
import React, { useEffect, useState } from "react";
import LatestBlogs from "./LatestBlogs";
import { format } from "date-fns";
import { usePathname } from "next/navigation";
import { Row, Skeleton } from "antd";
import { FaRegImage, FaUser } from "react-icons/fa";

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

const ActivitiesSingle = () => {
  const path = usePathname();
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const slug = path.replace("/activities/", "");
  // console.log(slug);

  useEffect(() => {
    // setLoading(true);
    const fetchPostData = async () => {
      const response = await fetch(
        `${process.env.ADMINURL}/api/getactivity?id=${slug}`
      );
      const results = await response.json();
      // console.log(results.result, "rtytuvbhijnokml");
      setBlogData(results.result);
      // console.log(results.result);

      setLoading(false);
    };
    fetchPostData();
  }, [slug]);

  return (
    <>
      <div className="py-16">
        <div className="xl:px-20 lg:px-8">
          <div className="flex flex-wrap">
            <div className="lg:w-4/6 w-full">
              {loading ? (
                <>
                  <FaRegImage className="w-full text-gray-300 text-[700px] animate-pulse -mt-16 lg:-ml-10" />
                  <Skeleton
                    paragraph={{ rows: 20 }}
                    active
                    className="lg:-mt-20 p-10"
                  />
                </>
              ) : (
                <div
                  className=" bg-white rounded-2xl ddg"
                  // style={{ boxShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
                >
                  <div className="py-5">
                    <h3 className="lg:text-2xl text-xl uppercase text-[#222121] font-bold pb-2 text-left">
                      {blogData?.title}
                    </h3>
                    <div className="pb-6 pl-3">
                      <ul className="flex gap-5">
                        <li className="text-xs flex items-center font-semibold">
                          <FaUser className="mr-2 text-[#ff2626]" />
                          BY ADMIN
                        </li>
                        <li className="text-xs font-semibold">
                          Published on{" "}
                          {blogData?.created_at
                            ? format(
                                new Date(blogData.created_at),
                                "dd MMM, yyyy"
                              )
                            : ""}
                        </li>
                        {(blogData?.created_at
                          ? format(
                              new Date(blogData.created_at),
                              "dd MMM, yyyy HH:mm:ss"
                            )
                          : "") ===
                        (blogData?.updated_at
                          ? format(
                              new Date(blogData.updated_at),
                              "dd MMM, yyyy HH:mm:ss"
                            )
                          : "") ? (
                          ""
                        ) : (
                          <li className="text-xs  text-gray-600">
                            Last Update on{" "}
                            {blogData?.updated_at
                              ? format(
                                  new Date(blogData.updated_at),
                                  "dd MMM, yyyy "
                                )
                              : ""}
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="relative overflow-hidden">
                      <img
                        className="drdr duration-700 "
                        width={"100%"}
                        src={`${process.env.ADMINURL}/uploads/activity/${blogData?.thumbnail_url}`}
                        alt={`${process.env.ADMINURL}/uploads/activity/${blogData?.thumbnail_url}`}
                      />
                      <p className="px-2 py-1 absolute bottom-2 left-2 bg-[#222121] text-white z-1">
                        {blogData?.type}
                      </p>
                    </div>

                    {blogData?.media_url ? (
                      <img
                        className="w-full px-5 pt-5"
                        src={`${process.env.ADMINURL}/uploads/activity/${blogData?.media_url}`}
                        // alt="https://www.shutterstock.com/image-vector/picture-vector-icon-image-illustration-260nw-1472793368.jpg"
                      />
                    ) : (
                      ""
                    )}
                    <div
                      style={{ textShadow: "0 0 1px #000, 0 0 0px #000" }}
                      className="text-lg tracking-wide leading-8 md:px-3 px-0 text-justify  my-6 font-thin"
                      dangerouslySetInnerHTML={{
                        __html: blogData?.description || "",
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            <div className="lg:w-2/6 w-full">
              {loading ? (
                <>
                  <Skeleton active className="p-6" />
                  <Skeleton active className="p-6" />
                  <Skeleton active className="p-6" />
                  <Skeleton active className="p-6" />
                </>
              ) : (
                <LatestBlogs />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesSingle;
