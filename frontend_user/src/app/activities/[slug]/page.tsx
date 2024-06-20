import ActivitiesSingle from "@/components/Activities/ActivitiesSingle";
import BreadCrump from "@/components/BreadCrump/BreadCrump";
import Footer from "@/components/Footer/Footer";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Activities Single || Acharya Shiv",
  description: "Activities Single || Acharya Shiv",
};

const activitiesSingle = () => {
  return (
    <>
      <BreadCrump title="Activities Detail" />
      <ActivitiesSingle />
      <Footer />
    </>
  );
};

export default activitiesSingle;
