import React from "react";
import Image from "next/image";

const CoinsHeld: React.FC = () => {
  return (
    <div className="w-full md:mt-0 mt-0 sm:mt-5 md:col-span-1 col-span-1 sm:col-span-2 flex justify-center items-center">
      <div className="w-full max-w-[400px] flex flex-col gap-3">
        <p className="text-[14px] font-normal dark:bg-white-1 py-1 pl-2 text-black-1 ">
          Coin launched
        </p>
        <div className="w-full flex flex-col dark:bg-black-1 bg-white-1 rounded-[2px] border-[1px] border-blue-1 p-4">
          {[0, 1, 2, 3].map((item, index) => {
            return (
              <div
                key={index}
                className="flex py-4 border-b-[1px] dark:border-white-1 border-black-1 border-dashed w-full justify-between items-center"
              >
                <div className="flex justify-center items-center gap-4">
                  <div className="w-[43px] h-[43px] relative">
                    <Image
                      src="/assets/coin5.png"
                      alt=""
                      className="object-fill"
                      fill
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-center items-center gap-2">
                      <p className="text-[10px] font-normal dark:text-white-1 text-black-1">
                        2000000000
                      </p>
                      <p className="text-[10px] font-normal dark:text-white-1 text-black-1">
                        FROGLIC
                      </p>
                    </div>
                    <div className="flex gap-1 justify-center items-center py-[1px] bg-yellow-1 w-fit px-1">
                      <p className="text-[10px] font-normal text-black-1">
                        0.2 
                      </p>
                      <p className="text-[10px] pt-1">Ξ</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-[10px] font-normal dark:text-white-1 text-black-1">
                    /Refresh
                  </p>
                  <p className="text-[10px] font-normal dark:text-white-1 text-black-1">
                    [View Coin]
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoinsHeld;
