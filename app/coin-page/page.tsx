"use client";

import React, { useState } from "react";
import ComponentWrapper from "../components/shared/layout/ComponentWrapper";
import Image from "next/image";
import CoinStatsBar from "../components/CoinPage/CoinStatsBar";
import { IoCopyOutline } from "react-icons/io5";
import Pagination from "../components/shared/Pagination";
import Thread from "../components/CoinPage/Threads";
import Trades from "../components/CoinPage/Trades";
import BuyAndSellWidget from "../components/CoinPage/BuyAndSellWidget";
import DeployementMilestones from "../components/CoinPage/DeployementMilestones";
import { GoInfo } from "react-icons/go";
import { GoGraph } from "react-icons/go";
import { Tooltip } from "@mantine/core";
import TradingViewWidget from "../components/CoinPage/CandleChart";
import { BiGitCompare } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { BsListCheck } from "react-icons/bs";
import StatsHeader from "../components/CoinPage/StatsHeader";
import SocialLinks from "../components/CoinPage/SocialLinks";

const CoinPage = () => {
  const [isThread, setIsTread] = useState(false);

  return (
    <div className="dark:bg-[#201e26] bg-white-2 pt-5 min-h-screen">
      {/* top header -----> */}
      <CoinStatsBar />
      <ComponentWrapper style="dark:bg-[#201e26] bg-white-2 pt-5 pb-16">
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[700px] md:max-w-full grid grid-cols-1 2xl:grid-cols-[2fr,1fr] gap-5 xl:gap-10">
            {/* left portion  */}
            <div className="w-full flex gap-4 flex-col">
              {/* top header --> */}
              <StatsHeader />
              {/* candle chart ---> */}
              <div className="w-full h-[300px] sm:h-[380px] md:h-[430px] z-40">
                <TradingViewWidget />
              </div>
              {/* project description --> */}
              <div className="w-full flex justify-center items-center">
                <div className="flex max-w-[700px] 2xl:max-w-full flex-col gap-4">
                  <p className="text-[18px] dark:text-white-1 font-semibold text-black-1">
                    Project Description:
                  </p>
                  <p className="text-[14px] dark:text-white-1 font-normal text-black-1">
                    orem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&lsquo;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially.
                  </p>
                </div>
              </div>
              {/* Thread + Trades -------------> */}
              <div className="w-full flex justify-center items-center">
                <div className="w-full max-w-[700px] 2xl:max-w-full mt-3 border-[1px] border-purple-1 p-3 flex flex-col justify-center items-center gap-4">
                  <div className="flex w-full justify-between items-center gap-3">
                    <div className="flex justify-center items-center gap-2">
                      <button
                        onClick={() => setIsTread(true)}
                        className={`text-[14px] ${
                          isThread && "underline"
                        } font-normal dark:text-white-1 text-black-1`}
                      >
                        [Thread]
                      </button>
                      <button
                        onClick={() => setIsTread(false)}
                        className={`text-[14px] ${
                          !isThread && "underline"
                        } font-normal dark:text-white-1 text-black-1`}
                      >
                        [Trades]
                      </button>
                    </div>
                    <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
                      [Make a Post]
                    </p>
                  </div>
                  {/* threads section ----->  */}
                  {isThread && <Thread />}
                  {/* Trads section ----->  */}
                  {!isThread && <Trades />}
                  <div className="w-full mb-3 flex justify-center items-center">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
            {/* right portion */}
            <div className="w-full flex justify-center items-center">
              <div className="w-full max-w-[700px] 2xl:max-w-full h-full gap-5 flex flex-col">
                {/* top header  */}
                <SocialLinks />
                {/* Buy And Sell widget ----------> */}

                <BuyAndSellWidget />

                {/* tax option + max buy ------------>  */}
                <div className="w-full flex justify-center items-center gap-7">
                  <div className="flex justify-center items-center gap-2">
                    <button className="w-[25px] flex justify-center items-center h-[25px] border-[1px] border-black-1 dark:border-white-1">
                      <div className="w-[18px] h-[18px] bg-red-1"></div>
                    </button>
                    <div className="flex flex-col">
                      <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
                        Tax option 1
                      </p>
                      <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
                        {`(5:15>2.5:45>0:∞)`}
                      </p>
                    </div>
                    <Tooltip
                      withArrow
                      multiline
                      classNames={{ tooltip: "!w-[230px] !py-2" }}
                      color="#004BFE"
                      label={
                        <div className="flex flex-col gap-2">
                          <p className="text-[8px] font-normal text-black-1">
                            CONTRACT WILL HAVE BUY AND SELL TAX ON DEX LISTING.
                            TAX FREE DURING BONDING CURVE.
                          </p>
                          <p className="text-[8px] font-normal text-black-1">
                            {`TAX OPTION 1: 5% TAX FIRST 15 MINS > 2.5% TAX FOR 45MINS > TAX ZEROED INDEFINITELY.  `}
                          </p>
                        </div>
                      }
                    >
                      <button className="bg-red-1 p-[2px]">
                        <GoInfo className="text-black-1 text-[22px]" />
                      </button>
                    </Tooltip>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <button className="w-[25px] flex justify-center items-center h-[25px] border-[1px] border-black-1 dark:border-white-1">
                      <div className="w-[18px] h-[18px] bg-blue-1"></div>
                    </button>
                    <div className="flex flex-col">
                      <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
                        Max buy 1%
                      </p>
                      <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
                        {`BC+DEX-15`}
                      </p>
                    </div>
                    <Tooltip
                      withArrow
                      multiline
                      classNames={{ tooltip: "!w-[230px] !py-2" }}
                      color="#004BFE"
                      label={
                        <div className="flex flex-col gap-2">
                          <p className="text-[8px] font-normal text-black-1">
                            CONTRACT WILL HAVE BUY AND SELL TAX ON DEX LISTING.
                            TAX FREE DURING BONDING CURVE.
                          </p>
                          <p className="text-[8px] font-normal text-black-1">
                            {`TAX OPTION 1: 5% TAX FIRST 15 MINS > 2.5% TAX FOR 45MINS > TAX ZEROED INDEFINITELY.  `}
                          </p>
                        </div>
                      }
                    >
                      <button className="bg-blue-1 p-[2px]">
                        <GoInfo className="text-black-1 text-[22px]" />
                      </button>
                    </Tooltip>
                  </div>
                </div>

                {/* Bonding curve progress -----> */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-start items-center gap-2">
                    <GoGraph className="text-black-1 dark:text-white-1 text-[14px]" />
                    <p className="text-[14px] font-normal dark:text-white-1 text-black-1">
                      [Bonding curve progress]{" "}
                      <span className="text-[#01C171]"> [69%] </span>
                    </p>
                  </div>
                  <div className="w-full relative rounded-full h-[19px] bg-black-1">
                    <div className="w-[70%] absolute left-0 top-0 h-full rounded-full bg-yellow-1"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] font-normal dark:text-white-1 text-black-1">
                    When the market cap reaches $66,000 all the liquidity from
                    the bonding curve will be deposited into a Uniswap v2 Pool
                    and burned. Progression increases as the price goes up.
                  </p>
                  <p className="text-[14px] font-normal dark:text-white-1 text-black-1">
                    There are 479,108,240 tokens still available for sale in the
                    bonding curve and there is 12.411 SOL in the bonding curve.
                  </p>
                </div>
                {/* Deployment milestones ---------> */}
                <DeployementMilestones />
              </div>
            </div>
          </div>
        </div>
      </ComponentWrapper>
      {/* navigation for small screen ---------->  */}
      <div className="w-full h-[55px] bg-[#262934] grid grid-cols-5">
        <button className="boxShadow3 w-full h-full bg-transparent flex justify-center items-center">
          <GoGraph className="text-[24px] text-white-1" />
        </button>
        <button className="boxShadow3 w-full h-full bg-transparent flex justify-center items-center">
          <BiGitCompare className="text-[24px] text-white-1" />
        </button>
        <button className="boxShadow3 w-full h-full bg-transparent flex justify-center items-center">
          <GoInfo className="text-[24px] text-white-1" />
        </button>
        <button className="boxShadow3 w-full h-full bg-transparent flex justify-center items-center">
          <BsChat className="text-[24px] text-white-1" />
        </button>
        <button className="boxShadow3 w-full h-full bg-transparent flex justify-center items-center">
          <BsListCheck className="text-[24px] text-white-1" />
        </button>
      </div>
    </div>
  );
};

export default CoinPage;
