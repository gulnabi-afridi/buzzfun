"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { IoCopySharp } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";
import { LuCrown } from "react-icons/lu";
import { RiPushpin2Line } from "react-icons/ri";
import { FaFilter } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import CustomMenu from "../../../CustomMenu";


const Mods: React.FC = () => {
  const [mods, setMods] = useState("");

  return (
    <div className="w-full border-[1px] border-blue-1 rounded-[2px] flex flex-col">
      {/* top header */}
      <div className="w-full flex flex-col p-3 gap-2">
        <div className="w-full bg-[#D4DDE6] relative h-[43px] flex justify-between items-center">
          <div className="flex pl-4 justify-center items-center gap-3">
            <Image src="/assets/token3.svg" alt="" width={26} height={26} />
            <p className="text-[14px] font-semibold text-black-1">
              Pink Hood Froglicker | $Froglic [chat]
            </p>
          </div>
          {/* add mods button --------->  */}
          <button className="w-[50px] h-full bg-white-1 flex justify-center items-center">
            <FaRegSquarePlus className="text-[23px] text-black-1" />
          </button>
        </div>
        {/* filter ---> */}
        <div className="w-full flex justify-between items-center px-4 bg-[#D4DDE6] h-[43px]">
          {/* sort by  */}
          <div className="flex justify-center items-center gap-3">
            <p className="text-[16px] font-normal text-black-1">Sort by</p>
            <button className="px-2 bg-black-1 py-[2px] flex justify-center items-center gap-1">
              <p className="text-[16px] font-normal text-white-1">A-Z</p>
              <MdKeyboardArrowDown className="text-blue-1 text-[14px]" />
            </button>
          </div>
          {/* search  */}
          <div className="flex justify-center items-center gap-3">
            <input
              type="text"
              placeholder="insert username or wallet address"
              className="text-[10px] pl-2 focus:outline-none placeholder:text-black-1/35 bg-[#A1A1A1] w-[230px] h-[27px] rounded-[2px] font-normal text-black-1/35"
            />
            <button className="bg-black-1 py-[3px] px-[3px]">
              <LuSearch className="text-[16px] text-white-1" />
            </button>
          </div>
        </div>
      </div>
      {/* members details ----> */}
      <div className="w-full h-[calc(100vh-300px)] relative overflow-y-auto flex-grow flex flex-col gap-1">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => {
          return (
            <div
              key={index}
              className="w-full grid border-b-[1px] border-white-1/10 py-2 px-6 grid-cols-[1fr,2fr,1fr,50px]"
            >
              {/* ist col */}
              <div className="w-full flex justify-center items-start gap-[2px] flex-col">
                <p className="text-[14px] font-normal text-blue-1">{`<Username>`}</p>
                <p className="text-[14px] text-center font-normal text-white-1">
                  [Role]
                </p>
              </div>
              {/* 2nd col */}
              <div className="w-full flex gap-7 justify-start items-center">
                <button>
                  <IoCopySharp className="text-white-1 text-[16px]" />
                </button>
                <button className="flex justify-center items-center gap-2">
                  <FiMessageCircle className="text-white-1 text-[18px]" />
                  <p className="text-[14px] font-normal text-white-1">1,234</p>
                </button>
                <button className="flex justify-center items-center gap-2">
                  <FaRegCalendarCheck className="text-white-1 text-[20px]" />
                  <p className="text-[14px] font-normal text-white-1">12days</p>
                </button>
              </div>
              {/* 3rd col  */}
              <div className="w-full flex justify-center gap-6 items-center">
                <LuCrown className="text-[22px] cursor-pointer text-white-1" />
                <RiPushpin2Line className="text-[22px] cursor-pointer text-white-1" />
                <FaFilter className="text-[20px] cursor-pointer text-white-1" />
              </div>
              {/* 4rth col  */}
              <button className="w-full flex justify-end items-center">
                <HiOutlineDotsHorizontal className="text-[20px] text-white-1" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mods;

const modsOptions = [
  "View Profile",
  "Revoke Admin",
  "Blacklist",
  "Transfer Ownership",
];
