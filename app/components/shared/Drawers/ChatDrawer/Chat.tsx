"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegFlag } from "react-icons/fa6";
import { TbArrowBackUp } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import CustomMenu from "../../CustomMenu";

const Chat: React.FC = () => {
  const [userNameMenuOption, setUserMenuOption] = useState("View Profile");
  const [chatOption, setChatOption] = useState("React");
  const [chatGeneralOption, setChatGeneralOption] = useState("Info");

  return (
    <div className="w-full">
      {/* token name ---> */}
      <div className="w-full bg-[#D4DDE6] relative h-[40px] px-4 flex justify-between items-center ">
        <div className="flex justify-center items-center gap-3">
          <Image src="/assets/token3.svg" alt="" width={26} height={26} />
          <p className="text-[14px] font-semibold text-black-1">
            Pink Hood Froglicker | $Froglic [chat]
          </p>
        </div>
        {
          <CustomMenu
            targetComponent={
              <button>
                <HiOutlineDotsHorizontal className="text-[20px] cursor-pointer text-black-1" />
              </button>
            }
            trigger="click"
            size="!min-w-[150px]"
            position="bottom"
            value={chatGeneralOption}
            setValue={setChatGeneralOption}
            options={chatGeneralOptions}
          />
        }
      </div>
      {/* update bar ---> */}
      <div className="w-full mt-[2px] bg-black-1 px-4 h-[40px] flex justify-between items-center ">
        <p className="text-[14px] font-bold text-yellow-1">
          #9 Update: Bot development
        </p>

        <button className="w-[20px] h-[20px] bg-yellow-1 flex justify-center items-center">
          <FaRegFlag className="text-[16px] cursor-pointer text-black-1" />
        </button>
      </div>
      <div className="w-full h-[calc(100vh-300px)] flex flex-col">
        {/* messages ---> */}
        <div className="w-full overflow-y-auto flex-grow flex flex-col">
          {messageData.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full px-4 py-2 grid items-start grid-cols-[80px,110px,1fr]"
              >
                <p className="w-full flex justify-start text-[14px] font-normal dark:text-white-1/80 text-black-1">
                  {item.serNo}
                </p>
                <div className="w-full flex flex-col gap-1 items-center justify-center">
                  {
                    <CustomMenu
                      size="!w-[180px]"
                      trigger="click"
                      options={userNameOptions}
                      value={userNameMenuOption}
                      setValue={setUserMenuOption}
                      targetComponent={
                        <p className="text-[14px] cursor-pointer font-semibold text-[#004BFE]">
                          {item.userName}
                        </p>
                      }
                    />
                  }

                  <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
                    {item.roloe}
                  </p>
                </div>
                <div className="w-full pl-3 items-start gap-2 flex flex-col">
                  <div className="w-full relative">
                    <p className="text-[12px] font-normal dark:text-white-1/80 text-black-1">
                      {item.message}
                    </p>
                    {/* chat + back icon ---> */}
                    {item.icIcons && (
                      <div className="px-1 py-[2px] bg-[#FEF652] absolute right-0 -top-6 rounded-[5px] flex justify-center items-center gap-1">
                        <button className="w-[20px] h-[17px] bg-black-1 rounded-[3px] flex justify-center items-center">
                          <TbArrowBackUp className="text-white-1 text-[16px]" />
                        </button>
                        {
                          <CustomMenu
                            size="!w-[150px]"
                            trigger="click"
                            options={chatOptions}
                            value={chatOption}
                            position="left"
                            setValue={setChatOption}
                            targetComponent={
                              <button className="w-[20px] h-[17px] bg-black-1 rounded-[3px] flex justify-center items-center">
                                <BsThreeDotsVertical className="text-white-1 rotate-90 text-[16px]" />
                              </button>
                            }
                          />
                        }
                      </div>
                    )}
                  </div>
                  {/* image ---> */}
                  {item.isImage && (
                    <div className="flex w-full justify-start items-end gap-3">
                      <Image
                        src="/assets/message.png"
                        width={130}
                        height={95}
                        alt=""
                      />
                      {/* image detail */}
                      <div className="flex w-full max-w-[180px] flex-col items-start">
                        <p className="text-[10px] font-normal dark:text-white-1/80 text-black-1">
                          Image{" "}
                        </p>
                        <div className="flex w-full justify-between items-center gap-2">
                          <p className="text-[10px] font-normal dark:text-white-1/80 text-black-1">
                            file type{" "}
                          </p>
                          <p className="text-[10px] font-normal dark:text-white-1/80 text-black-1">
                            .jpg
                          </p>
                        </div>{" "}
                        <div className="flex w-full justify-between items-center gap-2">
                          <p className="text-[10px] font-normal dark:text-white-1/80 text-black-1">
                            Size
                          </p>
                          <p className="text-[10px] font-normal dark:text-white-1/80 text-black-1">
                            1.2mb
                          </p>
                        </div>
                        <div className="flex w-full justify-between items-center gap-2">
                          <p className="text-[10px] font-normal dark:text-white-1/80 text-black-1">
                            dimensions
                          </p>
                          <p className="text-[10px] font-normal dark:text-white-1/80 text-black-1">
                            1200x1000
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* reaction */}
                  {item.isReactions && (
                    <div className="flex justify-center items-center gap-3">
                      <div className="flex justify-center items-center gap-1">
                        ♥️
                        <p className="text-[11px] font-normal dark:text-white-1/80 text-black-1">
                          2
                        </p>
                      </div>
                      <div className="flex justify-center items-center gap-1">
                        😍
                        <p className="text-[11px] font-normal dark:text-white-1/80 text-black-1">
                          4
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                {/* date */}
                {item.isDate && (
                  <div className="w-full col-span-3 my-2 flex justify-center items-center">
                    <div className="w-[250px] flex justify-center items-center py-[2px] rounded-[10px] text-white-1 text-[8px] font-normal bg-black-1">
                      Today (13/08/2024)
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* send message ui ---> */}
        <div className="w-full grid grid-cols-[1fr,80px] rounded-[2px] h-[100px] gap-3 border-[1px] border-blue-1">
          <p className="text-[14px] p-2 font-normal dark:text-white-1/80 text-black-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum passages, and more recently with desktop
            publishing software like{" "}
          </p>
          <button className="bg-[#D4DDE6] dark:bg-[#1D252C] p-2 flex flex-col justify-center items-center w-full">
            <p className="text-[14px] font-normal text-black-1 bg-yellow-1 px-[4px]">
              /SEND
            </p>
            <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
              [image]
            </p>
            <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
              [Emoji]
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

const messageData = [
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
    isDate: true,
    icIcons: false,
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    icIcons: false,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    icIcons: false,

    isDate: true,

    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    isDate: true,

    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    isDate: false,

    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    isDate: false,

    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    isImage: true,
    isDate: false,
    icIcons: true,

    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    isDate: false,

    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    isDate: false,

    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    serNo: "23:16",
    userName: "<Username>",
    roloe: "[Role]",
    isReactions: true,
    isDate: false,

    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
];

const userNameOptions = [
  "View Profile",
  "Follow",
  "Timeout",
  "Kick",
  "Ban",
  "Delete all & Ban",
];

const chatOptions = ["React", "Pin", "Select", "Delete"];

const chatGeneralOptions = [
  "Info",
  "Go to Coin",
  "Subscribe",
  "Leave chat",
  "Settings",
];
