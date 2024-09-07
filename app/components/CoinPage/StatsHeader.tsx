import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

const StatsHeader: React.FC = () => {
  return (
    <div className="w-full flex sm:flex-row flex-col justify-start items-start sm:items-end gap-2 sm:gap-4">
      <div className="flex justify-center items-center gap-2 sm:gap-4">
        <div className="w-[60px] h-[60px] bg-black-1 flex justify-center items-center">
          <Image src="/assets/emoji2.png" alt="" width={45} height={45} />
        </div>
        <div className="w-fit h-[60px] bg-black-1 flex justify-center items-center gap-1 px-3">
          <p className="text-[14px] font-normal text-black-1 bg-yellow-1">
            CA:
          </p>
          <p className="text-[14px] w-[140px] overflow-auto hideScroll md:w-fit font-normal text-white-1">
            0x6969dd6fd01b42f3b9004ae9482296a67657a1ad
          </p>
          <button className="w-[18px] ml-4 h-[18px] flex justify-center items-center bg-white-1">
            <IoCopyOutline className="text-[14px] text-black-1" />
          </button>
        </div>
      </div>
      <p className="text-[14px] dark:text-white-1 font-normal text-black-1">
        / View on Basescan
      </p>
      {/* reaction */}
      <div className="px-2 py-[6px] rounded-[2px] dark:bg-black-1 bg-white-1 flex justify-center items-center gap-3">
        <div className="flex justify-center items-center gap-2">
          <Image src="/assets/like.png" alt="" width={18} height={18} />
          <p className="text-[8px] font-normal dark:text-white-1 text-black-1">
            12
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image src="/assets/dislike.png" alt="" width={18} height={18} />
          <p className="text-[8px] font-normal dark:text-white-1 text-black-1">
            2
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsHeader;
