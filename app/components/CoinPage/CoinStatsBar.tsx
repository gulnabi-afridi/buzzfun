import React from "react";
import Image from "next/image";

const CoinStatsBar: React.FC = () => {
  return (
    <div className="w-full  bg-blue-1 flex justify-center items-center gap-4">
      {/* coin name --> */}
      <div className="flex justify-center items-center gap-2">
        <p className="text-[14px] font-normal text-white-1">Token Name:</p>
        <p className="text-[23px] font-normal text-white-1">Pepe Coin</p>
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
        <p className="text-[14px] font-normal text-white-1">Created by:</p>
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
  );
};

export default CoinStatsBar;
