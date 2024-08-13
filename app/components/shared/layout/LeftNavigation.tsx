import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "../../ThemeSwitch";
import { IoCopyOutline } from "react-icons/io5";

const LeftNavigation: React.FC = () => {
  return (
    <div className="w-full gap-4 flex flex-col p-4 justify-start items-center h-full bg-white-2 border-r-[1px] border-[#2B2C39]">
      <div className="w-[177px] h-[40px] relative">
        <Image src="/assets/logo2.png" alt="" fill />
      </div>
      <hr className="w-full h-[1px] border-[1px] border-[#2E2B36] lineSha" />
      {/* user profile */}
      <div className="flex justify-center items-center gap-3">
        <Image src="/assets/user2.png" alt="" width={39} height={39} />
        <div className="flex flex-col">
          <p className="text-[15px] font-normal text-white-1">DrBoom</p>
          <p className="text-[15px] font-normal text-blue-1">@drboom</p>
        </div>
      </div>
      {/* wallet address */}
      <div className="w-full bg-[#D3DCE5] rounded-[3px] p-3 flex justify-between items-center gap-1">
        <div className="flex flex-col">
          <p className="text-[12px] font-normal text-black-1">
            Wallet connected
          </p>
          <p className="text-[6px] font-normal text-black-1">
            0xEE3389cd8aC6FAc9392C97BAFdF7474927D51AFB
          </p>
        </div>
        <button className="w-[14px] h-[14px] bg-black-1 flex justify-center items-center">
          <IoCopyOutline className="text-[10px] text-white-1" />
        </button>
      </div>
      <ThemeSwitch />
    </div>
  );
};

export default LeftNavigation;
