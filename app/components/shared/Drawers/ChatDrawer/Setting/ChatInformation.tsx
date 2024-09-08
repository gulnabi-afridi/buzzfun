import React from "react";
import Image from "next/image";
import { FaRegSquarePlus } from "react-icons/fa6";

const ChatInformation: React.FC = () => {
  return (
    <div className="w-full border-[1px] border-none csm:border-blue-1 rounded-[2px] flex flex-col">
      {/* top header ----->  */}
      <div className="w-full flex flex-col p-0 csm:p-3">
        <div className="w-full bg-[#D4DDE6] relative h-[43px] flex justify-between items-center">
          <div className="flex pl-4 justify-center items-center gap-3">
            <Image src="/assets/token3.svg" alt="" width={26} height={26} />
            <p className="text-[12px] csm:text-[14px] font-semibold text-black-1">
              Pink Hood Froglicker | $Froglic [chat]
            </p>
          </div>
          {/* add mods button --------->  */}
          <button className="w-[50px] h-full bg-white-1 flex justify-center items-center">
            <FaRegSquarePlus className="text-[23px] text-black-1" />
          </button>
        </div>
      </div>
      {/* informations  */}
      <div className="w-full flex flex-col">
        {chatInformation.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full grid px-6 grid-cols-[100px,1fr] gap-8 justify-center items-center py-3 border-b-[1px] border-blue-1/20 dark:border-white-1/10"
            >
              <p className="w-full flex justify-start text-[12px] csm:text-[14px] font-normal text-blue-1 items-center">
                {item.type}
              </p>
              <div className="w-full flex-wrap flex justify-start items-center gap-7">
                {item.img && (
                  <Image src={item.img} alt="" width={25} height={25} />
                )}
                {item.list?.map((ls, index) => {
                  return (
                    <p
                      key={index}
                      className="text-[12px] csm:text-[14px] font-normal text-black-1 dark:text-white-1 underline"
                    >
                      {ls}
                    </p>
                  );
                })}
                {item.des && (
                  <p className="text-[12px] csm:text-[14px] font-normal text-black-1 dark:text-white-1">
                    {item.des}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatInformation;

const chatInformation = [
  {
    type: "Owner",
    img: "/assets/owner.svg",
    list: ["Username"],
  },
  {
    type: "Coin",
    img: "/assets/token3.svg",
    list: ["Coin name ", "Ticker"],
  },
  {
    type: "Official Links",
    list: ["Website", "X/Twitter", "Telegram"],
  },
  {
    type: "Description",
    des: "Token description goes here. This is the same token description as input by the devs on token creations. nothing exciting going on here.  ",
  },
];
