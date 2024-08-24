import React from "react";

const Trades: React.FC = () => {
  return (
    <div className="w-full overflow-auto">
      <div className="w-full min-w-[580px] flex flex-col gap-1">
        {/* table header ---->   */}
        <div className="w-full h-[43px] px-4 md:px-5 bg-black-1 dark:bg-yellow-1 justify-center items-center grid grid-cols-6">
          {tradeHeader.map((item, index) => {
            return (
              <p
                key={index}
                className={`w-full ${
                  index + 1 === tradeHeader.length
                    ? "justify-end"
                    : "justify-start"
                } flex items-center text-[14px] dark:text-black-1 text-white-1 font-normal`}
              >
                {item}
              </p>
            );
          })}
        </div>
        {/* table rows ----> */}
        <div className="w-full flex flex-col gap-1">
          {tradeRows.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-[43px] dark:bg-black-1 bg-white-1 px-4 md:px-5 justify-center items-center grid grid-cols-6"
              >
                <p className="w-full flex dark:text-white-1 justify-start items-center text-[14px] font-normal text-black-1">
                  {item.name}
                </p>
                <p className="w-full flex dark:text-white-1 justify-start items-center text-[14px] font-normal text-black-1">
                  {item.type}
                </p>
                <p className="w-full flex dark:text-white-1 justify-start items-center text-[14px] font-normal text-black-1">
                  {item.eth}
                </p>
                <p className="w-full flex dark:text-white-1 justify-start items-center text-[14px] font-normal text-black-1">
                  {item.token}
                </p>
                <p className="w-full flex dark:text-white-1 justify-start items-center text-[14px] font-normal text-black-1">
                  {item.timestammp}
                </p>
                <p
                  className={`w-full dark:text-white-1 underline justify-end flex items-center text-[14px] font-normal text-black-1`}
                >
                  view
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trades;

const tradeHeader = ["Account", "Type", "ETH", "$Token", "Timestamp", "Tx. "];
const tradeRows = [
  {
    name: "<Username>",
    type: "Buy",
    eth: "0.05",
    token: "2,000,000",
    timestammp: "1s ago",
  },
  {
    name: "<Username>",
    type: "Buy",
    eth: "0.05",
    token: "2,000,000",
    timestammp: "1s ago",

  },
  {
    name: "<Username>",
    type: "Buy",
    eth: "0.05",
    token: "2,000,000",
    timestammp: "1s ago",

  },
  {
    name: "<Username>",
    type: "Buy",
    eth: "0.05",
    token: "2,000,000",
    timestammp: "1s ago",

  },
  {
    name: "<Username>",
    type: "Buy",
    eth: "0.05",
    token: "2,000,000",
    timestammp: "1s ago",

  },
  {
    name: "<Username>",
    type: "Buy",
    eth: "0.05",
    token: "2,000,000",
    timestammp: "1s ago",

  },
  {
    name: "<Username>",
    type: "Buy",
    eth: "0.05",
    token: "2,000,000",
    timestammp: "1s ago",

  },

  {
    name: "<Username>",
    type: "Buy",
    eth: "0.05",
    token: "2,000,000",
    timestammp: "1s ago",

  },
  {
    name: "<Username>",
    type: "Buy",
    eth: "0.05",
    token: "2,000,000",
    timestammp: "1s ago",

  },
];
