"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineElectricBolt } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { LuExpand } from "react-icons/lu";
import CoinStatsCards from "./CoinStatsCards";
import { GoGraph } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import CustomModal from "../shared/Modals/CustomModal";
import { useDisclosure } from "@mantine/hooks";
import { PiBagSimple } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { FaFilter } from "react-icons/fa6";
import { IoCaretUp } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { Menu } from "@mantine/core";
import * as Icons from "../shared/SVGs/Icons";

const TokenCards: React.FC = () => {
  const [showCoinDetails, setShowCoinDetails] = useState(false);
  const [
    buyAndSellModal,
    { open: openBuyAndSellModal, close: closeBuyAndSellModal },
  ] = useDisclosure(false);
  const [filter, setFilter] = useState("");

  const [activeModal, { open: openActiveModal, close: closeActiveModal }] =
    useDisclosure(false);

  const [
    watchListModal,
    { open: openWatchListModal, close: closeWatchListModal },
  ] = useDisclosure(false);

  return (
    <React.Fragment>
      {!showCoinDetails ? (
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-3">
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
                  <button
                    onClick={openActiveModal}
                    className="px-2 py-2 bg-[#4F40FF] text-[10px] font-normal rounded-[4px] text-black-1 dark:text-white-1"
                  >
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
                        <button
                          onClick={openBuyAndSellModal}
                          className="w-full border-r-[1px] border-[#B746F0]  flex gap-1 justify-center items-center "
                        >
                          <GoGraph className="text-[14px] text-black-1 dark:text-white-1" />
                          <p className="text-[10px] font-normal text-[#00C673]">
                            78%
                          </p>
                        </button>
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
            <div className="w-full max-w-[470px] h-full flex justify-center items-center">
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
                  <button
                    onClick={openWatchListModal}
                    className="px-2 py-2 bg-[#4F40FF] text-[10px] font-normal rounded-[4px] text-white-1"
                  >
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

      {/* buy and sell modal ------------> */}
      <CustomModal
        size="24rem"
        open={buyAndSellModal}
        onClose={closeBuyAndSellModal}
      >
        <div className="w-full bg-black-1 flex flex-col gap-6">
          {/* buttons */}
          <div className="w-full grid h-[40px] grid-cols-2 gap-2">
            <button className="text-[22px] font-normal text-black-1 w-full h-full bg-green-1">
              Buy
            </button>
            <button className="text-[22px] font-normal text-black-1/40 w-full h-full bg-[#EA000054]">
              Sell
            </button>
          </div>
          {/* switch to coin --> */}
          <div className="w-full flex justify-between items-center">
            <p className="text-[15px] font-normal text-white-1 bg-black-1 px-[6px] rounded-[3px]">
              Switch to ETH
            </p>
            <p className="text-[15px] font-normal text-white-1 bg-blue-1 px-[6px] rounded-[3px]">
              Slippage
            </p>
          </div>
          {/* ticker input --->  */}
          <div className="w-full border-[1px] px-2 dark:border-white-1 border-black-1 h-[50px] grid grid-cols-[1fr,105px]">
            <input
              placeholder="0.0"
              type="text"
              className="w-full focus:outline-none border-r-[1px] border-white-1 placeholder:text-black-1 h-full bg-transparent dark:placeholder:text-white-1 text-[22px] dark:text-white-1 font-normal text-black-1"
              name="ticker"
              id=""
            />
            <div className="flex justify-end items-center gap-2">
              <p className="text-[15px] font-normal dark:text-white-1 text-black-1">
                Ticker
              </p>
              <div className="w-[32px] h-[32px] bg-black-1 flex justify-center items-center">
                <Image src="/assets/emoji2.png" alt="" width={30} height={30} />
              </div>
            </div>
          </div>
          {/* you spend ---> */}
          <div className="w-full flex px-4 justify-between items-center">
            <p className="text-[15px] pl-20 dark:text-white-1 font-normal text-black-1">
              You spend:
            </p>
            <p className="text-[15px] font-normal dark:text-white-1 text-black-1">
              0.1 ETH
            </p>
          </div>
          {/* system messages ---> */}
          <div className="w-full flex gap-[2px] flex-col">
            <p className="text-[8px] font-normal text-white-1">
              System messages{" "}
            </p>
            <p className="text-[12px] font-normal px-1 py-[2px] text-white-1 border-[1px] border-white-1 border-dotted">
              Insufficient balance.{" "}
            </p>
          </div>
          {/* place trade button ---->  */}
          <button className="w-full h-[42px] rounded-[2px] bg-yellow-1 text-[16px] font-normal text-black-1 flex justify-center items-center">
            Place trade
          </button>
        </div>
      </CustomModal>
      {/* active modal -------------> */}
      <CustomModal size="40rem" open={activeModal} onClose={closeActiveModal}>
        <div className="w-full flex flex-col bg-black-1 px-3">
          {/* modal header ---> */}
          <div className="w-full border-b-[1px] border-white-1/20 pb-3 flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <PiBagSimple className="text-[#808080] text-[14px]" />
              <p className="text-[12px] font-normal text-yellow-1">Active</p>
              <p className="text-[12px] font-normal text-[#808080]">
                Active Degenerations
              </p>
            </div>
            <button
              onClick={closeActiveModal}
              className="w-[24px] h-[24px] flex justify-center items-center border-[1px] border-white-1/10 rounded-[2px]"
            >
              <RxCross2 className="text-[16px] cursor-pointer text-blue-1" />
            </button>
          </div>
          {/* table header  */}
          <div className="w-full border-b-[1px] border-white-1/20 py-3 grid grid-cols-[1.2fr,1fr,1fr,1fr]">
            {/* token name */}
            <div className="w-full flex justify-between items-center">
              <p className="text-[12px] font-normal text-white-1">Token</p>
              <Menu
                classNames={{
                  dropdown: `dark:!bg-[#336FFE] !z-50 !p-2 !bg-white-2 dark:!border-[.2px] dark:!border-white-1/20`,
                  item: "!text-black-1 dark:text-white-1 text-[14px] font-normal hover:!bg-transparent",
                  arrow: "!border-t-white-1/20 !border-l-white-1/20",
                }}
                trigger="click"
                withArrow
              >
                <Menu.Target>
                  <FaFilter className="text-white-1 cursor-pointer text-[16px]" />
                </Menu.Target>

                <Menu.Dropdown>
                  <div className="w-full !z-50 flex flex-col">
                    {filterOptions.map((option: any) => (
                      <Menu.Item
                        className={`relative w-full transition-colors duration-200 ${
                          filter === option
                            ? "!bg-[#1957EA] font-semibold before:absolute before:h-full before:inset-y-0 before:left-0 before:w-[5px] before:bg-black-1 after:absolute after:h-full after:inset-y-0 after:right-0 after:w-[5px] after:bg-black-1"
                            : "hover:!bg-blue-1/20"
                        }`}
                        key={option}
                        onClick={() => setFilter(option)}
                      >
                        <div className="py-[2px] w-full gap-2 px-4 flex justify-between items-center">
                          <p>{option.name}</p>
                          {option.icon}
                        </div>
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Dropdown>
              </Menu>
            </div>
            {/* amount  */}
            <div className="w-full flex justify-end items-center gap-1">
              <p className="text-[12px] font-normal text-white-1">Amount USD</p>
              <div className="flex flex-col">
                <IoCaretUp className="text-purple-1 cursor-pointer text-[12px]" />
                <IoCaretUp className="text-purple-1 cursor-pointer rotate-180 text-[12px]" />
              </div>
            </div>
            {/* Liquidity  */}
            <div className="w-full flex justify-end items-center gap-1">
              <p className="text-[12px] font-normal text-white-1">Liquidity</p>
              <div className="flex flex-col">
                <IoCaretUp className="text-purple-1 cursor-pointer text-[12px]" />
                <IoCaretUp className="text-purple-1 cursor-pointer rotate-180 text-[12px]" />
              </div>
            </div>
            {/* PnL  */}
            <div className="w-full flex justify-end items-center gap-1">
              <p className="text-[12px] font-normal text-white-1">PnL</p>
              <div className="flex flex-col">
                <IoCaretUp className="text-purple-1 cursor-pointer text-[12px]" />
                <IoCaretUp className="text-purple-1 cursor-pointer rotate-180 text-[12px]" />
              </div>
            </div>
          </div>
          {/* rows ----> */}
          {[0, 1, 2, 3, 4, 5].map((item, index) => {
            return (
              <div
                key={index}
                className="w-full py-3 border-b-[1px] border-white-1/20 grid grid-cols-[1.2fr,1fr,1fr,1fr]"
              >
                {/* token name */}
                <div className="w-full flex justify-between items-center">
                  <div className="flex justify-center items-center gap-2">
                    <Image
                      src="/assets/active.svg"
                      alt=""
                      width={29}
                      height={26}
                    />
                    <p className="text-[12px] font-normal text-white-1">Mog</p>
                  </div>
                  <IoEyeOutline className="text-white-1 text-[16px]" />
                </div>
                {/* amount  */}
                <div className="w-full flex justify-end items-center gap-1">
                  <p className="text-[12px] font-normal text-white-1">$3.4k</p>
                </div>
                {/* Liquidity  */}
                <div className="w-full flex justify-end items-center gap-1">
                  <p className="text-[12px] font-normal text-white-1">$3.4k</p>
                </div>
                {/* PnL  */}
                <div className="w-full flex justify-end items-center gap-1">
                  <p className="text-[12px] font-normal text-[#57C78D]">
                    +$ 769,57
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CustomModal>

      {/* Watchlist modal ------------>  */}

      <CustomModal
        size="40rem"
        open={watchListModal}
        onClose={closeWatchListModal}
      >
        <div className="w-full flex flex-col bg-black-1 px-3">
          {/* modal header ---> */}
          <div className="w-full border-b-[1px] border-white-1/20 pb-3 flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <IoIosStarOutline className="text-yellow-1 text-[14px]" />
              <p className="text-[12px] font-normal text-yellow-1">
                Watchlist{" "}
              </p>
            </div>
            <button
              onClick={closeWatchListModal}
              className="w-[24px] h-[24px] flex justify-center items-center border-[1px] border-white-1/10 rounded-[2px]"
            >
              <RxCross2 className="text-[16px] text-blue-1" />
            </button>
          </div>
          {/* table header  */}
          <div className="w-full border-b-[1px] border-white-1/20 py-3 grid grid-cols-[1.2fr,1fr,1fr,1fr]">
            {/* token name */}
            <div className="w-full flex justify-start items-center">
              <p className="text-[12px] font-normal text-white-1">Token</p>
            </div>
            {/* mcap  */}
            <div className="w-full flex justify-end items-center gap-1">
              <p className="text-[12px] font-normal text-white-1">MCAP</p>
              <div className="flex flex-col">
                <IoCaretUp className="text-purple-1 cursor-pointer text-[12px]" />
                <IoCaretUp className="text-purple-1 cursor-pointer rotate-180 text-[12px]" />
              </div>
            </div>
            {/* volume  */}
            <div className="w-full flex justify-end items-center gap-1">
              <p className="text-[12px] font-normal text-white-1">Volume</p>
              <div className="flex flex-col">
                <IoCaretUp className="text-purple-1 cursor-pointer text-[12px]" />
                <IoCaretUp className="text-purple-1 cursor-pointer rotate-180 text-[12px]" />
              </div>
            </div>
            {/* 24H  */}
            <div className="w-full flex justify-end items-center gap-1">
              <p className="text-[12px] font-normal text-white-1">24H%</p>
              <div className="flex flex-col">
                <IoCaretUp className="text-purple-1 cursor-pointer text-[12px]" />
                <IoCaretUp className="text-purple-1 cursor-pointer rotate-180 text-[12px]" />
              </div>
            </div>
          </div>
          {/* rows ----> */}
          {[0, 1, 2, 3, 4].map((item, index) => {
            return (
              <div
                key={index}
                className="w-full py-3 border-b-[1px] border-white-1/20 grid grid-cols-[1.2fr,1fr,1fr,1fr]"
              >
                {/* token name */}
                <div className="flex justify-start items-center gap-2">
                  <Image
                    src="/assets/active.svg"
                    alt=""
                    width={29}
                    height={26}
                  />
                  <p className="text-[12px] font-normal text-white-1">Mog</p>
                </div>
                {/* amount  */}
                <div className="w-full flex justify-end items-center gap-1">
                  <p className="text-[12px] font-normal text-white-1">$3.4k</p>
                </div>
                {/* Liquidity  */}
                <div className="w-full flex justify-end items-center gap-1">
                  <p className="text-[12px] font-normal text-white-1">$3.4k</p>
                </div>
                {/* PnL  */}
                <div className="w-full flex justify-end items-center gap-1">
                  <p className="text-[12px] font-normal text-[#57C78D]">
                    +$ 769,57
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CustomModal>
    </React.Fragment>
  );
};

export default TokenCards;

const filterOptions = [
  {
    name: "Ethereum",
    icon: <Icons.ethereum />,
  },
  {
    name: "Base",
    icon: <Icons.subtract />,
  },
];
