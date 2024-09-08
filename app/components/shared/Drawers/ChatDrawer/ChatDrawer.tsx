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
import ChatHeader from "./ChatHeader";
import SettingTopHeader from "./Setting/SettingTopHeader";

interface Props {
  open: boolean;
  closeDrawer: any;
}

const ChatDrawer: React.FC<Props> = ({ open, closeDrawer }: Props) => {
  const [isNewUser, setNewUser] = useState(false);
  const [showSetting, setSetting] = useState(true);
  const [showChatInformation, setChatInformation] = useState(false);
  const [settingOption, setSettingOption] = useState("");

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
        <button onClick={closeDrawer} className="w-full csm:hidden block px-2">
          <div className="w-full flex justify-start bg-[#D4DDE6] px-3 py-1 rounded-t-[4px]">
            <p className="text-[10px] underline font-normal text-black-1">
              / Close <span className="bg-yellow-1"> Chat </span>
            </p>
          </div>
        </button>
        {/* content */}
        <div className="w-full px-2 py-0 csm:px-2 csm:py-2 dark:bg-[#0E161C] gap-0 csm:gap-3 bg-white-1 grid grid-cols-1 cmd:grid-cols-[1fr,3.5fr,1fr]">
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
              <div className="w-full csm:hidden block">
                <ChatHeader />
              </div>
              <div className="w-full ">
                <SettingTopHeader goBack={setSetting} />

                {settingOption === "Chat permissions" && <ChatPermission />}
                {settingOption === "Members" && <Members />}
                {settingOption === "Blacklist" && <Blacklist />}
                {settingOption === "Mods" && <Mods />}
                {settingOption === "Stickers" && <Stickers />}
              </div>
            </>
          ) : (
            <div
              className={`w-full ${
                showChatInformation ? "p-0" : "p-0 csm:p-3"
              }  flex flex-col`}
            >
              {/* top header  */}
              <ChatHeader />
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
