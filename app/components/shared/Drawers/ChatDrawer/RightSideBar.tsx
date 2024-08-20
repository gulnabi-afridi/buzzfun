"use client";

import React, { useState } from "react";
import { IoHammerOutline } from "react-icons/io5";
import CustomMenu from "../../CustomMenu";
import { LuSearch } from "react-icons/lu";

const RightSideBar: React.FC = () => {
  // chat-admin
  // platform-admin
  // chat-owner
  // normal-user
  const [useType, setUserType] = useState("normal-user");
  const [showSearch, setSearch] = useState(true);
  const [userNameMenuOption, setUserMenuOption] = useState("View Profile");

  return (
    <div className="w-full flex flex-col gap-2">
      <div
        className={`w-full flex border-[1px] border-blue-1 ${
          useType === "chat-admin" && " h-[calc(100vh-268px)]"
        } ${useType === "normal-user" && " h-[calc(100vh-155px)]"} 
       ${useType === "platform-admin" && " h-[calc(100vh-280px)]"} 
       ${useType === "chat-owner" && " h-[calc(100vh-268px)]"} 

      flex-col`}
      >
        {/* Fixed header */}
        <div className="w-full grid px-4 py-2 grid-cols-[1fr,30px]">
          {showSearch ? (
            <input
              type="text"
              className="h-[20px] text-[12px] font-normal text-black-1 w-full rounded-[2px] pl-2 focus:ring-0 focus:outline-none bg-[#D1DBE4]"
              name=""
              id=""
            />
          ) : (
            <p className="text-[14px] w-full flex justify-start items-center font-normal dark:text-white-1/80 text-black-1">
              Degens (13)
            </p>
          )}

          <button
            onClick={() => setSearch(!showSearch)}
            className="w-full flex justify-end items-center"
          >
            <LuSearch className="text-[20px] text-white-1" />
          </button>
        </div>

        {/* Scrollable user list */}
        <div className="w-full flex-grow overflow-y-auto px-4">
          <div className="w-full flex flex-col gap-4">
            {degonsData.map((item, index) => {
              return (
                <div key={index} className="w-full flex flex-col gap-2">
                  {/* type */}
                  <div className="w-full relative flex justify-center items-center">
                    <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
                      {item.type}
                    </p>
                    <div
                      className={`w-[5px] h-[28px] ${item.color} absolute -left-2`}
                    ></div>
                    <div
                      className={`w-[5px] h-[28px] ${item.color} absolute -right-2`}
                    ></div>
                  </div>
                  {/* attributes ---> */}
                  {item.attributes?.map((att, index) => {
                    return (
                      <div key={index} className="w-full gap-2 flex flex-col">
                        {/* attri title */}
                        <div className="w-full grid grid-cols-[40px,1fr]">
                          {att.icon}
                          <div className="w-full flex justify-start items-center">
                            <p
                              className={`text-[14px] font-semibold ${att.color}`}
                            >
                              {att.name}
                            </p>
                          </div>
                        </div>
                        {/* attri users */}
                        {att.users.map((us, index) => {
                          return (
                            <div
                              key={index}
                              className="w-full grid grid-cols-[40px,1fr]"
                            >
                              {us.icon}
                              <div className="w-full flex justify-start items-center">
                                {
                                  <CustomMenu
                                    size="!w-[180px]"
                                    trigger="click"
                                    options={userNameOptions}
                                    value={userNameMenuOption}
                                    setValue={setUserMenuOption}
                                    targetComponent={
                                      <p
                                        className={`text-[14px] font-normal dark:text-white-1/80 text-black-1`}
                                      >
                                        {us.name}
                                      </p>
                                    }
                                  />
                                }
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* user type details ---->  */}
      {useType === "chat-admin" && (
        <div className="w-full border-[1px] border-blue-1 flex flex-col justify-between px-4 py-3">
          <p className="text-[14px] underline font-normal dark:text-white-1/80 text-black-1">
            Role:
          </p>
          <p className="text-[14px] mt-3 font-normal dark:text-white-1/80 text-black-1">
            Project name
          </p>
          <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
            [Chat Admin]
          </p>
        </div>
      )}
      {useType === "platform-admin" && (
        <div className="w-full border-[1px] border-blue-1 gap-3 flex flex-col justify-between px-4 py-3">
          <p className="text-[14px] underline font-normal dark:text-white-1/80 text-black-1">
            General Admin
          </p>
          <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
            [manage users]
          </p>
          <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
            [News Post]
          </p>
        </div>
      )}
      {useType === "chat-owner" && (
        <div className="w-full border-[1px] border-blue-1 flex flex-col justify-between px-4 py-3">
          <p className="text-[14px] underline font-normal dark:text-white-1/80 text-black-1">
            Role:
          </p>
          <p className="text-[14px] mt-3 font-normal dark:text-white-1/80 text-black-1">
            Project name
          </p>
          <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
            [Chat Owner]
          </p>
        </div>
      )}
    </div>
  );
};

export default RightSideBar;

const degonsData = [
  {
    type: "<Online>",
    color: "bg-black-1 dark:bg-[#FEF652]",
    attributes: [
      {
        icon: (
          <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
            @
          </p>
        ),
        name: "<CHEF>",
        color: "text-[#004BFE]",
        users: [
          {
            icon: (
              <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
                @
              </p>
            ),
            name: "<[Username]>",
          },
        ],
      },

      {
        icon: (
          <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
            @
          </p>
        ),
        name: "<MODS>",
        color: "text-[#FF0000]",
        users: [
          {
            icon: <IoHammerOutline className="text-[14px] text-[#FF0000]" />,
            name: "<[Username]>",
          },
          {
            icon: <IoHammerOutline className="text-[14px] text-[#FF0000]" />,
            name: "<[Username]>",
          },
          {
            icon: <IoHammerOutline className="text-[14px] text-[#FF0000]" />,
            name: "<[Username]>",
          },
          {
            icon: <IoHammerOutline className="text-[14px] text-[#FF0000]" />,
            name: "<[Username]>",
          },
        ],
      },
      {
        icon: (
          <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
            @
          </p>
        ),
        name: "<SUBS>",
        color: "text-[#00DD4B]",
        users: [
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
        ],
      },
      {
        icon: (
          <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
            @
          </p>
        ),
        name: "<GUESTS>",
        color: "text-[#808080]",
        users: [
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
        ],
      },
    ],
  },
  {
    type: "<Offline>",
    color: "bg-black-1 dark:bg-[#BA0000]",
    attributes: [
      {
        icon: (
          <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
            @
          </p>
        ),
        name: "<CHEF>",
        color: "text-[#004BFE]",
        users: [
          {
            icon: (
              <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
                @
              </p>
            ),
            name: "<[Username]>",
          },
        ],
      },

      {
        icon: (
          <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
            @
          </p>
        ),
        name: "<MODS>",
        color: "text-[#FF0000]",
        users: [
          {
            icon: <IoHammerOutline className="text-[14px] text-[#FF0000]" />,
            name: "<[Username]>",
          },
          {
            icon: <IoHammerOutline className="text-[14px] text-[#FF0000]" />,
            name: "<[Username]>",
          },
          {
            icon: <IoHammerOutline className="text-[14px] text-[#FF0000]" />,
            name: "<[Username]>",
          },
          {
            icon: <IoHammerOutline className="text-[14px] text-[#FF0000]" />,
            name: "<[Username]>",
          },
        ],
      },
      {
        icon: (
          <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
            @
          </p>
        ),
        name: "<SUBS>",
        color: "text-[#00DD4B]",
        users: [
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
          {
            icon: <p></p>,
            name: "<[Username]>",
          },
        ],
      },
    ],
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
