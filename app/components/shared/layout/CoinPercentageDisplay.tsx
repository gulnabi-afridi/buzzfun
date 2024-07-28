import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const CoinPercentageDisplay: React.FC = () => {
  return (
    <div className="w-full h-[40px] flex justify-start gap-4 items-center bg-white-1">
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
      <div className="w-full flex justify-center items-center">
        <Marquee pauseOnHover play speed={50} loop={0}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
            (item, index) => {
              return (
                <div
                  key={index}
                  className="flex cursor-pointer justify-center mx-[5px] bg-black-1 px-1 items-center gap-1"
                >
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
              );
            }
          )}
        </Marquee>
      </div>
    </div>
  );
};

export default CoinPercentageDisplay;
