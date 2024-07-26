"use client";

import React, { useState } from "react";
import ComponentWrapper from "../components/shared/layout/ComponentWrapper";
import Image from "next/image";
import { FiCopy } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import Followers from "../components/Profile/Followers";
import Following from "../components/Profile/Following";


const ProfilePage = () => {
  // states ----------->
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedName, setSelectedName] = useState("");

  //   functions --------->
  const handleButtonClick = (index: number, name: string) => {
    setSelectedIndex(index);
    setSelectedName(name);
  };

  return (
    <ComponentWrapper style="bg-white-2">
      <div className="w-full pt-12 min-h-screen flex justify-center items-start">
        <div className="w-full max-w-[860px] grid grid-cols-[1fr,1fr,1.5fr] gap-7 justify-center items-start">
          {/* uer profile ----> */}
          <div className="w-full flex flex-col gap-3">
            <div className="w-full flex flex-col border-[1px] border-blue-1 rounded-[2px] py-[8px] px-[7px]">
              {/* profile image */}
              <div className="w-full h-[200px] relative">
                <Image src="/assets/profile.png" alt="" fill />
              </div>
              {/* user name */}
              <div className="w-full mt-3 border-[1px] border-blue-1 grid grid-cols-[1fr,1.4fr] px-[5px] h-[43px] justify-center items-center">
                <p className="text-[14px] uppercase font-normal text-black-1">
                  Username:
                </p>
                <input
                  placeholder="insert username"
                  type="text"
                  className="w-full focus:outline-none px-1 text-[10px] font-normal placeholder:text-white-1 text-white-1 uppercase h-[60%] bg-[#404040]"
                  name="name"
                  id="name"
                />
              </div>
              {/* edit your profile */}
              <div className="flex justify-start mt-5 mb-3 items-center gap-2 pl-4">
                <button className="text-white-1 hover:opacity-80 font-normal text-[10px] uppercase bg-black-1 px-2 py-[2px]">
                  Edit
                </button>
                <p className="text-[14px] uppercase font-normal text-black-1">
                  Your Profile
                </p>
              </div>
            </div>
            {/* referal link ---> */}
            <div className="w-full h-[44px] bg-transparent border-[1px] border-blue-1 rounded-[2px] flex justify-between items-center px-2 gap-3">
              <p className="text-[14px] whitespace-nowrap uppercase font-normal text-black-1">
                Referral Link
              </p>
              <button className="px-2 py-1 text-[10px] font-normal text-white-1 bg-[#404040]">
                Generate
              </button>
              <button className="w-[18px] h-[18px] bg-white-1 flex justify-center items-center">
                <FiCopy className="text-black-1 text-[12px]" />
              </button>
            </div>
          </div>
          {/* Bio ---> */}
          <div className="w-full mt-5 flex flex-col">
            <p className="text-[10px] uppercase font-normal text-black-1">
              Bio:
            </p>
            <p className="border-[1px] border-blue-1 text-[10px] font-normal text-black-1 px-2 py-1">
              bio goes here. make sure it is interesting otherwise people will
              hate you.
            </p>
            <div className="mt-10 flex flex-col px-2 py-1 border-[1px] border-blue-1">
              {/* header */}
              <div className="w-full h-[30px] justify-center items-center grid grid-cols-[1.5fr,1fr,1fr]">
                <h2 className="text-[15px] font-normal uppercase text-black-1">
                  BUZZ XP
                </h2>
                <h2 className="text-[15px] font-normal uppercase text-black-1">
                  4000{" "}
                </h2>
              </div>
              {/* rows */}
              <div className="flex flex-col">
                {userDetails.map((item, index) => {
                  // Determine if the current item is selected
                  const isSelected = selectedIndex === index;

                  return (
                    <button
                      key={index}
                      onClick={() => handleButtonClick(index, item.name)}
                      className={`w-full justify-center items-center h-[28px] grid grid-cols-[1.5fr,1fr,1fr] ${
                        isSelected ? "bg-black text-white" : "bg-transparent"
                      }`}
                    >
                      <p
                        className={`w-full flex justify-start items-center text-[10px] font-normal ${
                          isSelected ? "text-white" : "text-black-1"
                        }`}
                      >
                        {item.name}
                      </p>
                      <p
                        className={`w-full flex justify-start items-center text-[10px] font-normal ${
                          isSelected ? "text-white" : "text-black-1"
                        }`}
                      >
                        {item.value}
                      </p>
                      <div className="w-full flex justify-end items-center">
                        <div
                          className={`w-[12px] flex justify-center items-center h-[12px] ${
                            isSelected ? "bg-black-1" : "bg-white-1"
                          }`}
                        >
                          <GoArrowUpRight
                            className={`text-[11px] ${
                              isSelected ? "text-white-1" : "text-black-1"
                            }`}
                          />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          {/* user - details components  */}
          {selectedName === "Followers" && <Followers />}
          {selectedName === "Following" && <Following />}

        </div>
      </div>
    </ComponentWrapper>
  );
};

const userDetails = [
  {
    name: "Followers",
    value: "12",
  },
  {
    name: "Following",
    value: "12",
  },
  {
    name: "Replies",
    value: "15",
  },
  {
    name: "Coins Launched",
    value: "1",
  },
  {
    name: "Coins held",
    value: "8",
  },
];

export default ProfilePage;
