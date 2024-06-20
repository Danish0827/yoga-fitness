"use client";
import { Skeleton } from "antd";
import Link from "next/link";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  thumbnail_url: string;
  created_at: string;
}

const LatestCourse = () => {
  const [latestBlog, setLatestBlog] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      const response = await fetch(`${process.env.ADMINURL}/api/allactivities`);
      const result = await response.json();
      setLatestBlog(result.activities);
      setLoading(false);
    };
    fetchGalleryData();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Skeleton active className="p-6" />
          <Skeleton active className="p-6" />
          <Skeleton active className="p-6" />
          <Skeleton active className="p-6" />
        </>
      ) : (
        <>
          <div className="px-5">
            <h2 className="mb-5 font-medium font-title text-2xl px-0">
              LATEST ACTIVITIES
            </h2>
            {latestBlog?.slice(0, 4)?.map((item: any, index: any) => (
              <div key={index} className="bg-[#f4f4f4] p-3 rounded-lg mb-2">
                {/* <Link href={`/blog/${item?.blog_title}?id=${item?.id}`}> */}
                <Link
                  href={`/activities/${item.id}`}
                  className="flex flex-wrap"
                >
                  <div className="max-h-[120px] w-1/3 m-auto rounded-full overflow-hidden">
                    <img
                      className="h-[100px] rounded-full m-auto w-[100px] object-cover transition-all ease-in-out hover:scale-150"
                      src={`${process.env.ADMINURL}/uploads/activity/${item?.thumbnail_url}`}
                      alt={`${process.env.ADMINURL}/uploads/activity/${item?.thumbnail_url}`}
                    />
                  </div>
                  <div className="py-2 pl-4 w-2/3 space-y-1">
                    <h2 className="text-[1rem] font-medium line-clamp-3">
                      {item.title}
                    </h2>

                    <span className="text-aqua text-xs">
                      Published on{" "}
                      <span className="text-primary font">
                        {/* {new Date(item.date).toLocaleDateString()} */}
                        {item?.created_at
                          ? format(new Date(item.created_at), "dd MMM yyyy")
                          : ""}
                      </span>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default LatestCourse;
