import React from "react";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="flex my-4 justify-between items-center w-full py-2 bg-blue-1 px-3">
      {/* bread crumbs  */}
      <div className="flex flex-wrap justify-center items-center gap-1 md:gap-3">
        {breadCrumbs.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center gap-4">
              <p
                className={`text-base ${
                  item.isBold ? "font-semibold" : "font-normal"
                } text-white-1`}
              >
                {item.value}{" "}
              </p>
              <div
                className={`w-[2px] ${
                  index + 1 === breadCrumbs.length ? "hidden" : "block"
                } h-[20px] bg-white-1 rotate-[20deg]`}
              ></div>
            </div>
          );
        })}
      </div>
      {/* search input */}
      <div className="w-[340px] px-2 h-[28px] bg-white-1 rounded-md grid grid-cols-[1fr,20px]">
        <input
          type="text"
          className="bg-transparent w-full focus:outline-none h-full placeholder:text-black-1 text-[10px] font-normal"
          placeholder="Search token by name or ticker"
        />
        <div className="w-full flex justify-center items-center">
          <Image src="/assets/enter.svg" alt="" width={21} height={18} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;


const breadCrumbs = [
    {
      isBold: true,
      value: "Trending ",
    },
    {
      isBold: false,
      value: "New ",
    },
    {
      isBold: false,
      value: "Live Activity ",
    },
    {
      isBold: false,
      value: "Hall of shame ",
    },
  ];
  