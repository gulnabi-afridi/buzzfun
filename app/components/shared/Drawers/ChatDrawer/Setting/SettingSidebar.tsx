"use client";

import React, { useState } from "react";

interface Props {
  selectedSetting: string;
  setSelectedSetting: (value: string) => void;
}

const SettingSidebar: React.FC<Props> = ({
  selectedSetting,
  setSelectedSetting,
}: Props) => {
  return (
    <div className="w-full bg-transparent dark:bg-black-1 flex flex-col gap-2">
      <div className="w-full flex items-start border-[1px] border-blue-1 flex-col h-[calc(100vh-156px)]">
        <div className="w-full flex p-4 items-start flex-col gap-3">
          <button className="text-[14px] font-normal text-white-1">{`<< Go Back`}</button>
          <button className="text-[14px] font-semibold text-[#FEF652]">{`<Settings>`}</button>
          <button className="text-[14px] font-normal text-[#FEF652]">{`----------------`}</button>
        </div>
        <div className="w-full flex flex-col items-start gap-1 px-2">
          {settings.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setSelectedSetting(item)}
                className={`w-full h-[34px] text-left pl-4 text-[14px] font-bold text-white-1 ${
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
