"use client";

import React, { useState } from "react";
import { Drawer } from "@mantine/core";
import * as Icons from "../shared/SVGs/Icons";
import Image from "next/image";
import CustomMenu from "../shared/CustomMenu";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import Link from "next/link";
import { LuChefHat } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import ThemeSwitch from "../ThemeSwitch";

interface Props {
  open: boolean;
  close: any;
}

const LeftNavigation: React.FC<Props> = ({ open, close }: Props) => {
  const [network, setNetwork] = useState("");
  const [selectedItem, setSelectedItem] = useState("Home");

  return (
    <Drawer
      opened={open}
      onClose={close}
      overlayProps={{ backgroundOpacity: 0, blur: 0 }}
      withCloseButton={false}
      classNames={{
        content:
          " !bg-black-1 !p-0 !overflow-auto !h-[calc(100vh-60px)] !mt-[60px]",
        body: "!p-0 !h-full",
      }}
    >
      <div className="w-full px-3 overflow-auto pt-3 gap-3 pb-5 !h-full flex flex-col justify-between items-center">
        <div className="w-full flex flex-col">
          {/* close drawer  */}
          <button
            onClick={close}
            className="w-full flex px-3 py-[5px] justify-between bg-[#D4DDE6] items-center rounded-t-[15px]"
          >
            <p className="text-[10px] font-normal text-black-1">
              / Close <span className="bg-yellow-1"> MENU </span>
            </p>
          </button>
          <div className="w-full gap-3 flex py-4 flex-col">
            <div className="w-full flex justify-between gap-3">
              {/* profile */}
              <div className="flex justify-start items-center gap-3">
                <Image src="/assets/user2.png" alt="" width={39} height={39} />
                <div className="flex flex-col">
                  <p className="text-[15px] font-normal text-white-1">DrBoom</p>
                  <p className="text-[15px] font-normal text-yellow-1">
                    @drboom
                  </p>
                </div>
              </div>
              {/* wallet address */}
              <div className=" bg-[#D3DCE5] rounded-[3px] p-3 flex justify-between items-center gap-3">
                <div className="flex flex-col">
                  <p className="text-[14px] uppercase font-normal text-black-1">
                    Wallet connected
                  </p>
                  <p className="text-[12px] font-normal text-black-1">
                    0xEE3...FdF7474927D
                  </p>
                </div>
                <button className="min-w-[16px] min-h-[16px] bg-black-1 flex justify-center items-center">
                  <IoCopyOutline className="text-[14px] text-white-1" />
                </button>
              </div>
            </div>
            {/* chose a newtwork ---> */}
            <div className="w-full flex justify-between items-center">
              <p className="text-[16px] font-normal text-white-1">
                Choose a Network
              </p>
              {/* Network ---> */}
              <CustomMenu
                targetComponent={
                  <button className="flex gap-1 px-1 rounded-[4px] justify-center items-center bg-purple-1">
                    <p className="text-[14px] font-normal text-white-1">All</p>
                    <RiArrowDownSLine className="text-[16px] text-white-1" />
                  </button>
                }
                options={newtworks}
                value={network}
                size="!min-w-[120px]"
                trigger="click"
                setValue={setNetwork}
              />
            </div>
            {/* links ---> */}
            <div className="w-full flex flex-col gap-3">
              {menuLinks.map((item, index) => {
                const isSelected = selectedItem === item.name;
                return (
                  <Link
                    href={item.path}
                    key={index}
                    className={`w-full h-[40px] px-2 rounded-[4px] flex justify-start items-center gap-2 ${
                      isSelected ? "bg-purple-1" : "bg-transparent"
                    }`}
                    onClick={() => {
                      setSelectedItem(item.name);
                      close();
                    }}
                  >
                    {React.cloneElement(item.icon, {
                      stroke: isSelected ? "#FEF652" : "#ffffff",
                    })}
                    <p
                      className={`text-[16px] font-normal ${
                        isSelected ? "text-yellow-1" : "text-white-1"
                      }`}
                    >
                      {item.name}
                    </p>
                  </Link>
                );
              })}
            </div>
            {/* postions  */}
            <div className="flex !z-10 px-2 py-1 rounded-[6px] justify-start items-center gap-2">
              <p className="px-[8px] text-[16px] font-normal text-white-1 rounded-[4px] bg-[#449C6E] py-[1px]">
                1
              </p>
              <p className="text-[16px] font-normal text-white-1">Positions</p>
            </div>
            {/* Disconnect button ---->  */}
            <button className="flex justify-start h-[40px] px-2 gap-1 items-center">
              <LuLogOut className="text-red-1 text-[24px]" />
              <p className="text-red-1 text-[16px] font-normal">Disconnect</p>
            </button>
            <div className="w-full px-2 gap-2 flex justify-start items-center">
              <p className="text-[16px] text-white-1 font-normal">Mode: </p>
              <ThemeSwitch />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          {/* create token ----> */}
          <div className="w-full rounded-[5px] py-3 bg-yellow-1 flex justify-center items-center gap-4">
            <p className="text-[29px] text-black-1 font-normal">
              Create{" "}
              <span className="bg-black-1 text-yellow-1 rounded-[6px] px-3 py-[2px]">
                {" "}
                Token
              </span>
            </p>
            <LuChefHat className="text-[32px] text-black-1" />
          </div>
          {/* copy referral link ----> */}
          <div className="w-full bg-[#317C85] flex justify-between items-center py-3 px-4 rounded-[5px]">
            <p className="text-[10px] text-black-1 font-normal">
              Copy Referral Link
            </p>
            <button className="w-[22px] h-[22px] bg-black-1 flex justify-center items-center">
              <IoCopyOutline className="text-[18px] font-normal text-white-1" />
            </button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default LeftNavigation;

const menuLinks = [
  {
    path: "/",
    name: "Home",
    icon: <Icons.Home className="w-[18px] h-[17px]" />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <Icons.Profile className="w-[28px] h-[28px]" />,
  },
  {
    path: "/create-a-coin",
    name: "Watchlist",
    icon: <Icons.Watchlist className="w-[24px] h-[24px]" />,
  },
  {
    path: "#",
    name: "Buzz Engage",
    icon: <Icons.Buzz className="w-[25px] h-[25px]" />,
  },
  {
    path: "#",
    name: "Leaderboard",
    icon: <Icons.Leaderboard className="w-[25px] h-[25px]" />,
  },
];

const newtworks = ["Tron", "B2B", "B3BC"];
