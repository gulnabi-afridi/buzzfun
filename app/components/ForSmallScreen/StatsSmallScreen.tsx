import React from "react";

const StatsSmallScreen: React.FC = () => {
  return (
    <div className="w-full bg-black-1 border-[1px] border-[#535353] rounded-[4px] flex-col flex justify-center items-center gap-5 py-8 px-4">
      {stats.map((item, index) => {
        return (
          <div key={index} className="w-full flex justify-between items-center gap-2">
            <p className="text-[18px] font-normal text-white-1">
              {item.name}
            </p>
            <p className={`text-[22px] text-purple-1`}>/</p>
            <div className={`bg-white-1 px-[10px] py-[4px]`}>
              <p className={`text-[14px] ${item.valueObject.color} px-[3px] ${item.valueObject.bg}`}>
               {item.valueObject.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const stats = [
  {
    name: "Total Coins Launched",
    valueObject: {
      color: "text-white-1",
      bg: "bg-black-1",
      value: "1,234  ",
    },
  },
  {
    name: "current users",
    valueObject: {
      color: "text-black-1",
      bg: "bg-[#EBFF00]",
      value: "15,234 ",
    },
  },
  {
    name: "Number txs 24hrs",
    valueObject: {
      color: "text-white-1",
      bg: "bg-blue-1",
      value: "1,235,234 ",
    },
  },
];

export default StatsSmallScreen;
