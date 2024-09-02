import React from "react";
import Image from "next/image";
import Pagination from "../shared/Pagination";
import { BsChat } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineStarOutline } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { MdPerson } from "react-icons/md";
import { FiArrowUp } from "react-icons/fi";
import { IoCopy } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";


const CoinsLaunched: React.FC = () => {
  return (
    <div className="w-full md:mt-0 mt-0 sm:mt-5 xl:col-span-1 col-span-2  flex justify-center items-center">
      <div className="w-full max-w-[450px] flex flex-col gap-3">
        <p className="text-[14px] w-fit font-normal dark:bg-yellow-1 bg-transparent px-2 py-[2px] rounded-[2px] text-black-1 ">
          Coin launched
        </p>
        <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
          [Coins you have created]
        </p>
        {/* launched coins */}
        <div className="w-full flex flex-col gap-2">
          {/* cards */}
          {[0, 1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <div
                key={index}
                className="w-full grid border-[1px] border-white-1/20 rounded-[2px] py-[6px] relative gap-2 bg-white-1 dark:bg-black-1 grid-cols-[65px,1fr] px-[8px]"
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
                <div className="w-full pl-1 flex flex-col gap-1">
                  {/* coin stats */}
                  <div className="w-full flex flex-col gap-1">
                    {/* top portion */}
                    <div className="w-full flex justify-start items-center gap-2">
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
                    </div>
                    {/* down section */}
                    <div className="flex justify-start items-center gap-4">
                      <p className="text-[12px] font-normal text-black-1 dark:text-white-1">
                        3s
                      </p>
                      <hr className=" h-[14px] border-r-[1px] border-[#B746F0]" />
                      <div className="flex gap-1 justify-center items-center">
                      <FaUser className="text-[14px] text-black-1 dark:text-white-1"/>
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
                        <GoGraph className="text-[16px] text-white-1" />
                        <p className="text-[14px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
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
                        <p className="text-[12px] font-normal text-black-1 dark:text-white-1">
                          3
                        </p>
                      </div>
                      <hr className=" h-[14px] border-r-[1px] border-[#B746F0]" />

                      <div className="flex justify-center items-center gap-1">
                        <p className="text-[12px] font-normal text-black-1 dark:text-white-1">
                          V
                        </p>
                        <p className="text-[12px] font-normal text-black-1 dark:text-white-1">
                          $3204
                        </p>
                      </div>
                      <hr className=" h-[14px] border-r-[1px] border-[#B746F0]" />

                      <div className="flex justify-center items-center gap-1">
                        <p className="text-[12px] font-normal text-black-1 dark:text-white-1">
                          MC
                        </p>
                        <p className="text-[12px] font-normal text-black-1 dark:text-white-1">
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
        <div className="w-full flex justify-center items-center my-3">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default CoinsLaunched;
