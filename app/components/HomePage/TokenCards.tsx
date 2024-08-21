"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LuTimerReset } from "react-icons/lu";
import { MdOutlineElectricBolt } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { LuExpand } from "react-icons/lu";
import CoinStatsCards from "./CoinStatsCards";
import { GoGraph } from "react-icons/go";
import { TbUsers } from "react-icons/tb";


const TokenCards: React.FC = () => {
  const [showCoinDetails, setShowCoinDetails] = useState(false);

  return (
    <React.Fragment>
      {!showCoinDetails ? (
        <div className="w-full grid grid-cols-1 cmd:grid-cols-2 3xl:grid-cols-3 gap-3">
          {/* 1st col ----> */}
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[470px] h-full flex justify-center items-center">
              <div className="w-full h-full border-[1px] border-[#535353] max-w-[500px] dark:bg-black-1 bg-transparent rounded-[5px] py-4 px-3 flex flex-col gap-4">
                {/* top header ---> */}
                <div className="w-full flex justify-between items-center gap-2">
                  {/* left */}
                  <div className="rounded-[3px] bg-[#0F171D] flex gap-3 px-2 py-2">
                    <p className="text-white-1 text-[10px] font-normal">
                      Top Creators
                    </p>
                    <p className="text-white-1 text-[10px] font-normal">
                      Top XP Tokens
                    </p>
                    <p className="text-white-1 bg-[#044FFE] px-2 py-[2px] rounded-[2px] text-[10px] font-normal">
                      Top Live Chats
                    </p>
                  </div>
                  {/* right  */}
                  <button className="px-2 py-2 bg-[#4F40FF] text-[10px] font-normal rounded-[4px] text-black-1 dark:text-white-1">
                    View All
                  </button>
                </div>

                {/* rows  */}
                {[0, 1, 2, 3, 4].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full grid py-[3px] grid-cols-[40px,1.4fr,1fr,1fr]"
                    >
                      <div className="w-full flex justify-center items-center">
                        <p
                          className={`w-fit whitespace-nowrap flex justify-center items-center ${
                            index === 0 && "bg-[#00C673] "
                          } rounded-[3px] px-1 text-black-1 dark:text-white-1 text-[12px] font-normal`}
                        >
                          #{index + 1}
                        </p>
                      </div>
                      {/* token name  */}
                      <div className="flex justify-start pl-2 items-center gap-1">
                        <div className="w-[20px] h-[20px] rounded-full bg-[#EF7216]"></div>
                        <p className="text-[12px] font-normal text-black-1 dark:text-white-1">
                          TICKER
                        </p>
                        <Image
                          src="/assets/symbol.svg"
                          alt=""
                          width={12}
                          height={12}
                        />
                      </div>
                      {/* msgs  */}

                      <p className="text-[12px] w-full flex justify-start items-center font-normal text-black-1 dark:text-white-1">
                        5600 msgs
                      </p>
                      {/* users  */}
                      <p className="text-[12px] w-full flex justify-end items-center font-normal text-black-1 dark:text-white-1">
                        5600 users
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* 2nd col --------> */}
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[470px] h-full flex justify-center items-center">
              {/* table ---> */}
              <div className="w-full h-full flex flex-col gap-4 bg-transparent dark:bg-black-1 border-[1px] border-black-1 dark:border-[#FEF652] rounded-[5px] py-4 px-3">
                {/* table filter -->  */}
                <div className="flex justify-center items-center gap-2">
                  <div className="flex w-full justify-between items-center">
                    <div className="flex justify-center items-center gap-2">
                      <div className="flex px-2 py-2 bg-[#0F171D] rounded-[4px] justify-center items-center gap-3">
                        <p className="px-[6px] py-[3px] bg-blue-1 text-white-1 font-normal text-[12px] rounded-[2px]">
                          New Tokens
                        </p>
                        <p className=" text-white-1 font-normal text-[12px] rounded-[2px]">
                          Almost There
                        </p>
                        <p className=" text-white-1 font-normal text-[12px] rounded-[2px]">
                          Migrating Now
                        </p>
                      </div>
                      <div className="px-[6px] border-[1px] border-[#B746F0] rounded-[2px] py-[3px] bg-[#282828] text-white-1 flex justify-center items-center">
                        <MdOutlineElectricBolt className="text-[12px] text-[#B746F0]" />
                        <p className="text-[12px] font-normal text-white-1">
                          Buy:
                        </p>
                        <p className="text-[12px] font-normal text-white-1">
                          $
                        </p>
                        <p className="text-[12px] font-normal text-white-1">
                          10
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowCoinDetails(!showCoinDetails)}
                      className="w-[24px] flex justify-center items-center h-[24px] rounded-[3px] bg-[#EBFF00C4]"
                    >
                      <LuExpand className="text-[20px] text-black-1" />
                    </button>
                  </div>
                </div>
                {/* rows ---->  */}
                <div className="w-full flex flex-col gap-4">
                  {[0, 1, 2, 3, 4].map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full py-[3px] grid grid-cols-[.5fr,2fr,1fr,1fr,1fr,1fr,.5fr,.5fr]"
                      >
                        {/* ser no */}
                        <p
                          className={`w-full whitespace-nowrap flex justify-center items-center ${
                            index === 0 ? "bg-[#00C673] " : "bg-transparent"
                          }rounded-[3px] px-1 text-black-1 dark:text-white-1 text-[12px] font-normal`}
                        >
                          #{index + 1}
                        </p>
                        {/* name  */}
                        <div className="flex border-r-[1px] border-[#B746F0] justify-center items-center gap-1">
                          <div className="w-[20px] h-[20px] rounded-full bg-[#EF7216]"></div>
                          <p className="text-[12px] font-normal text-black-1 dark:text-white-1">
                            TICKER
                          </p>
                          <Image
                            src="/assets/symbol.svg"
                            alt=""
                            width={12}
                            height={12}
                          />
                        </div>
                        {/* value  */}
                        <div className="w-full border-r-[1px] border-[#B746F0]  flex gap-1 justify-center items-center ">
                          <GoGraph className="text-[14px] text-black-1 dark:text-white-1" />
                          <p className="text-[10px] font-normal text-[#00C673]">
                            78%
                          </p>
                        </div>
                        {/* users  */}
                        <div className="w-full border-r-[1px] border-[#B746F0]  flex gap-1 justify-center items-center ">
                          <TbUsers className="text-black-1 dark:text-white-1 text-[13px]" />
                          <p className="text-[10px] font-normal text-[#00C673]">
                            1.2k
                          </p>
                        </div>
                        {/* MC  */}
                        <div className="w-full border-r-[1px] border-[#B746F0]  flex gap-1 justify-center items-center ">
                          <p className="text-[10px] font-normal text-black-1 dark:text-white-1">
                            MC
                          </p>
                          <p className="text-[10px] font-normal text-[#00C673]">
                            $400k
                          </p>
                        </div>
                        {/* volume  */}
                        <div className="w-full border-r-[1px] border-[#B746F0]  flex gap-1 justify-center items-center ">
                          <p className="text-[10px] font-normal text-white-1">
                            V
                          </p>
                          <p className="text-[10px] font-normal text-[#00C673]">
                            $900k
                          </p>
                        </div>
                        {/* favorite */}
                        <div className="w-full flex justify-center items-center">
                          <MdOutlineStarBorder className="text-black-1 dark:text-[#EBFF00C4] text-[12px]" />
                        </div>
                        {/*  */}
                        <div className="flex justify-center items-center">
                          <div className="w-[24px] h-[19px] flex justify-center items-center rounded-[5px] border-[1px] border-[#B746F0]">
                            <Image
                              src="/assets/light.svg"
                              alt=""
                              width={8}
                              height={9}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* 3rd col --------> */}
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[450px] h-full flex justify-center items-center">
              <div className="w-full h-full border-[1px] border-[#535353] max-w-[500px] dark:bg-black-1 bg-transparent rounded-[5px] py-4 px-3 flex flex-col gap-4">
                {/* top header ---> */}
                <div className="w-full flex justify-between items-center gap-2">
                  {/* left */}
                  <div className="rounded-[3px] bg-[#0F171D] flex gap-3 px-2 py-2">
                    <p className="text-[#FEF652] text-[10px] font-normal">
                      $BUZZ Season 1 Ranks
                    </p>
                  </div>
                  {/* right  */}
                  <button className="px-2 py-2 bg-[#4F40FF] text-[10px] font-normal rounded-[4px] text-white-1">
                    View All
                  </button>
                </div>

                {/* rows  */}
                {[0, 1, 2, 3, 4].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full grid py-[3px] px-2 grid-cols-[40px,2fr,1fr]"
                    >
                      <div className="w-full flex justify-start items-center">
                        <p
                          className={`w-fit whitespace-nowrap flex justify-center items-center ${
                            index === 0 && "bg-[#00C673] "
                          } rounded-[3px] px-1 text-black-1 dark:text-white-1 text-[12px] font-normal`}
                        >
                          #{index + 1}
                        </p>
                      </div>
                      {/* token name  */}
                      <div className="flex justify-start items-center gap-2">
                        <div className="w-[20px] h-[20px] rounded-full bg-[#EF7216]"></div>
                        <p className="text-[12px] font-normal text-black-1 dark:text-white-1">
                          Username
                        </p>
                      </div>
                      {/* msgs  */}

                      <p className="text-[12px] w-full flex justify-end items-center font-normal text-black-1 dark:text-white-1">
                        5600 msgs
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CoinStatsCards />
      )}
    </React.Fragment>
  );
};

export default TokenCards;
