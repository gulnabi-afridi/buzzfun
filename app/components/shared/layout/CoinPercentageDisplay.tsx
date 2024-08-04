"use client";

import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Menu } from "@mantine/core";

const CoinPercentageDisplay: React.FC = () => {
  const [isHovering, setIsHovering] = useState(true);
  const [selectedTime, setSelectedTime] = useState("15 min");
  const [time, setTime] = useState("15min");

  return (
    <div className="w-full h-[40px] flex justify-start gap-4 items-center dark:bg-[#0E161C] bg-white-1">
      <div className="flex justify-center pl-3 items-center gap-2">
        <Menu
          classNames={{
            dropdown: "dark:!bg-black-1 !bg-white-2 !border-none min-w-[160px]",
            item: "text-black-1 dark:text-white-1 text-[14px] font-normal hover:bg-white-1/30",
          }}
          withArrow
        >
          <Menu.Target>
            <button className="flex gap-1 px-1 justify-center items-center bg-black-1">
              <p className="text-[14px] font-normal text-white-1">Time</p>
              <RiArrowDownSLine className="text-[16px] text-white-1" />
            </button>
          </Menu.Target>
          {/* Menu dropdown */}
          <Menu.Dropdown>
            <div className="flex flex-col">
              {time2Options.map((item) => (
                <Menu.Item
                  className={`relative ${time === item ? "bg-white-1/30" : ""}`}
                  key={time}
                  onClick={() => setTime(item)}
                >
                  <div className="relative py-[2px] px-4">
                    {item}
                    {time === item && (
                      <>
                        <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-[#336FFE]"></div>
                        <div className="absolute top-0 right-0 bottom-0 w-[4px] bg-[#336FFE]"></div>
                      </>
                    )}
                  </div>
                </Menu.Item>
              ))}
            </div>
          </Menu.Dropdown>
        </Menu>
        <p className="text-[14px] px-[2px] font-normal text-black-1 bg-yellow-1">
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
            <p className="text-[14px] font-bold text-black-1">{pattern}</p>
          </div>

          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <div key={index}>
                <Menu
                  classNames={{
                    dropdown:
                      "dark:!bg-black-1 !bg-white-2 !border-none min-w-[160px]",
                    item: "text-black-1 dark:text-white-1 text-[14px] font-normal hover:bg-white-1/30",
                  }}
                  trigger="click-hover"
                  withArrow
                >
                  <Menu.Target>
                    <div className="flex cursor-pointer justify-center mx-[5px] bg-black-1 px-1 items-center gap-1">
                      <p className="text-[14px] font-normal text-white-1">
                        #{index + 1}
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
                  </Menu.Target>
                  {/* Menu dropdown */}
                  <Menu.Dropdown>
                    <div className="flex flex-col">
                      {timeOptions.map((time) => (
                        <Menu.Item
                          className={`relative ${
                            selectedTime === time ? "bg-white-1/30" : ""
                          }`}
                          key={time}
                          onClick={() => setSelectedTime(time)}
                        >
                          <div className="relative py-[2px] px-4">
                            {time}
                            {selectedTime === time && (
                              <>
                                <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-[#336FFE]"></div>
                                <div className="absolute top-0 right-0 bottom-0 w-[4px] bg-[#336FFE]"></div>
                              </>
                            )}
                          </div>
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Dropdown>
                </Menu>
              </div>
            );
          })}

          {/* End text */}
          {/* <div className="mx-[10px] flex items-center">
            <p className="text-[14px] font-bold text-black-1">{pattern}</p>
          </div> */}
        </Marquee>
      </div>
    </div>
  );
};

export default CoinPercentageDisplay;

const timeOptions = ["15 min", "30 min", "1 hour", "4 hours", "1 day"];

const time2Options = ["15min", "20min", "11min"];

const pattern = '////////'
