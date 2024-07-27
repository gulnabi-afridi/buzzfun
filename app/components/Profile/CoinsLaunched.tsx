import React from "react";
import Image from "next/image";
import Pagination from "../shared/Pagination";

const CoinsLaunched: React.FC = () => {
  return (
    <div className="w-full md:mt-0 mt-0 sm:mt-5 md:col-span-1 col-span-1 sm:col-span-2  flex justify-center items-center">
      <div className="w-full max-w-[400px] flex flex-col gap-3">
        <p className="text-[14px] font-normal dark:bg-white-1 bg-transparent pl-2 py-1 text-black-1 ">Coin launched</p>
        {/* launched coins */}
        <div className="w-full flex flex-col gap-2">
          {[0, 1, 2, 3].map((item, index) => {
            return (
              <div
                key={index}
                className="w-full border-[1px] dark:bg-black-1 bg-white-1 gap-3 border-blue-1 p-3 rounded-[2px] grid grid-cols-[140px,1fr]"
              >
                <div className="w-full h-[140px] relative">
                  <Image
                    src="/assets/coin4.png"
                    fill
                    alt=""
                    className="object-fill"
                  />
                </div>
                <div className="w-full flex flex-col">
                  {/* created by */}
                  <div className="w-full bg-blue-1 py-1 flex justify-start px-2 items-center gap-2">
                    <p className="text-[10px] text-white-1 font-montserrat font-semibold">
                      created by
                    </p>
                    <Image
                      src="/assets/person.svg"
                      width={24}
                      height={24}
                      alt=""
                    />
                    <p className="text-[10px] font-normal font-montserrat uppercase text-white-1">
                      user name
                    </p>
                  </div>
                  {/* market gap */}
                  <div className="flex py-1 mt-1 justify-start items-center gap-3">
                    <p className="text-[10px] text-black-1 dark:text-white-1 font-montserrat font-semibold">
                      Market cap:
                    </p>
                    <p className="text-[10px] font-normal font-montserrat uppercase dark:text-white-1 text-black-1">
                      45.3K
                    </p>
                    <p className="text-[10px] font-normal font-montserrat uppercase dark:text-white-1 text-black-1">
                      [rank: <span className="font-semibold">1</span> ]
                    </p>
                  </div>
                  {/* Replies: */}
                  <div className="flex py-1 justify-start items-center gap-3">
                    <p className="text-[10px] text-black-1 dark:text-white-1 font-montserrat font-semibold">
                      Replies:
                    </p>
                    <p className="text-[10px] font-semibold dark:text-white-1 font-montserrat uppercase text-black-1">
                      45
                    </p>
                  </div>
                  {/* Token name: */}
                  <div className="flex py-1 justify-start items-center gap-3">
                    <p className="text-[10px] text-black-1 dark:text-white-1 font-montserrat font-semibold">
                      Token name:
                    </p>
                    <p className="text-[10px] font-normal dark:text-white-1 font-montserrat uppercase text-black-1">
                      Pink Hood Froglicker
                    </p>
                  </div>
                  {/* ticker  */}
                  <div className="w-full bg-blue-1 mt-1 py-1 flex justify-start px-2 items-center gap-2">
                    <p className="text-[10px] text-white-1 font-montserrat font-semibold">
                      Ticker:
                    </p>
                    <p className="text-[10px] font-semibold font-montserrat uppercase text-white-1">
                      Froglic
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="w-full my-4 flex justify-center items-center">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinsLaunched;
