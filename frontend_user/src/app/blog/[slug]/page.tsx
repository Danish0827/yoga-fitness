import BlogSingle from "@/components/Blog/BlogSingle";
import BreadCrump from "@/components/BreadCrump/BreadCrump";
import Footer from "@/components/Footer/Footer";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blogs Single || Acharya Shiv",
  description: "Blogs Single || Acharya Shiv",
};

const blogSingle = () => {
  return (
    <>
      <BreadCrump title="Blog Single" />
      <BlogSingle />
      <Footer />
    </>
  );
};

export default blogSingle;
