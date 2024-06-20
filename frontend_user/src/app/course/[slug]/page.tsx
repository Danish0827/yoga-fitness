import BreadCrump from "@/components/BreadCrump/BreadCrump";
import SingleCourse from "@/components/Course/SingleCourse";
import Footer from "@/components/Footer/Footer";
import React from "react";

const SingleCourses = () => {
  return (
    <>
      <BreadCrump title="Single Course" />
      <SingleCourse />
      <Footer />
    </>
  );
};

export default SingleCourses;
