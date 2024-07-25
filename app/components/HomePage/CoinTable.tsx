import React from "react";
import Image from "next/image";

const CoinTable = () => {
  return (
    <div className="w-full overflow-auto flex flex-col">
      <div className="w-full min-w-[1300px] px-4 h-[42px] justify-center items-center grid grid-cols-[50px,3fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr]">
        {headerData.map((item, index) => {
          return (
            <p
              key={index}
              className={`text-[14px] ${
                index + 1 === headerData.length
                  ? "justify-end"
                  : "justify-start "
              } leading-[18px] font-normal dark:text-white-1 text-black-1 w-full flex items-center`}
            >
              {item}
            </p>
          );
        })}
      </div>
      {/* table row  */}
      <div className="w-full min-w-[1300px] flex flex-col">
        {rowsData.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full ${
                index === 0 && "border-t-[1px] dark:border-white-1/50 border-black-1"
              } ${
                index + 1 === rowsData.length
                  ? "border-none"
                  : "border-b-[1px] dark:border-white-1/50 border-black-1"
              }  px-4 h-[42px] justify-center items-center grid grid-cols-[50px,3fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr]`}
            >
              <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                # {index + 1}
              </p>
              <div className="flex w-full justify-start items-center gap-2">
                <Image src={item.coin.icon} alt="" width={25} height={25} />
                <p className="font-normal dark:text-white-1 text-black-1">{item.coin.value}</p>
              </div>
              <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                {item.map}
              </p>
              <div className=" w-full flex justify-start ">
                <p
                  className={`font-normal text-center rounded-[2px] text-white-1 text-[14px] w-[87px] py-1 ${
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
    </div>
  );
};

export default CoinTable;

const headerData = [
  "Rank",
  "Coin",
  "Mcap",
  "Price change(%)",
  "Holders",
  "Upvotes",
  "Downvotes",
  "Age(min)",
  "Previously deployed",
  "% Bonding Curve",
  "Ape now",
];

const rowsData = [
  {
    coin: {
      icon: "/assets/coin3.svg",
      value: "/ Token name > [Ticker: TN]",
    },
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
