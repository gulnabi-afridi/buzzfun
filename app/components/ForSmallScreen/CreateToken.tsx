"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const CreatCoin: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(list[0]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Handle item selection
  const handleSelect = (item: string) => {
    setSelectedValue(item);
    setIsOpen(false);
  };

  // Get the index of the selected item
  const selectedIndex = list.indexOf(selectedValue);

  return (
    <div className="w-full flex flex-col gap-2 relative">
      {/* Button that toggles the dropdown */}
      <button
        onClick={handleToggle}
        className="w-full text-white-1 h-[45px] flex justify-between px-3 items-center gap-2 mt-1 bg-transparent rounded-[4px] border-[1px] border-yellow-1"
      >
        <div className="flex justify-center items-center gap-2">
          <p className="text-wrap text-[23px]">/</p>
          <p className="px-[6px] bg-white-1 leading-0 text-black-1 text-[18px] font-normal">
            #{selectedIndex + 1}
          </p>
          <p className="text-[15px] font-normal text-white-1">
            {selectedValue}
          </p>
        </div>
        <FiChevronDown
          className={`text-yellow-1 text-[30px] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown menu with absolute positioning */}
      {isOpen && (
        <div className="absolute top-full mt-2 left-0 w-full flex flex-col bg-black-1 border-[1px] border-blue-1 rounded-[4px] z-10">
          {list.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSelect(item)} // Select the item on click
              className={`flex ${
                list.length === index + 1 ? "pb-3" : "pt-2"
              } px-3 justify-start items-center gap-4`}
            >
              <p className="text-wrap text-[23px] text-yellow-1">/</p>
              <p className="px-[6px] bg-[#373737] leading-0 text-white-1 text-[18px] font-normal">
                #{index + 1}
              </p>
              <p className="text-[15px] font-normal text-white-1">{item}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};



const list = [
  "Create a Token",
  "Take care of community",
  "The more it grows",
  "The more BUZZ XP You gain.",
  "More BUZZ XP = more airdrop",
  "$BUZZ",
  "Rewarding the great",
];

export default CreatCoin;
