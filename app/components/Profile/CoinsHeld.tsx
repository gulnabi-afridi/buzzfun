import React from "react";
import Image from "next/image";
import Pagination from "../shared/Pagination";

interface Props {
  setSelectedItem: (value: string) => void;
}

const CoinsHeld: React.FC<Props> = ({ setSelectedItem }: Props) => {
  return (
    <div className="w-full md:mt-0 mt-0 csm:mt-5 xl:col-span-1 col-span-2 flex justify-center items-center">
      <div className="w-full max-w-[400px] flex flex-col gap-1 csm:gap-3">
        <div className="w-full flex csm:h-auto h-[60px] justify-between items-center">
          <p className="text-[14px] w-fit rounded-[2px] font-normal dark:bg-yellow-1 px-2 py-[2px] text-black-1 ">
            Coins Held
          </p>
          <button
            onClick={() => setSelectedItem("")}
            className="text-[14px] csm:hidden block font-normal text-white-1"
          >{`<< Go Back`}</button>
        </div>
        <div className="w-full flex flex-col bg-transparent">
          {[0, 1, 2, 3, 4].map((item, index) => {
            return (
              <div key={index} className="w-full flex flex-col">
                <div className="flex bg-white-1 dark:bg-black-1 border-[1px] rounded-[2px] border-white-1/20 p-2 w-full justify-between items-center">
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
                <div className="w-full border-b-[1px] my-4 border-dashed bg-blue-1 dark:border-[#FEF652]"></div>
              </div>
            );
          })}
          <div className="w-full flex justify-center items-center my-3">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinsHeld;
