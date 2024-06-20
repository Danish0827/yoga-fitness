import BreadCrump from "@/components/BreadCrump/BreadCrump";
import Footer from "@/components/Footer/Footer";
import React from "react";
import { Metadata } from "next";
import Yogaclass from "@/components/YogaClass/YogaClass";
export const metadata: Metadata = {
  title: "Yoga Classes And Meditation || Acharya Shiv",
  description: "Yoga Classes And Meditation || Acharya Shiv",
};

const YogaClass = () => {
  return (
    <>
      <BreadCrump title="Yoga Classes And Meditation" />
      <Yogaclass />
      <Footer />
    </>
  );
};

export default YogaClass;
