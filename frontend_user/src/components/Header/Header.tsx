"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import headerData from "@/data/headerData";
import mandala from "@/assets/images/ornaments-leaves.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLongArrowAltRight,
  FaPhoneAlt,
} from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BiDownArrow } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import commomData from "@/data/commonData";
import { Button, Modal, Input } from "antd";
import { processPayments } from "../Consultation/RazorpayDonate";
import Swal from "sweetalert2";
import { deleteCookie, getCookie } from "@/utils";
import { addstudent } from "@/store/studentSlice";
import { IRootState } from "@/store";

const Header = () => {
  const { logo, navData } = headerData;
  const { gray, skyBlue, white } = commomData;
  const [showContent, setShowContent] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [path, setPath] = useState<string>("");
  const [statelink, setStateLink] = useState("");
  const [showDropsBET, setShowDropsBET] = useState(false);
  const [showDropsService, setShowDropsService] = useState(false);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState<number | null>(null);
  const [showMobileBet, setShowMobileBet] = useState(false);
  const [showMobileService, setShowMobileService] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPostData = async () => {
      setLoading(false);
    };
    fetchPostData();
  }, []);

  useEffect(() => {
    const handlePathChange = () => {
      setPath(window.location.pathname + window.location.hash);
    };

    handlePathChange();
    window.addEventListener("popstate", handlePathChange);

    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowContent(false);
      } else {
        setShowContent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleMouseEnterBET = () => {
    setShowDropsBET(true);
  };

  const handleMouseLeaveBET = () => {
    setShowDropsBET(false);
  };

  const handleMouseEnterService = () => {
    setShowDropsService(true);
  };

  const handleMouseLeaveService = () => {
    setShowDropsService(false);
  };

  const handleMobileBET = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMobileBet((prev) => !prev);
  };

  const handleMobileService = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMobileService((prev) => !prev);
  };

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleAmountClick = (value: number) => {
    setAmount(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleDonate = async () => {
    if (amount !== null) {
      setLoading(true);
      await processPayments(amount, "This is a Donation");
      setLoading(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Amount",
        text: "Please enter a valid amount.",
      });
      console.log("Please enter a valid amount.");
    }
  };

  const fetchsuperAdminData = async () => {
    const token = getCookie("Acharya_web_token");
    if (token) {
      const res = await fetch("/api/Student/getStudentData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        deleteCookie("Acharya_web_token");
      }
      if (res.ok) {
        const data = await res.json();
      }
    }
  };

  useEffect(() => {
    fetchsuperAdminData();
  }, []);

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      setShowDropsBET(false);
      setShowDropsService(false);
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <header className="fixed site-header header-one  z-50 w-full">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky animated`}
        >
          <div
            className={`clearfix px-5 py-0 flex justify-around bg-${skyBlue}`}
          >
            <div className="logo-box clearfix flex items-center">
              <Link href="/">
                <img
                  src={logo.src}
                  className="w-[80px] mix-blend-multiply"
                  width={100}
                  height={100}
                  alt="Awesome Image"
                />
              </Link>
              <button
                onClick={handleToggle}
                className="absolute right-5 lg:hidden text-3xl z-[99]"
              >
                {!toggle ? (
                  <GiHamburgerMenu className="text-black" />
                ) : (
                  <IoClose className="text-black" />
                )}
              </button>
            </div>

            <div className="main-navigation flex items-center">
              <ul
                className={`${
                  toggle ? "" : "hidden"
                } navigation-box one-page-scroll-menu lg:flex fixed lg:relative lg:h-auto lg:top-0 lg:bg-${skyBlue} left-0 w-full text-left top-20 py-2 px-5 lg:p-0 bg-${skyBlue} h-dvh`}
              >
                {navData.map((navItem, index) => (
                  <li
                    key={navItem.id}
                    className={`raleway hover:text-[#ff2828] lastbotm px-3 lg:px-1 xl:px-3 font-normal mr-2 lg:mr-0 xl:mr-2 border-b-2 lg:border-none py-3 lg:text-black lg:bg-${skyBlue}`}
                    onClick={() => setStateLink(navItem.href)}
                  >
                    <Link
                      className={` lg:py-3 ${
                        statelink === navItem.href ? "active-page" : ""
                      } ${
                        path === navItem.href ? "active-page" : ""
                      } bg-bg-${skyBlue}`}
                      href={navItem.href}
                      onClick={handleToggle}
                      onMouseEnter={
                        index === 2
                          ? handleMouseEnterBET
                          : index === 3
                          ? handleMouseEnterService
                          : undefined
                      }
                      onMouseLeave={
                        index === 2
                          ? handleMouseLeaveBET
                          : index === 3
                          ? handleMouseLeaveService
                          : undefined
                      }
                    >
                      {navItem.name}
                      {(index === 2 || index === 3) && (
                        <IoMdArrowDropdown
                          style={{ float: "right" }}
                          className={`inline ml-1 z-[99] lg:hidden relative top-1 
                         
                          `}
                          onClick={
                            index === 2
                              ? handleMobileBET
                              : index === 3
                              ? handleMobileService
                              : undefined
                          }
                        />
                      )}
                    </Link>
                    {index === 2 &&
                      navItem.name === "BET" &&
                      (showDropsBET || showMobileBet) && (
                        <div className="relative" onClick={handleDropdownClick}>
                          <div
                            className="lg:pt-4 lg:absolute lg:top-2"
                            onMouseEnter={handleMouseEnterBET}
                            onMouseLeave={handleMouseLeaveBET}
                          >
                            <ul
                              className={`relative w-48 top-18 lg:p-3 pt-4 px-4 bg-${skyBlue} z-100`}
                            >
                              {navItem.subItems?.map((subItem) => (
                                <li
                                  className="py-2 lg:py-1 lg:px-3 font-medium text-black"
                                  key={subItem.id}
                                >
                                  <Link
                                    className="hover:text-[#ff2828] font-normal"
                                    href={subItem.href}
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    {index === 3 &&
                      navItem.name === "Service" &&
                      (showDropsService || showMobileService) && (
                        <div className="relative" onClick={handleDropdownClick}>
                          <div
                            className="lg:pt-4 lg:absolute lg:top-2"
                            onMouseEnter={handleMouseEnterService}
                            onMouseLeave={handleMouseLeaveService}
                          >
                            <ul
                              className={`relative lg:w-48 w-full top-18 lg:p-3 pt-4 px-4 bg-${skyBlue} z-100`}
                            >
                              {navItem.subItems?.map((subItem) => (
                                <li
                                  className="py-2 lg:py-1 lg:px-3 font-medium text-black"
                                  key={subItem.id}
                                >
                                  <Link
                                    className="hover:text-[#ff2828] font-normal"
                                    href={subItem.href}
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                  </li>
                ))}
                <Link
                  href=""
                  className="lg:hidden bg-white relative top-6 text-center  m-auto mr-2 px-10 py-3 font-bold hover:text-red-600 rounded-full"
                  onClick={showLoading}
                >
                  Donate
                </Link>
              </ul>
            </div>
            <div className="items-center flex mr-10 z-10">
              <Link
                href=""
                className="hidden lg:block bg-white mr-2 px-10 py-3 font-bold hover:text-red-600 rounded-full"
                onClick={showLoading}
              >
                Donate
              </Link>
              <Link
                href="/auth/login"
                className="px-10 py-3 bg-white font-bold hover:text-red-600 rounded-full"
              >
                Login
              </Link>
              <Modal
                title={<p className="pl-4">Enter Amount</p>}
                footer={
                  <Button
                    htmlType="submit"
                    className="flex h-12 text-sm justify-center items-center mx-auto px-8 py-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={handleDonate}
                  >
                    Donate Now
                  </Button>
                }
                open={open}
                confirmLoading={loading}
                onCancel={() => setOpen(false)}
              >
                <Input
                  name="donateAmount"
                  type="number"
                  prefix="₹"
                  placeholder="Enter Amount"
                  value={amount !== null ? amount : ""}
                  onChange={handleInputChange}
                  className="w-full rounded-full mt-5 px-5 h-11 placeholder:text-[16px] text-[16px] font-thin text-gray-700"
                />
                <div className="py-5">
                  <Button
                    className="mr-2 md:px-5 h-[35px] py-0 rounded-lg bg-[#f1efea] text-black hover:text-red-500 font-bold"
                    onClick={() => handleAmountClick(100)}
                  >
                    ₹ 100
                  </Button>
                  <Button
                    className="mr-2 md:px-5 h-[35px] py-0 rounded-lg bg-[#f1efea] text-black hover:text-red-500 font-bold"
                    onClick={() => handleAmountClick(200)}
                  >
                    ₹ 200
                  </Button>
                  <Button
                    className="mr-2 md:px-5 h-[35px] py-0 rounded-lg bg-[#f1efea] text-black hover:text-red-500 font-bold"
                    onClick={() => handleAmountClick(500)}
                  >
                    ₹ 500
                  </Button>
                  <Button
                    className="mr-2 md:px-5 h-[35px] py-0 rounded-lg bg-[#f1efea] text-black hover:text-red-500 font-bold"
                    onClick={() => handleAmountClick(1000)}
                  >
                    ₹ 1000
                  </Button>
                </div>
              </Modal>
            </div>

            <div className="relative right-28 hidden md:block ">
              <div className="absolute bottom-5 -right-96">
                <img
                  className="opacity-50 rotate-180 brightness-75"
                  src={mandala.src}
                  alt=""
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
