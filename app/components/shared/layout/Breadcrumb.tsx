import React from "react";
import ComponentWrapper from "./ComponentWrapper";

const Breadcrumb = () => {
  return (
    <ComponentWrapper style="bg-white-2">
      <div className="w-full border-[1px] border-blue-1 mt-4 bg-white-1 flex h-[86px] justify-center items-center gap-4">
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
                <p className="w-[2px] h-[30px] mr-1 bg-purple-1 rotate-[20deg]">
                  {" "}
                </p>
              </div>
            );
          })}
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
