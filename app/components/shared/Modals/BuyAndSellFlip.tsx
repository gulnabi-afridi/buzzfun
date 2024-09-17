"use client";

import React, { useState } from "react";
import CustomModal from "./CustomModal";
import { FiMinus } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";

interface Props {
  openModal: boolean;
  closeModal: any;
}

const BuyAndSellFlip: React.FC<Props> = ({ openModal, closeModal }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <CustomModal open={openModal} onClose={closeModal}>
      {/* front card */}
      <div className="w-full min-h-[400px] gap-5 flex flex-col">
        {/* Card flip container */}
        <div className="relative w-full h-auto">
          <div className={`flip-card-inner ${isFlipped ? "is-flipped" : ""}`}>
            {/* Front of the card */}
            <div className="flip-card-front flex flex-col gap-[20px] csm:gap-[20px]">
              {/* buttons */}
              <div className="w-full grid min-h-[42px] csm:min-h-[50px] grid-cols-2 gap-2">
                <button className="text-[22px] font-normal text-black-1 w-full h-full bg-green-1">
                  Buy
                </button>
                <button className="text-[22px] font-normal text-black-1/40 w-full h-full bg-[#EA000054]">
                  Sell
                </button>
              </div>

              {/* switch to coin */}
              <div className="w-full flex justify-between items-center">
                <p className="text-[15px] font-normal text-white-1 bg-black-1 px-[6px] rounded-[3px]">
                  Switch to [insert Ticker]
                </p>
                <p
                  onClick={handleFlip}
                  className="text-[15px] font-normal text-white-1 bg-blue-1 px-[6px] rounded-[3px] cursor-pointer"
                >
                  Slippage
                </p>
              </div>

              {/* Ticker input */}
              <div className="w-full border-[1px] px-2 dark:border-white-1 border-black-1 min-h-[42px] csm:min-h-[50px] grid grid-cols-[1fr,110px]">
                <input
                  placeholder="0.0"
                  type="text"
                  className="w-full dark:placeholder:text-white-1 placeholder:text-black-1 dark:text-white-1 border-r-[1px] dark:border-r-white-1 focus:outline-none border-black-1 h-full bg-transparent text-[22px] font-normal text-black-1"
                  name="ticker"
                  id=""
                />
                <div className="flex justify-center items-center gap-2">
                  <p className="text-[15px] font-normal dark:text-white-1 text-black-1">
                    ETH
                  </p>
                  <div className="w-[32px] h-[32px] flex justify-center items-center">
                    <Image
                      src="/assets/emoji2.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>

              {/* Max */}
              <div className="w-full flex justify-center items-center gap-4">
                {max.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-[12px] csm:text-[16px] font-normal text-[#FEF652] bg-[#19171F] px-[4px] py-[2px] rounded-[2px]"
                    >
                      {item}
                    </p>
                  );
                })}

                <p className="px-[4px] py-[2px] text-[12px] csm:text-[16px] font-normal text-[#EF5960] rounded-[2px] bg-[#19171F]">
                  MAX
                </p>
              </div>

              {/* You receive */}
              <div className="w-full flex justify-between items-center">
                <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
                  You receive:
                </p>
                <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
                  10000000000000 Ticker
                </p>
              </div>

              {/* System messages */}
              <div className="w-full flex flex-col gap-1">
                <p className="text-[15px] font-normal dark:text-white-1 text-black-1">
                  System messages{" "}
                </p>
                <p className="text-black-1 dark:text-white-1 rounded-[4px] font-normal text-[14px] w-full py-[4px] px-2 border-[1px] dark:border-white-1 border-dotted border-black-1">
                  Insufficient balance.{" "}
                </p>
              </div>
              {/* Place trade button */}
              <button className="w-full min-h-[42px] csm:min-h-[51px] bg-yellow-1 text-[20px] font-normal text-black-1 flex justify-center items-center">
                Place trade
              </button>
            </div>

            {/* Back of the card */}
            <div className="flip-card-back flex flex-col gap-[20px] csm:gap-[24px]">
              <p className="text-[12px] font-normal dark:text-white-1 text-black-1">
                Set max. slippage (%)
              </p>
              {/* input ------>  */}
              <div className="w-full border-[1px] px-2 dark:border-white-1 border-black-1 min-h-[46px] csm:min-h-[50px] grid grid-cols-[1fr,110px]">
                <input
                  placeholder="1"
                  type="text"
                  className="w-full dark:placeholder:text-white-1 placeholder:text-black-1 dark:text-white-1 border-r-[1px] dark:border-r-white-1 focus:outline-none border-black-1 h-full bg-transparent text-[22px] font-normal text-black-1"
                  name="ticker"
                  id=""
                />
                <div className="flex justify-center items-center gap-4">
                  <button className="flex justify-center items-center rounded-[2px] border-[1px] border-white-1">
                    <FiMinus className="text-white-1 text-[20px]" />
                  </button>
                  <button className="flex justify-center items-center rounded-[2px] border-[1px] border-white-1">
                    <AiOutlinePlus className="text-white-1 text-[20px]" />
                  </button>
                </div>
              </div>
              {/* System messages */}
              <div className="w-full flex flex-col gap-1">
                <p className="text-[15px] font-normal dark:text-white-1 text-black-1">
                  System messages{" "}
                </p>
                <p className="text-black-1 dark:text-white-1 rounded-[4px] font-normal text-[14px] w-full py-[4px] px-2 border-[1px] dark:border-white-1 border-dotted border-black-1">
                  This is the maximum amount of slippage you are willing to
                  accept when placing trades.
                </p>
              </div>
              {/* front runnning protection --> */}
              <div className="w-full mt-3 flex justify-center items-center gap-3">
                <p className="text-[12px] font-normal text-white-1">
                  Enable front-running protection:{" "}
                </p>
                <button className="text-[12px] text-[#FEF652] font-normal p-1 rounded-[2px] bg-[#19171F]">
                  ON
                </button>
                <button className="text-[12px] text-[#FEF652] font-normal p-1 rounded-[2px] bg-[#19171F]">
                  OFF
                </button>
              </div>
              {/* gas settings --> */}
              <div className="w-full flex justify-center items-center gap-3">
                <p className="text-[12px] font-normal text-white-1">
                  Gas Settings:
                </p>
                <button className="text-[12px] text-[#FEF652] font-normal p-1 rounded-[2px] bg-[#19171F]">
                  Medium
                </button>
                <button className="text-[12px] text-[#FEF652] font-normal p-1 rounded-[2px] bg-[#19171F]">
                  High
                </button>
                <button className="text-[12px] text-[#FEF652] font-normal p-1 rounded-[2px] bg-[#19171F]">
                  Extra
                </button>
              </div>
              {/* save and return button */}
              <button
                onClick={handleFlip}
                className="w-full mt-2 min-h-[42px] csm:min-h-[51px] bg-yellow-1 text-[20px] font-normal text-black-1 flex justify-center items-center"
              >
                Save & Return
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* back card */}
    </CustomModal>
  );
};

export default BuyAndSellFlip;

const max = ["0.005", "0.01", "0.02", "0.05", "0.1"];
