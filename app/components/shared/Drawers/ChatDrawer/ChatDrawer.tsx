import React, { useState } from "react";
import { Drawer } from "@mantine/core";
import Image from "next/image";
import { IoHammerOutline } from "react-icons/io5";
import Chat from "./Chat";
import NewUser from "./NewUser";
import { LuSearch } from "react-icons/lu";
import CustomMenu from "../../CustomMenu";

interface Props {
  open: boolean;
  closeDrawer: any;
}

const ChatDrawer: React.FC<Props> = ({ open, closeDrawer }: Props) => {
  const [isNewUser, setNewUser] = useState(false);
  const [userNameMenuOption, setUserMenuOption] = useState("View Profile");
  const [showSearch, setSearch] = useState(true);
  // chat-admin
  // platform-admin
  // chat-owner
  // normal-user
  const [useType, setUserType] = useState("normal-user");

  return (
    <Drawer
      opened={open}
      onClose={closeDrawer}
      position="right"
      transitionProps={{
        transition: "slide-left",
        duration: 300,
        timingFunction: "linear",
      }}
      size="65rem"
      withCloseButton={false}
      overlayProps={{ backgroundOpacity: 0.4, blur: 1 }}
      classNames={{
        content:
          "!bg-[#D4DDE6] dark:!bg-[#1D252C] !h-[calc(100vh-106px)] !mt-[106px] !overflow-hidden",
        body: "!p-[8px]",
      }}
    >
      <div className="w-full h-full grid grid-cols-[30px,1fr]">
        {/* close drawer  */}
        <div className="w-full flex justify-start">
          <div
            onClick={closeDrawer}
            className="w-[20px] h-[340px] cursor-pointer relative"
          >
            <Image
              src="/assets/drawerBtn.svg"
              alt=""
              fill
              className="object-fill"
            />
          </div>
        </div>
        {/* content */}
        <div className="w-full p-2 dark:bg-[#0E161C] bg-white-1 grid grid-cols-[1fr,3.5fr,1fr]">
          {/* 1st col */}
          <div className="w-full bg-transparent dark:bg-black-1 flex flex-col gap-2">
            <div className="w-full flex border-[1px] border-blue-1 flex-col h-[calc(100vh-156px)]">
              {/* Fixed header */}
              <div className="w-full flex flex-col gap-2 px-4 py-2">
                <p className="text-[14px] font-normal dark:text-white-1 text-black-1">
                  {" "}
                  My Chats (13){" "}
                </p>
                {/* search  */}
                <div className="w-full grid grid-cols-[1fr,30px]">
                  <input
                    type="text"
                    className="h-[20px] text-[12px] font-normal text-black-1 w-full rounded-[2px] pl-2 focus:ring-0 focus:outline-none bg-[#D1DBE4]"
                    name=""
                    id=""
                  />
                  <div className="w-full flex justify-end items-center">
                    <button className="w-[18px] h-[18px] flex justify-center items-center bg-black-1">
                      <LuSearch className="text-[12px] text-white-1" />
                    </button>
                  </div>
                </div>
                {/* online  */}
                <div className="w-full relative flex justify-center items-center">
                  <p
                    className="text-[14px]
                   dark:text-blue-1 font-semibold text-blue-1"
                  >
                    {`<General Chat>`}
                  </p>
                  <div className="w-[4px] h-[28px] bg-[#004BFE] absolute -left-2"></div>
                  <div className="w-[4px] h-[28px] bg-[#004BFE] absolute -right-2"></div>
                </div>
              </div>

              {/* Scrollable user list */}
              <div className="w-full flex-grow overflow-y-auto px-4">
                {[
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 3, 4, 5, 6, 3, 2, 1, 3,
                  2, 3, 1, 2, 1, 1, 2,
                ].map((item, index) => {
                  return (
                    <div key={index} className="w-full ">
                      <div></div>
                      <p className="text-[14px] py-[4px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                        {chatName}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* 2nd col ----->  */}
          <div className="w-full p-3 flex flex-col">
            {/* top header  */}
            <div className="w-full bg-transparent dark:bg-[#1B2A35] px-4 h-[50px] flex justify-between items-center">
              <div className="flex px-2 py-[4px] bg-white-1 dark:bg-black-1 justify-center items-center gap-2">
                <p className="text-[14px] font-bold text-white-1 dark:text-white-1">
                  News
                </p>
                <p className="bg-[#FF0000] px-[8px] py-[0px] text-white-1">2</p>
              </div>
              <p className="text-[14px] font-bold text-white-1 dark:text-white-1">
                General [Chat]
              </p>
            </div>
            {isNewUser ? <NewUser /> : <Chat />}
          </div>
          {/* 3rd col ----> */}
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
                            <div
                              key={index}
                              className="w-full gap-2 flex flex-col"
                            >
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
        </div>
      </div>
    </Drawer>
  );
};

export default ChatDrawer;

const generalChat = "<General Chat>";
const chatName = "<Chat Name>";

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
