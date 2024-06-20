import BreadCrump from "@/components/BreadCrump/BreadCrump";
import Footer from "@/components/Footer/Footer";
import ProfileUser from "@/components/Header/Profile";
import Header from "@/components/Header/Header";
import React from "react";
import CourseBuyed from "@/components/Header/courseBuyed";
import RecommendedCourses from "@/components/Header/RecommendedCourses";

const profile = () => {
  return (
    <>
      {/* <BreadCrump title="" /> */}
      <Header />
      <ProfileUser />
      <CourseBuyed />
      <RecommendedCourses />
      <Footer />
    </>
  );
};

export default profile;
