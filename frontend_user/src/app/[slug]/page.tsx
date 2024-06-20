"use client";
import BreadCrump from "@/components/BreadCrump/BreadCrump";
import Footer from "@/components/Footer/Footer";
import React, { useState } from "react";
import SingleConsult from "@/components/AboutComp/SingleConsult";

const Service = () => {
  const [title, setTitle] = useState("");
  return (
    <>
      <BreadCrump title={title} />
      <SingleConsult settitlechild={setTitle} />
      <Footer />
    </>
  );
};

export default Service;
