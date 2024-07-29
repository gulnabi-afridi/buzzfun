"use client";

import React, { useState } from "react";

const TokenCards: React.FC = () => {
  const [isLosers, setIsLosers] = useState(false);
  const [isNewToken, setIsNewToken] = useState(false);

  return (
    <div className="w-full grid grid-cols-3 gap-3">
      {/* 1st col ----> */}
      <div className="w-full dark:bg-black-1 bg-white-1 rounded-[5px] py-4 px-3 flex flex-col gap-4">
        <div className="w-[130px] grid rounded-[4px] grid-cols-2 justify-center items-center p-2 dark:bg-transparent bg-[#D9D9D9]">
          <button
            onClick={() => setIsLosers(false)}
            className={`w-full py-1 text-[10px] font-normal ${
              isLosers
                ? "bg-transparent dark:text-white-1 text-black-1"
                : "bg-blue-1 text-white-1"
            } rounded-[2px]`}
          >
            Gainers
          </button>
          <button
            onClick={() => setIsLosers(true)}
            className={`w-full py-1 text-[10px] ${
              isLosers
                ? "bg-blue-1 text-white-1"
                : "bg-transparent dark:text-white-1 text-black-1"
            } font-normal rounded-[2px]`}
          >
            Losers
          </button>
        </div>
        {/* rows */}
        <div className="w-full flex flex-col gap-4">
          {[0, 1, 2, 3, 4].map((item, index) => {
            return (
              <div key={index} className="w-full grid grid-cols-[2fr,1fr,1fr]">
                <div className="flex justify-start items-center gap-3">
                  <p className="text-[12px] font-normal text-black-1">#2</p>
                  <div className="flex justify-center items-center gap-1">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#EF7216]"></div>
                    <p className="text-[12px] font-normal dark:text-white-1 text-black-1">
                      TokenName{" "}
                    </p>
                  </div>
                </div>
                <p className="w-full flex justify-start items-center text-[12px] font-normal dark:text-white-1 text-black-1">
                  Token Price
                </p>
                <p className="w-full flex justify-end items-center text-[12px] dark:text-green-1 font-normal text-black-1">
                  Change 24hr
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* 2nd col --------> */}
      <div className="w-full dark:bg-black-1 bg-white-1 rounded-[5px] py-4 px-3 flex flex-col gap-4">
        <div className="w-[210px] grid grid-cols-2 rounded-[4px] justify-center items-center p-2 dark:bg-transparent bg-[#D9D9D9]">
          <button
            onClick={() => setIsNewToken(true)}
            className={`w-full py-1 text-[10px] font-normal ${
              isNewToken
                ? "bg-blue-1 text-white-1"
                : "bg-transparent text-white-1"
            } rounded-[2px]`}
          >
            New Tokens
          </button>
          <button
            onClick={() => setIsNewToken(false)}
            className={`w-full py-1 text-[10px] ${
              isNewToken
                ? "bg-transparent text-white-1"
                : "bg-blue-1 text-white-1"
            } font-normal rounded-[2px]`}
          >
            New LIVE Chats
          </button>
        </div>
        {/* rows */}
        <div className="w-full flex flex-col gap-4">
          {[0, 1, 2, 3, 4].map((item, index) => {
            return (
              <div
                key={index}
                className="w-full grid grid-cols-[2fr,1fr,1fr,1fr]"
              >
                <div className="flex justify-start items-center gap-3">
                  <p className="text-[12px] font-normal text-black-1">#2</p>
                  <div className="flex justify-center items-center gap-1">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#EF7216]"></div>
                    <p className="text-[12px] font-normal dark:text-white-1 text-black-1">
                      TokenName{" "}
                    </p>
                  </div>
                </div>
                <p className="w-full dark:text-white-1 flex justify-start items-center text-[12px] font-normal text-black-1">
                  Token Price
                </p>
                <p className="w-full flex justify-center items-center text-[12px] dark:text-white-1 font-normal text-black-1">
                  # of Tx’s
                </p>
                <div className="w-full flex justify-end items-center uppercase">
                  <button className="bg-blue-1 dark:text-white-1 rounded-[2px] hover:opacity-80 text-[12px] font-normal text-white-1 px-3">
                    BUY
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* 3rd col --------> */}
      <div className="w-full dark:bg-black-1 bg-white-1 rounded-[5px] py-4 px-3 flex flex-col gap-4">
        <div className="w-full flex justify-between items-center">
          <p className="w-fit justify-center text-[12px] rounded-[4px] dark:text-white-1 font-normal text-black-1 items-center py-2 px-3 dark:bg-black-1 bg-[#D9D9D9]">
            $BUZZ Season 1 Ranks
          </p>
          <p className="text-[12px] font-normal dark:text-white-1 text-black-1 dark:bg-purple-1 bg-[#D9D9D9] px-3 py-2 rounded-[4px]">
            View More
          </p>
        </div>
        {/* rows */}
        <div className="w-full flex flex-col gap-4">
          {[0, 1, 2, 3, 4].map((item, index) => {
            return (
              <div key={index} className="w-full grid grid-cols-[2fr,1fr]">
                <div className="flex justify-start items-center gap-3">
                  <p className="text-[12px] font-normal text-black-1">#2</p>
                  <div className="flex justify-center items-center gap-1">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#EF7216]"></div>
                    <p className="text-[12px] font-normal dark:text-white-1 text-black-1">
                      TokenName{" "}
                    </p>
                  </div>
                </div>
                <p className="w-full flex justify-end items-center text-[12px] font-normal dark:text-white-1 text-black-1">
                  1,200,000 XP
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TokenCards;
