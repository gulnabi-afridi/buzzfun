import React from "react";
import Image from "next/image";

const BuyAndSellWidget: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-3 border-[1px] dark:bg-black-1 textShadow bg-white-1 border-black-1 rounded-[3px]">
      {/* buttons */}
      <div className="w-full grid h-[50px] grid-cols-2 gap-2">
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
          Switch to [insert Ticker]
        </p>
        <p className="text-[15px] font-normal text-white-1 bg-blue-1 px-[6px] rounded-[3px]">
          Slippage
        </p>
      </div>
      {/* ticker input --->  */}
      <div className="w-full border-[1px] px-2 dark:border-white-1 border-black-1 h-[50px] grid grid-cols-[1fr,110px]">
        <input
          placeholder="0.0"
          type="text"
          className="w-full dark:placeholder:text-white-1 placeholder:text-black-1 dark:text-white-1 border-r-[1px] dark:border-r-white-1 focus:outline-none border-black-1 h-full bg-transparent text-[22px] font-normal text-black-1"
          name="ticker"
          id=""
        />
        <div className="flex justify-center items-center gap-2">
          <p className="text-[15px] font-normal dark:text-white-1 text-black-1">
            Ticker
          </p>
          <div className="w-[32px] h-[32px] flex justify-center items-center">
            <Image src="/assets/emoji2.png" alt="" width={30} height={30} />
          </div>
        </div>
      </div>
      {/* max ---------> */}
      <div className="w-full flex justify-center items-center gap-4">
        {max.map((item, index) => {
          return (
            <p
              key={index}
              className="text-[16px] font-normal text-[#FEF652] bg-[#19171F] px-[4px] py-[2px] rounded-[2px]"
            >
              {item}
            </p>
          );
        })}

        <p className="px-[4px] py-[2px] text-[16px] font-normal text-[#EF5960] rounded-[2px] bg-[#19171F]">
          MAX
        </p>
      </div>
      {/* you recieve -----> */}
      <div className="w-full flex justify-between items-center">
        <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
          You recieve:
        </p>
        <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
          10000000000000 Ticker
        </p>
      </div>
      {/* system messages ---> */}
      <div className="w-full flex flex-col gap-1">
        <p className="text-[15px] font-normal dark:text-white-1 text-black-1">
          System messages{" "}
        </p>
        <p className="text-black-1 dark:text-white-1 rounded-[4px] font-normal text-[14px] w-full py-[4px] px-2 border-[1px] dark:border-white-1 border-dotted border-black-1">
          Insufficient balance.{" "}
        </p>
      </div>
      {/* place trade button ---->  */}
      <button className="w-full h-[51px] bg-yellow-1 text-[20px] font-normal text-black-1 flex justify-center items-center">
        Place trade
      </button>
    </div>
  );
};

const max = ["0.005", "0.01", "0.02", "0.05", "0.1"];

export default BuyAndSellWidget;
