import Activities from "@/components/Activities/Activities";
import BreadCrump from "@/components/BreadCrump/BreadCrump";
import Footer from "@/components/Footer/Footer";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Activities || Acharya Shiv",
  description: "Activities || Acharya Shiv",
};

const activitie = () => {
  return (
    <>
      <BreadCrump title="Activities" />
      <Activities impbtn="false" />
      <Footer />
    </>
  );
};

export default activitie;
