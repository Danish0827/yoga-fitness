import React from "react";
import Blog from "@/components/Blog/Blog";
import BreadCrump from "@/components/BreadCrump/BreadCrump";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blogs || Acharya Shiv",
  description: "Blogs || Acharya Shiv",
};

const blog = () => {
  return (
    <>
      <BreadCrump title="Blog" />
      <Blog />
      <Footer />
    </>
  );
};

export default blog;
