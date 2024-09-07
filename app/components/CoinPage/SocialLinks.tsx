import React from "react";
import Image from "next/image";

const SocialLinks: React.FC = () => {
  return (
    <div className="w-full flex gap-2 justify-between items-center">
      <div className="flex flex-col gap-2">
        <p className="text-[14px] dark:text-white-1 font-normal text-black-1">
          [Socials]
        </p>
        <div className="flex justify-center items-center gap-2">
          <button className="w-[28px] dark:bg-blue-1 bg-black-1 h-[28px] flex justify-center items-center rounded-[1px]">
            <Image src="/assets/twitter.svg" alt="" width={16} height={16} />
          </button>
          <button className="w-[28px] dark:bg-blue-1 bg-black-1 h-[28px] flex justify-center items-center rounded-[1px]">
            <Image src="/assets/tellegram.svg" alt="" width={16} height={16} />
          </button>
          <button className="w-[28px] dark:bg-blue-1 bg-black-1 h-[28px] flex justify-center items-center rounded-[1px]">
            <Image src="/assets/globe.svg" alt="" width={18} height={18} />
          </button>
        </div>
      </div>
      <button className="text-[20px] font-normal text-black-1 bg-yellow-1 px-2 py-1 yellowSha">
        [LIVE <span className="underline"> CHAT</span> AVAILABLE]
      </button>
    </div>
  );
};

export default SocialLinks;
