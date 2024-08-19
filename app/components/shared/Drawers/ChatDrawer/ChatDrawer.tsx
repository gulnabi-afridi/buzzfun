import { Drawer } from '@mantine/core';
import React from 'react'
import Image from 'next/image';
import { LuSearch } from 'react-icons/lu';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FaRegFlag } from 'react-icons/fa6';
import { IoHammerOutline } from 'react-icons/io5';


interface Props {
    open: boolean;
    closeDrawer: any;
  }

const ChatDrawer:React.FC<Props> = ({open,closeDrawer}:Props) => {
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
            body:'!p-[8px]'
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
                   dark:text-white-1 font-semibold text-blue-1"
                    >
                      {generalChat}
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
                <div className="flex px-2 py-[1px] bg-transparent dark:bg-white-1 justify-center items-center gap-2">
                  <p className="text-[14px] font-bold text-black-1">News</p>
                  <p className="bg-[#FF0000] px-[8px] py-[0px] text-white-1">
                    2
                  </p>
                </div>
                <p className="text-[14px] font-bold dark:text-white-1 text-black-1">
                  General [Chat]
                </p>
              </div>
              {/* token name ---> */}
              <div className="w-full bg-[#D4DDE6] h-[40px] px-4 flex justify-between items-center ">
                <div className="flex justify-center items-center gap-3">
                  <Image
                    src="/assets/token3.svg"
                    alt=""
                    width={26}
                    height={26}
                  />
                  <p className="text-[14px] font-semibold text-black-1">
                    Pink Hood Froglicker | $Froglic [chat]
                  </p>
                </div>
                <HiOutlineDotsHorizontal className="text-[20px] cursor-pointer text-black-1" />
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
                          <p className="text-[14px] font-semibold text-[#004BFE]">
                            {item.userName}
                          </p>
                          <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
                            {item.roloe}
                          </p>
                        </div>
                        <div className="w-full pl-3 items-start gap-2 flex flex-col">
                          <p className="text-[12px] font-normal dark:text-white-1/80 text-black-1">
                            {item.message}
                          </p>
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum passages, and more recently
                    with desktop publishing software like{" "}
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
            {/* 3rd col ----> */}
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex border-[1px] border-blue-1 flex-col h-[calc(100vh-285px)]">
                {/* Fixed header */}
                <div className="w-full flex flex-col gap-2 px-4 py-2">
                  {/* search bar  */}
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">
                      Degens (13)
                    </p>
                    <LuSearch className="text-[22px] dark:text-white-1/80 text-black-1" />
                  </div>
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
                                        <p
                                          className={`text-[14px] font-normal dark:text-white-1/80 text-black-1`}
                                        >
                                          {us.name}
                                        </p>
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
              {/*  */}
              <div className="w-full h-[120px] border-[1px] border-blue-1 flex flex-col justify-between p-2">
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
            </div>
          </div>
        </div>
      </Drawer>
  )
}

export default ChatDrawer


const generalChat = "<General Chat>";
const chatName = "<Chat Name>";


const messageData = [
    {
      serNo: "23:16",
      userName: "<Username>",
      roloe: "[Role]",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
      isDate: true,
    },
    {
      serNo: "23:16",
      userName: "<Username>",
      roloe: "[Role]",
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

  const degonsData = [
    {
      type: "<Online>",
      color: "bg-black-1 dark:bg-[#FEF652]",
      attributes: [
        {
          icon: <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">@</p>,
          name: "<CHEF>",
          color: "text-[#004BFE]",
          users: [
            {
              icon: <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">@</p>,
              name: "<[Username]>",
            },
          ],
        },
  
        {
          icon: <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">@</p>,
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
          icon: <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">@</p>,
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
          icon: <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">@</p>,
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
          icon: <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">@</p>,
          name: "<CHEF>",
          color: "text-[#004BFE]",
          users: [
            {
              icon: <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">@</p>,
              name: "<[Username]>",
            },
          ],
        },
  
        {
          icon: <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">@</p>,
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
          icon: <p className="text-[14px] font-normal dark:text-white-1/80 text-black-1">@</p>,
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