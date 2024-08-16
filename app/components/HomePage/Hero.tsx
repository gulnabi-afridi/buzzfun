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
import { LuTimerReset } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineElectricBolt } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

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
          className={`w-full flex flex-col max-w-[1400px] mt-4 px-4 py-3 dark:bg-transparent dark:border-transparent bg-white-1 border-[2px] border-black-1 rounded-[5px]`}
        >
          <div
            className={`w-full grid gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[1fr,.9fr,1fr]`}
          >
            {/* 1st col ----------------------------------> */}
            <div className="w-full h-full justify-between items-center gap-4 flex flex-col">
              {/* top bar ---->  */}
              <div className="w-full py-2 flex justify-center items-center bg-[#4F40FF] rounded-[5px]">
                <p className="text-[13px] font-normal text-white-1">
                  {pattern1}
                </p>
              </div>
              {/* table ---> */}
              <div className="w-full bg-black-1 border-[1px] border-[#FEF652] rounded-[5px] p-2">
                {/* table filter -->  */}
                <div className="flex pt-1 pb-3 justify-between items-center">
                  <div className="flex justify-center items-center gap-2">
                    <p className="px-[6px] py-[3px] bg-blue-1 text-white-1 font-normal text-[12px] rounded-[2px]">
                      Top 10
                    </p>
                    <button className="flex bg-[#0E161C] justify-center items-center px-[6px] py-[3px] rounded-[2px]">
                      <LuTimerReset className="text-[12px] text-white-1" />
                      <p className="text-[10px] text-white-1 font-normal">
                        15m
                      </p>
                      <MdKeyboardArrowDown className="text-[12px] text-[#94A3B8]" />
                    </button>
                  </div>
                  <div className="px-[6px] py-[3px] bg-[#282828] text-white-1 flex justify-center items-center rounded-[2px]">
                    <MdOutlineElectricBolt className="text-[12px] text-[#B746F0]" />
                    <p className="text-[12px] font-normal text-white-1">Buy:</p>
                    <p className="text-[12px] font-normal text-white-1">$</p>
                    <p className="text-[12px] font-normal text-white-1">10</p>
                  </div>
                </div>
                {/* rows ---->  */}
                <div className="w-full flex flex-col gap-3">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full py-1 grid grid-cols-[.5fr,2fr,1fr,1fr,1fr,1fr,.5fr,.5fr]"
                      >
                        {/* ser no */}
                        <p
                          className={`w-full whitespace-nowrap flex justify-center items-center ${
                            index === 0 ? "bg-[#00C673] " : "bg-transparent"
                          }rounded-[3px] px-1 text-white-1 text-[12px] font-normal`}
                        >
                          #{index + 1}
                        </p>
                        {/* name  */}
                        <div className="flex border-r-[1px] border-[#B746F0] justify-center items-center gap-1">
                          <div className="w-[20px] h-[20px] rounded-full bg-[#EF7216]"></div>
                          <p className="text-[12px] font-normal text-white-1">
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
                          <Image
                            src="/assets/graph.svg"
                            alt=""
                            width={10}
                            height={10}
                          />
                          <p className="text-[10px] font-normal text-[#00C673]">
                            78%
                          </p>
                        </div>
                        {/* users  */}
                        <div className="w-full border-r-[1px] border-[#B746F0]  flex gap-1 justify-center items-center ">
                          <Image
                            src="/assets/users.svg"
                            alt=""
                            width={12}
                            height={12}
                          />
                          <p className="text-[10px] font-normal text-[#00C673]">
                            1.2k
                          </p>
                        </div>
                        {/* MC  */}
                        <div className="w-full border-r-[1px] border-[#B746F0]  flex gap-1 justify-center items-center ">
                          <p className="text-[10px] font-normal text-white-1">
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
                          <MdOutlineStarBorder className="text-[#EBFF00C4] text-[12px]" />
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
              {/* down bar ---->  */}
              <div className="w-full py-2 flex justify-center items-center bg-[#787B99] rounded-[5px]">
                <p className="text-[13px] font-normal text-white-1">
                  {pattern2}
                </p>
              </div>
            </div>

            {/* 2nd col -------------------------------------->  */}
            <div className="w-full flex justify-center items-center">
              <div className="w-full max-w-[500px] dark:bg-orange-1 bg-yellow-1 navibarCardSh rounded-[5px] flex flex-col p-3">
                {/* 1st portiom */}
                <div className="flex mt-1 justify-center gap-1 items-center px-1 bg-black-1">
                  <p className="text-yellow-1">#1</p>
                  {[
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                  ].map((item, index) => {
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
                  <div className="w-full h-[70%] dark:bg-white-1 bg-black-1"></div>
                  <h2 className="uppercase text-[50px] sm:text-[60px] font-normal dark:text-white-1 text-black-1">
                    <span className="dark:bg-yellow-1 text-white-1 text-center dark:text-black-1 font-semibold bg-transparent">
                      BUzz
                    </span>{" "}
                    King
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
                        {/* name  */}
                        <div className="w-full gap-1 px-1 bg-black-1 flex justify-start items-center py-1">
                          <p className="text-[12px] text-white-1 font-normal">
                            Name:: Pink Hood Fro...
                          </p>
                        </div>
                        {/* ticker */}
                        <div className="w-full gap-1 bg-transparent px-1 flex justify-start items-center py-1">
                          <p className="text-[12px] text-black-1 font-normal">
                            Ticker: Froglic
                          </p>
                        </div>
                        {/* created by */}
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

            {/* 3rd col ---------------------------------------> */}
            <div className="w-full flex flex-col gap-4 justify-between items-center">
              {/* top bar ---->  */}
              <div className="w-full py-2 flex justify-center items-center bg-[#EF7216] rounded-[5px]">
                <p className="text-[13px] font-normal text-black-1">
                  {pattern4}
                </p>
              </div>
              {/* middle section ---> */}
              <div className="w-full bg-black-1 border-[1px] border-[#FEF652] rounded-[5px] p-2">
                <div className="w-full py-2 flex justify-center items-center bg-[#FEF652] rounded-[5px]">
                  <p className="text-[13px] font-normal text-black-1">
                    {pattern5}
                  </p>
                </div>
                {/* earn by  */}
                <div className="w-full grid grid-cols-2 py-4">
                  <p className="w-full flex justify-center text-white-1 text-[13px] font-normal items-center">
                    Earn Buzz XP by:
                  </p>
                  <p className="w-full flex justify-center text-white-1 text-[13px] font-normal items-center">
                    [doing sh!t]
                  </p>
                </div>
                {/* options  */}
                <div className="w-full flex px-8 flex-col">
                  {options.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full flex justify-between items-center py-4"
                      >
                        <div className="flex justify-center items-center gap-2">
                          <p className="text-[#FEF652]">{`//`}</p>
                          <p className="w-full flex justify-center text-white-1 text-[13px] font-normal items-center">
                            {item.name}
                          </p>
                        </div>
                        <Image src={item.icon} alt="" width={14} height={14} />
                      </div>
                    );
                  })}
                </div>
                {/* read the white paper  */}
                <div className="w-full flex justify-between items-center py-3">
                  <div className="flex justify-center items-center gap-2">
                    <p className="text-[#FEF652]">{`//`}</p>
                    <p className="text-[13px] font-normal text-[#A85419]">
                      📃 📃 Read The White paper
                    </p>
                    <p className="text-[#FEF652]">{`//`}</p>
                  </div>
                  <button className="flex text-[13px] font-normal text-white-1 bg-[#4F40FF] rounded-[4px] justify-center items-center px-2 py-[5px]">
                    🏆 View Leaderboard
                  </button>
                </div>
              </div>
              {/* down bar -----> */}
              <div className="w-full py-2 flex justify-center items-center bg-[#BA0000] rounded-[5px]">
                <p className="text-[13px] font-normal text-white-1">
                  {`//Daily Engage Tasks!¯\_(ツ)_/¯_click to Earn!`}
                </p>
              </div>
              <div className="w-full grid grid-cols-2 gap-4 border-[1px] border-[#BA0000] rounded-[5px] p-[6px]">
                <button className="w-full px-1 py-2 text-[12px] rounded-[5px] text-white-1 bg-[#BA0000]">
                  Follow BUzz on X [100xp]
                </button>
                <button className="w-full px-1 py-2 text-[12px] rounded-[5px] text-[#FEF652] bg-[#BA0000] opacity-30">
                  Like & RT for [100xp]
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* drawer btn ------------------------------> */}





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
          transition: "slide-left",
          duration: 300,
          timingFunction: "linear",
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
const pattern1 = "//YOU ARE A WINNER!¯_(ツ)_/¯_YOU ARE A winner!\\";
const pattern2 = "//YOU ARE A Loser!¯_(ツ)_/¯_YOU ARE A Loser!\\";
const pattern4 = "// SEASON 1 BUZZ AIRDROP ||>>";
const pattern5 = "Season one start: [xx/xx/xx] End:[xx/xx/xx]";

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
