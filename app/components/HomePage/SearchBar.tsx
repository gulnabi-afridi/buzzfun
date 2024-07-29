"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Select } from "@mantine/core";

const SearchBar = () => {
  const [filter, setFilter] = useState("trending");

  return (
    <div className="flex my-4 justify-between items-center w-full py-2 bg-transparent px-3">
      {/* bread crumbs  */}
      <div className="flex justify-center items-center gap-2">
        <p className="text-[12px] font-normal mr-3 text-black-1">
          Select here &gt; &gt;
        </p>
        <button
          onClick={() => setFilter("trending")}
          className={`text-[16px] ${
            filter === "trending"
              ? "bg-purple-1 textShadow text-white-1"
              : "text-white-1 bg-black-1/55"
          } font-normal rounded-[2px] px-2 py-[2px]`}
        >
          Trending{" "}
        </button>
        <button
          onClick={() => setFilter("new")}
          className={`text-[16px] ${
            filter === "new"
              ? "bg-purple-1  text-white-1 textShadow"
              : "text-white-1 bg-black-1/55"
          } font-normal rounded-[2px] px-2 py-[2px]`}
        >
          New{" "}
        </button>
        <button
          onClick={() => setFilter("live activity")}
          className={`text-[16px] ${
            filter === "live activity"
              ? "bg-purple-1 textShadow  text-white-1"
              : "text-white-1 bg-black-1/55"
          } font-normal rounded-[2px] px-2 py-[2px]`}
        >
          Live Activity{" "}
        </button>
      </div>
      {/* search input */}
      <div className="flex justify-center items-center gap-4">
        <Select
          size="xs"
          classNames={{
            root: "flex justify-center items-center gap-2",
            label: "text-[16px] font-normal text-black-1",
            input:
              "text-[14px] !w-[120px] !rounded-[2px] focus:border-white-1 font-normal text-black-1",
          }}
          label="Network"
          placeholder="Pick value"
          data={["All", "None", "Single", "Multiple"]}
        />
        <div className="w-[340px] px-2 h-[28px] bg-white-1 rounded-[2px] grid grid-cols-[1fr,20px]">
          <input
            type="text"
            className="bg-transparent w-full focus:outline-none h-full placeholder:text-black-1 text-[10px] font-normal"
            placeholder="Search token by name or ticker"
          />
          <div className="w-full flex justify-center items-center">
            <Image src="/assets/enter.svg" alt="" width={21} height={18} />
          </div>
        </div>
        <p className="text-[12px] font-normal text-black-1">{pattern1}</p>
      </div>
    </div>
  );
};

export default SearchBar;

const pattern1 = "<< Search here";
