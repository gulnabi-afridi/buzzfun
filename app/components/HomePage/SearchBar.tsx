"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Select } from "@mantine/core";
import { Menu } from "@mantine/core";
import { RiArrowDownSLine } from "react-icons/ri";
import { LuFlame } from "react-icons/lu";
import { LuBaby } from "react-icons/lu";
import { LuCloudLightning } from "react-icons/lu";
import { FaFilter } from "react-icons/fa6";
import CustomMenu from "../shared/CustomMenu";

const SearchBar = () => {
  const [filter, setFilter] = useState("trending");
  const [time, setTime] = useState("15min");

  return (
    <div className="w-full overflow-auto hideScroll">
      <div className="flex my-4 min-w-[1350px] justify-between items-center w-full py-2 bg-transparent px-3">
        {/* bread crumbs  */}
        <div className="flex justify-center items-center gap-5">
          {/* select time  */}
          <div className="flex min-h-[30px] justify-center items-center">
            <CustomMenu
              targetComponent={
                <button className="flex gap-1 min-h-[30px] rounded-l-[2px] px-1 justify-center items-center bg-black-1">
                  <p className="text-[14px] font-normal text-white-1">Time</p>
                  <RiArrowDownSLine className="text-[16px] text-white-1" />
                </button>
              }
              trigger="click"
              value={time}
              setValue={setTime}
              size="!min-w-[150px]"
              options={time2Options}
            />

            <p className="text-black-1 rounded-r-[2px] min-h-[30px] flex justify-center items-center px-1 bg-[#FEF652]">
              {time}
            </p>
          </div>
          {/* buttons */}
          <div className="flex justify-center items-center gap-3">
            <p className="text-[12px] dark:text-white-1 font-normal mr-3 text-black-1">
              Select here &gt;&gt;
            </p>
            <button
              onClick={() => setFilter("trending")}
              className={`text-[16px] ${
                filter === "trending"
                  ? "dark:bg-[#004BFE] bg-black-1 dark:text-white-1 text-white-1"
                  : "text-white-1/55 bg-black-1/55"
              } font-normal textShadow2 flex justify-center items-center gap-1 rounded-[2px] px-2 py-[2px]`}
            >
              <LuFlame
                className={`text-[14px] ${
                  filter === "trending"
                    ? "dark:text-white-1 text-white-1"
                    : "dark:text-white-1/55 text-white-1"
                } `}
              />
              Trending{" "}
            </button>
            <button
              onClick={() => setFilter("new")}
              className={`text-[16px] ${
                filter === "new"
                  ? "dark:bg-[#004BFE] bg-black-1 dark:text-white-1 text-white-1"
                  : "text-white-1/55 bg-black-1/55"
              } font-normal flex textShadow2 justify-center items-center gap-1 rounded-[2px] px-2 py-[2px]`}
            >
              <LuBaby
                className={`text-[14px] ${
                  filter === "new"
                    ? "dark:text-white-1 text-white-1"
                    : "dark:text-white-1/55 text-white-1"
                } `}
              />
              New{" "}
            </button>
            <button
              onClick={() => setFilter("live activity")}
              className={`text-[16px] ${
                filter === "live activity"
                  ? "dark:bg-[#004BFE] bg-black-1 dark:text-white-1 text-white-1"
                  : "text-white-1/55 bg-black-1/55"
              } font-normal flex textShadow2 justify-center items-center gap-1 rounded-[2px] px-2 py-[2px]`}
            >
              <LuCloudLightning
                className={`text-[14px] ${
                  filter === "live activity"
                    ? "dark:text-white-1 text-white-1"
                    : "dark:text-white-1/55 text-white-1"
                } `}
              />
              Live Activity{" "}
            </button>
          </div>
        </div>
        {/* search input */}
        <div className="flex justify-center items-center gap-4">
          <p className="text-[12px] font-normal dark:text-white-1 text-black-1">
            {pattern1}
          </p>
          {/* search input ---> */}
          <div className="w-[340px] px-2 h-[28px] dark:bg-black-1 bg-white-1 rounded-[2px] grid grid-cols-[1fr,20px]">
            <input
              type="text"
              className="bg-transparent w-full focus:outline-none h-full dark:placeholder:text-[#B7B7B7] placeholder:text-black-1 text-[10px] font-normal"
              placeholder="Search token by name or ticker"
            />
            <div className="w-full flex justify-center items-center">
              <Image src="/assets/enter.svg" alt="" width={21} height={18} />
            </div>
          </div>
          {/* filter ---> */}
          <div className="px-2 h-[28px] bg-[#1E2025] rounded-[2px] flex justify-center items-center gap-1">
            <FaFilter className="text-[14px] text-white-1" />
            <p className="text-[12px] font-normal text-white-1">Filter</p>
            <div className="px-1 flex justify-center items-center py-[2px] bg-[#0F171D] rounded-[2px]">
              <p className="text-[8px] font-normal text-white-1">2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

const pattern1 = "Search here >>";
const time2Options = ["15min", "1hr ", "6hr ", "12hr ", "24hr "];
