"use client";
import { Button, Modal, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { FaRegImage } from "react-icons/fa";
import { processPayments } from "../Consultation/RazorpayYoga";

import test from "@/assets/images/full-shot-man-practicing-yoga (2).jpg";
import mandala from "@/assets/images/ornaments-leaves.svg";
const Yogaclass = () => {
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setIsModalOpen1(false);
    setIsModalOpen2(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsModalOpen1(false);
    setIsModalOpen2(false);
  };

  const handleAsh = async () => {
    await processPayments(500, "This is a Donation");
  };

  return (
    <>
      <div className="block py-12 bg-[#ffffff]">
        <div className="block pb-2 lg:pb-7">
          {/* <h2
            style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
            className="lg:text-5xl md:text-4xl text-3xl pb-4 text-center uppercase font-bold text-[#000]"
          >
            <span className="font-semibold text-red-500">B</span>log
          </h2> */}
        </div>
        <div className="relative">
          <div className="absolute top-96 right-0 ">
            <img className="rotate-180 opacity-40" src={mandala.src} alt="" />
          </div>
        </div>

        {loading ? (
          <div className="lg:flex flex-wrap px-4 md:px-5">
            {Array(3)
              .fill(3)
              .map((_, index) => (
                <div
                  className="xl:w-1/3 lg:w-1/2 w-full py-6 md:px-1 px-3 z-10"
                  key={index}
                >
                  <FaRegImage className="w-full text-gray-300 text-[700px] animate-pulse -mt-44" />
                  <Skeleton className="-mt-44" />
                </div>
              ))}
          </div>
        ) : (
          <>
            <div className="lg:flex flex-wrap px-4 md:px-24">
              <div className="xl:w-1/3 lg:w-1/2 w-full py-6 md:px-6 px-3 z-10">
                {/* <Link href={`blog/${id}`}> */}
                <div
                  className="bg-white rounded-2xl dgdgs"
                  style={{
                    boxShadow: "0 0 3px #ed7936, 0 0 0px #ed7936",
                  }}
                >
                  <div className="relative overflow-hidden rounded-t-2xl lg:h-auto xl:h-[230px] 2xl:h-auto">
                    <img
                      className="drdr duration-700"
                      width={"100%"}
                      height={"300px"}
                      src={test.src}
                      alt="Acharya Shiv"
                    />
                    <p className="px-2 py-1 absolute bottom-0 left-2 bg-[#222121] text-white z-1 font-semibold">
                      Online 7AM
                    </p>
                  </div>
                  <div className="xl:px-7 px-4 py-5">
                    <h3 className="xl:text-xl text-lg uppercase text-[#222121] font-bold pb-1 text-left">
                      Ashtanya Power You
                    </h3>
                    <span
                      style={{
                        textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936",
                      }}
                      className="adad cursor-pointer text-justify duration-100 hover:text-[#ed7936] text-[#666] text-[18px] font-semibold mb-2 md:text-[15px]"
                    >
                      MON || WED || FRI
                    </span>

                    <Button
                      onClick={showModal}
                      className="block ml-auto mt-5 md:px-10 h-[45px] duration-300 py-0 rounded-lg bg-[#000] text-white hover-change font-bold"
                      // onClick={handleDonate}
                    >
                      <span className="font-bold">Enroll Now</span>
                    </Button>
                  </div>
                </div>
                {/* </Link> */}
              </div>

              <Modal
                title="Our Features"
                open={isModalOpen}
                footer={
                  <Button
                    htmlType="submit"
                    className="block m-auto mt-5 md:px-10 h-[45px] py-0 rounded-lg bg-[#f1efea] text-black hover:text-red-500 font-bold"
                    onClick={handleAsh}
                  >
                    <span className="font-bold"> Pay Now</span>
                  </Button>
                }
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <ol className="list-decimal px-5 pt-4">
                  <li>Some contents...</li>
                  <li>Some contents...</li>
                  <li>Some contents...</li>
                </ol>
              </Modal>
              <div className="xl:w-1/3 lg:w-1/2 w-full py-6 md:px-6 px-3 z-10">
                {/* <Link href={`blog/${id}`}> */}
                <div
                  className="bg-white rounded-2xl dgdg"
                  style={{
                    boxShadow: "0 0 3px #ed7936, 0 0 0px #ed7936",
                  }}
                >
                  <div className="relative overflow-hidden rounded-t-2xl lg:h-auto xl:h-[230px] 2xl:h-auto">
                    <img
                      className="drdr duration-700"
                      width={"100%"}
                      height={"300px"}
                      src={test.src}
                      alt="Acharya Shiv"
                    />
                    <p className="px-2 py-1 absolute bottom-0 left-2 bg-[#222121] text-white z-1 font-semibold">
                      Online 7AM
                    </p>
                  </div>
                  <div className="xl:px-7 px-4 py-5">
                    <h3 className="xl:text-xl text-lg uppercase text-[#222121] font-bold pb-1 text-left">
                      Meditation Live Classes
                    </h3>
                    <span
                      style={{
                        textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936",
                      }}
                      className="adad cursor-pointer text-justify duration-100 hover:text-[#ed7936] text-[#666] text-[18px] font-semibold mb-2 md:text-[15px]"
                    >
                      TUE || THUS
                    </span>
                    <Button
                      onClick={showModal1}
                      className="block ml-auto mt-5 md:px-10 h-[45px] duration-300 py-0 rounded-lg bg-[#000] text-white hover-change font-bold"
                      // onClick={handleDonate}
                    >
                      <span className="font-bold">Know More</span>
                    </Button>
                  </div>
                </div>
                {/* </Link> */}
              </div>

              <Modal
                title="Our Features"
                open={isModalOpen1}
                footer={false}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <ol className="list-decimal px-5 pt-4">
                  <li>Some contents...</li>
                  <li>Somfsdfe contents...</li>
                  <li>Some contents...</li>
                </ol>
              </Modal>
              <div className="xl:w-1/3 lg:w-1/2 w-full py-6 md:px-6 px-3 z-10">
                {/* <Link href={`blog/${id}`}> */}
                <div
                  className="bg-white rounded-2xl dgdg"
                  style={{
                    boxShadow: "0 0 3px #ed7936, 0 0 0px #ed7936",
                  }}
                >
                  <div className="relative overflow-hidden rounded-t-2xl lg:h-auto xl:h-[230px] 2xl:h-auto">
                    <img
                      className="drdr duration-700"
                      width={"100%"}
                      height={"300px"}
                      src={test.src}
                      alt="Acharya Shiv"
                    />
                    <p className="px-2 py-1 absolute bottom-0 left-2 bg-[#222121] text-white z-1 font-semibold">
                      Online 7AM
                    </p>
                  </div>
                  <div className="xl:px-7 px-4 py-5">
                    <h3 className="xl:text-xl text-lg uppercase text-[#222121] font-bold pb-1 text-left">
                      Yoga At SAIFEE
                    </h3>
                    <span
                      style={{
                        textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936",
                      }}
                      className="adad cursor-pointer text-justify duration-100 hover:text-[#ed7936] text-[#666] text-[18px] font-semibold mb-2 md:text-[15px]"
                    >
                      MON to FRI
                    </span>
                    <Button
                      onClick={showModal2}
                      className="block ml-auto mt-5 md:px-10 h-[45px] duration-300 py-0 rounded-lg bg-[#000] text-white hover-change font-bold"
                      // onClick={handleDonate}
                    >
                      <span className="font-bold">Enroll Now</span>
                    </Button>
                  </div>
                </div>
                {/* </Link> */}
              </div>

              <Modal
                title="Our Features"
                open={isModalOpen2}
                footer={
                  <Button
                    htmlType="submit"
                    className="block m-auto mt-5 md:px-10 h-[45px] py-0 rounded-lg bg-[#f1efea] text-black hover:text-red-500 font-bold"
                    onClick={handleAsh}
                  >
                    Pay Now
                  </Button>
                }
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <ol className="list-decimal px-5 pt-4">
                  <li>Some contents...</li>
                  <li>Some contents...</li>
                  <li>Some contents...</li>
                  <li>Some contents...</li>
                </ol>
              </Modal>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Yogaclass;
