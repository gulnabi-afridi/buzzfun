"use client";

import React, { useState } from "react";
import Image from "next/image";
import ThemeSwitch from "../../ThemeSwitch";
import { IoCopyOutline } from "react-icons/io5";
import Link from "next/link";
import * as Icons from "../SVGs/Icons";
import { Menu } from "@mantine/core";
import { RiArrowDownSLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import CustomModal from "../Modals/CustomModal";
import { GoArrowUpRight } from "react-icons/go";
import { useDisclosure } from "@mantine/hooks";

const LeftNavigation: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  const [connectWalletOpened, { open: connectOpen, close: connectClose }] =
    useDisclosure(false);
  const [createWalletOpened, { open: createOpen, close: createClose }] =
    useDisclosure(false);
  const [connectWallet2Opened, { open: connect2Open, close: connect2Close }] =
    useDisclosure(false);

  return (
    <React.Fragment>
      <div className="w-[210px] z-50 xl:flex hidden fixed overflow-auto flex-col h-screen gap-4 justify-between bg-[#1D252C] border-r-[1px] border-[#2B2C39] p-4 left-0 top-0">
        <div className="gap-4 flex flex-col justify-start items-start ">
          <Link href="/" className="w-[177px] h-[40px] relative">
            <Image src="/assets/logo2.png" alt="" fill />
          </Link>
          <hr className="w-full h-[1px] border-[1px] border-[#2E2B36] lineSha" />
          {/* user profile */}
          <div className="flex justify-start items-center gap-3">
            <Image src="/assets/user2.png" alt="" width={39} height={39} />
            <div className="flex flex-col">
              <p className="text-[15px] font-normal text-white-1">DrBoom</p>
              <p className="text-[15px] font-normal text-blue-1">@drboom</p>
            </div>
          </div>
          {/* wallet address */}
          <div className="w-full bg-[#D3DCE5] rounded-[3px] p-3 flex justify-between items-center gap-1">
            <div className="flex flex-col">
              <p className="text-[12px] font-normal text-black-1">
                Wallet connected
              </p>
              <p className="text-[6px] font-normal text-black-1">
                0xEE3...FdF7474927D
              </p>
            </div>
            <button className="w-[14px] h-[14px] bg-black-1 flex justify-center items-center">
              <IoCopyOutline className="text-[10px] text-white-1" />
            </button>
          </div>
          <hr className="w-full h-[1px] border-[1px] border-[#2E2B36] lineSha" />
          <div className="w-full flex justify-center items-center">
            <div className="w-[120px] h-[20px] flex justify-center items-center relative">
              <Image src="/assets/downArrows2.svg" alt="" fill />
            </div>
          </div>
          {/* create a token  */}
          <button
            onClick={connectOpen}
            className="relative w-full rounded-[7px] flex justify-center items-center gap-3"
          >
            <div className="absolute inset-0 rounded-[7px] gradient-border"></div>
            <div className="relative z-10 w-full h-full rounded-[7px] p-4 bg-black-1 flex justify-center items-center gap-3">
              <div className="flex flex-col">
                <p className="text-[16px] text-white-1 font-normal">Create</p>
                <p className="text-[16px] font-normal text-black-1 bg-yellow-1 rounded-[4px] px-2">
                  Token
                </p>
              </div>
              <Image
                src="/assets/createAToken.svg"
                alt=""
                width={35}
                height={37}
              />
            </div>
          </button>

          <hr className="w-full h-[1px] border-[1px] border-[#2E2B36] lineSha" />
          {/* Navigate  */}
          <div className="w-full flex flex-col gap-4">
            <p className="text-[10px] font-normal text-white-1">NAVIGATE</p>
            {menuLinks.map((item, index) => {
              const isSelected = selectedItem === item.name;
              return (
                <Link
                  href={item.path}
                  key={index}
                  className={`w-full flex justify-start items-center gap-2 ${
                    isSelected ? "text-yellow-1" : "text-white-1"
                  }`}
                  onClick={() => setSelectedItem(item.name)}
                >
                  {React.cloneElement(item.icon, {
                    stroke: isSelected ? "#FEF652" : "#ffffff",
                  })}
                  <p
                    className={`text-[14px] font-normal ${
                      isSelected ? "text-yellow-1" : "text-white-1"
                    }`}
                  >
                    {item.name}
                  </p>
                </Link>
              );
            })}
          </div>
          {/* wallet address */}
          <div className="w-full bg-[#317C85] rounded-[3px] p-3 flex justify-between items-center gap-1">
            <div className="flex flex-col">
              <p className="text-[12px] font-normal text-black-1">
                Copy Referral Link
              </p>
              <p className="text-[6px] font-normal text-black-1">
                ID:20344647534362
              </p>
            </div>
            <button className="w-[14px] h-[14px] bg-black-1 flex justify-center items-center">
              <IoCopyOutline className="text-[10px] text-white-1" />
            </button>
          </div>
          <Link
            href="#"
            className={`w-full flex justify-start items-center gap-2`}
          >
            <Icons.Exclamation className="w-[22px] h-[21px]" />
            <p className={`text-[14px] text-white-1 font-normal `}>About</p>
          </Link>
          <hr className="w-full h-[1px] border-[1px] border-[#2E2B36] lineSha" />
          {/* Network ---> */}
          <div className="w-full flex justify-start items-center gap-2">
            <p className="text-[12px] font-normal text-white-1">Network</p>
            <Menu
              classNames={{
                dropdown:
                  "dark:!bg-black-1 !bg-white-2 !border-none min-w-[80px]",
                item: "text-black-1 dark:text-white-1 text-[14px] font-normal hover:bg-white-1/30",
              }}
              withArrow
            >
              <Menu.Target>
                <button className="flex gap-1 px-1 justify-center items-center bg-black-1">
                  <p className="text-[14px] font-normal text-white-1">All</p>
                  <RiArrowDownSLine className="text-[16px] text-white-1" />
                </button>
              </Menu.Target>
              {/* Menu dropdown */}
              <Menu.Dropdown>
                <div className="flex flex-col">
                  {newtworks.map((item, index) => (
                    <Menu.Item className={`relative `} key={index}>
                      <div className="relative px-2">{item}</div>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Dropdown>
            </Menu>
          </div>
          <div className="w-full flex justify-start items-center">
            <p className="text-[14px] text-white-1 font-normal">Mode: </p>
            <ThemeSwitch />
          </div>
        </div>
        {/* platform version  */}
        <div className="w-full flex flex-col gap-5">
          {/* Disconnect button ---->  */}
          <button className="flex justify-start gap-1 items-center">
            <LuLogOut className="text-white-1 text-[20px]" />
            <p className="text-white-1 text-[14px] font-normal">Disconnect</p>
          </button>
          <div className="relative w-full min-h-[44px] flex justify-center items-center rounded-[11px]">
            <div className="absolute inset-0 rounded-[11px] gradient-border"></div>
            <div className="relative z-10 w-full rounded-[11px] h-full bg-[#0E161C] flex justify-center items-center">
              <p className="text-[9px] font-normal text-[#595959]">
                Platform version: 69.01
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MDOAL FOR CONNECT WALLET -------------->  */}
      {/* 1 Connect Wallet Modal  */}
      <CustomModal open={connectWalletOpened} onClose={connectClose} size="md">
        <div className="w-full flex p-0 csm:p-3 flex-col justify-center items-center">
          {/* header  */}
          <div className="flex justify-start items-center gap-2">
            <button className="text-white-1 dark:bg-blue-1 uppercase hover:opacity-80 font-normal text-[12px] bg-black-1 px-2 py-[2px]">
              Connect
            </button>
            <p className="text-[12px] uppercase font-normal dark:text-white-1 text-black-1">
              with us
            </p>
          </div>
          <div className="w-full grid my-10 grid-cols-2 gap-3">
            {/* create a wallet */}
            <button
              onClick={() => {
                createOpen();
                connectClose();
              }}
              className="w-full cursor-pointer border-[1px] border-black-1 duration-100 hover:border-purple-1 hover:dark:border-purple-1 dark:border-white-1 dark:bg-[#1D252C] bg-white-1 p-2 rounded-[3px]"
            >
              <div className="w-full flex justify-between items-start">
                <p className="text-[12px] font-normal dark:text-white-1 text-black-1 uppercase">
                  <span className="bg-black-1 dark:bg-white-1 text-white-1 dark:text-black-1 px-[2px]">
                    Create
                  </span>{" "}
                  a <br /> wallet
                </p>
                <div
                  className={`w-[12px] bg-black-1 dark:bg-white-1 flex justify-center items-center h-[12px] `}
                >
                  <GoArrowUpRight
                    className={`text-white-1 dark:text-black-1 text-[11px] `}
                  />
                </div>
              </div>
              <p className="text-[12px] mt-5 font-normal dark:text-white-1 text-black-1 uppercase">
                If you don’t have one we can make one for you.
              </p>
            </button>
            {/* connect a wallet */}
            <button
              onClick={() => {
                connect2Open();
                createClose();
                connectClose();
              }}
              className="w-full cursor-pointer border-[1px] border-black-1 dark:border-white-1 hover:border-purple-1 duration-100 hover:dark:border-purple-1 dark:bg-[#1D252C] bg-white-1 p-2 rounded-[3px]"
            >
              <div className="w-full flex justify-between items-start">
                <p className="text-[12px] font-normal text-black-1 dark:text-white-1 uppercase">
                  <span className="px-[2px] text-white-1 dark:text-black-1 bg-black-1 dark:bg-white-1">
                    Connect
                  </span>{" "}
                  a <br /> wallet
                </p>
                <div
                  className={`w-[12px] dark:bg-white-1 bg-black-1 flex justify-center items-center h-[12px] `}
                >
                  <GoArrowUpRight
                    className={`text-white-1 dark:text-black-1 text-[11px] `}
                  />
                </div>
              </div>
              <p className="text-[12px] mt-6 font-normal dark:text-white-1 text-black-1 uppercase">
                Connect a wallet you already own.
              </p>
            </button>
          </div>
          {/*  */}
          <button
            onClick={connectClose}
            className="text-black-1 hover:text-black-1 hover:dark:text-yellow-1 duration-150 dark:text-white-1 font-normal text-[12px] uppercase"
          >
            \ pussy out
          </button>
        </div>
      </CustomModal>
      {/* 2) Create Wallet Modal */}
      <CustomModal open={createWalletOpened} onClose={createClose} size="xs">
        <div className="w-full px-3 py-8 flex justify-center items-center">
          <div className="w-full max-w-[230px] flex flex-col justify-center items-center">
            {/* header  */}
            <div className="flex justify-start items-center gap-2">
              <button className="text-white-1 dark:text-black-1 uppercase hover:opacity-80 font-normal text-[12px] dark:bg-white-1 bg-black-1 px-2 py-[2px]">
                create
              </button>
              <p className="text-[12px] uppercase dark:text-white-1 font-normal text-black-1">
                A Wallet
              </p>
            </div>
            {/* smal wallet */}
            <div className="w-full  flex justify-start gap-3 items-center font-normal  my-8 px-2 py-2 rounded-[2px] border-[1px] border-blue-1">
              <Image src="/assets/wallet.svg" alt="" width={28} height={28} />
              <p className="text-[12px] dark:text-white-1 uppercase">
                Smart wallet
              </p>
            </div>
            {/*  */}
            <button
              onClick={() => {
                createClose();
                connectOpen();
              }}
              className="text-black-1 hover:text-black-1 hover:dark:text-yellow-1 dark:text-white-1 font-normal text-[12px] uppercase"
            >
              \ go back
            </button>
          </div>
        </div>
      </CustomModal>

      {/* connect Wallet Modal  */}

      <CustomModal
        open={connectWallet2Opened}
        onClose={connect2Close}
        size="xs"
      >
        <div className="w-full flex py-8 px-3 flex-col justify-center items-center">
          {/* header  */}
          <div className="flex justify-start items-center gap-2">
            <button className="text-white-1 dark:text-black-1 dark:bg-white-1 uppercase font-normal text-[12px] bg-black-1 px-2 py-[2px]">
              Connect
            </button>
            <p className="text-[12px] uppercase font-normal text-black-1 dark:text-white-1">
              Your Wallet
            </p>
          </div>
          <div className="w-full mt-8 max-w-[230px] flex flex-col gap-5">
            {connectWallet.map((item, index) => {
              return (
                <button
                  key={index}
                  className="w-full flex justify-start px-3 items-center gap-3 bg-white-1 hover:bg-transparent dark:bg-[#1D252C] py-[10px] uppercase rounded-[2px] border-[1px] hover:dark:bg-black-1 hover:dark:border-yellow-1 dark:border-white-1 border-blue-1"
                >
                  <Image src={item.img} width={28} height={28} alt="" />
                  <p className="text-[12px] dark:text-white-1 text-black-1 font-normal">
                    {" "}
                    {item.name}
                  </p>
                </button>
              );
            })}
            {/* button */}
            <button
              onClick={() => {
                connect2Close();
                connectOpen();
              }}
              className="px-4 w-full flex justify-center hover:dark:text-yellow-1 hover:text-black-1 items-center hover:opacity-80 py-[6px] text-[10px] font-normal text-black-1 dark:text-white-1 rounded-[5px] bg-transparent dark:bg-black-1"
            >
              / Go Back
            </button>
          </div>
        </div>
      </CustomModal>
    </React.Fragment>
  );
};

const menuLinks = [
  {
    path: "/",
    name: "Home",
    icon: <Icons.Home className="w-[15px] h-[16px]" />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <Icons.Profile className="w-[21px] h-[21px]" />,
  },
  {
    path: "/create-a-coin",
    name: "Watchlist",
    icon: <Icons.Watchlist className="w-[22px] h-[21px]" />,
  },
  {
    path: "#",
    name: "Buzz Engage",
    icon: <Icons.Buzz className="w-[22px] h-[21px]" />,
  },
  {
    path: "#",
    name: "Leaderboard",
    icon: <Icons.Leaderboard className="w-[22px] h-[21px]" />,
  },
];

const newtworks = ["Tron", "B2B", "B3BC"];

const connectWallet = [
  {
    img: "/assets/phantom.svg",
    name: "Phantom",
  },
  {
    name: "metamask",
    img: "/assets/metaMask.svg",
  },
  {
    name: "Coinbase",
    img: "/assets/coinBase.svg",
  },
  {
    name: "WalletConnet",
    img: "/assets/walletConnection.svg",
  },
  {
    name: "Smart Wallet",
    img: "/assets/smartWallet.svg",
  },
];

export default LeftNavigation;
