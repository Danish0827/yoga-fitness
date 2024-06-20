import commomData from "@/data/commonData";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import mandala from "@/assets/images/ornaments-leaves.svg";

const Contact = () => {
  const { skyBlue } = commomData;
  return (
    <>
      <div className={`py-24 lg:px-28 md:px-10 px-8 bg-${skyBlue}`}>
        <div className="relative">
          <div className="absolute -top-16 -left-28">
            <img
              className="opacity-30 brightness-75"
              src={mandala.src}
              alt="Mandala Decoration"
            />
          </div>
        </div>
        <div className="container">
          <div className="flex flex-wrap">
            <div className="lg:w-4/6 w-full">
              <div className="block">
                <h4 className="lg:text-5xl md:text-4xl text-2xl text-center lg:text-left font-semibold">
                  Ready for Inner Peace?
                  <br /> We&apos;re Here to Assist with Yoga!
                </h4>
              </div>
            </div>
            <div className="lg:w-2/6 w-full m-auto">
              <div className="block text-center">
                <Link href="/consultation">
                  <button className="bg-white hover:bg-black hover:text-white duration-200 lg:px-8 px-5 py-2 lg:py-4 font-bold rounded-lg lg:text-xl mt-8 lg:mt-0">
                    Book an appointment
                    {/* <FaLongArrowAltRight className="ml-2" /> */}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
