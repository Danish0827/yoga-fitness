"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import headerData from "@/data/headerData";
import commomData from "@/data/commonData";
// import imagesData from "@/data/images";

// import instagram from "@/assets/images/Instagram.png";
// import whatsapp from "@/assets/images/whatsapp.png";
// import facebook from "@/assets/images/facebook-logo.svg";
// import linkedin from "@/assets/images/linkedin.png";

const { footerData, logo } = headerData;

// Extend the window object to include WhWidgetSendButton
declare global {
  interface Window {
    WhWidgetSendButton: any;
  }
}

const Footer = () => {
  const { gray, white, skyBlue } = commomData;
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://static.getbutton.io/widget-send-button/js/init.js";
    script.onload = () => {
      const options = {
        whatsapp: "+91 9619828276",
        email: "yogawithshivhelp@gmail.com",
        // call_to_action: "Message us",
        button_color: "#E0D7C8",
        position: "left",
        order: "whatsapp,email",
      };
      if (window.WhWidgetSendButton) {
        window.WhWidgetSendButton.init(
          "getbutton.io",
          document.location.protocol,
          options
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`block bg-white `}>
      <div className="lg:px-10">
        <div className="bg-white py-12 text-center lg:px-16 px-6 flex flex-wrap lg:justify-start justify-center ">
          <div className="lg:w-1/3 w-full pb-8 lg:p-0">
            <img
              className="w-2/3 xl:w-68 block m-auto md:pb-10 lg:-mt-10"
              src={logo.src}
              alt="Shiv Logo"
            />
            <ul className="flex justify-center">
              <Link href="https://www.instagram.com/folksco.in/">
                <li className="ml-2"></li>
              </Link>
              <Link href="https://wa.me/918828800343">
                <li className="ml-2">
                  {/* <img className="w-10" src={whatsapp.src} alt="WhatsApp" /> */}
                </li>
              </Link>
              <Link href="https://www.facebook.com/hellofolksco?mibextid=ZbWKwL">
                <li className="ml-2">
                  {/* <img className="w-10" src={facebook.src} alt="Facebook" /> */}
                </li>
              </Link>
              <Link href="https://www.linkedin.com/company/folksco-interior-and-exterior-space-management-company/">
                <li className="ml-2">
                  {/* <img className="w-10" src={linkedin.src} alt="LinkedIn" /> */}
                </li>
              </Link>
            </ul>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full">
            <h3 className="text-xl pb-5 w-full md:text-left text-center lg:-ml-11 lg:text-center font-bold">
              Quick Link
            </h3>
            <div className="md:flex md:flex-wrap lg:justify-center mb-6">
              <ul>
                {footerData.map((navItem) => (
                  <Link href={navItem.href} key={navItem.id}>
                    <li
                      className={`font-normal text-sm hover:text-red-500 pb-2 md:text-left text-center`}
                    >
                      {navItem.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 ">
            <h3 className="text-xl pb-5 w-full md:text-left text-center font-bold">
              Contact Us
            </h3>
            <ul className="w-full md:text-left text-center font-normal">
              <li className="flex pb-3">
                <FaLocationDot
                  className={`md:text-xl md:mt-1 mt-3 hidden md:block text mr-1 text-${gray} text-[#E0D7C8]`}
                />
                306/A, Dutta Kripa Building, Kakasaheb Gadgil Marg, Near
                Khedgalli Municipal School, Prabhadevi, Mumbai, Maharashtra,
                400025
              </li>
              <li className="flex pb-3 -ml-1 md:justify-start justify-center">
                <IoIosMail
                  className={`text-2xl mr-1 text-${gray} text-[#E0D7C8]`}
                />
                <Link
                  className=" hover:font-bold"
                  href="mailto:yogawithshivhelp@gmail.com"
                >
                  yogawithshivhelp@gmail.com
                </Link>
              </li>
              <li className="flex pb-3 md:justify-start justify-center">
                <FaPhoneAlt
                  className={`text-xl mr-1 text-${gray} text-[#E0D7C8]`}
                />
                <Link className=" hover:font-bold" href="tel:+919619828276">
                  +91 9619828276
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`bg-${skyBlue} py-3 flex flex-wrap md:px-24`}>
        <div className="lg:w-1/2 w-full lg:text-left text-center">
          <p className="font-normal">
            © 2024 <b> Acharya Shiv</b> All Rights Reserved.
          </p>
        </div>
        <div className="lg:w-1/2 w-full lg:text-right text-center">
          <p className="font-normal">
            Crafted By{" "}
            <Link
              className="font-bold hover:text-red-700"
              href="https://sagartech.co.in/"
            >
              Sagar Tech - Technical Solutions
            </Link>
          </p>
        </div>
      </div>
      <button
        type="button"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        className="!fixed bottom-5 end-5 hidden rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
        id="btn-back-to-top"
      >
        <span className="[&>svg]:w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Footer;
