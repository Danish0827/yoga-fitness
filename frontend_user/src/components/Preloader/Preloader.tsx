import React from "react";
import preloder from "@/assets/images/shiv.jpeg";

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        className="w-48 translate-x-4 animate-skew"
        src={preloder.src}
        alt="Preloader"
      />
    </div>
  );
};

export default Preloader;
