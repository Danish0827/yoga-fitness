import AboutAcharya from "@/components/AboutAcharya/AboutAcharya";
import BreadCrump from "@/components/BreadCrump/BreadCrump";
import Footer from "@/components/Footer/Footer";
import Preloader from "@/components/Preloader/Preloader";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "About || Acharya Shiv",
  description: "About || Acharya Shiv",
};
const About = () => {
  return (
    <>
      <BreadCrump title="About Acharya Shiv" />
      <AboutAcharya />
      <Footer />
    </>
  );
};

export default About;
