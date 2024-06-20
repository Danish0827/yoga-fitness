import React from "react";

const ProfileUser = () => {
  return (
    <>
      <div className="block py-4 pb-10 pt-32 lg:px-24 bg-gray-400">
        <div className="flex items-center px-2">
          <div
            style={{ textShadow: "0 0 3px #c4b599, 0 0 0px #c4b599" }}
            className="rounded-full text-white bg-[#ece6d7] text-left w-28 h-28 flex justify-center items-center text-6xl font-semibold"
          >
            SK
          </div>
          <div className="pl-8">
            <h3 className="text-left pt-2 pb-0 font-thin text-3xl text-white">
              Shadab Khan
            </h3>
            <p className="font-semibold text-left pb-2 text-white">
              s.danish0827@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
