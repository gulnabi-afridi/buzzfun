"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Accordion, rem } from "@mantine/core";

const CreatCoin: React.FC = () => {
  return (
    <div className="w-full mt-2 z-50 flex flex-col gap-2 relative">
      <Accordion
        classNames={{ root:'',control: "!focus:bg-transparent" }}
        variant="contained"
      >
        <Accordion.Item value="photos">
          <Accordion.Control classNames={{ control: "!text-white-1" }}>
            <div className="flex justify-start items-center gap-3">
              <p className="text-white-1 text-[24px]">/</p>
              <p className="text-black-1 px-2 text-[18px] bg-white-1">#1</p>
              <p className="text-black-1 dark:text-white-1 text-[15px]">Create a Token</p>
            </div>
          </Accordion.Control>
          <Accordion.Panel>
            <div className="flex flex-col gap-2">
              {list.map((item, index) => {
                return (
                  <div key={index} className="flex justify-start items-center gap-3">
                    <p className="text-yellow-1 text-[24px]">/</p>
                    <p className="text-white-1 px-2 text-[18px] bg-[#373737]">#{index+1}</p>
                    <p className="text-black-1 dark:text-white-1 text-[15px]">{item}</p>
                  </div>
                );
              })}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
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
