import BreadCrump from "@/components/BreadCrump/BreadCrump";
import Course from "@/components/Course/Course";
import Footer from "@/components/Footer/Footer";
import React from "react";

const Courses = () => {
  return (
    <>
      <BreadCrump title="Courses" />
      <Course />
      <Footer />
    </>
  );
};

export default Courses;
