"use client";

import React, { useState } from "react";
import ComponentWrapper from "../components/shared/layout/ComponentWrapper";
import Image from "next/image";
import CoinStatsBar from "../components/CoinPage/CoinStatsBar";
import { IoCopyOutline } from "react-icons/io5";
import Pagination from "../components/shared/Pagination";
import CandleChart from "../components/CoinPage/CandleChart";
import Thread from "../components/CoinPage/Threads";
import Trades from "../components/CoinPage/Trades";
import BuyAndSellWidget from "../components/CoinPage/BuyAndSellWidget";
import DeployementMilestones from "../components/CoinPage/DeployementMilestones";

const CoinPage = () => {
  const [isThread, setIsTread] = useState(false);

  return (
    <div className="dark:bg-[#201e26] bg-white-2 pt-5 min-h-screen">
      {/* top header -----> */}
      <CoinStatsBar />
      <ComponentWrapper style="dark:bg-[#201e26] bg-white-2 pt-5 pb-16">
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[700px] md:max-w-full grid grid-cols-1 cxl:grid-cols-[2fr,1fr] gap-5 xl:gap-10">
            {/* left portion  */}
            <div className="w-full flex gap-4 flex-col">
              {/* top header --> */}
              <div className="w-full flex sm:flex-row flex-col justify-start items-start sm:items-end gap-2 sm:gap-4">
                <div className="flex justify-center items-center gap-2 sm:gap-4">
                  <div className="w-[60px] h-[60px] bg-black-1 flex justify-center items-center">
                    <Image
                      src="/assets/emoji2.png"
                      alt=""
                      width={45}
                      height={45}
                    />
                  </div>
                  <div className="w-fit h-[60px] bg-black-1 flex justify-center items-center gap-1 px-3">
                    <p className="text-[14px] font-normal text-black-1 bg-yellow-1">
                      CA:
                    </p>
                    <p className="text-[14px] w-[140px] overflow-auto hideScroll md:w-fit font-normal text-white-1">
                      0x6969dd6fd01b42f3b9004ae9482296a67657a1ad
                    </p>
                    <button className="w-[18px] ml-4 h-[18px] flex justify-center items-center bg-white-1">
                      <IoCopyOutline className="text-[14px] text-black-1" />
                    </button>
                  </div>
                </div>
                <p className="text-[14px] dark:text-white-1 font-normal text-black-1">
                  / View on Basescan
                </p>
                {/* reaction */}
                <div className="px-2 py-[6px] rounded-[2px] dark:bg-black-1 bg-white-1 flex justify-center items-center gap-3">
                  <div className="flex justify-center items-center gap-2">
                    <Image
                      src="/assets/like.png"
                      alt=""
                      width={18}
                      height={18}
                    />
                    <p className="text-[8px] font-normal dark:text-white-1 text-black-1">12</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Image
                      src="/assets/dislike.png"
                      alt=""
                      width={18}
                      height={18}
                    />
                    <p className="text-[8px] font-normal dark:text-white-1 text-black-1">2</p>
                  </div>
                </div>
              </div>
              {/* candle chart ---> */}
              <div className="w-full h-[300px] sm:h-[380px] md:h-[430px] bg-white-1">
                <CandleChart />
              </div>
              {/* project description --> */}
              <div className="flex flex-col gap-4">
                <p className="text-[18px] dark:text-white-1 font-semibold text-black-1">
                  Project Description:
                </p>
                <p className="text-[14px] dark:text-white-1 font-normal text-black-1">
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry&lsquo;s standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially.
                </p>
              </div>
              {/* Thread + Trades -------------> */}
              <div className="w-full mt-3 border-[1px] border-purple-1 p-3 flex flex-col justify-center items-center gap-4">
                <div className="flex justify-center items-center gap-3">
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
                {/* threads section ----->  */}
                {isThread && <Thread />}
                {/* Trads section ----->  */}
                {!isThread && <Trades />}
                <div className="w-full mb-3 flex justify-center items-center">
                  <Pagination />
                </div>
              </div>
            </div>
            {/* right portion */}
            <div className="w-full h-full gap-5 flex flex-col">
              {/* top header  */}
              <div className="w-full flex gap-2 justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] dark:text-white-1 font-normal text-black-1">
                    [Socials]
                  </p>
                  <div className="flex justify-center items-center gap-2">
                    <button className="w-[28px] dark:bg-blue-1 bg-black-1 h-[28px] flex justify-center items-center rounded-[1px]">
                      <Image
                        src="/assets/twitter.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                    </button>
                    <button className="w-[28px] dark:bg-blue-1 bg-black-1 h-[28px] flex justify-center items-center rounded-[1px]">
                      <Image
                        src="/assets/tellegram.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                    </button>
                    <button className="w-[28px] dark:bg-blue-1 bg-black-1 h-[28px] flex justify-center items-center rounded-[1px]">
                      <Image
                        src="/assets/globe.svg"
                        alt=""
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                </div>
                <button className="text-[20px] font-normal text-black-1 bg-yellow-1 px-2 py-1 yellowSha">
                  [LIVE <span className="underline"> CHAT</span> AVAILABLE]
                </button>
              </div>
              {/* Buy And Sell widget ----------> */}

              <BuyAndSellWidget />

              {/* Bonding curve progress -----> */}
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-normal dark:text-white-1 text-black-1">
                  [Bonding curve progress][69%]
                </p>
                <div className="w-full grid h-[25px] grid-cols-[1.5fr,1fr]">
                  <div className="w-full h-full bg-yellow-1"></div>
                  <div className="w-full h-full dark:bg-white-1 bg-black-1"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-normal dark:text-white-1 text-black-1">
                  When the market cap reaches $66,000 all the liquidity from the
                  bonding curve will be deposited into a Uniswap v2 Pool and
                  burned. Progression increases as the price goes up.
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
      </ComponentWrapper>
    </div>
  );
};

export default CoinPage;
