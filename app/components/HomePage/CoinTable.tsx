"use client";

import React, { useState } from "react";
import Image from "next/image";
import Pagination from "../shared/Pagination";
import { useTheme } from "next-themes";
import { Select } from "@mantine/core";

const CoinTable = () => {
  const { setTheme, resolvedTheme } = useTheme();
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

  return (
    <div
      className={`w-full dark:bg-[#0E161C] bg-transparent dark:border-[#D7E0E7] border-[1px] border-transparent ${
        resolvedTheme === "dark" ? "forDarkShadow" : "tableShadow"
      } px-4 py-5 overflow-auto flex flex-col`}
    >
      <div className="w-full min-w-[1350px] px-5 h-[42px] justify-center items-center grid grid-cols-[50px,3fr,.7fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,.7fr]">
        {headerData.map((item, index) => {
          return (
            <div key={index} className="flex w-full justify-start items-center">
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
      <div className="w-full min-w-[1350px] flex flex-col">
        {rowsData.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full ${
                index === 0 &&
                "border-t-[1px] dark:border-white-1/50 border-black-1"
              } ${
                index + 1 === rowsData.length
                  ? "border-none"
                  : "border-b-[1px] dark:border-white-1/50 border-black-1"
              }  px-5 h-[42px] justify-center items-center grid grid-cols-[50px,3fr,.7fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,.7fr]`}
            >
              <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                # {index + 1}
              </p>
              <div className="flex w-full justify-start items-center gap-2">
                <Image src={item.coin.icon} alt="" width={25} height={25} />
                <p className="font-normal text-[14px] dark:text-white-1 text-black-1">
                  {item.coin.value}
                </p>
              </div>
              <div className="w-full flex justify-start items-center">
                <Image src={item.img as string} width={22} height={22} alt="" />
              </div>
              <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                {item.map}
              </p>
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
                {item.holders}
              </p>
              <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                {item.upvotes}
              </p>
              <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                {item.downvotes}
              </p>
              <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                {item.age}
              </p>
              <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                {item.deployed}
              </p>
              <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                {item.bondingCurve}
              </p>
              <div className="w-full flex justify-end items-center">
                <button className="text-[14px] hover:opacity-80 text-center w-[43px] py-1 rounded-[2px] bg-blue-1 font-normal text-white-1">
                  Buy
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* Pagination */}
      <div className="w-full grid grid-cols-2 pt-8 pb-6">
        <div className="w-full flex justify-end items-center">
          <Pagination />
        </div>
        <div className="w-full flex justify-end items-center">
          <Select
            size="xs"
            classNames={{
              root: "flex justify-center items-center gap-2",
              label: "!text-[16px] font-normal dark:text-white-1 text-black-1",
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
    isIcon: true,
  },
  {
    name: "Mcap",
    isIcon: true,
  },
  {
    name: "Price change(%)",
    isIcon: true,
  },
  {
    name: "Holders",
    isIcon: true,
  },
  {
    name: "Upvotes",
    isIcon: true,
  },
  {
    name: "Downvotes",
    isIcon: true,
  },
  {
    name: "Age(min)",
    isIcon: true,
  },
  {
    name: "Previously deployed",
    isIcon: false,
  },
  {
    name: "% Bonding Curve",
    isIcon: true,
  },
  {
    name: "Ape now",
    isIcon: false,
  },
];

const rowsData = [
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    img: "/assets/chain.svg",
    map: "34.5k",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    holders: "123",
    upvotes: "15",
    downvotes: "2",
    age: "23",
    deployed: "1",
    bondingCurve: "73%",
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    map: "34.5k",
    img: "/assets/chain2.svg",

    priceChange: {
      positive: false,
      value: "-10%",
    },
    holders: "123",
    upvotes: "15",
    downvotes: "2",
    age: "23",
    deployed: "1",
    bondingCurve: "73%",
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    img: "/assets/chain2.svg",

    map: "34.5k",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    holders: "123",
    upvotes: "15",
    downvotes: "2",
    age: "23",
    deployed: "1",
    bondingCurve: "73%",
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    img: "/assets/chain2.svg",

    map: "34.5k",
    priceChange: {
      positive: false,
      value: "-10%",
    },
    holders: "123",
    upvotes: "15",
    downvotes: "2",
    age: "23",
    deployed: "1",
    bondingCurve: "73%",
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    img: "/assets/chain.svg",

    map: "34.5k",
    priceChange: {
      positive: false,
      value: "-10%",
    },
    holders: "123",
    upvotes: "15",
    downvotes: "2",
    age: "23",
    deployed: "1",
    bondingCurve: "73%",
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    img: "/assets/chain2.svg",

    map: "34.5k",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    holders: "123",
    upvotes: "15",
    downvotes: "2",
    age: "23",
    deployed: "1",
    bondingCurve: "73%",
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    img: "/assets/chain2.svg",

    map: "34.5k",
    priceChange: {
      positive: false,
      value: "-10%",
    },
    holders: "123",
    upvotes: "15",
    downvotes: "2",
    age: "23",
    deployed: "1",
    bondingCurve: "73%",
  },
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
    img: "/assets/chain.svg",

    map: "34.5k",
    priceChange: {
      positive: true,
      value: "+15%",
    },
    holders: "123",
    upvotes: "15",
    downvotes: "2",
    age: "23",
    deployed: "1",
    bondingCurve: "73%",
  },
];
