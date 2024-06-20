import React from "react";
import loader from "@/assets/images/spinner.gif";

export const Spinner = () => {
  return (
    <div className="text-center">
      <img className="m-auto w-24" src={loader.src} alt="" />
    </div>
  );
};
