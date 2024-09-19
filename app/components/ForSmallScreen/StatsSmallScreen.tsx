import React from "react";

const StatsSmallScreen: React.FC = () => {
  return (
    <div className="w-full bg-black-1 border-[1px] border-[#535353] rounded-[4px] flex-col flex justify-center items-center gap-5 py-8 px-6">
      {stats.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full flex justify-between items-center gap-2"
          >
            {item.name}
            <p className={`text-[26px] text-purple-1`}>/</p>
            <div className={`bg-white-1 px-[14px] py-[4px]`}>
              <p
                className={`text-[18px] ${item.valueObject.color} px-[5px] ${item.valueObject.bg}`}
              >
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
    name: (
      <p className="text-[18px] leading-[21px] uppercase font-normal text-white-1">
        Total <br /> Coins <br /> Launched
      </p>
    ),
    valueObject: {
      color: "text-white-1",
      bg: "bg-black-1",
      value: "1,234  ",
    },
  },
  {
    name: (
      <p className="text-[18px] leading-[21px] uppercase font-normal text-white-1">
        current users
      </p>
    ),
    valueObject: {
      color: "text-black-1",
      bg: "bg-[#EBFF00]",
      value: "15,234 ",
    },
  },
  {
    name: (
      <p className="text-[18px] leading-[21px] uppercase font-normal text-white-1">
        Number txs <br /> 24hrs
      </p>
    ),
    valueObject: {
      color: "text-white-1",
      bg: "bg-blue-1",
      value: "1,235,234 ",
    },
  },
];

export default StatsSmallScreen;
