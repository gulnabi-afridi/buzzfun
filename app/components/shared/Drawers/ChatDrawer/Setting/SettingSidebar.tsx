"use client";

import React, { useState } from "react";
import { MdOutlineSettings } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoSkullOutline } from "react-icons/io5";
import { FaHammer } from "react-icons/fa6";

interface Props {
  selectedSetting: string;
  setSelectedSetting: (value: string) => void;
  setSettingShow: (value: boolean) => void;
}

const SettingSidebar: React.FC<Props> = ({
  selectedSetting,
  setSelectedSetting,
  setSettingShow,
}: Props) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full csm:flex hidden bg-transparent dark:bg-black-1 flex-col gap-2">
        <div className="w-full flex items-start border-[1px] border-blue-1 flex-col h-[calc(100vh-156px)]">
          <div className="w-full flex p-4 items-start flex-col gap-3">
            <button
              onClick={() => setSettingShow(false)}
              className="text-[14px] font-normal text-black-1 dark:text-white-1"
            >{`<< Go Back`}</button>
            <button className="text-[14px] font-semibold text-blue-1 dark:text-[#FEF652]">{`<Settings>`}</button>
            <button className="text-[14px] font-normal text-blue-1 dark:text-[#FEF652]">{`----------------`}</button>
          </div>
          <div className="w-full flex flex-col items-start gap-1 px-2">
            {settings.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setSelectedSetting(item)}
                  className={`w-full h-[34px] text-left pl-4 text-[14px] font-bold text-black-1 dark:text-white-1 ${
                    selectedSetting === item &&
                    "relative after:absolute after:w-[5px] after:h-full after:right-0 after:top-0 after:bg-[#004BFE] before:absolute before:w-[5px] before:h-full before:bg-[#004BFE] before:left-0 before:top-0"
                  } `}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {/* for small screen ------>  */}
      <div className="w-full h-[55px] csm:hidden grid absolute bottom-0 left-0 grid-cols-4">
        <button
          onClick={() => setSelectedSetting("Chat permissions")}
          className={`w-full ${
            selectedSetting === "Chat permissions"
              ? "bg-purple-1"
              : "bg-[#262934] "
          } boxShadow3 flex h-full justify-center items-center`}
        >
          <MdOutlineSettings className="text-white-1 text-[20px]" />
        </button>
        <button
          onClick={() => setSelectedSetting("Members")}
          className={`w-full bg-[#262934] boxShadow3
          ${selectedSetting === "Members" ? "bg-purple-1" : "bg-[#262934] "} 
        flex h-full justify-center items-center`}
        >
          <FiUsers className="text-white-1 text-[20px]" />
        </button>
        <button
          onClick={() => setSelectedSetting("Blacklist")}
          className={`w-full 
          ${selectedSetting === "Blacklist" ? "bg-purple-1" : "bg-[#262934] "} 
            boxShadow3 flex h-full justify-center items-center`}
        >
          <IoSkullOutline className="text-white-1 text-[20px]" />
        </button>
        <button
          onClick={() => setSelectedSetting("Mods")}
          className={`w-full 
          ${selectedSetting === "Mods" ? "bg-purple-1" : "bg-[#262934] "} 
        
        boxShadow3 flex h-full justify-center items-center`}
        >
          <FaHammer className="text-white-1 text-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default SettingSidebar;

const settings = [
  "Chat permissions",
  "Members",
  "Blacklist",
  "Mods",
  "Stickers",
];
