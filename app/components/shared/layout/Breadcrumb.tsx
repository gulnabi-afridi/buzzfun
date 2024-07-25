import React from "react";
import ComponentWrapper from "./ComponentWrapper";
import Image from "next/image";

const Breadcrumb = () => {
  return (
    <ComponentWrapper style="bg-white-2">
      <div className="flex flex-wrap justify-center w-full items-center gap-2">
        <div className="w-full border-[1px] border-blue-1 mt-4 bg-white-1 flex h-[86px] justify-center items-center gap-4">
          {/* 1st portion */}
          <div className="px-4 py-2 h-full flex justify-center items-center gap-2">
            {breadCrumbs.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center gap-1 items-center"
                >
                  <p className="text-[20px] text-white-1 bg-black-1 px-2">
                    #{index + 1}
                  </p>
                  <p className="text-[18px] leading-[20px] text-black-1 font-normal">
                    {item}
                  </p>
                  <p
                    className={`w-[2px] h-[30px] mr-1 ${
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
        {/* 2nd portion */}
        <div className="h-[86px] relative w-[90px] p-1 bg-white-1 justify-center items-start border-[1px] border-blue-1 flex flex-col">
          <p className="text-[10px] bg-blue-1 uppercase font-normal text-white-1 px-0">
            find out <br /> more $BUZZ
          </p>
          <p className="text-[10px] uppercase font-normal text-black-1">
            Season 1
          </p>
          <div className="w-full flex justify-center items-center">
            <Image src="assets/insta2.svg" alt="" width={31} height={31} />
          </div>
          <Image
            src="/assets/call.svg"
            alt=""
            width={16}
            height={12}
            className="absolute right-[1px] top-[1px]"
          />
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
