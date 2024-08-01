"use client";

import React, { useState } from "react";
import ComponentWrapper from "../components/shared/layout/ComponentWrapper";
import Image from "next/image";
import { FiCopy } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import Followers from "../components/Profile/Followers";
import Following from "../components/Profile/Following";
import Replies from "../components/Profile/Replies";
import CoinsLaunched from "../components/Profile/CoinsLaunched";
import CoinsHeld from "../components/Profile/CoinsHeld";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import Breadcrumb from "../components/shared/layout/Breadcrumb";

const ProfilePage = () => {
  // states ----------->
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedName, setSelectedName] = useState("Followers");
  const [opened, { open, close }] = useDisclosure(false);

  //   functions --------->
  const handleButtonClick = (index: any, name: string) => {
    setSelectedIndex(index);
    setSelectedName(name);
  };

  return (
    <React.Fragment>
      <ComponentWrapper style="dark:bg-[#1D252C] bg-white-2">
        {/* top section */}
        <div className="w-full flex justify-center items-center pt-8">
          <div className="flex w-fit  px-4 sm:px-8 lg:px-6 py-2 dark:bg-[#253039] bg-black-1 gap-4 justify-center items-center">
            <p className="text-[20px] md:text-[30px] text-center xl:text-[40px] uppercase leading-[48px] font-normal text-orange-1">
              {pattern1}
            </p>
            <p className="uppercase text-[20px] md:text-[30px] xl:text-[40px] leading-[48px] dark:bg-black-1 bg-yellow-1 dark:text-yellow-1 text-black-1 font-normal">
              Profile
            </p>
            <p className="text-[20px] md:block hidden md:text-[30px] text-center xl:text-[40px] uppercase leading-[48px] font-normal text-orange-1">
              {pattern3}
            </p>
            <p className="text-[20px] md:hidden block md:text-[30px] text-center xl:text-[40px] uppercase leading-[48px] font-normal text-orange-1">
              {pattern4}
            </p>
            
          </div>
        </div>
        <div className="w-full pt-8 sm:pt-10 min-h-screen pb-10 flex justify-center items-start">
          <div
            className={`w-full grid gap-6 sm:gap-4 md:gap-6 justify-center items-start 
            ${
              selectedName === "Replies" &&
              "max-w-[950px] grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr,1fr,2fr]"
            }
            ${
              selectedName === "Coins Launched" &&
              "max-w-[900px] grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr,1fr,1.8fr]"
            }
            ${
              !["Replies", "Coins Launched"].includes(selectedName) &&
              "max-w-[860px] grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr,1fr,1.5fr]"
            }
          `}
          >
            {/* uer profile ----> */}
            <div className="w-full flex justify-center items-center">
              <div className="w-full max-w-[300px] flex flex-col gap-3">
                <div className="w-full flex flex-col border-[1px] bg-transparent dark:bg-black-1 border-blue-1 rounded-[2px] py-[8px] px-[7px]">
                  {/* profile image */}
                  <div className="w-full h-[200px] relative">
                    <Image src="/assets/profile.png" alt="" fill />
                  </div>
                  {/* user name */}
                  <div className="w-full mt-3 border-[1px] border-blue-1 grid grid-cols-[1fr,1.4fr] px-[5px] h-[43px] justify-center items-center">
                    <p className="text-[14px] uppercase font-normal dark:text-white-1 text-black-1">
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
                    <button
                      onClick={open}
                      className="text-white-1 dark:bg-purple-1 hover:opacity-80 font-normal text-[10px] uppercase bg-black-1 px-2 py-[2px]"
                    >
                      Edit
                    </button>
                    <p className="text-[10px] uppercase font-normal dark:text-white-1 text-black-1">
                      Your Profile
                    </p>
                  </div>
                </div>
                {/* referal link ---> */}
                <div className="w-full h-[44px] dark:bg-black-1 bg-transparent border-[1px] border-blue-1 rounded-[2px] flex justify-between items-center px-2 gap-3">
                  <p className="text-[10px] dark:text-white-1 uppercase font-normal text-black-1">
                    Referral Link
                  </p>
                  <button className="px-2 py-1 text-[10px] font-normal text-white-1 bg-[#404040]">
                    Generate
                  </button>
                  <button className="w-[18px] h-[18px] bg-white-1 flex justify-center items-center">
                    <FiCopy className="text-black-1 text-[12px]" />
                  </button>
                </div>
                {/* reactions to profile */}
                <div className="bg-white-1 rounded-sm w-fit py-[6px] px-3 flex justify-center items-center gap-3">
                  <div className="flex justify-center items-center gap-1">
                    <p>❤️</p>
                    <p className="text-[10px] font-normal text-black-1">12</p>
                  </div>
                  <div className="flex justify-center items-center gap-1">
                    <p>🤬</p>
                    <p className="text-[10px] font-normal text-black-1">12</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Bio ---> */}
            <div className="w-full flex justify-center items-center">
              <div className="w-full bg-transparent max-w-[300px] mt-0 sm:mt-5 flex flex-col">
                <p className="text-[10px] flex justify-start pl-1 dark:mb-2 mb-0 items-center dark:bg-white-1 bg-transparent w-[30%] h-[28px] uppercase font-normal text-black-1">
                  Bio:
                </p>
                <p className="border-[1px] dark:bg-black-1 bg-transparent border-blue-1 text-[10px] font-normal dark:text-white-1 text-black-1 px-2 py-1">
                  bio goes here. make sure it is interesting otherwise people
                  will hate you.
                </p>
                <div className="mt-4 sm:mt-10 dark:bg-black-1 bg-transparent flex flex-col px-2 py-1 border-[1px] border-blue-1">
                  {/* header */}
                  <div className="w-full h-[30px] dark:bg-yellow-1 bg-transparent justify-center items-center grid grid-cols-[1.5fr,1fr,1fr]">
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
                          className={`w-full justify-center items-center h-[28px] grid grid-cols-[1.5fr,1fr,1fr]`}
                        >
                          <p
                            className={`w-full flex text-left dark:text-white-1 text-black-1 justify-start items-center text-[10px] font-normal`}
                          >
                            {item.name}
                          </p>
                          <p
                            className={`w-full flex justify-start dark:text-white-1 text-black-1 items-center text-[10px] font-normal }`}
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
            </div>
            {/* user - details components  */}
            {selectedName === "Followers" && <Followers />}
            {selectedName === "Following" && <Following />}
            {selectedName === "Replies" && <Replies />}
            {selectedName === "Coins Launched" && <CoinsLaunched />}
            {selectedName === "Coins held" && <CoinsHeld />}
          </div>
        </div>
      </ComponentWrapper>
      {/* EDIT USER PROFILE MODAL ---------------->  */}
      <Modal
        opened={opened}
        onClose={close}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        size="xs"
        classNames={{
          body: "bg-white-2 border-[1px] border-blue-1",
        }}
        withCloseButton={false}
      >
        <div className="w-full flex justify-center items-center">
          <div className="w-full pb-5 pt-3 max-w-[230px] flex flex-col">
            <div className="flex justify-start mt-5 mb-3 items-center gap-2 pl-4">
              <button className="text-white-1 hover:opacity-80 font-normal text-[10px] uppercase bg-black-1 px-2 py-[2px]">
                Edit
              </button>
              <p className="text-[10px] uppercase font-normal text-black-1">
                Your Profile
              </p>
            </div>
            {/* user pic  */}
            <div className="w-full mt-4 border-[1px] border-blue-1 rounded-[2px] p-2 grid grid-cols-[71px,1fr] justify-center items-center gap-2">
              <div className="w-full h-[72px] relative">
                <Image
                  src="/assets/profile.png"
                  alt=""
                  fill
                  className="object-fill"
                />
              </div>
              <div className="flex justify-center items-center w-full flex-col gap-2">
                <p className="text-[10px] font-normal text-black-1 uppercase">
                  Profile photo
                </p>
                <button className="text-[10px] font-normal text-black-1 underline">
                  Edit
                </button>
              </div>
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
            <p className="text-[8px] font-normal text-[#343434] my-3">
              [you can only edit your username <br /> every 69 hours]
            </p>
            {/* Bio */}
            <div className="flex flex-col gap-1">
              <p className="text-[10px] uppercase font-normal text-black-1">
                Bio:
              </p>
              <p className="border-[1px] border-blue-1 text-[10px] font-normal text-black-1 px-2 py-1">
                bio goes here. make sure it is interesting otherwise people will
                hate you.
              </p>
            </div>
            {/* buttons  */}
            <div className="w-full mt-4 flex justify-between items-center">
              <button
                onClick={close}
                className="px-3 hover:opacity-80 text-[12px] font-normal text-white-1 py-2 bg-black-1 rounded-[2px]"
              >
                \ Close
              </button>
              <button className="px-3 hover:opacity-80 text-[12px] font-normal text-purple-1 py-2 bg-white-1 rounded-[2px]">
                \ Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ProfilePage;

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

const pattern1 = "/////";
const pattern3 = "/".repeat(22) + "." + "\\".repeat(5);
const pattern4 = "/".repeat(5) + "." + "\\".repeat(3);
