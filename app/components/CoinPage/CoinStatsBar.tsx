import React from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";

const CoinStatsBar: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full csm:block hidden overflow-auto hideScroll">
        <div className="w-full min-w-[1400px] px-4">
          <div className="w-full max-w-[1400px] bg-blue-1  mx-auto">
            <div className="w-full flex justify-center items-center gap-4">
              {/* coin name --> */}
              <div className="flex justify-center items-center gap-2">
                <p className="text-[14px] font-normal text-white-1">
                  Token Name:
                </p>
                <p className="text-[23px] font-normal text-white-1">
                  Pepe Coin
                </p>
              </div>
              <hr className="w-[2px] h-[28px] bg-white-1 rotate-[40deg]" />
              {/* ticker --> */}
              <div className="flex justify-center items-center gap-2">
                <p className="text-[14px] font-normal text-white-1">Ticker:</p>
                <p className="text-[23px] font-normal bg-black-1 px-1 leading-[26px] text-white-1">
                  Pepe
                </p>
              </div>
              <hr className="w-[2px] h-[28px] bg-white-1 rotate-[40deg]" />
              {/* created by --> */}
              <div className="flex justify-center items-center gap-2">
                <p className="text-[14px] font-normal text-white-1">
                  Created by:
                </p>
                <Image
                  src="/assets/createdBy.png"
                  alt=""
                  className="object-fill"
                  width={19}
                  height={19}
                />
                <p className="text-[23px] font-normal leading-[26px] text-white-1">
                  ED1234
                </p>
              </div>
              <hr className="w-[2px] h-[28px] bg-white-1 rotate-[40deg]" />

              {/* Mcap  --> */}
              <div className="flex justify-center items-center gap-2">
                <p className="text-[14px] font-normal text-white-1">Mcap:</p>

                <p className="text-[23px] font-normal bg-yellow-1 px-1 leading-[26px] text-black-1">
                  23,014 USD
                </p>
              </div>
              <hr className="w-[2px] h-[28px] bg-white-1 rotate-[40deg]" />
              {/* holders  --> */}
              <div className="flex justify-center items-center gap-2">
                <p className="text-[14px] font-normal text-white-1">Holders:</p>

                <p className="text-[23px] font-normal text-white-1">123</p>
              </div>
              <hr className="w-[2px] h-[28px] bg-white-1 rotate-[40deg]" />
              {/* bonding curve  --> */}
              <div className="flex justify-center items-center gap-2">
                <p className="text-[14px] font-normal text-white-1">
                  Bonding Curve Progress:
                </p>

                <p className="text-[23px] font-normal bg-black-1 px-1 leading-[26px] text-white-1">
                  69%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* for small screen ---------->  */}
      <div className="w-full px-2">
        <div className="w-full rounded-[4px] csm:hidden gap-2 flex py-1 bg-blue-1 flex-col">
          <div className="w-full flex gap-3 justify-center items-center">
            <p className="text-[22px] font-normal text-white-1 bg-black-1">
              $Pepe
            </p>
            <p className="text-[22px] font-normal text-white-1">Pepe Coin</p>
            <div className="w-[23px] h-[23px] bg-black-1 flex justify-center items-center">
              <Image src="/assets/cloud.svg" alt="" width={20} height={20} />
            </div>
            <Image
              src="/assets/coinIcon.svg"
              className="object-fill"
              alt=""
              width={19}
              height={19}
            />
            <p className="text-[16px] font-normal text-white-1">ED1234</p>
          </div>
          <div className="w-full flex gap-3 justify-center items-center">
            <p className="text-[14px] font-normal text-white-1 bg-black-1">
              Mcap:
            </p>
            <p className="text-[22px] font-normal px-1 bg-yellow-1 text-black-1">
              23,014 USD
            </p>
            <div className="w-[23px] h-[23px] bg-black-1 flex justify-center items-center">
              <FaUser className="text-[18px] text-white-1" />
            </div>

            <p className="text-[15px] font-normal text-white-1">123</p>
            <div className="w-[23px] h-[23px] bg-black-1 flex justify-center items-center">
              <BsGraphUp className="text-[18px] text-white-1" />
            </div>

            <p className="text-[16px] font-normal text-white-1">69%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinStatsBar;
