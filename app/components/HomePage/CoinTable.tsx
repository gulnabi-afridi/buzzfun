"use client";

import React, { useState } from "react";
import Image from "next/image";
import Pagination from "../shared/Pagination";
import { useTheme } from "next-themes";
import { Select } from "@mantine/core";
import Link from "next/link";
import { GoPeople } from "react-icons/go";
import { IoMdThumbsUp } from "react-icons/io";
import { BiSolidDislike } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { IoMdStarOutline } from "react-icons/io";
import { FiArrowUp } from "react-icons/fi";
import { MdPerson } from "react-icons/md";
import CustomModal from "../shared/Modals/CustomModal";
import { useDisclosure } from "@mantine/hooks";
import { FiMinus } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import BuyAndSellFlip from "../shared/Modals/BuyAndSellFlip";
import { IoMdStar } from "react-icons/io";

const CoinTable = () => {
  // states --------------->
  const { setTheme, resolvedTheme } = useTheme();
  const [favorites, setFavorites] = useState(
    Array(rowsData.length).fill(false)
  );
  const [buyAndSellModal, { open: buyOpen, close: buyClose }] =
    useDisclosure(false);

  // states ends here

  // functions -------------------->
  const [iconStates, setIconStates] = useState<Record<number, boolean>>(
    headerData.reduce((acc, item, index) => {
      if (item.isIcon) {
        acc[index] = false;
      }
      return acc;
    }, {} as Record<number, boolean>)
  );

  const toggleIcon = (index: number) => {
    setIconStates((prevStates) => ({
      ...prevStates,
      [index]: !prevStates[index],
    }));
  };

  const toggleFavorite = (index: number) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  return (
    <React.Fragment>
      <div
        className={`w-full dark:bg-[#0E161C] rounded-[5px] bg-transparent dark:border-white-1/50 border-[1px] border-transparent ${
          resolvedTheme === "dark" ? "forDarkShadow" : "tableShadow"
        } px-4 py-5 overflow-auto flex flex-col`}
      >
        {/* table header */}
        <div className="w-full min-w-[1700px] px-5 h-[42px] justify-center items-center grid grid-cols-[50px,3fr,.7fr,1fr,1.2fr,.7fr,.7fr,1fr,1fr,1fr,1fr,.7fr,.6fr,.6fr,1fr,.7fr,.6fr,1fr]">
          {headerData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-full justify-start items-center"
              >
                <button
                  onClick={() => toggleIcon(index)}
                  className="flex justify-center items-center"
                >
                  <p
                    className={`text-[14px] ${
                      index + 1 === headerData.length
                        ? "justify-end"
                        : "justify-start "
                    } leading-[18px] text-left font-normal dark:text-white-1 text-black-1`}
                  >
                    {item.name}
                  </p>
                  {item.isIcon && (
                    <div
                      className={`transition-transform duration-300 ${
                        iconStates[index] ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <div className="min-w-[9px] min-h-[9px] relative">
                        <Image
                          src="/assets/polygon.svg"
                          className="cursor-pointer"
                          alt="icon"
                          fill
                        />
                      </div>
                    </div>
                  )}
                </button>
              </div>
            );
          })}
        </div>
        {/* table row  */}
        <div className="w-full min-w-[1700px] flex flex-col">
          {rowsData.map((item, index) => {
            const isFavorited = favorites[index];
            return (
              <div
                key={index}
                className={`w-full ${
                  index === 0 &&
                  "border-t-[1px] dark:border-white-1/50 border-black-1"
                }  px-5 h-[42px] border-b-[1px] dark:border-white-1/50 border-black-1 justify-center items-center grid grid-cols-[50px,3fr,.7fr,1fr,1.2fr,.7fr,.7fr,1fr,1fr,1fr,1fr,.7fr,.6fr,.6fr,1fr,.7fr,.6fr,1fr]`}
              >
                <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                  # {index + 1}
                </p>
                <Link
                  href="/coin-page"
                  className="flex w-full justify-start items-center gap-2"
                >
                  <Image src={item.coin.icon} alt="" width={25} height={25} />
                  <p className="font-normal text-[14px] dark:text-white-1 text-black-1">
                    {item.coin.value}
                  </p>
                </Link>
                <div className="w-full flex justify-start items-center">
                  <Image
                    src={item.chain as string}
                    width={22}
                    height={22}
                    alt=""
                  />
                </div>
                <div className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                  {item.lastEvent === "buy" ? (
                    <div className="flex justify-center items-center">
                      <FiArrowUp className="text-[20px] text-[#00C673]" />
                      <div className="flex flex-col">
                        <p className="text-[10px] font-normal text-[#00C673]">
                          BUY
                        </p>
                        <p className="text-[10px] font-normal text-[#00C673]">
                          [1]
                        </p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className=" w-full flex justify-start ">
                  <p
                    className={`font-normal  text-center rounded-[2px] text-white-1 text-[14px] w-[87px] py-1 ${
                      item.priceChange.positive ? "bg-green-1" : "bg-red-1"
                    } `}
                  >
                    {item.priceChange.value}
                  </p>
                </div>
                <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                  {item.age}
                </p>
                <div className="flex w-full justify-start items-center gap-1">
                  <MdPerson className="text-black-1 dark:text-white-1 text-[14px]" />
                  <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                    {item.topTen}
                  </p>
                </div>
                <div className="flex justify-start w-full items-center">
                  <Image src="/assets/dev.svg" alt="" width={12} height={12} />
                  <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                    {item.dev}
                  </p>
                </div>
                <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                  {item.priceUsd}
                </p>

                <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                  {item.mcap}
                </p>
                <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                  {item.vol}
                </p>
                <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                  {item.users}
                </p>
                <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                  {item.likes}
                </p>
                <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                  {item.dislike}
                </p>
                <p className="text-[14px] w-full flex justify-center font-normal dark:text-white-1 text-black-1">
                  {item.previouslyDeployed}
                </p>
                <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                  {item.graph}
                </p>
                <div className="w-full flex justify-start items-center">
                  {isFavorited ? (
                    <IoMdStar
                      className="text-[16px] text-black-1 dark:text-yellow-1"
                      onClick={() => toggleFavorite(index)}
                    /> // Filled star
                  ) : (
                    <IoMdStarOutline
                      className="text-[16px] text-black-1 dark:text-yellow-1"
                      onClick={() => toggleFavorite(index)}
                    /> // Outline star
                  )}
                </div>
                <div className="flex w-full justify-center items-center">
                  <button
                    onClick={buyOpen}
                    className="w-[24px] h-[19px] flex justify-center items-center rounded-[5px] border-[1px] border-[#B746F0]"
                  >
                    <Image
                      src="/assets/light.svg"
                      alt=""
                      width={8}
                      height={9}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* Pagination */}
        <div className="w-full grid grid-cols-1 csm:grid-cols-2 pt-8 pb-4 csm:pb-6">
          <div className="w-full flex justify-center csm:justify-end items-center">
            <Pagination />
          </div>
          <div className="w-full hidden csm:flex justify-end items-center">
            <Select
              size="xs"
              classNames={{
                root: "flex justify-center items-center gap-2",
                label:
                  "!text-[16px] font-normal dark:text-white-1 text-black-1",
                option: "hover:!bg-white-1/30 !text-[14px]",
                dropdown:
                  "dark:!bg-black-1 bg-transparent !border-none !text-black-1 dark:!text-white-1",
                input:
                  "!text-[16px] !w-[120px] !rounded-[2px] !bg-white-1 dark:!bg-black-1  !border-none focus:border-white-1 font-normal dark:text-white-1 text-black-1",
              }}
              label="Show"
              placeholder="50"
              data={["20", "30", "40", "100"]}
            />
          </div>
        </div>
      </div>

      {/* -----------------> Buy and sell widget + Slippage Settings  */}
      <BuyAndSellFlip openModal={buyAndSellModal} closeModal={buyClose} />
    </React.Fragment>
  );
};

export default CoinTable;

const headerData = [
  {
    name: "Rank",
    isIcon: false,
  },
  {
    name: "Coin",
    isIcon: false,
  },
  {
    name: "Chain",
    isIcon: false,
  },
  {
    name: "Last Event",
    isIcon: false,
  },
  {
    name: "$δ(%)",
    isIcon: true,
  },
  {
    name: "Age",
    isIcon: false,
  },
  {
    name: "Top 10",
    isIcon: false,
  },
  {
    name: "Dev",
    isIcon: false,
  },
  {
    name: "Price Usd",
    isIcon: true,
  },
  {
    name: "Mcap",
    isIcon: false,
  },
  {
    name: "vol.",
    isIcon: true,
  },
  {
    name: <GoPeople className="text-[14px] text-black-1 dark:text-white-1" />,
    isIcon: true,
  },
  {
    name: (
      <IoMdThumbsUp className="text-[14px] text-black-1 dark:text-[#004BFE]" />
    ),
    isIcon: true,
  },
  {
    name: (
      <BiSolidDislike className="text-[14px] text-black-1 dark:text-[#FEF652]" />
    ),
    isIcon: true,
  },
  {
    name: "Previously deployed",
    isIcon: false,
  },
  {
    name: <GoGraph className="text-[14px] text-black-1 dark:text-white-1" />,
    isIcon: true,
  },
  {
    name: (
      <IoMdStarOutline className="text-[16px] text-black-1 dark:text-[#EBFF00E8]" />
    ),
    isIcon: true,
  },
  {
    name: "Ape Now",
    isIcon: false,
  },
];

const rowsData = [
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    chain: "/assets/chain.svg",
    lastEvent: "buy",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    topTen: "7%",
    dev: "15",
    priceUsd: "0.000021",
    age: "3s",
    mcap: "34.5k",
    vol: "350k",
    users: "15",
    likes: "2",
    dislike: "23",
    previouslyDeployed: "1",
    graph: "73 %",
    isFavorite: false,
  },
];
