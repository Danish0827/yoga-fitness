import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RiVidicon2Line } from "react-icons/ri";

const Profilesidebar = () => {
  return (
    <>
      <div className="p-8">
        <ul>
          <Link href="/">
            <li className="flex items-center gap-3 text-xl font-medium mb-4 hover:text-[#ed7936]">
              <RiVidicon2Line className="text-[#ed7936] " />
              Course Buyed <MdKeyboardDoubleArrowRight />
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center gap-3 text-xl font-medium mb-4 hover:text-[#ed7936]">
              <RiVidicon2Line className="text-[#ed7936] " />
              Recommended Courses <MdKeyboardDoubleArrowRight />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Profilesidebar;
