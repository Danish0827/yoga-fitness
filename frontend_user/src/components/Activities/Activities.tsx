"use client";
import { Skeleton } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegImage } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../Preloader/Spinner";
import { format } from "date-fns";
import mandala from "@/assets/images/ornaments-leaves.svg";

interface ActivitiesProps {
  impbtn: any; // or the appropriate type for impbtn
}
interface ActivitiesPost {
  id: number;
  slug: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  short_description: string;
  thumbnail_url: string;
  media_url: string;
  type: string;
}

const Activities: React.FC<ActivitiesProps> = ({ impbtn = "" }) => {
  const [activities, setActivities] = useState<ActivitiesPost[]>([]);
  const [activitiesLength, setActivitiesLength] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchGalleryData = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.ADMINURL}/api/allactivities?page=${page}&pageSize=2`
      );
      const result = await response.json();

      if (page === 1) {
        setActivities(result.activities);
      } else {
        setActivities((prevActivities) => [
          ...prevActivities,
          ...result.activities,
        ]);
      }
      setActivitiesLength(result.totalActivities);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryData(page);
  }, [page]);

  const fetchMoreData = () => {
    setTimeout(() => {
      if (activities.length < activitiesLength) {
        setPage((prevPage) => prevPage + 1);
      }
    }, 1000);
  };

  const formatDate = (dateStr: string) => {
    return format(new Date(dateStr), "dd MMM yyyy");
  };

  const displayedActivities =
    impbtn === "true" ? activities.slice(0, 3) : activities;

  return (
    <>
      <div className="block py-12 bg-[#ffffff]">
        <div className="block pb-2 lg:pb-7">
          {impbtn === "true" && (
            <h2
              style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
              className="lg:text-5xl md:text-4xl text-3xl pb-4 text-center uppercase font-bold text-[#000]"
            >
              <span className="font-semibold text-red-500">Acti</span>vities
            </h2>
          )}
        </div>
        <div className="relative">
          <div className="absolute top-96 right-0 ">
            <img className="rotate-180 opacity-40" src={mandala.src} alt="" />
          </div>
        </div>

        {loading && page === 1 ? (
          <div className="lg:flex flex-wrap px-4 md:px-24">
            {Array(3)
              .fill(3)
              .map((_, index) => (
                <div
                  className="xl:w-1/3 lg:w-1/2 w-full py-6 md:px-6 px-3 z-10"
                  key={index}
                >
                  <FaRegImage className="w-full text-gray-300 text-[700px] animate-pulse -mt-16" />
                  <Skeleton className="-mt-28" />
                </div>
              ))}
          </div>
        ) : (
          <>
            <InfiniteScroll
              dataLength={displayedActivities.length}
              next={fetchMoreData}
              hasMore={activities.length < activitiesLength}
              loader={impbtn === "false" && <Spinner />}
            >
              <div className="lg:flex flex-wrap px-4 md:px-24">
                {displayedActivities.map(
                  ({ id, slug, created_at, title, thumbnail_url }) => (
                    <div
                      className="xl:w-1/3 lg:w-1/2 w-full py-6 md:px-6 px-3 z-10"
                      key={id}
                    >
                      <Link href={`activities/${[id]}`}>
                        <div
                          className=" bg-white rounded-2xl dgdg"
                          style={{
                            boxShadow: "0 0 3px #ed7936, 0 0 0px #ed7936",
                          }}
                        >
                          <div className="relative overflow-hidden rounded-t-2xl lg:h-auto xl:h-[230px] 2xl:h-auto">
                            <img
                              className="drdr duration-700 "
                              width={"100%"}
                              height={"300px"}
                              src={`${process.env.ADMINURL}/uploads/activity/${thumbnail_url}`}
                              alt={`${process.env.ADMINURL}/uploads/activity/${thumbnail_url}`}
                            />
                            <p className="px-2 py-1 absolute bottom-0 left-2 bg-[#222121] text-white z-1">
                              {formatDate(created_at)}
                            </p>
                          </div>
                          <div className="xl:px-7 px-4 py-5">
                            <h3 className="xl:text-xl text-lg uppercase text-[#222121] font-bold pb-7 text-left">
                              {title}
                            </h3>
                            <span
                              style={{
                                textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936",
                              }}
                              className="adad cursor-pointer text-justify duration-100 hover:text-[#ed7936] text-[#666] text-[18px] font-semibold mb-2 md:text-[15px]"
                            >
                              Read more
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                )}
              </div>
            </InfiniteScroll>
          </>
        )}

        {impbtn === "true" && (
          <div className="block m-auto pt-5 text-center relative z-[99]">
            <Link href="/activities">
              <button
                className={`px-10 py-3 rounded-lg bg-[#f1efea] text-black hover:text-red-500 font-bold`}
              >
                View More
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Activities;
