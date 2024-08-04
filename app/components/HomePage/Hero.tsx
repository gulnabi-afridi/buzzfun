"use client";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import Image from "next/image";
import OpenChartBtn from "../shared/OpenChartBtn";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegFlag } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";

const Hero = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMinimize, setIsMinimize] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <React.Fragment>
      <div className="w-full relative flex flex-col justify-center items-center">
        {/* open chat  */}
        <OpenChartBtn />
        <div
          className={`w-full flex flex-col max-w-[1350px] mt-4 px-4 py-3 dark:bg-black-1 bg-white-1 border-[2px] ${
            resolvedTheme === "dark" ? "forDarkShadow" : "tableShadow"
          } tableShadow dark:border-white-1 border-black-1 rounded-[5px]`}
        >
          <div
            className={`w-full grid gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[1fr,1fr,40px,1fr]`}
          >
            {/* 1st col ------>  */}
            <div
              className={`w-full ${
                isMinimize
                  ? "grid gap-4 grid-cols-2 justify-center items-center"
                  : "flex justify-center items-center"
              } `}
            >
              <div
                className={`w-full ${
                  isMinimize ? "hidden" : "w-full flex"
                } max-w-[500px] flex-col gap-3`}
              >
                {/* 1st portion */}
                <div className={`w-full flex flex-col`}>
                  {/* header */}
                  <div className="w-full bg-[#317C85] p-2 flex justify-center items-center gap-2">
                    <p className="text-[18px] sm:text-[20px] text-white-1 font-montserrat bg-black-1 px-2">
                      #2
                    </p>
                    <p className="text-black-1 sm:block hidden text-[20px]">
                      {pattern1}
                    </p>
                    <p className="text-black-1 sm:hidden block text-[20px]">
                      {pattern12}
                    </p>
                  </div>
                  <div className="w-full shadow2 bg-[#317C85] p-2 grid gap-3 grid-cols-[150px,1fr]">
                    <div className="w-full h-full relative">
                      <Image src="/assets/token1.svg" alt="" fill />
                    </div>
                    <div className="w-full sm:flex-row flex-col flex gap-1">
                      <div className="w-full flex flex-col gap-2">
                        <div className="w-full gap-1 px-1 bg-purple-1 flex justify-start items-center py-1">
                          <p className="text-[12px] text-white-1 font-normal">
                            Creator:
                          </p>
                          <Image
                            src="/assets/collector.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] text-white-1 uppercase font-normal">
                            user name
                          </p>
                        </div>
                        <div className="w-full gap-1 bg-orange-1 flex justify-start px-1 items-center py-1">
                          <p className="text-[12px] text-white-1 font-normal">
                            Market cap: 45.3K [rank:2]
                          </p>
                        </div>
                        <div className="w-full gap-1 px-1 bg-white-1 flex justify-start items-center py-1">
                          <p className="text-[12px] text-black-1 font-normal">
                            Replies: 45
                          </p>
                        </div>
                        <div className="w-full gap-1 px-1 bg-black-1 flex justify-start items-center py-1">
                          <p className="text-[12px] text-white-1 font-normal">
                            Name: Pink Hood Frog...
                          </p>
                        </div>
                        <div className="w-full gap-1 bg-purple-1 px-1 flex justify-start items-center py-1">
                          <p className="text-[12px] text-white-1 font-normal">
                            Ticker: Froglic
                          </p>
                        </div>
                      </div>
                      <p className="w-fit bg-orange-1 py-3 sm:flex hidden font-courier px-1 justify-start text-[20px] font-semibold items-center verticalOr">
                        BUZZING
                      </p>
                      <p className="w-full bg-orange-1 py-[2px] sm:hidden font-courier px-1 flex justify-start text-[18px] sm:text-[20px] font-semibold items-center">
                        BUZZING
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2nd portion */}
                <div
                  className={`w-full flex my-1 dark:bg-yellow-1 bg-orange-1 justify-center items-center px-2 h-[42px]`}
                >
                  <p className="text-[13px] text-black-1 font-normal">{text}</p>
                </div>
                {/* 3rd portion */}
                <div className={`w-full flex flex-col`}>
                  {/* header */}
                  <div className="w-full bg-black-3 p-2 flex justify-center items-center gap-2">
                    <p className="text-[18px] sm:text-[20px] text-white-1 font-montserrat bg-purple-1 px-2">
                      #3
                    </p>
                    <p className="text-blue-1 sm:block hidden text-[20px]">
                      {pattern2}
                    </p>
                    <p className="text-blue-1 sm:hidden block text-[20px]">
                      {pattern21}
                    </p>
                  </div>
                  <div className="w-full shadow2 bg-black-3 p-2 grid gap-3 grid-cols-[150px,1fr]">
                    <div className="w-full h-full relative">
                      <Image src="/assets/token2.svg" alt="" fill />
                    </div>
                    <div className="w-full sm:flex-row flex-col flex gap-1">
                      <div className="w-full flex flex-col gap-2">
                        <div className="w-full gap-1 px-1 bg-purple-1 flex justify-start items-center py-1">
                          <p className="text-[12px] text-white-1 font-normal">
                            Creator:
                          </p>
                          <Image
                            src="/assets/collector.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] text-white-1 uppercase font-normal">
                            user name
                          </p>
                        </div>
                        <div className="w-full gap-1 bg-orange-1 flex justify-start px-1 items-center py-1">
                          <p className="text-[12px] text-white-1 font-normal">
                            Market cap: 45.3K [rank:2]
                          </p>
                        </div>
                        <div className="w-full gap-1 px-1 bg-white-1 flex justify-start items-center py-1">
                          <p className="text-[12px] text-black-1 font-normal">
                            Replies: 45
                          </p>
                        </div>
                        <div className="w-full gap-1 px-1 bg-black-1 flex justify-start items-center py-1">
                          <p className="text-[12px] text-white-1 font-normal">
                            Name: Pink Hood Frog...
                          </p>
                        </div>
                        <div className="w-full gap-1 bg-purple-1 px-1 flex justify-start items-center py-1">
                          <p className="text-[12px] text-white-1 font-normal">
                            Ticker: Froglic
                          </p>
                        </div>
                      </div>
                      <p className="w-fit bg-white-1 text-black-1 py-3 font-courier px-1 hidden sm:flex justify-start text-[20px] font-semibold items-center verticalOr">
                        BUZZING
                      </p>
                      <p className="w-full bg-white-1 text-black-1 py-[2px] font-courier px-1 flex sm:hidden justify-start text-[18px] font-semibold items-center">
                        BUZZING
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* The Minimize data ------> */}
              {/* 1 */}
              <div
                className={`w-full ${
                  isMinimize ? "flex" : "hidden"
                } justify-center items-center`}
              >
                <div
                  className={`max-w-[180px] w-full ${
                    isMinimize ? "flex" : "hidden"
                  }  gap-2 flex-col items-start`}
                >
                  <div className="flex justify-center items-center gap-1">
                    <p className=" bg-yellow-1 px-2 leading-[24px] text-[22px] font-normal text-black-1">
                      #2
                    </p>
                    <p className="text-[22px] uppercase font-semibold text-[#1E262D] font-courier">
                      BUZZing
                    </p>
                  </div>
                  <div className="w-full flex flex-col gap-2 bg-[#317C85] rounded-[7px] py-5 px-4">
                    <div className="w-full h-[140px] relative">
                      <Image
                        src="/assets/mini1.svg"
                        alt=""
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div className="w-full text-center bg-purple-1 text-[16px] text-white-1 py-1">
                      $Peipei
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div
                className={`w-full ${
                  isMinimize ? "flex" : "hidden"
                } justify-center items-center`}
              >
                <div
                  className={`max-w-[180px] ${
                    isMinimize ? "flex" : "hidden"
                  } w-full  gap-2 flex flex-col items-start`}
                >
                  <div className="flex justify-center items-center gap-1">
                    <p className=" bg-yellow-1 px-2 leading-[24px] text-[22px] font-normal text-black-1">
                      #3
                    </p>
                    <p className="text-[22px] font-semibold uppercase text-[#1E262D] font-courier">
                      Buzzed{" "}
                    </p>
                  </div>
                  <div className="w-full flex flex-col gap-2 bg-black-1 rounded-[7px] py-5 px-4">
                    <div className="w-full h-[140px] relative">
                      <Image
                        src="/assets/mini2.svg"
                        alt=""
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div className="w-full text-center bg-purple-1 text-[16px] text-white-1 py-1">
                      $Doge
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd col ------>  */}
            <div className="w-full flex justify-center items-center">
              <div className="w-full max-w-[500px] dark:bg-orange-1 bg-yellow-1 navibarCardSh rounded-[5px] flex flex-col p-3">
                {/* 1st portiom */}
                <div className="flex mt-1 justify-center gap-1 items-center px-1 bg-black-1">
                  <p className="text-yellow-1">#1</p>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
                    return (
                      <Image
                        key={index}
                        src="/assets/pattern3.svg"
                        width={15}
                        height={15}
                        alt=""
                      />
                    );
                  })}
                </div>
                {/* 2nd portion */}
                <div
                  className={`w-full ${
                    isMinimize ? "hidden" : "grid"
                  } justify-center grid grid-cols-[6px,1fr] sm:grid-cols-[10px,1fr] items-center gap-1 sm:gap-2`}
                >
                  <div className="w-full h-[70%] bg-black-1"></div>
                  <h2 className="uppercase text-[50px] sm:text-[60px] font-normal text-black-1">
                    BUzz King
                  </h2>
                </div>
                {/* 3rd portion */}
                <div
                  className={`w-full ${
                    isMinimize ? "hidden" : "block"
                  } h-[40px] sm:h-[50px] relative`}
                >
                  <Image src="/assets/downArrows.svg" alt="" fill />
                </div>
                {/* 4rth portion  */}
                <div className="w-full mt-3 sm:mt-4 flex gap-2 rounded-[5px] flex-col bg-yellow-1 p-2 shadow3">
                  <div className="w-full flex flex-col">
                    <div className="w-full bg-transparent grid gap-3 grid-cols-[150px,1fr]">
                      <div className="w-full h-full relative">
                        <Image src="/assets/token3.svg" alt="" fill />
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <div className="w-full gap-1 px-1 bg-transparent flex justify-start items-center py-1">
                          <p className="text-[12px] text-black-1 font-normal">
                            Creator by:
                          </p>
                          <Image
                            src="/assets/collector.svg"
                            alt=""
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] text-black-1 uppercase font-normal">
                            user name
                          </p>
                        </div>
                        <div className="w-full gap-1 bg-orange-1 flex justify-start px-1 items-center py-1">
                          <p className="text-[12px] text-white-1 font-normal">
                            Market cap: 45.3K [rank:2]
                          </p>
                        </div>
                        <div className="w-full gap-1 px-1 bg-blue-2 flex justify-start items-center py-1">
                          <p className="text-[12px] text-white-1 font-normal">
                            Replies: 45
                          </p>
                        </div>
                        <div className="w-full gap-1 px-1 bg-black-1 flex justify-start items-center py-1">
                          <p className="text-[12px] text-white-1 font-normal">
                            Name:: Pink Hood Fro...
                          </p>
                        </div>
                        <div className="w-full gap-1 bg-transparent px-1 flex justify-start items-center py-1">
                          <p className="text-[12px] text-black-1 font-normal">
                            Ticker: Froglic
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p
                    className={`bg-[#194348] ${
                      isMinimize ? "hidden" : "block"
                    }  text-[12px] font-normal text-white-1 p-2 rounded-[5px]`}
                  >
                    Description: lorem ipsum talkem sumit here making it cool
                    and reassruing and no rugginess for sure makin it based,
                    yeah. innt. lorem ipsum talkem sumit here making it cool and
                    reassruing and no rugginess for sure makin it based, yeah.
                    innt.
                  </p>
                  <button className="w-full font-courier hover:opacity-80 bg-black-1 rounded-[5px] text-[12px] h-[35px] text-white-1 font-semibold">
                    Ape Now
                  </button>
                </div>
              </div>
            </div>
            {/* 3rd col -----> */}
            <div
              className={`2xl:flex hidden my-2 justify-center items-center ${
                isMinimize ? "gap-4" : "gap-2"
              } `}
            >
              <div className="w-[8px] h-full bg-blue-2"></div>
              <div className={`w-[8px] h-full bg-orange-1`}></div>
              <div
                className={`w-[8px] h-full ${
                  isMinimize ? "hidden" : "block"
                }  bg-purple-1`}
              ></div>
            </div>
            <div className="w-full flex justify-center items-center">
              {resolvedTheme === "dark" ? (
                <div
                  className={`w-full max-w-[500px] rounded-[5px] ${
                    isMinimize
                      ? "min-h-[350px] bg-black-1"
                      : "min-h-[540px] bg-[#1b2a35]"
                  }  relative h-full`}
                >
                  <Image
                    src={isMinimize ? "/assets/mini3.png" : "/assets/card2.png"}
                    fill
                    alt=""
                  />
                </div>
              ) : (
                <div
                  className={`w-full max-w-[500px] rounded-[5px] bg-black-1 ${
                    isMinimize ? "min-h-[350px]" : "min-h-[540px]"
                  }  relative h-full`}
                >
                  <Image
                    src={
                      isMinimize ? "/assets/mini3.png" : "/assets/3rdCol.png"
                    }
                    fill
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
          {/* down section */}
          <div className="w-full px-3 bg-blue-2 py-3 flex justify-between gap-2 items-center mt-3 sm:mt-6">
            <p className="text-black-1 text-[10px] font-normal">{pattern3}</p>
            <button
              onClick={() => setIsMinimize(!isMinimize)}
              className="flex justify-center gap-1 py-[2px] rounded-md items-center px-2 bg-black-1"
            >
              <p className="text-white-1 uppercase font-semibold font-montserrat text-[10px] ">
                {isMinimize ? "Expand" : "minimise"}
              </p>
              <p
                className={`text-white-1 duration-200 ease-linear ${
                  isMinimize ? "rotate-180" : "rotate-0"
                } text-[12px]`}
              >
                ^^
              </p>
            </button>
          </div>
        </div>
      </div>
      {/* drawer btn ----> */}
      <button
        onClick={open}
        className="w-[40px] lg:flex hidden bg-[#D4DDE6] drawerSha absolute right-0 bottom-0 h-[calc(100%-107px)] items-start justify-center"
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
      {/*  */}
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        transitionProps={{
          transition: 'slide-left',
          duration: 300,
          timingFunction: 'linear',
        }}
        size="65rem"
        withCloseButton={false}
        overlayProps={{ backgroundOpacity: 0, blur: 0 }}
        classNames={{
          content:
            "!bg-[#D4DDE6] !h-[calc(100vh-106px)] !mt-[106px] !overflow-hidden",
        }}
      >
        <div className="w-full h-full grid grid-cols-[30px,1fr]">
          {/* close drawer  */}
          <div className="w-full flex justify-start">
            <div
              onClick={close}
              className="w-[23px] h-[380px] cursor-pointer relative"
            >
              <Image
                src="/assets/drawerBtn.svg"
                alt=""
                fill
                className="object-fill"
              />
            </div>
          </div>
          {/* content */}
          <div className="w-full bg-white-1 grid grid-cols-[1fr,3.5fr,1fr]">
            {/* 1st col */}
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex border-[1px] border-blue-1 flex-col h-[calc(100vh-156px)]">
                {/* Fixed header */}
                <div className="w-full flex flex-col gap-2 px-4 py-2">
                  <p className="text-[14px] font-normal text-black-1">
                    {" "}
                    My Chats (13){" "}
                  </p>
                  {/* search  */}
                  <div className="w-full grid grid-cols-[1fr,30px]">
                    <input
                      type="text"
                      className="h-[20px] text-[12px] font-normal text-black-1 w-full rounded-[2px] pl-2 focus:ring-0 focus:outline-none bg-[#D1DBE4]"
                      name=""
                      id=""
                    />
                    <div className="w-full flex justify-end items-center">
                      <button className="w-[18px] h-[18px] flex justify-center items-center bg-black-1">
                        <LuSearch className="text-[12px] text-white-1" />
                      </button>
                    </div>
                  </div>
                  {/* online  */}
                  <div className="w-full relative flex justify-center items-center">
                    <p
                      className="text-[14px] [text-shadow:_-0.4px_-0.4px_0_#D90000,_0.4px_-0.4px_0_#D90000,_-0.4px_0.4px_0_#D90000,_0.4px_0.4px_0_#D90000]
                    font-normal text-blue-1"
                    >
                      {generalChat}
                    </p>
                    <div className="w-[4px] h-[28px] bg-[#004BFE] absolute -left-2"></div>
                    <div className="w-[4px] h-[28px] bg-[#004BFE] absolute -right-2"></div>
                  </div>
                </div>

                {/* Scrollable user list */}
                <div className="w-full flex-grow overflow-y-auto px-4">
                  {[
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 3, 4, 5, 6, 3, 2, 1, 3,
                    2, 3, 1, 2, 1, 1, 2,
                  ].map((item, index) => {
                    return (
                      <div key={index} className="w-full ">
                        <div></div>
                        <p className="text-[14px] py-[4px] [text-shadow:_-0.4px_-0.4px_0_#D90000,_0.4px_-0.4px_0_#D90000,_-0.4px_0.4px_0_#D90000,_0.4px_0.4px_0_#D90000] w-full flex justify-start font-normal text-black-1">
                          {chatName}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* 2nd col ----->  */}
            <div className="w-full p-3 flex flex-col">
              {/* top header  */}
              <div className="w-full px-4 h-[50px] flex justify-between items-center">
                <div className="flex justify-center items-center gap-2">
                  <p className="text-[14px] font-bold text-black-1">News</p>
                  <p className="bg-[#FF0000] px-[8px] py-[0px] text-white-1">
                    2
                  </p>
                </div>
                <p className="text-[14px] font-bold text-black-1">
                  General [Chat]
                </p>
                <p className="text-[14px] font-bold text-black-1">[My Chats]</p>
              </div>
              {/* token name ---> */}
              <div className="w-full bg-[#D4DDE6] h-[40px] px-4 flex justify-between items-center ">
                <p className="text-[14px] font-bold text-black-1">
                  Token name [chet]
                </p>
                <HiOutlineDotsHorizontal className="text-[20px] cursor-pointer text-black-1" />
              </div>
              {/* update bar ---> */}
              <div className="w-full mt-[2px] bg-black-1 px-4 h-[40px] flex justify-between items-center ">
                <p className="text-[14px] font-bold text-yellow-1">
                  #9 Update: Bot development
                </p>
                <button className="w-[20px] h-[20px] bg-yellow-1 flex justify-center items-center">
                  <FaRegFlag className="text-[16px] cursor-pointer text-black-1" />
                </button>
              </div>
              <div className="w-full h-[calc(100vh-300px)] flex flex-col">
                {/* messages ---> */}
                <div className="w-full overflow-y-auto flex-grow flex flex-col">
                  {messageData.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full px-4 py-2 grid items-start grid-cols-[80px,110px,1fr]"
                      >
                        <p className="w-full flex justify-start text-[14px] font-normal text-black-1">
                          {item.serNo}
                        </p>
                        <div className="w-full flex flex-col gap-1 items-center justify-center">
                          <p className="text-[14px] font-semibold text-[#004BFE]">
                            {item.userName}
                          </p>
                          <p className="text-[14px] font-normal text-black-1">
                            {item.roloe}
                          </p>
                        </div>
                        <div className="w-full pl-3 items-start gap-2 flex flex-col">
                          <p className="text-[12px] font-normal text-black-1">
                            {item.message}
                          </p>
                          {/* image ---> */}
                          {item.isImage && (
                            <div className="flex w-full justify-start items-end gap-3">
                              <Image
                                src="/assets/message.png"
                                width={130}
                                height={95}
                                alt=""
                              />
                              {/* image detail */}
                              <div className="flex w-full max-w-[180px] flex-col items-start">
                                <p className="text-[10px] font-normal text-black-1">
                                  Image{" "}
                                </p>
                                <div className="flex w-full justify-between items-center gap-2">
                                  <p className="text-[10px] font-normal text-black-1">
                                    file type{" "}
                                  </p>
                                  <p className="text-[10px] font-normal text-black-1">
                                    .jpg
                                  </p>
                                </div>{" "}
                                <div className="flex w-full justify-between items-center gap-2">
                                  <p className="text-[10px] font-normal text-black-1">
                                    Size
                                  </p>
                                  <p className="text-[10px] font-normal text-black-1">
                                    1.2mb
                                  </p>
                                </div>
                                <div className="flex w-full justify-between items-center gap-2">
                                  <p className="text-[10px] font-normal text-black-1">
                                    dimensions
                                  </p>
                                  <p className="text-[10px] font-normal text-black-1">
                                    1200x1000
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                          {/* reaction */}
                          {item.isReactions && (
                            <div className="flex justify-center items-center gap-3">
                              <div className="flex justify-center items-center gap-1">
                                ♥️
                                <p className="text-[11px] font-normal text-black-1">
                                  2
                                </p>
                              </div>
                              <div className="flex justify-center items-center gap-1">
                                😍
                                <p className="text-[11px] font-normal text-black-1">
                                  4
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* send message ui ---> */}
                <div className="w-full grid grid-cols-[1fr,80px] rounded-[2px] h-[100px] gap-3 border-[1px] border-blue-1">
                  <p className="text-[14px] p-2 font-normal text-black-1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum passages, and more recently
                    with desktop publishing software like{" "}
                  </p>
                  <button className="bg-[#D4DDE6] p-2 flex flex-col justify-center items-center w-full">
                    <p className="text-[14px] font-normal text-black-1 bg-yellow-1 px-[4px]">
                      /SEND
                    </p>
                    <p className="text-[14px] font-normal text-black-1">
                      [image]
                    </p>
                    <p className="text-[14px] font-normal text-black-1">
                      [Emoji]
                    </p>
                  </button>
                </div>
              </div>
            </div>
            {/* 3rd col ----> */}
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex border-[1px] border-blue-1 flex-col h-[calc(100vh-416px)]">
                {/* Fixed header */}
                <div className="w-full flex flex-col gap-2 px-4 py-2">
                  {/* search bar  */}
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-normal text-black-1">
                      Degens (13)
                    </p>
                    <LuSearch className="text-[22px] text-black-1" />
                  </div>
                  {/* online  */}
                  <div className="w-full relative flex justify-center items-center">
                    <p className="text-[14px] font-normal text-black-1">
                      {online}
                    </p>
                    <div className="w-[4px] h-[28px] bg-[#004BFE] absolute -left-2"></div>
                    <div className="w-[4px] h-[28px] bg-[#004BFE] absolute -right-2"></div>
                  </div>
                  {/* admin */}
                  <div className="w-full grid grid-cols-[40px,1fr]">
                    <p className="w-full flex justify-start">@</p>
                    <div className="w-full flex justify-start items-center">
                      <p className="[text-shadow:_-0.4px_-0.4px_0_#D90000,_0.4px_-0.4px_0_#D90000,_-0.4px_0.4px_0_#D90000,_0.4px_0.4px_0_#D90000] text-[14px] font-semibold text-black-1">
                        {admin}
                      </p>
                    </div>
                  </div>
                  {/* mode */}
                  <div className="w-full grid grid-cols-[40px,1fr]">
                    <p className="w-full flex justify-start">@</p>
                    <div className="w-full flex justify-start items-center">
                      <p className="text-[14px] font-semibold text-red-1">
                        {mode}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Scrollable user list */}
                <div className="w-full flex-grow overflow-y-auto px-4">
                  {[
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 3, 4, 5, 6, 3, 2, 1, 3,
                    2, 3, 1, 2, 1, 1, 2,
                  ].map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full grid grid-cols-[40px,1fr]"
                      >
                        <div></div>
                        <p className="text-[14px] py-[4px] w-full flex justify-start font-normal text-black-1">
                          {userName}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/*  */}
              <div className="w-full h-[250px] border-[1px] border-blue-1 flex flex-col justify-between p-2">
                <p className="text-[14px] underline font-normal text-black-1">
                  General Admin
                </p>
                <p className="text-[14px] font-normal text-black-1">
                  [manage users]
                </p>
                <p className="text-[14px] font-normal text-red-1">
                  [manage roles]
                </p>
                <p className="text-[14px] font-normal text-[#336FFE]">
                  [manage wallets]
                </p>
                <p className="text-[14px]  font-normal text-black-1">
                  [manage coins]
                </p>
                <p className="text-[14px]  font-normal text-black-1">[stats]</p>
                <p className="text-[14px] font-normal text-black-1">
                  [News Post]
                </p>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default Hero;

const text = "//YOU ARE A WINNER!¯_(ツ)_/¯_YOU ARE A WINNER!\\";
const pattern1 = ">>>>>>>>>>>>>>>>>>>>>>>>>>";
const pattern12 = ">>>>>>>>>>>>>";
const pattern2 = "<<<<<<<<<<<<<<<<<<<<<<<<<<";
const pattern21 = "<<<<<<<<<<<<<";
const pattern3 =
  "/////////////////////////////////#######( .  Y . )#######********}}}}}}}[][][L][F][G][][][0]******_______¯_(ツ)_/¯_________8==============D";
const admin = "<ADMIN>";
const mode = "<MOD>";
const userName = "<[Username]>";
const online = "<Online>";
const generalChat = "<General Chat>";
const chatName = "<Chat Name>";

const messageData = [
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    isImage: true,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
];
