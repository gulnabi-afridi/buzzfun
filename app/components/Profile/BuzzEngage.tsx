"use client";

import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import CustomMenu from "../shared/CustomMenu";
import { LuClock4 } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

const BuzzEngage: React.FC = () => {
  const [sortOption, setSortOption] = useState("All");

  return (
    <div className="w-full md:mt-0 mt-0 sm:mt-5 xl:col-span-1 col-span-2  flex justify-center items-center">
      <div className="w-full max-w-[450px] flex flex-col gap-3">
        <p className="text-[14px] w-fit font-normal dark:bg-yellow-1 bg-transparent px-2 py-[2px] rounded-[2px] text-black-1 ">
          Buzz Engage
        </p>
        <div className="flex justify-start items-center gap-3">
          <p className="text-[16px] font-normal text-black-1 dark:text-white-1">Sort by</p>
          <CustomMenu
            size="!w-[150px]"
            options={sortOptions}
            value={sortOption}
            trigger="click"
            setValue={setSortOption}
            targetComponent={
              <button className="px-2 bg-black-1 py-[2px] flex justify-center items-center gap-1">
                <p className="text-[16px] font-normal text-white-1">All</p>
                <MdKeyboardArrowDown className="text-blue-1 text-[14px]" />
              </button>
            }
          />
        </div>
        {/* cards ---> */}
        <div className="w-full border-[1px] h-[700px] overflow-auto rounded-[2px] p-2 border-blue-1 dark:border-[#317C85] flex flex-col">
          {[0, 1, 2, 3, 4, 5].map((item, index) => {
            return (
              <div key={index} className="w-full flex flex-col">
                <div className="w-full bg-white-1 dark:bg-black-1 p-3 rounded-[2px] border-white-1/20 border-[1px] flex justify-between items-center">
                  {/* 1st col  */}
                  <div className="w-full flex flex-col items-start gap-3">
                    <p className="text-[12px] font-normal text-blue-1 dark:text-yellow-1">
                      Like and Retweet
                    </p>
                    <p className="text-[12px] font-normal text-black-1 dark:text-white-1">
                      Status: Active
                    </p>
                    <div className="flex justify-center items-center gap-2">
                      <LuClock4 className="text-[14px] text-black-1 dark:text-white-1" />
                      <p className="text-[12px] font-normal text-black-1 dark:text-white-1">
                        2D:12HRS:54min
                      </p>
                    </div>
                  </div>
                  {/* 2nd col  */}
                  <div className="w-full flex flex-col items-end gap-3">
                    <div className="flex justify-center items-center gap-1">
                      <p className="text-[10px] font-normal text-yellow-1">{`//GO`}</p>
                      <button className="w-[10px] h-[10px] flex justify-center items-center bg-yellow-1">
                        <GoArrowUpRight className="text-[12px] text-black-1" />
                      </button>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                      <Image
                        width={11}
                        height={11}
                        src="/assets/incomplete.svg"
                        alt=""
                      />
                      <p className="text-[10px] font-normal text-white-1">
                        Incomplete
                      </p>
                    </div>
                    <p className="text-[12px] font-normal text-purple-1">
                      [100 XP]
                    </p>
                  </div>
                </div>
                <div className="w-full my-3 border-b-[1px] border-dashed border-yellow-1"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const sortOptions = ["All", "Active", "Expired", "Complete","Incomplete"];

export default BuzzEngage;
