"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import ComponentWrapper from "../components/shared/layout/ComponentWrapper";
import { IoIosArrowDown } from "react-icons/io";

const RetardPage: NextPage = () => {
  const [fileName, setFileName] = useState<string>("no file chosen");
  const [isExpanded, setIsExpended] = useState(false);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("no file chosen");
    }
  };

  return (
    <ComponentWrapper style="bg-white-2 dark:bg-[#1D252C]">
      <div className="w-full py-10 flex justify-center items-center">
        <div className="w-full min-h-[calc(100vh-250px)] max-w-[650px] flex gap-6 flex-col justify-center items-start">
          <p className="text-[45px] font-normal dark:text-white-1 text-black-1 leading-[45px] uppercase">
            <span className="bg-yellow-1 px-1 text-black-1"> RETARD </span>{" "}
            <br /> MODE
          </p>
          <div className="flex dark:bg-[#0E161C] bg-white-1 justify-center py-8 items-center w-full">
            <div className="w-full max-w-[500px] gap-7 flex flex-col">
              {/* name  */}
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[18px] uppercase dark:text-white-1 text-black-1 font-normal"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Insert name here"
                  className="placeholder:text-[#6D6D6D] dark:text-white-1 text-black-1 border-[1px] h-[40px] text-[12px] focus:outline-0 px-3 dark:border-white-1 border-black-1  w-full font-normal"
                />
              </div>
              {/* ticker  */}
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[18px] uppercase dark:text-white-1 text-black-1 font-normal"
                >
                  Ticker
                </label>
                <input
                  type="text"
                  placeholder="Insert ticker here"
                  className="placeholder:text-[#6D6D6D] text-black-1 border-[1px] h-[40px] text-[12px] focus:outline-0 px-3 dark:border-white-1 border-black-1  w-full font-normal"
                />
              </div>
              {/* image   */}
              <div className="justify-center items-center px-2 border-[1px] dark:border-white-1 border-black-1 h-[50px] grid grid-cols-[98px,calc(100%-98px)]">
                <label className="flex justify-center border-[1px] dark:border-white-1 border-black-1 py-1 items-center cursor-pointer">
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <p className="text-[14px] font-normal dark:text-white-1 text-black-1">
                    / Select
                  </p>
                </label>
                <p
                  className={`text-[12px] ${
                    fileName === "no file chosen"
                      ? "text-[#6D6D6D]"
                      : "text-black-1"
                  } font-normal pl-3`}
                >
                  {fileName}
                </p>
              </div>
              {/* description   */}
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[18px] uppercase dark:text-white-1 text-black-1 font-normal"
                >
                  Description
                </label>
                <textarea
                  placeholder="write something interesting here or people will probably still buy. "
                  className="placeholder:text-[#6D6D6D] dark:border-white-1 text-black-1 border-[1px] min-h-[60px] text-[12px] focus:outline-0 px-3 py-2 border-black-1  w-full font-normal"
                />
              </div>
              {/* show more options button */}
              <button
                onClick={() => setIsExpended(!isExpanded)}
                className="flex justify-start items-center gap-3"
              >
                <p className="text-[18px] dark:text-white-1 font-normal text-black-1 uppercase">
                  Show More options
                </p>
                <IoIosArrowDown
                  className={`${
                    isExpanded ? "rotate-180" : "rotate-0"
                  } text-black-1 dark:text-white-1 duration-300 text-[24px]`}
                />
              </button>
              {isExpanded && (
                <div className={`flex flex-col gap-7`}>
                  {/* twitter link  */}
                  <div className="flex w-full flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[18px] uppercase dark:text-white-1 text-black-1 font-normal"
                    >
                      Twitter Link
                    </label>
                    <input
                      type="text"
                      placeholder="(optional)"
                      className="placeholder:text-[#6D6D6D] dark:border-white-1 text-black-1 border-[1px] h-[40px] text-[12px] focus:outline-0 px-3 border-black-1  w-full font-normal"
                    />
                  </div>
                  {/* telegram link  */}
                  <div className="flex w-full flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[18px] uppercase dark:text-white-1 text-black-1 font-normal"
                    >
                      Telegram Link
                    </label>
                    <input
                      type="text"
                      placeholder="(optional)"
                      className="placeholder:text-[#6D6D6D] dark:border-white-1 text-black-1 border-[1px] h-[40px] text-[12px] focus:outline-0 px-3 border-black-1  w-full font-normal"
                    />
                  </div>
                  {/* website link  */}
                  <div className="flex w-full flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[18px] dark:text-white-1 uppercase text-black-1 font-normal"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      placeholder="(optional)"
                      className="placeholder:text-[#6D6D6D] dark:border-white-1 text-black-1 border-[1px] h-[40px] text-[12px] focus:outline-0 px-3 border-black-1  w-full font-normal"
                    />
                  </div>
                </div>
              )}
              {/* create a coin button */}
              <div className="w-full flex justify-center items-center">
                <button className="w-full max-w-[380px] justify-center bg-blue-1 items-center text-white-1 uppercase text-[18px] font-normal h-[40px]">
                  Create coin
                </button>
              </div>
              {/* Cost to deploy  */}
              <div className="flex justify-start items-center gap-6">
                <p className="text-[18px] dark:text-white-1 font-normal text-black-1 uppercase">
                  {" "}
                  cost to deploy:
                </p>
                <p className="text-[18px] dark:text-white-1 font-normal text-black-1 uppercase">
                  0.01 ETH
                </p>
              </div>
              {/* note */}
              <div className="w-full p-3 border-[1px] border-[#6D6D6D]">
                <p className="text-[12px] font-normal dark:text-blue-1 text-[#6D6D6D]">
                  {pattern1}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default RetardPage;

const pattern1 =
  "// Please note that once the bonding curve target is achieved, all tokens deployed via buzz.fun will be automatically listed on Uniswap, along with the collateral liquidity pool (LP) collected through sales. Additionally, all contracts will be renounced upon LP provision. The only rug here, is you. ";
