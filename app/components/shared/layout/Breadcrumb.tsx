import React from "react";
import ComponentWrapper from "./ComponentWrapper";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Breadcrumb = () => {
  return (
    <ComponentWrapper style="dark:bg-black-3 bg-white-2">
      <div className="w-full flex justify-center items-center">
        <div className="grid mt-5 grid-cols-[1fr,100px] max-w-[1600px] justify-center w-full items-center gap-2">
          <div className="w-full h-full hideScroll overflow-auto">
            <div className="w-full min-w-[1200px] border-[1px] border-blue-1 dark:bg-[#25303A] bg-white-1 flex h-full justify-center items-center gap-4">
              {/* 1st portion */}
              <div className="px-4 h-full flex justify-center items-center gap-2">
                {breadCrumbs.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-center gap-1 items-center"
                    >
                      <p className="text-[20px] leading-0 dark:text-black-1 text-white-1 dark:bg-yellow-1 bg-black-1 px-2">
                        #{index + 1}
                      </p>
                      <p className="text-[18px] leading-[20px] dark:text-white-1 text-black-1 font-normal">
                        {item}
                      </p>
                      <p
                        className={`min-w-[2px] h-[30px] mr-2 ${
                          index + 1 === breadCrumbs.length
                            ? "bg-transparent"
                            : "bg-purple-1"
                        }  rotate-[20deg]`}
                      >
                        {" "}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* 2nd portion */}
          <div className=" relative w-full h-full p-1 dark:bg-black-1 bg-white-1 justify-center items-start border-[1px] border-blue-1 flex flex-col">
            <p className="text-[10px] bg-blue-1 uppercase font-normal text-white-1 px-0">
              find out <br /> more $BUZZ
            </p>
            <p className="text-[10px] uppercase font-normal dark:text-white-1 text-black-1">
              Season 1
            </p>
            <div className="w-full flex justify-center items-center">
              <Image src="assets/insta2.svg" alt="" width={31} height={31} />
            </div>
            <button className="w-[16px] bg-black-1 dark:bg-purple-1 h-[16px] flex justify-center items-center absolute right-[1px] top-[1px]">
              <GoArrowUpRight className="text-white-1 text-[12px]" />
            </button>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Breadcrumb;

const breadCrumbs = [
  "Create a Token",
  "Take care of community",
  "The more it grows",
  "The more BUZZ XP You gain.",
  "More BUZZ XP = more airdrop",
  "$BUZZ",
  "Rewarding the great",
];
