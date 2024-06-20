"use client";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Consultation from "../Consultation/Consultation";
import AboutComp from "../AboutComp/AboutComp";
import Contact from "../Contact/Contact";
import Activities from "../Activities/Activities";
import Preloader from "../Preloader/Preloader";

const HomePart = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    const fetchPostData = async () => {
      setLoading(false);
    };
    fetchPostData();
  }, []);
  // setLoading(false);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Slider />
          <Consultation />
          <AboutComp />
          <Contact />
          <Activities impbtn="true" />
          <Footer />
        </>
      )}
    </>
  );
};

export default HomePart;
