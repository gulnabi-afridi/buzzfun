import React, { useState } from "react";
import { Drawer } from "@mantine/core";
import Image from "next/image";
import Chat from "./Chat";
import NewUser from "./NewUser";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import SettingSidebar from "./Setting/SettingSidebar";
import ChatPermission from "./Setting/ChatPermission";
import Members from "./Setting/Members";
import Blacklist from "./Setting/Blacklist";
import Mods from "./Setting/Mods";
import Stickers from "./Setting/Stickers";
import ChatInformation from "./Setting/ChatInformation";

interface Props {
  open: boolean;
  closeDrawer: any;
}

const ChatDrawer: React.FC<Props> = ({ open, closeDrawer }: Props) => {
  const [isNewUser, setNewUser] = useState(true);
  const [showSetting, setSetting] = useState(false);
  const [showChatInformation, setChatInformation] = useState(false);
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
          "!bg-[#D4DDE6] dark:!bg-black-1 csm:dark:!bg-[#1D252C] !h-[calc(100vh-60px)] csm:!h-[calc(100vh-106px)] !mt-[60px] csm:!mt-[106px] !overflow-hidden",
        body: "!p-[8px]",
      }}
    >
      <div className="w-full h-full grid grid-cols-1 csm:grid-cols-[30px,1fr]">
        {/* close drawer  */}
        <div className="w-full hidden csm:flex justify-start">
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
        {/* close drawer for small screen  */}
        <button
          onClick={closeDrawer}
          className="w-full flex justify-start px-2"
        >
          <div className="w-full bg-[#D4DDE6] px-3 py-1 rounded-t-[4px]">
            <p className="text-[10px] underline font-normal text-black-1">
              / Close <span className="bg-yellow-1"> Chat </span>
            </p>
          </div>
        </button>
        {/* content */}
        <div className="w-full p-2 dark:bg-[#0E161C] gap-3 bg-white-1 grid grid-cols-1 cmd:grid-cols-[1fr,3.5fr,1fr]">
          {/* 1st col */}
          {showSetting ? (
            <SettingSidebar
              selectedSetting={settingOption}
              setSettingShow={setSetting}
              setSelectedSetting={setSettingOption}
            />
          ) : (
            <div className="cmd:block hidden">
              <LeftSideBar />
            </div>
          )}

          {/* 2nd col ----->  */}
          {showSetting ? (
            <>
              {settingOption === "Chat permissions" && <ChatPermission />}
              {settingOption === "Members" && <Members />}
              {settingOption === "Blacklist" && <Blacklist />}
              {settingOption === "Mods" && <Mods />}
              {settingOption === "Stickers" && <Stickers />}
            </>
          ) : (
            <div
              className={`w-full ${
                showChatInformation ? "p-0" : "p-0 csm:p-3"
              }  flex flex-col`}
            >
              {/* top header  */}
              <div
                className={`w-full ${
                  showChatInformation ? "hidden" : "flex"
                } bg-white-1 csm:bg-[#1B2A35] px-4 h-[50px] justify-between items-center`}
              >
                <div className="flex px-2 py-[4px] bg-white-1 dark:bg-black-1 justify-center items-center gap-2">
                  <p className="text-[14px] font-bold text-black-1 dark:text-white-1">
                    News
                  </p>
                  <p className="bg-[#FF0000] px-[8px] py-[0px] text-black-1 dark:text-white-1">
                    2
                  </p>
                </div>
                <p className="text-[14px] font-semibold text-black-1 csm:hidden block">
                  General [Chet]
                </p>
                <p className="text-[14px] csm:block hidden font-bold text-white-1 dark:text-black-1 csm:dark:text-white-1">
                  General [Chat]
                </p>
                <p className="text-[14px] csm:hidden block font-bold text-white-1 dark:text-black-1 csm:dark:text-white-1">
                  [My Chats]
                </p>
              </div>
              {isNewUser ? (
                <NewUser />
              ) : showChatInformation ? (
                <ChatInformation />
              ) : (
                <Chat
                  setChatInformation={setChatInformation}
                  setSetting={setSetting}
                />
              )}
            </div>
          )}

          {/* 3rd col ----> */}
          <div className="cmd:block hidden">
            <RightSideBar />
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ChatDrawer;
