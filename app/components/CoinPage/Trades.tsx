import React from 'react'

const Trades:React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-1">
    {/* table header ---->   */}
    <div className="w-full h-[43px] bg-black-1 justify-center items-center grid grid-cols-6">
      {tradeHeader.map((item, index) => {
        return (
          <p
            key={index}
            className={`w-full ${
              index + 1 === tradeHeader.length
                ? "justify-end"
                : "justify-start"
            } flex items-center text-[14px] px-4 text-white-1 font-normal`}
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
            className="w-full h-[43px] bg-white-1 justify-center px-4 items-center grid grid-cols-6"
          >
            <p className="w-full flex justify-start items-center text-[14px] font-normal text-black-1">
              {item.name}
            </p>
            <p className="w-full flex justify-start items-center text-[14px] font-normal text-black-1">
              {item.type}
            </p>
            <p className="w-full flex justify-start items-center text-[14px] font-normal text-black-1">
              {item.eth}
            </p>
            <p className="w-full flex justify-start items-center text-[14px] font-normal text-black-1">
              {item.token}
            </p>
            <p className="w-full flex justify-start items-center text-[14px] font-normal text-black-1">
              {item.timestammp}
            </p>
            <p
              className={`w-full underline justify-end flex items-center text-[14px] font-normal text-black-1`}
            >
              view
            </p>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Trades



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