import React from "react";
import Image from "next/image";

const Stats = () => {
  return (
    <div className="w-full mt-6 flex justify-center items-center">
      <div className="w-full hideScroll overflow-auto max-w-[1000px] justify-center items-center">
        <div className="min-w-[930px] w-full flex gap-4">
          <Image src="/assets/triangle.svg" width={47} height={79} alt="" />
          <div className="h-[86px] border-[1px] border-black-1 dark:border-blue-1 gap-3 rounded-[5px] bg-black-1 px-5 flex justify-center items-center">
            {statsData.map((item, index) => {
              return item.color === "" ? (
                <div className="flex justify-center items-center gap-5">
                  <p className="text-[18px] text-white-1 font-normal uppercase">
                    {item.value}
                  </p>
                  <div className="w-[2px] h-[30px] bg-blue-1 rotate-[20deg]"></div>
                </div>
              ) : (
                <div className="flex justify-center items-center gap-5">
                  <div className="px-3 py-1 bg-white-1 ">
                    <p
                      className={`text-[18px] px-1 ${item.textColor} font-normal ${item.color}`}
                    >
                      {item.value}{" "}
                    </p>
                  </div>
                  <div
                    className={`w-[2px] ${
                      index + 1 === statsData.length ? "hidden" : "block"
                    } h-[30px] bg-blue-1 rotate-[20deg]`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


const statsData = [
  {
    value: "Total Coins Launched",
    color: "",
    textColor: "",
  },
  {
    value: "1,234 ",
    color: "bg-black-1",
    textColor: "text-white-1",
  },
  {
    value: "Number txs 24hrs",
    color: "",
    textColor: "",
  },
  {
    value: "1,235,234 ",
    color: "bg-blue-1",
    textColor: "text-white-1",
  },
  {
    value: "current users ",
    color: "",
    textColor: "",
  },
  {
    value: "15,234",
    color: "bg-yellow-1",
    textColor: "text-black-1",
  },
];

export default Stats;
