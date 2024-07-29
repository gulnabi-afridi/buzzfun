"use client";

import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Menu } from "@mantine/core";

const CoinPercentageDisplay: React.FC = () => {
  const [isHovering, setIsHovering] = useState(true);

  return (
    <div className="w-full h-[40px] flex justify-start gap-4 items-center dark:bg-[#0E161C] bg-white-1">
      <div className="flex justify-center pl-3 items-center gap-2">
        <button className="flex gap-1 px-1 justify-center items-center bg-black-1">
          <p className="text-[14px] font-normal text-white-1">Time</p>
          <RiArrowDownSLine className="text-[16px] text-white-1" />
        </button>
        <p className="text-[14px] px-[2px] font-normal text-black-1 bg-yellow-1">
          15min
        </p>
      </div>
      {/* Marquee ------->  */}
      <div
        className="overflow-hidden flex justify-center items-center"
        onMouseEnter={() => setIsHovering(false)}
        onMouseLeave={() => setIsHovering(true)}
      >
        <Marquee pauseOnHover={true} play={isHovering} speed={50} loop={0}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
            (item, index) => {
              return (
                <div key={index}>
                  <Menu
                    classNames={{
                      dropdown: "dark:!bg-black-1 !bg-white-2 !border-none min-w-[160px]",
                      item:'text-black-1 dark:text-white-1 text-[14px] font-normal hover:bg-white-1/30'
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
                        {[0, 1, 2, 3, 4].map((item, index) => {
                          return (
                            <Menu.Item
                              className="hover:bg-white-1/30"
                              key={index}
                            >
                              15 min
                            </Menu.Item>
                          );
                        })}
                      </div>
                    </Menu.Dropdown>
                  </Menu>
                </div>
              );
            }
          )}
        </Marquee>
      </div>
    </div>
  );
};

export default CoinPercentageDisplay;
