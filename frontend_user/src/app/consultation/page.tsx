import BreadCrump from "@/components/BreadCrump/BreadCrump";
import ConsultationForm from "@/components/Consultation/ConsultationForm";
import Footer from "@/components/Footer/Footer";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Consultation || Acharya Shiv",
  description: "Consultation || Acharya Shiv",
};

const Consultation = () => {
  return (
    <>
      <BreadCrump title="Consultation" />
      <ConsultationForm />
      <Footer />
    </>
  );
};

export default Consultation;
