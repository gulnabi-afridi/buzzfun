"use client";

import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import CustomMenu from "../CustomMenu";
import { Menu } from "@mantine/core";

const CoinPercentageDisplay: React.FC = () => {
  const [isHovering, setIsHovering] = useState(true);
  const [selectedTime, setSelectedTime] = useState("15 min");
  const [time, setTime] = useState("15 min");

  return (
    <div className="w-full h-[40px] flex justify-start gap-4 items-center dark:bg-[#19171F] bg-white-1">
      <div className="flex justify-center pl-3 items-center gap-2">
        <CustomMenu
          size="min-w-[160px]"
          targetComponent={timeMenuTarget}
          value={time}
          trigger="click"
          setValue={setTime}
          options={timeOptions}
        />
        <p className="text-[14px] px-[2px] whitespace-nowrap font-normal text-black-1 bg-yellow-1">
          {time}
        </p>
      </div>
      {/* Marquee ------->  */}
      <div
        className="overflow-hidden flex justify-center items-center"
        onMouseEnter={() => setIsHovering(false)}
        onMouseLeave={() => setIsHovering(true)}
      >
        <Marquee pauseOnHover={true} play={isHovering} speed={50} loop={0}>
          {/* Start text */}
          <div className="mx-[10px] flex items-center">
            <p className="text-[14px] font-bold dark:text-white-1 text-black-1">
              {pattern}
            </p>
          </div>

          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <div key={index}>
                <CustomMenu
                  size="min-w-[160px]"
                  targetComponent={
                    <div className="flex cursor-pointer justify-center mx-[5px] bg-black-1 px-1 items-center gap-1">
                      <p className="text-[14px] font-normal text-white-1">
                        {index + 1}
                      </p>
                      <Image
                        src="/assets/coinDisplay.svg"
                        alt=""
                        width={15}
                        height={15}
                      />
                      <p className="text-[14px] font-normal text-yellow-1">
                        PeiPei
                      </p>
                      <p className="text-[14px] font-normal text-[#01C171]">
                        +207%
                      </p>
                    </div>
                  }
                  trigger="hover"
                  value={time}
                  setValue={setTime}
                  options={timeOptions}
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default CoinPercentageDisplay;

const timeMenuTarget = (
  <button className="flex gap-1 px-1 justify-center items-center bg-black-1">
    <p className="text-[14px] font-normal text-white-1">Time</p>
    <RiArrowDownSLine className="text-[16px] text-white-1" />
  </button>
);

const timeOptions = ["15 min", "30 min", "1 hour", "4 hours", "1 day"];

const time2Options = ["15 min", "1 hr ", "6 hr ", "12 hr ", "24 hr "];

const pattern = "////////";
