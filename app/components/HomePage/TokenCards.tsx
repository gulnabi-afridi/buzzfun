"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineElectricBolt } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { LuExpand } from "react-icons/lu";
import { GoGraph } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import CustomModal from "../shared/Modals/CustomModal";
import { useDisclosure } from "@mantine/hooks";
import { PiBagSimple } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { FaFilter } from "react-icons/fa6";
import { IoCaretUp } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Menu } from "@mantine/core";
import * as Icons from "../shared/SVGs/Icons";
import { LuBaby } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { LuChefHat } from "react-icons/lu";
import { LuCoins } from "react-icons/lu";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import CoinStatsCard from "../shared/Cards/CoinStatsCard";
import FilterDrawer from "../shared/Drawers/FilterDrawer";
import BuyAndSellFlip from "../shared/Modals/BuyAndSellFlip";
import { IoMdStar } from "react-icons/io";

const TokenCards: React.FC = () => {
  // states
  const [showCoinDetails, setShowCoinDetails] = useState(false);
  const [selectedCard, setSelectedCard] = useState(1);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [selectedRow2, setSelectedRow2] = useState<number | null>(null);
  const [selectedRow3, setSelectedRow3] = useState<number | null>(null);
  const [favorites, setFavorites] = useState(Array(5).fill(false));
  const [buyAndSellModal, { open: buyOpen, close: buyClose }] =
    useDisclosure(false);

  // functions --------------------->
  const toggleFavorite = (index: number) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  return (
    <React.Fragment>
      {!showCoinDetails ? (
        <div className="w-full csm:pt-0 pt-5 grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-3">
          {/* 1st col ----> */}
          <div className="w-full csm:order-1 order-2 flex justify-center items-center">
            <div className="w-full max-w-[470px] h-full flex justify-center items-center">
              <div className="w-full h-full border-[1px] border-[#535353] max-w-[500px] dark:bg-black-1 bg-transparent rounded-[5px] py-4 px-3 flex flex-col gap-4">
                {/* top header ---> */}
                <div className="w-full flex justify-between items-center gap-2">
                  {/* left */}
                  <div className="rounded-[3px] bg-[#0F171D] flex gap-3 px-2 py-2">
                    <p className="csm:block hidden text-white-1 text-[10px] font-normal">
                      Top Creators
                    </p>
                    <p className="csm:hidden block text-yellow-1 text-[10px] font-normal">
                      Top:
                    </p>
                    <div className="bg-[#282828] px-[2px] py-[2px]  csm:hidden block rounded-[3px]">
                      <LuChefHat className="text-[14px] text-white-1" />
                    </div>
                    <div className="bg-[#282828] px-[2px] py-[2px]  csm:hidden block rounded-[3px]">
                      <LuCoins className="text-[14px] text-white-1" />
                    </div>
                    <div className="bg-blue-1 px-[2px] py-[2px] csm:hidden block rounded-[3px]">
                      <MdOutlineEmojiEmotions className="text-[14px] text-white-1" />
                    </div>

                    <p className="text-white-1 csm:block hidden text-[10px] font-normal">
                      Top XP Tokens
                    </p>
                    <p className="text-white-1 csm:block hidden bg-[#044FFE] px-2 py-[2px] rounded-[2px] text-[10px] font-normal">
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
                      onClick={() => setSelectedRow(index)}
                      key={index}
                      className={`w-full ${
                        selectedRow === index
                          ? "bg-yellow-1 rounded-[4px] px-[2px]"
                          : "hover:bg-gradient-to-b hover:from-[#141414] hover:from-27.17% hover:to-[rgba(255,255,255,0.18)] hover:to-100%"
                      } grid py-[3px] grid-cols-[40px,1.4fr,1fr,1fr]`}
                    >
                      <div className="w-full flex justify-center items-center">
                        <p
                          className={`w-fit whitespace-nowrap flex justify-center items-center ${
                            index === 0 && "bg-[#00C673] "
                          } 
                          ${
                            selectedRow === index
                              ? "text-black-1"
                              : "text-black-1 dark:text-white-1"
                          }
                          rounded-[3px] px-1  text-[12px] font-normal`}
                        >
                          #{index + 1}
                        </p>
                      </div>
                      {/* token name  */}
                      <div className="flex justify-start pl-2 items-center gap-1">
                        <div className="w-[20px] h-[20px] rounded-full bg-[#EF7216]"></div>
                        <p
                          className={`text-[12px]
                          
                              ${
                                selectedRow === index
                                  ? "text-black-1"
                                  : "text-black-1 dark:text-white-1"
                              }
                          
                          font-normal `}
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
                      {/* msgs  */}

                      <p
                        className={`text-[12px] w-full flex justify-start items-center font-normal 
                           ${
                             selectedRow === index
                               ? "text-black-1"
                               : "text-black-1 dark:text-white-1"
                           }
                        `}
                      >
                        5600 msgs
                      </p>
                      {/* users  */}
                      <p
                        className={`text-[12px] w-full flex justify-end items-center font-normal 
                           ${
                             selectedRow === index
                               ? "text-black-1"
                               : "text-black-1 dark:text-white-1"
                           }
                        `}
                      >
                        5600 users
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* 2nd col --------> */}
          <div className="w-full overflow-auto flex csm:order-2 order-1 justify-center items-center">
            <div className="w-full max-w-[470px] h-full flex justify-center items-center">
              {/* table ---> */}
              <div className="w-full h-full flex flex-col gap-4 bg-transparent dark:bg-black-1 border-[1px] border-black-1 dark:border-[#535353] csm:dark:border-[#FEF652] rounded-[5px] py-3 csm:py-4 px-2 csm:px-3">
                {/* table filter -->  */}
                <div className="flex justify-center items-center gap-2">
                  <div className="flex w-full justify-between items-center">
                    <div className="flex csm:w-fit w-full justify-center items-center gap-2">
                      <div className="flex px-2 py-2 bg-[#0F171D] csm:w-fit w-full rounded-[4px] justify-between csm:justify-center items-center gap-3">
                        <p className="px-[6px] csm:block hidden py-[3px] bg-blue-1 text-white-1 font-normal text-[12px] rounded-[2px]">
                          New Tokens
                        </p>
                        <button className="p-[3px] csm:hidden block rounded-[4px] bg-blue-1">
                          <LuBaby className="text-[13px] text-white-1" />
                        </button>
                        <p className=" text-white-1 csm:block hidden font-normal text-[12px] rounded-[2px]">
                          Almost There
                        </p>
                        <p className="text-[12px] csm:hidden block bg-[#282828] font-normal text-white-1">{`>69%`}</p>
                        <p className=" text-white-1 csm:block hidden font-normal text-[12px] rounded-[2px]">
                          Migrating Now
                        </p>
                        <button className="p-[3px] csm:hidden block rounded-[4px] bg-[#282828]">
                          <RiGraduationCapLine className="text-[13px] text-white-1" />
                        </button>
                        <p className="csm:hidden block text-[9px] font-normal text-black-1 bg-[#EBFF00C4] px-[2px]">{`Expert view>>`}</p>
                        <button
                          onClick={() => setShowCoinDetails(!showCoinDetails)}
                          className="w-[24px] flex csm:hidden justify-center items-center h-[24px] rounded-[3px] bg-[#EBFF00C4]"
                        >
                          <LuExpand className="text-[20px] text-black-1" />
                        </button>
                      </div>
                      <div className="px-[6px] border-[1px] border-[#B746F0] rounded-[2px] py-[3px] bg-[#282828] text-white-1 flex justify-center items-center">
                        <MdOutlineElectricBolt className="text-[12px] text-[#B746F0]" />
                        <p className="text-[12px] font-normal text-white-1">
                          Buy:
                        </p>
                        <p className="text-[12px] font-normal text-white-1">
                          $
                        </p>
                        {"   "}

                        <input
                          type="text"
                          placeholder="10"
                          className="text-[12px] text-white-1 placeholder:text-white-1 !w-[20px] bg-transparent placeholder:text-[12px] focus:outline-none focus:!border-none"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => setShowCoinDetails(!showCoinDetails)}
                      className="w-[24px] hidden csm:flex justify-center items-center h-[24px] rounded-[3px] bg-[#EBFF00C4]"
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
                        onClick={() => setSelectedRow3(index)}
                        className={`w-full ${
                          selectedRow3 === index
                            ? "bg-yellow-1 rounded-[4px] px-[2px]"
                            : "hover:bg-gradient-to-b hover:from-[#141414] hover:from-27.17% hover:to-[rgba(255,255,255,0.18)] hover:to-100%"
                        } py-[3px] grid grid-cols-[2fr,1fr,1fr,1fr,1fr,.5fr,.5fr] csm:grid-cols-[.5fr,2fr,1fr,1fr,1fr,1fr,.5fr,.5fr]`}
                      >
                        {/* ser no */}
                        <p
                          className={`w-full csm:flex hidden whitespace-nowrap justify-center items-center ${
                            index === 0 ? "bg-[#00C673] " : "bg-transparent"
                          }
                               ${
                                 selectedRow3 === index
                                   ? "text-black-1"
                                   : "text-black-1 dark:text-white-1"
                               }
                          rounded-[3px] px-1 text-[12px] font-normal`}
                        >
                          #{index + 1}
                        </p>
                        {/* name  */}
                        <div className="flex border-r-[1px] border-[#B746F0] justify-center items-center gap-1">
                          <div className="min-w-[16px] csm:min-w-[20px] min-h-[16px] csm:min-h-[20px] rounded-full bg-[#EF7216]"></div>
                          <p
                            className={`text-[9px] csm:text-[12px]
                               ${
                                 selectedRow3 === index
                                   ? "text-black-1"
                                   : "text-black-1 dark:text-white-1"
                               }
                            font-normal`}
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
                        <button className="w-full border-r-[1px] border-[#B746F0] flex gap-1 justify-center items-center ">
                          <GoGraph
                            className={`text-[14px]    ${
                              selectedRow3 === index
                                ? "text-black-1"
                                : "text-black-1 dark:text-white-1"
                            }`}
                          />
                          <p
                            className={`text-[8px]
                            
                            csm:text-[10px] font-normal text-[#00C673]`}
                          >
                            78%
                          </p>
                        </button>
                        {/* users  */}
                        <div className="w-full border-r-[1px] border-[#B746F0]  flex gap-1 justify-center items-center ">
                          <TbUsers
                            className={`   ${
                              selectedRow3 === index
                                ? "text-black-1"
                                : "text-black-1 dark:text-white-1"
                            } text-[13px]`}
                          />
                          <p className="text-[8px] csm:text-[10px]font-normal text-[#00C673]">
                            1.2k
                          </p>
                        </div>
                        {/* MC  */}
                        <div className="w-full border-r-[1px] border-[#B746F0]  flex gap-1 justify-center items-center ">
                          <p
                            className={`text-[8px] csm:text-[10px] font-normal    ${
                              selectedRow3 === index
                                ? "text-black-1"
                                : "text-black-1 dark:text-white-1"
                            }`}
                          >
                            MC
                          </p>
                          <p className="text-[8px] csm:text-[10px] font-normal text-[#00C673]">
                            $400k
                          </p>
                        </div>
                        {/* volume  */}
                        <div className="w-full border-r-[1px] border-[#B746F0]  flex gap-1 justify-center items-center ">
                          <p
                            className={`text-[8px] csm:text-[10px] font-normal    ${
                              selectedRow3 === index
                                ? "text-black-1"
                                : "text-black-1 dark:text-white-1"
                            }`}
                          >
                            V
                          </p>
                          <p className="text-[8px] csm:text-[10px] font-normal text-[#00C673]">
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
                                selectedRow3 === index
                                  ? "dark:text-black-1 text-black-1"
                                  : "text-yellow-1"
                              }  text-[12px]`}
                            />
                          ) : (
                            <MdOutlineStarBorder
                              className={`${
                                selectedRow3 === index
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
            </div>
          </div>
          {/* 3rd col --------> */}
          <div className="w-full flex csm:order-3 order-3 justify-center items-center">
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
                  <button className="px-2 py-2 bg-[#4F40FF] text-[10px] font-normal rounded-[4px] text-white-1">
                    View All
                  </button>
                </div>

                {/* rows  */}
                {[0, 1, 2, 3, 4].map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedRow2(index)}
                      className={`w-full grid
                        ${
                          selectedRow2 === index
                            ? "bg-yellow-1 rounded-[4px] px-2"
                            : "hover:bg-gradient-to-b hover:from-[#141414] hover:from-27.17% hover:to-[rgba(255,255,255,0.18)] hover:to-100%"
                        } 
                        py-[3px] px-2 grid-cols-[40px,2fr,1fr]`}
                    >
                      <div className="w-full flex justify-start items-center">
                        <p
                          className={`w-fit whitespace-nowrap flex justify-center items-center ${
                            index === 0 && "bg-[#00C673] "
                          } 
                             ${
                               selectedRow2 === index
                                 ? "text-black-1"
                                 : "text-black-1 dark:text-white-1"
                             }
                          rounded-[3px] px-1 text-[12px] font-normal`}
                        >
                          #{index + 1}
                        </p>
                      </div>
                      {/* token name  */}
                      <div className="flex justify-start items-center gap-2">
                        <div className="w-[20px] h-[20px] rounded-full bg-[#EF7216]"></div>
                        <p
                          className={`text-[12px] font-normal    ${
                            selectedRow2 === index
                              ? "text-black-1"
                              : "text-black-1 dark:text-white-1"
                          }`}
                        >
                          Username
                        </p>
                      </div>
                      {/* msgs  */}

                      <p
                        className={`text-[12px] w-full flex justify-end items-center font-normal    ${
                          selectedRow2 === index
                            ? "text-black-1"
                            : "text-black-1 dark:text-white-1"
                        }`}
                      >
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
        <div className="w-full flex justify-center items-center csm:gap-0 gap-3 flex-col">
          <div className="w-full max-w-[700px] xl:max-w-full hidden csm:flex gap-6 flex-col mt-3 bg-transparent dark:bg-[#0E161C] rounded-[5px] border-[1px] border-[#38394A] py-4 px-2">
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-3">
              {coinsStatsCards.map((item, index) => {
                return (
                  <CoinStatsCard
                    key={index}
                    borderColor={item.cardBorderColor}
                    title={item.title}
                  />
                );
              })}
            </div>

            <p className="text-[10px] csm:block hidden font-normal px-2 text-white-1">
              <span className="text-[#EBFF00]">{`//`}</span>{" "}
              <span className="text-[#B746F0]">{`ô¿ô `}</span>{" "}
              <span className="text-[#EBFF00]">{`+`}</span>{" "}
              <span className="text-[#EBFF00]">{`( .  Y . ) > (@_@)....<*_*> / (♥️_♥️)][L][F][G][][][0]******_______¯\_(ツ)_/¯_________8=======D`}</span>{" "}
              <span className="text-[#336FFE]">{`ฅ^•ﻌ•^ฅ`}</span>{" "}
            </p>
          </div>
          {/* for small screen  */}
          <div className="w-full csm:hidden csm:pt-0 pt-4 block">
            {selectedCard === 1 && (
              <CoinStatsCard
                title={coinsStatsCards[0].title}
                borderColor={coinsStatsCards[0].cardBorderColor}
              />
            )}
            {selectedCard === 2 && (
              <CoinStatsCard
                title={coinsStatsCards[1].title}
                borderColor={coinsStatsCards[1].cardBorderColor}
              />
            )}
            {selectedCard === 3 && (
              <CoinStatsCard
                title={coinsStatsCards[2].title}
                borderColor={coinsStatsCards[2].cardBorderColor}
              />
            )}
          </div>
        </div>
      )}

      {/* for small screen  */}
      <div className="w-full px-1 py-1 mt-2 bg-black-1 flex csm:hidden justify-between items-center">
        <div></div>
        <div className="flex justify-center items-center gap-2 pl-10">
          <button
            onClick={() => setSelectedCard(1)}
            className={`w-[13px] ${
              selectedCard === 1 ? "bg-yellow-1" : "bg-purple-1"
            } h-[13px] rounded-full`}
          ></button>
          <button
            onClick={() => setSelectedCard(2)}
            className={`w-[13px] h-[13px]
              ${selectedCard === 2 ? "bg-yellow-1" : "bg-purple-1"} 
              rounded-full`}
          ></button>
          <button
            onClick={() => setSelectedCard(3)}
            className={`w-[13px] h-[13px]
              ${selectedCard === 3 ? "bg-yellow-1" : "bg-purple-1"} 
              
              rounded-full`}
          ></button>
        </div>
        <button className="text-[10px] text-white-1 px-2 py-1 font-semibold bg-black-1 rounded-[2px] yellowSha">
          Minimize
        </button>
      </div>

      {/* -----------------> Buy and sell widget + Slippage Settings  */}
      <BuyAndSellFlip openModal={buyAndSellModal} closeModal={buyClose} />
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

const coinsStatsCards = [
  {
    title: "// Tokens recently created \\ ",
    cardBorderColor: "border-[#FEF652]",
  },
  {
    title: "// Bonding almost complete \\ ",
    cardBorderColor: "border-[#A03ED2]",
  },
  {
    title: "// LFG to Uniswap \\ ",
    cardBorderColor: "border-[#61D937]",
  },
];
