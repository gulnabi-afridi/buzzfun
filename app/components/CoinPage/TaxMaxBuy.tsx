import { Tooltip } from "@mantine/core";
import React from "react";
import { GoInfo } from "react-icons/go";

const TaxMaxBuy:React.FC = () => {
  return (
    <div className="w-full sm:flex-row flex-col flex justify-center items-start sm:items-center gap-2 sm:gap-7">
      <div className="flex justify-center items-center gap-2">
        <button className="w-[25px] flex justify-center items-center h-[25px] border-[1px] border-black-1 dark:border-white-1">
          <div className="w-[18px] h-[18px] bg-red-1"></div>
        </button>
        <div className="flex flex-col">
          <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
            Tax option 1
          </p>
          <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
            {`(5:15>2.5:45>0:∞)`}
          </p>
        </div>
        <Tooltip
          withArrow
          multiline
          classNames={{ tooltip: "!w-[230px] !py-2" }}
          color="#004BFE"
          label={
            <div className="flex flex-col gap-2">
              <p className="text-[8px] font-normal text-black-1">
                CONTRACT WILL HAVE BUY AND SELL TAX ON DEX LISTING. TAX FREE
                DURING BONDING CURVE.
              </p>
              <p className="text-[8px] font-normal text-black-1">
                {`TAX OPTION 1: 5% TAX FIRST 15 MINS > 2.5% TAX FOR 45MINS > TAX ZEROED INDEFINITELY.  `}
              </p>
            </div>
          }
        >
          <button className="bg-red-1 p-[2px]">
            <GoInfo className="text-black-1 text-[22px]" />
          </button>
        </Tooltip>
      </div>
      <div className="flex justify-center items-center gap-2">
        <button className="w-[25px] flex justify-center items-center h-[25px] border-[1px] border-black-1 dark:border-white-1">
          <div className="w-[18px] h-[18px] bg-blue-1"></div>
        </button>
        <div className="flex flex-col">
          <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
            Max buy 1%
          </p>
          <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
            {`BC+DEX-15`}
          </p>
        </div>
        <Tooltip
          withArrow
          multiline
          classNames={{ tooltip: "!w-[230px] !py-2" }}
          color="#004BFE"
          label={
            <div className="flex flex-col gap-2">
              <p className="text-[8px] font-normal text-black-1">
                CONTRACT WILL HAVE BUY AND SELL TAX ON DEX LISTING. TAX FREE
                DURING BONDING CURVE.
              </p>
              <p className="text-[8px] font-normal text-black-1">
                {`TAX OPTION 1: 5% TAX FIRST 15 MINS > 2.5% TAX FOR 45MINS > TAX ZEROED INDEFINITELY.  `}
              </p>
            </div>
          }
        >
          <button className="bg-blue-1 p-[2px]">
            <GoInfo className="text-black-1 text-[22px]" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default TaxMaxBuy;
