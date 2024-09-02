import React from "react";
import { FaFilter } from "react-icons/fa";
import { MdOutlineElectricBolt } from "react-icons/md";
import Image from "next/image";
import { IoCopy } from "react-icons/io5";
import { FiArrowUp } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { BsChat } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { useDisclosure } from "@mantine/hooks";
import FilterDrawer from "../shared/Drawers/FilterDrawer";
import { CiUser } from "react-icons/ci";


const CoinStatsCards: React.FC = () => {
  const [filterDrawer, { open: openFilterDrawer, close: closeFilterDrawer }] =
    useDisclosure(false);

  return (
    <React.Fragment>
      <div className="w-full flex gap-6 flex-col mt-3 bg-transparent dark:bg-[#0E161C] rounded-[5px] border-[1px] border-[#38394A] py-4 px-2">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-3">
          {coinsStatsCards.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex justify-center items-center"
              >
                <div className="w-full max-w-[500px] flex flex-col gap-3">
                  <p className="w-full py-1 text-center z-40 bg-blue-1 dark:bg-black-1 rounded-[4px] text-[#FEF652] font-normal text-[14px]">{`// Tokens recently created \\`}</p>
                  {/* table  */}
                  <div
                    className={`w-full border-[1px] p-2 ${item.cardBorderColor} bg-transparent dark:bg-black-1 rounded-[5px] flex flex-col gap-4`}
                  >
                    {/* table filter  */}
                    <div className="w-full flex justify-between items-center">
                      <button
                        onClick={openFilterDrawer}
                        className="px-2 h-[28px] bg-[#1E2025] rounded-[2px] flex justify-center items-center gap-1"
                      >
                        <FaFilter className="text-[14px] text-white-1" />
                        <p className="text-[12px] font-normal text-white-1">
                          Filter
                        </p>
                        <div className="px-1 flex justify-center items-center py-[2px] bg-[#0F171D] rounded-[2px]">
                          <p className="text-[8px] font-normal text-white-1">
                            2
                          </p>
                        </div>
                      </button>
                      <div className="px-[6px] py-[3px] gap-1 bg-[#282828] text-white-1 flex justify-center items-center rounded-[2px]">
                        <MdOutlineElectricBolt className="text-[12px] text-[#B746F0]" />
                        <p className="text-[12px] font-normal text-white-1">
                          Buy:
                        </p>
                        <p className="text-[12px] font-normal text-white-1">
                          $
                        </p>
                        <p className="text-[12px] font-normal text-white-1">
                          10
                        </p>
                      </div>
                    </div>
                    {/* cards ---> */}
                    <div className="flex flex-col">
                      {[0, 1, 2, 3, 4, 5].map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="w-full grid py-[6px] relative gap-2 bg-transparent dark:bg-black-1 grid-cols-[65px,1fr] px-[8px]"
                          >
                            {/* coin image */}
                            <div className="w-full border-[1px] border-[#FEF652] rounded-[5px] h-[65px] relative">
                              <Image
                                src="/assets/coin4.png"
                                alt=""
                                className="rounded-[5px]"
                                fill
                              />
                            </div>
                            {/* 2nd col */}
                            <div className="w-full flex flex-col gap-1">
                              {/* coin stats */}
                              <div className="w-full flex flex-col">
                                {/* top portion */}
                                <div className="w-full flex justify-between items-center gap-2">
                                  <div className="flex flex-col gap-1">
                                    <div className="flex justify-center items-center gap-2">
                                      <p className="text-black-1 dark:text-white-1 font-normal text-[12px]">
                                        Ticker
                                      </p>
                                      <p className="text-black-1 dark:text-white-1 font-normal text-[12px]">
                                        /
                                      </p>
                                      <p className="text-black-1 dark:text-white-1 font-normal text-[12px]">
                                        Token name
                                      </p>
                                      <Image
                                        src="/assets/eth.svg"
                                        alt=""
                                        width={12}
                                        height={12}
                                      />
                                      <IoCopy className="text-[14px] cursor-pointer text-black-1 dark:text-[#D9D9D9]" />
                                    </div>
                                  </div>
                                  {/*  */}
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
                                  {/*  */}
                                  <div className="w-[24px] h-[19px] flex justify-center items-center rounded-[5px] border-[1px] border-[#B746F0]">
                                    <Image
                                      src="/assets/light.svg"
                                      alt=""
                                      width={8}
                                      height={9}
                                    />
                                  </div>
                                </div>
                                {/* down section */}
                                <div className="flex justify-start items-center gap-4">
                                  <p className="text-[12px] font-normal text-black-1 dark:text-white-1">
                                    3s
                                  </p>
                                  <hr className=" h-[14px] border-r-[1px] border-[#B746F0]" />
                                  <div className="flex gap-1 justify-center items-center">
                                   <CiUser className="text-[16px] text-black-1 dark:text-white-1"/>
                                    <p className="text-[12px] font-normal text-black-1 dark:text-white-1">
                                      7%
                                    </p>
                                  </div>
                                  <hr className=" h-[14px] border-r-[1px] border-[#B746F0]" />

                                  <div className="flex justify-center items-center gap-1">
                                    <Image
                                      src="/assets/dev.svg"
                                      alt=""
                                      width={12}
                                      height={12}
                                    />
                                    <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                                      1%
                                    </p>
                                  </div>
                                  <hr className=" h-[14px] border-r-[1px] border-[#B746F0]" />

                                  <div className="flex justify-center items-center gap-1">
                                    <GoGraph className="text-[16px] text-black-1 dark:text-white-1" />
                                    <p className="text-[14px] w-full flex justify-start font-normal dark:text-[#00C673] text-black-1">
                                      1%
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* coin channel + followers */}
                              <div className="w-full flex justify-between items-center gap-2">
                                <div className="flex justify-center items-center gap-2">
                                  <BsChat className="text-[14px] text-black-1 dark:text-white-1" />
                                  <RiTwitterXFill className="text-[14px] text-black-1 dark:text-white-1" />
                                  <FaTelegramPlane className="text-[14px] text-black-1 dark:text-white-1" />
                                  <GrLanguage className="text-[14px] text-black-1 dark:text-white-1" />
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                  <MdOutlineStarOutline className="text-[14px] text-black-1 dark:text-[#EBFF00E8]" />
                                  <hr className=" h-[14px] border-r-[1px] border-[#B746F0]" />

                                  <div className="flex justify-center items-center gap-1">
                                    <MdPerson className="text-[14px] text-black-1 dark:text-white-1" />
                                    <p className="text-[12px] font-normal text-[#00C673]">
                                      3
                                    </p>
                                  </div>
                                  <hr className=" h-[14px] border-r-[1px] border-[#B746F0]" />

                                  <div className="flex justify-center items-center gap-1">
                                    <p className="text-[12px] font-normal text-black-1 dark:text-white-1">
                                      V
                                    </p>
                                    <p className="text-[12px] font-normal text-[#00C673]">
                                      $3204
                                    </p>
                                  </div>
                                  <hr className=" h-[14px] border-r-[1px] border-[#B746F0]" />

                                  <div className="flex justify-center items-center gap-1">
                                    <p className="text-[12px] font-normal text-black-1 dark:text-white-1">
                                      MC
                                    </p>
                                    <p className="text-[12px] font-normal text-[#00C673]">
                                      $4k
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-[10px] font-normal px-2 text-white-1">
          <span className="text-[#EBFF00]">{`//`}</span>{" "}
          <span className="text-[#B746F0]">{`ô¿ô `}</span>{" "}
          <span className="text-[#EBFF00]">{`+`}</span>{" "}
          <span className="text-[#EBFF00]">{`( .  Y . ) > (@_@)....<*_*> / (♥️_♥️)][L][F][G][][][0]******_______¯\_(ツ)_/¯_________8=======D`}</span>{" "}
          <span className="text-[#336FFE]">{`ฅ^•ﻌ•^ฅ`}</span>{" "}
        </p>
      </div>
      {/* Filter drawer -------------------> */}
      <FilterDrawer open={filterDrawer} closeDrawer={closeFilterDrawer} />
    </React.Fragment>
  );
};

const coinsStatsCards = [
  {
    title: "// Tokens recently created \\ ",
    cardBorderColor: "border-[#FEF652]",
  },
  {
    title: "// Bonding almost complete \\ ",
    cardBorderColor: "border-[#A03ED2]",
  },
  {
    title: "// LFG to Uniswap \\ ",
    cardBorderColor: "border-[#61D937]",
  },
];

export default CoinStatsCards;
