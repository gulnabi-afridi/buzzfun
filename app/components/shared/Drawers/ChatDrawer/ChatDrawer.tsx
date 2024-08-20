import React, { useState } from "react";
import { Drawer } from "@mantine/core";
import Image from "next/image";
import { IoHammerOutline } from "react-icons/io5";
import Chat from "./Chat";
import NewUser from "./NewUser";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import SettingSidebar from "./Setting/SettingSidebar";
import ChatPermission from "./Setting/ChatPermission";


interface Props {
  open: boolean;
  closeDrawer: any;
}

const ChatDrawer: React.FC<Props> = ({ open, closeDrawer }: Props) => {
  const [isNewUser, setNewUser] = useState(false);
  const [showSetting, setSetting] = useState(false);
  const [settingOption, setSettingOption] = useState("Chat permissions");

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
      size="69rem"
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
        <div className="w-full p-2 dark:bg-[#0E161C] gap-3 bg-white-1 grid grid-cols-[1fr,3.5fr,1fr]">
          {/* 1st col */}
          {showSetting ? (
            <SettingSidebar
              selectedSetting={settingOption}
              setSelectedSetting={setSettingOption}
            />
          ) : (
            <LeftSideBar />
          )}

          {/* 2nd col ----->  */}
          {showSetting ? (
            <ChatPermission/>
          ) : (
            <div className="w-full p-3 flex flex-col">
              {/* top header  */}
              <div className="w-full bg-transparent dark:bg-[#1B2A35] px-4 h-[50px] flex justify-between items-center">
                <div className="flex px-2 py-[4px] bg-white-1 dark:bg-black-1 justify-center items-center gap-2">
                  <p className="text-[14px] font-bold text-white-1 dark:text-white-1">
                    News
                  </p>
                  <p className="bg-[#FF0000] px-[8px] py-[0px] text-white-1">
                    2
                  </p>
                </div>
                <p className="text-[14px] font-bold text-white-1 dark:text-white-1">
                  General [Chat]
                </p>
              </div>
              {isNewUser ? <NewUser /> : <Chat setSetting={setSetting} />}
            </div>
          )}

          {/* 3rd col ----> */}
          <RightSideBar />
        </div>
      </div>
    </Drawer>
  );
};

export default ChatDrawer;

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
