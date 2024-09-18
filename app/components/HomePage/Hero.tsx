"use client";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import OpenChartBtn from "../shared/OpenChartBtn";
import { useDisclosure } from "@mantine/hooks";
import { LuTimerReset } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineElectricBolt } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import ChatDrawer from "../shared/Drawers/ChatDrawer/ChatDrawer";
import ProcessModal from "../shared/Modals/ProcessModal";
import TransactionModal from "../shared/Modals/TransactionModal";
import SuccessModal from "../shared/Modals/SuccessModal";
import FailedModal from "../shared/Modals/FailedModal";
import BuyAndSellWidget from "../CoinPage/BuyAndSellWidget";
import CustomModal from "../shared/Modals/CustomModal";
import CustomMenu from "../shared/CustomMenu";
import BuyAndSellFlip from "../shared/Modals/BuyAndSellFlip";
import { IoMdStar } from "react-icons/io";

const Hero = () => {
  // states
  const { setTheme, resolvedTheme } = useTheme();
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [isMinimize, setIsMinimize] = useState<boolean>(false);
  const [time, setTime] = useState("15 min");
  const [opened, { open, close }] = useDisclosure(false);
  const [buyAndSellModal, { open: buyOpen, close: buyClose }] =
    useDisclosure(false);
  const [drawerButtonHeight, setDrawerButtonHeight] = useState(
    "h-[calc(100%-107px)]"
  );

  const [activeModal, { open: openProcessModal, close: closeProcessModal }] =
    useDisclosure(false);
  const [buyAndSell, { open: openBuyAndSell, close: closeBuyAndSell }] =
    useDisclosure(false);
  const [favorites, setFavorites] = useState(Array(10).fill(false));

  // Function to handle scroll events
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setDrawerButtonHeight("h-screen");
    } else {
      setDrawerButtonHeight("h-[calc(100%-107px)]");
    }
  };

  const toggleFavorite = (index: number) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      <div className="w-full relative flex flex-col justify-center items-center">
        {/* hero top section ----------------------> */}
        <div className="w-full relative max-w-[1400px] bg-[url('/assets/topHeroBg.png')] border-[1px] border-[#505050] rounded-[6px] mt-8 px-10 object-cover bg-no-repeat flex justify-between items-center">
          {/* left portion ----> */}
          <div className="flex z-50 flex-col relative gap-3 ">
            <div className="w-[550px] h-[450px] relative">
              <Image src="/assets/logo3.png" alt="" fill />
            </div>
            <p
              style={{
                background:
                  "linear-gradient(89.87deg, #D30C9C 41.04%, #D51F34 44.48%, #FF5400 48.37%, #E18600 51.81%, #689607 55.52%, #0DBAEC 59.15%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "13px", // Set the font size
              }}
              className="absolute bottom-[60px] left-[70px] font-normal"
            >
              {`//YOU ARE A WINNER!¯\\_(ツ)_/¯_YOU ARE A winner!\\`}
            </p>
          </div>
          {/* right portion -------->  */}
          <div className="w-full z-50 max-w-[450px] border-[1px] border-[#464646] dark:bg-black-1 bg-black-1 navibarCardSh rounded-[5px] flex flex-col p-3">
            {/* 1st portiom */}
            <div className="flex mt-1 justify-center gap-1 items-center px-1 bg-black-1">
              <p className="text-orange-1">#1</p>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                (item, index) => {
                  return (
                    <Image
                      key={index}
                      src="/assets/crown.svg"
                      width={15}
                      height={15}
                      alt=""
                    />
                  );
                }
              )}
            </div>

            <div className="w-full mt-3 sm:mt-4 flex gap-2 rounded-[5px] flex-col p-2">
              <div className="w-full flex flex-col">
                <div className="w-full bg-transparent grid gap-3 grid-cols-[170px,1fr]">
                  <div className="w-full h-full relative">
                    <Image src="/assets/collector2.png" alt="" fill />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    {/* name  */}
                    <div className="w-full gap-1 px-1 bg-black-1 flex justify-start items-center py-1">
                      <p className="text-[12px] text-white-1 font-normal">
                        Name:: Pink Hood Fro...
                      </p>
                    </div>
                    {/* ticker */}
                    <div className="w-full gap-1 bg-transparent px-1 flex justify-start items-center py-1">
                      <p className="text-[12px] text-white-1 font-normal">
                        Ticker: Froglic
                      </p>
                    </div>
                    {/* created by */}
                    <div className="w-full gap-1 px-1 bg-transparent flex justify-start items-center py-1">
                      <p className="text-[12px] text-white-1 font-normal">
                        Creator by:
                      </p>
                      <Image
                        src="/assets/collector.svg"
                        alt=""
                        width={18}
                        height={18}
                      />
                      <p className="text-[12px] text-orange-1 uppercase font-normal">
                        user name
                      </p>
                    </div>
                    {/* market cap */}
                    <div className="w-full gap-1 bg-orange-1 flex justify-start px-1 items-center py-1">
                      <p className="text-[12px] text-white-1 font-normal">
                        Market cap: 45.3K [rank:2]
                      </p>
                    </div>
                    {/* Bonding curve  */}
                    <div className="w-full gap-1 px-1 bg-blue-2 flex justify-start items-center py-1">
                      <p className="text-[12px] text-white-1 font-normal">
                        Bonding curve: 89%
                      </p>
                    </div>
                  </div>
                </div>
                {/* price + trades + volume  */}
                <div className="grid px-3 grid-cols-3 gap-6 pt-2">
                  <p className="px-[2px] whitespace-nowrap text-[12px] font-normal text-black-1 bg-[#04D200]">
                    Price: +2000%
                  </p>
                  <p className="px-[2px] whitespace-nowrap text-[12px] font-normal text-black-1 bg-[#FF2CEA]">
                    Trades: 1,245
                  </p>
                  <p className="px-[2px] whitespace-nowrap text-[12px] font-normal text-black-1 bg-[#A09191]">
                    Vol: 500k
                  </p>
                </div>
              </div>
              <p
                className={` ${
                  isMinimize ? "hidden" : "block"
                }  text-[12px] font-normal text-white-1 p-2 rounded-[5px]`}
              >
                <span className="uppercase"> Description:</span> lorem ipsum
                talkem sumit here making it cool and reassruing and no rugginess
                for sure makin it based, yeah. innt...
              </p>
              <button className="w-full bg-orange-1 font-courier hover:opacity-80 rounded-[5px] text-[12px] h-[35px] text-white-1 font-semibold">
                Ape Now
              </button>
            </div>
          </div>
          <div className="w-full absolute bottom-[100px] -left-[3%] z-20">
            <div className="w-[106%] h-[100px] relative">
              <Image src="/assets/heroGradient.png" fill alt="" />
            </div>
          </div>
        </div>
        <div
          className={`w-full flex flex-col max-w-[1400px] mt-4 px-0 csm:px-4 py-0 csm:py-3 dark:bg-transparent dark:border-transparent bg-transparent border-[2px] border-black-1 rounded-[5px]`}
        >
          <div
            className={`w-full grid gap-y-6 csm:gap-y-8 gap-x-4 grid-cols-1 xl:grid-cols-2 3xl:grid-cols-[1fr,.9fr,1fr]`}
          >
            {/* 1st col ----------------------------------> */}
            <div className="w-full csm:order-1 h-full order-2 flex justify-center items-center">
              <div className="w-full h-full max-w-[450px] justify-between items-center gap-4 flex flex-col">
                {/* top bar ---->  */}
                <div
                  onClick={openProcessModal}
                  className="w-full cursor-pointer py-2 flex justify-center items-center bg-[#4F40FF] rounded-[5px]"
                >
                  <p className="text-[10px] csm:text-[13px] font-normal text-white-1">
                    {pattern1}
                  </p>
                </div>
                {/* table ---> */}
                <div className="w-full bg-transparent dark:bg-black-1 border-[1px] border-black-1 dark:border-[#FEF652] rounded-[5px] p-2">
                  {/* table filter -->  */}
                  <div className="flex pt-1 pb-3 justify-between items-center">
                    <div className="flex justify-center items-center gap-2">
                      <p className="px-[6px] py-[3px] bg-blue-1 text-white-1 font-normal text-[12px] rounded-[2px]">
                        Top 10
                      </p>
                      <CustomMenu
                        trigger="click"
                        options={timeOptions}
                        setValue={setTime}
                        size="min-w-[100px]"
                        value={time}
                        targetComponent={
                          <button className="flex bg-[#0E161C] justify-center items-center px-[6px] py-[3px] rounded-[2px]">
                            <LuTimerReset className="text-[12px] text-white-1" />
                            <p className="text-[10px] text-white-1 font-normal">
                              15m
                            </p>
                            <MdKeyboardArrowDown className="text-[12px] text-[#94A3B8]" />
                          </button>
                        }
                      />
                    </div>
                    <div className="px-[6px] py-[3px] bg-[#282828] text-white-1 flex justify-center items-center rounded-[2px]">
                      <MdOutlineElectricBolt className="text-[12px] text-[#B746F0]" />
                      <p className="text-[12px] font-normal text-white-1">
                        Buy:
                      </p>
                      <p className="text-[12px] font-normal text-white-1">$</p>
                      {"  "}
                      <input
                        type="text"
                        placeholder="10"
                        className="text-[12px] text-white-1 placeholder:text-white-1 !w-[20px] bg-transparent placeholder:text-[12px] focus:outline-none focus:!border-none"
                      />
                    </div>
                  </div>
                  {/* rows ---->  */}
                  <div className="w-full flex flex-col gap-3">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`w-full py-1 grid grid-cols-[.5fr,2fr,1fr,1fr,1fr,1fr,.5fr,.5fr] cursor-pointer
              ${
                selectedRow === index
                  ? "bg-yellow-1 rounded-[4px] px-[2px]"
                  : "hover:bg-gradient-to-b hover:from-[#141414] hover:from-27.17% hover:to-[rgba(255,255,255,0.18)] hover:to-100%"
              }`}
                          onClick={() => setSelectedRow(index)}
                        >
                          {/* ser no */}
                          <p
                            className={`w-full whitespace-nowrap flex justify-center items-center ${
                              index === 0 ? "bg-[#00C673] " : "bg-transparent"
                            } ${
                              selectedRow === index
                                ? "text-black-1"
                                : "text-black-1 dark:text-white-1 "
                            } rounded-[3px] px-1 text-[12px] font-normal`}
                          >
                            #{index + 1}
                          </p>
                          {/* name  */}
                          <div className="flex border-r-[1px] border-[#B746F0] justify-center items-center gap-1">
                            <div className="w-[20px] h-[20px] rounded-full bg-[#EF7216]"></div>
                            <p
                              className={`text-[12px] font-normal 
                              ${
                                selectedRow === index
                                  ? "text-black-1"
                                  : "text-black-1 dark:text-white-1 "
                              } 
                              `}
                            >
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
                            <GoGraph
                              className={`text-[14px] 
                              ${
                                selectedRow === index
                                  ? "text-black-1"
                                  : "text-black-1 dark:text-white-1 "
                              } 
                              `}
                            />
                            <p className="text-[10px] font-normal text-[#00C673]">
                              78%
                            </p>
                          </div>
                          {/* users  */}
                          <div className="w-full border-r-[1px] border-[#B746F0] flex gap-1 justify-center items-center ">
                            <TbUsers
                              className={`${
                                selectedRow === index
                                  ? "text-black-1"
                                  : "text-black-1 dark:text-white-1 "
                              }  text-[13px]`}
                            />
                            <p className="text-[10px] font-normal text-[#00C673]">
                              1.2k
                            </p>
                          </div>
                          {/* MC  */}
                          <div className="w-full border-r-[1px] border-[#B746F0]  flex gap-1 justify-center items-center ">
                            <p
                              className={`text-[10px] font-normal ${
                                selectedRow === index
                                  ? "text-black-1"
                                  : "text-black-1 dark:text-white-1 "
                              } `}
                            >
                              MC
                            </p>
                            <p className="text-[10px] font-normal text-[#00C673]">
                              $400k
                            </p>
                          </div>
                          {/* volume  */}
                          <div className="w-full border-r-[1px] border-[#B746F0]  flex gap-1 justify-center items-center ">
                            <p
                              className={`text-[10px] font-normal ${
                                selectedRow === index
                                  ? "text-black-1"
                                  : "text-black-1 dark:text-white-1 "
                              } `}
                            >
                              V
                            </p>
                            <p className="text-[10px] font-normal text-[#00C673]">
                              $900k
                            </p>
                          </div>
                          {/* favorite */}
                          <div
                            onClick={() => toggleFavorite(index)}
                            className="w-full flex justify-center items-center"
                          >
                            {favorites[index] ? (
                              <IoMdStar
                                className={` ${
                                  selectedRow === index
                                    ? "dark:text-black-1 text-black-1"
                                    : "text-yellow-1"
                                }  text-[12px]`}
                              />
                            ) : (
                              <MdOutlineStarBorder
                                className={`${
                                  selectedRow === index
                                    ? "dark:text-black-1 text-white-1 "
                                    : "text-white-1"
                                } text-[12px]`}
                              />
                            )}
                          </div>
                          {/*  */}
                          <div
                            onClick={buyOpen}
                            className="flex justify-center items-center"
                          >
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
                {/* down bar ---->  */}
                <div className="w-full csm:flex hidden py-2 justify-center items-center bg-[#787B99] rounded-[5px]">
                  <p className="text-[13px] font-normal text-white-1">
                    {pattern2}
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd col -------------------------------------->  */}
            <div className="w-full h-full csm:order-3 order-3 flex justify-center items-center">
              <div className="w-full h-full max-w-[450px] xl:max-w-[480px] flex flex-col gap-4 justify-between items-center">
                {/* top bar ---->  */}
                <div className="w-full csm:flex hidden py-2 justify-center items-center bg-[#EF7216] rounded-[5px]">
                  <p className="text-[12px] px-1 csm:text-[13px] font-normal text-black-1">
                    {pattern4}
                  </p>
                </div>
                {/* middle section ---> */}
                <div className="w-full bg-transparent dark:bg-black-1 border-[1px] border-black-1 dark:border-[#FEF652] rounded-[5px] p-2">
                  <div className="w-full py-2 px-1 flex justify-center items-center bg-[#FEF652] rounded-[5px]">
                    <p className="text-[10px] csm:text-[13px] font-normal text-black-1 dark:text-black-1">
                      {pattern5}
                    </p>
                  </div>
                  {/* earn by  */}
                  <div className="w-full grid grid-cols-2 py-4">
                    <p className="w-full flex justify-center text-black-1 dark:text-white-1 text-[13px] font-normal items-center">
                      Earn Buzz XP by:
                    </p>
                    <p className="w-full flex justify-center text-black-1 dark:text-white-1 text-[13px] font-normal items-center">
                      [doing sh!t]
                    </p>
                  </div>
                  {/* options  */}
                  <div className="w-full flex px-8 flex-col">
                    {options.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="w-full flex justify-between items-center py-3 csm:py-4"
                        >
                          <div className="flex justify-center items-center gap-2">
                            <p className="text-black-1 dark:text-[#FEF652]">{`//`}</p>
                            <p className="w-full flex justify-center text-black-1 dark:text-white-1 text-[13px] font-normal items-center">
                              {item.name}
                            </p>
                          </div>
                          <Image
                            src={item.icon}
                            alt=""
                            width={14}
                            height={14}
                          />
                        </div>
                      );
                    })}
                  </div>
                  {/* read the white paper  */}
                  <div className="w- gap-1 flex justify-between items-center py-3">
                    <div className="flex justify-center items-center gap-2">
                      <p className="text-[#FEF652]">{`//`}</p>
                      <p className="text-[10px] csm:text-[13px] font-normal text-[#A85419]">
                        📃 📃 Read The White paper
                      </p>
                      <p className="text-[#FEF652]">{`//`}</p>
                    </div>
                    <button className="flex whitespace-nowrap text-[10px] csm:text-[13px] font-normal text-white-1 bg-[#4F40FF] rounded-[4px] justify-center items-center px-2 py-[5px]">
                      🏆 View Leaderboard
                    </button>
                  </div>
                </div>
                {/* down bar -----> */}
                <div className="w-full py-2 flex justify-center items-center bg-[#BA0000] rounded-[5px]">
                  <p className="text-[10px] csm:text-[13px] font-normal text-white-1">
                    {`//Daily Engage Tasks!¯\_(ツ)_/¯_click to Earn!`}
                  </p>
                </div>
                <div className="w-full grid grid-cols-2 gap-4 border-[1px] border-[#BA0000] rounded-[5px] p-[6px]">
                  <button className="w-full px-1 py-2 text-[9px] csm:text-[12px] rounded-[5px] text-white-1 bg-[#BA0000]">
                    Follow BUzz on X [100xp]
                  </button>
                  <button className="w-full px-1 py-2 text-[9px] csm:text-[12px] rounded-[5px] text-[#FEF652] bg-[#BA0000] opacity-30">
                    Like & RT for [100xp]
                  </button>
                </div>
              </div>
            </div>

            {/* 3rd col ---------------------------------------> */}
            <div className="w-full h-full csm:order-3 order-3 flex justify-center items-center">
              <div className="w-full h-full max-w-[450px] xl:max-w-[480px] p-3 flex flex-col gap-4 bg-black-1 rounded-[5px] border-[1px] border-yellow-1">
                <div className="w-full h-[215px] relative">
                  <Image src="/assets/hero3rdcol.png" alt="" fill />
                </div>
                <p className="text-[13px] leading-[24px] text-white-1 font-normal">
                  <span className="text-[24px] font-normal text-white-1">
                    Create coins
                  </span>{" "}
                  <span className="text-[13px] font-normal text-white-1">
                    {" "}
                    with{" "}
                  </span>{" "}
                  <span className="text-black-1 bg-yellow-1 text-[16px]">
                    {" "}
                    custom contracts,
                  </span>{" "}
                  <span className="text-[16px] bg-blue-1 text-black-1">
                    {" "}
                    tax options
                  </span>{" "}
                  and{" "}
                  <span className="bg-[#00663B] text-[16px]">
                    {" "}
                    max buy options
                  </span>{" "}
                  [chads only] with bonding curve sales (improved balance -
                  optimised) {` >>>`} wen fully bonded, coins migrate to
                  uniswap,{" "}
                  <span className="bg-red-1 text-[16px]"> RUG PROOF</span>{" "}
                  deployment, CA renounced on Dex listing // all{" "}
                  <span className="text-blue-1 text-[16px]">
                    functions automated //
                  </span>{" "}
                  (block-timestamps). Add live chats with advanced chat
                  features.{" "}
                  <span className="bg-yellow-1 text-[16px] text-blue-1">
                    Data-centric trading
                  </span>{" "}
                  with{" "}
                  <span className="bg-red-1 text-[16px]">custom XP algo</span>{" "}
                  that{" "}
                  <span className="bg-[#130061] text-[16px] text-[#14FF00]">
                    rewards: traders,
                  </span>{" "}
                  <span className="bg-[#130061] text-[16px] text-blue-1">
                    {" "}
                    based devs
                  </span>{" "}
                  &{" "}
                  <span className="bg-[#130061] text-[16px] text-red-1">
                    {" "}
                    engagoors
                  </span>
                  .
                </p>
                <p className="bg-[#00C673] text-center py-[3px] text-[13px] font-normal text-black-1">
                  Seasonal Airdrops{" "}
                  <span className="text-yellow-1"> - $BUZZ - </span> rewarding
                  the great.
                </p>
                <p className="text-[14px] font-normal text-yellow-1">{`////////////////////////////////////>> Get Buzzed.`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* drawer btn ------------------------------> */}
      <button
        onClick={open}
        className={`w-[40px] z-10 lg:fixed right-0 lg:flex hidden bg-[#1D252C] ${drawerButtonHeight} bottom-0 items-start justify-center`}
      >
        <div className="w-[20px] h-[350px] relative">
          <Image
            src="/assets/drawerBtn.svg"
            alt=""
            fill
            className="object-fill"
          />
        </div>
      </button>
      {/* chat drawer ------------------>  */}
      <div className="w-full lg:block hidden">
        <ChatDrawer open={opened} closeDrawer={close} />
      </div>
      {/* <ProcessModal open={activeModal} onClose={closeProcessModal} /> */}
      <TransactionModal open={activeModal} onClose={closeProcessModal} />
      {/* <SuccessModal open={activeModal} onClose={closeProcessModal} /> */}
      {/* <FailedModal open={activeModal} onClose={closeProcessModal} /> */}

      {/* Buy and sell modal -------------------> */}
      <CustomModal size="23rem" open={buyAndSell} onClose={closeBuyAndSell}>
        <div className="w-full gap-4 flex flex-col">
          {/* buttons */}
          <div className="w-full grid h-[42px] csm:h-[44px] grid-cols-2 gap-2">
            <button className="text-[22px] font-normal text-black-1 w-full h-full bg-green-1">
              Buy
            </button>
            <button className="text-[22px] font-normal text-black-1/40 w-full h-full bg-[#EA000054]">
              Sell
            </button>
          </div>
          {/* switch to coin --> */}
          <div className="w-full flex justify-between items-center">
            <p className="text-[12px] csm:text-[12px] font-normal text-white-1 bg-black-1 px-[6px] rounded-[3px]">
              Switch to [insert Ticker]
            </p>
            <p className="text-[12px] csm:text-[12px] font-normal text-white-1 bg-blue-1 px-[6px] rounded-[3px]">
              Slippage
            </p>
          </div>
          {/* ticker input --->  */}
          <div className="w-full border-[1px] px-2 dark:border-white-1 border-black-1 h-[41px] csm:h-[44px] grid grid-cols-[1fr,110px]">
            <input
              placeholder="0.0"
              type="text"
              className="w-full dark:placeholder:text-white-1 placeholder:text-black-1 dark:text-white-1 border-r-[1px] dark:border-r-white-1 focus:outline-none border-black-1 h-full bg-transparent text-[22px] font-normal text-black-1"
              name="ticker"
              id=""
            />
            <div className="flex justify-center items-center gap-2">
              <p className="text-[12px] font-normal dark:text-white-1 text-black-1">
                Ticker
              </p>
              <div className="w-[32px] h-[32px] flex justify-center items-center">
                <Image src="/assets/emoji2.png" alt="" width={30} height={30} />
              </div>
            </div>
          </div>
          {/* you spend -----> */}
          <div className="w-full flex justify-between items-center">
            <p className="text-[12px] pl-24 csm:text-[12px] font-normal text-black-1 dark:text-white-1">
              You spend:
            </p>
            <p className="text-[12px] csm:text-[12px] font-normal text-black-1 dark:text-white-1">
              0.1 ETH
            </p>
          </div>
          {/* system messages ---> */}
          <div className="w-full flex flex-col gap-1">
            <p className="text-[10px] csm:text-[12px] font-normal dark:text-white-1 text-black-1">
              System messages{" "}
            </p>
            <p className="text-black-1 dark:text-white-1 rounded-[4px] font-normal text-[11px] csm:text-[12px] w-full py-[4px] px-2 border-[1px] dark:border-white-1 border-dotted border-black-1">
              Insufficient balance.{" "}
            </p>
          </div>
          {/* place trade button ---->  */}
          <button
            onClick={closeBuyAndSell}
            className="w-full h-[44px] hover:opacity-80 csm:h-[44px] bg-yellow-1 text-[16px] font-normal text-black-1 flex justify-center items-center"
          >
            Place trade
          </button>
        </div>
      </CustomModal>
      {/* -----------------> Buy and sell widget + Slippage Settings  */}
      <BuyAndSellFlip openModal={buyAndSellModal} closeModal={buyClose} />
    </React.Fragment>
  );
};

export default Hero;

const pattern1 = "//YOU ARE A WINNER!¯_(ツ)_/¯_YOU ARE A winner!\\";
const pattern2 = "//YOU ARE A Loser!¯_(ツ)_/¯_YOU ARE A Loser!\\";
const pattern4 = "// SEASON 1 BUZZ AIRDROP ||>>";
const pattern5 = "Season one start: [xx/xx/xx] End:[xx/xx/xx]";

const options = [
  {
    name: "Trading on Buzz",
    icon: "/assets/buzz2.svg",
  },
  {
    name: "Creating Tokens on Buzz",
    icon: "/assets/buzz2.svg",
  },
  {
    name: "Engaging with Buzz",
    icon: "/assets/twitter2.svg",
  },
];

const timeOptions = ["15 min", "30 min", "1 hour", "4 hours", "1 day"];
