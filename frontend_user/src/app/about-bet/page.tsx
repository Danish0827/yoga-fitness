import BreadCrump from "@/components/BreadCrump/BreadCrump";
import Footer from "@/components/Footer/Footer";
import AboutBet from "@/components/AboutComp/AboutBet/AboutBet";
import React from "react";
import Vision from "@/components/Vision/Vision";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Bet || Acharya Shiv",
  description: "About Bet || Acharya Shiv",
};

const aboutBetPage = () => {
  return (
    <>
      <BreadCrump title="About Bet" />
      <AboutBet />
      <Vision />
      <Footer />
    </>
  );
};

export default aboutBetPage;
