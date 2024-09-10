"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { GoArrowUpRight } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineStarBorder } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import CustomModal from "../Modals/CustomModal";
import { RxHamburgerMenu } from "react-icons/rx";
import * as Icons from "../SVGs/Icons";
import LeftNavigation from "../../ForSmallScreen/LeftNavigation";
import ChatDrawer from "../Drawers/ChatDrawer/ChatDrawer";
import { PiBagSimple } from "react-icons/pi";
import { FaFilter } from "react-icons/fa6";
import { IoCaretUp, IoEyeOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";

const Navibar: React.FC = () => {
  // states ------------------------>

  const [chatDrawer, { open: openChatDrawer, close: closeChatDrawer }] =
    useDisclosure(false);
  const [activeModal, { open: openActiveModal, close: closeActiveModal }] =
    useDisclosure(false);
  const [
    watchListModal,
    { open: openWatchListModal, close: closeWatchListModal },
  ] = useDisclosure(false);
  const [
    navigationDrawer,
    { open: openNavigationDrawer, close: closeNavigationDrawer },
  ] = useDisclosure(false);

  return (
    <React.Fragment>
      <div className="w-full dark:bg-[#151D23] csm:dark:bg-[#201e26] bg-white-2 px-5 flex justify-between items-center h-[65px]">
        {/* left portion */}
        <div className="flex justify-center items-center gap-6">
          {/* for large screen */}
          <div className="justify-center xl:flex hidden items-center gap-3">
            {socialLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.path}
                  className="w-[28px] hover:opacity-80 h-[28px] rounded-[1px] flex justify-center items-center bg-blue-1"
                >
                  <Image src={item.name} alt="" width={20} height={22}></Image>
                </Link>
              );
            })}
          </div>
          {/* logo for small screen */}
          <Link
            href="/"
            className="w-[177px] xl:hidden block h-[40px] relative"
          >
            <Image src="/assets/logo2.png" alt="" fill />
          </Link>
          <div className="bg-white-1 2xl:flex hidden justify-center items-center px-2 py-1 navibarCardSh rounded-[2px] gap-2">
            <Image
              src="/assets/green.svg"
              className="object-fill"
              alt=""
              width={22}
              height={22}
            />
            <Image
              src="/assets/coinIcon.svg"
              className="object-fill"
              alt=""
              width={19}
              height={19}
            />
            <p className="font-montserrat text-black-1 text-[10px] font-normal">
              Rambo <span className="font-semibold"> bought</span> 0.1 ETH of X
              coin{" "}
            </p>
            <Image
              src="/assets/coin.svg"
              alt=""
              className="object-fill"
              width={19}
              height={19}
            />
          </div>
        </div>

        {/* middle portion  */}
        <div className="relative md:block hidden w-[250px] 3xl:w-[460px] h-[35px]">
          <div className="absolute inset-0 before:right-[0px] before:rounded-[6px] before:bottom-[-0.65px] gradient-border"></div>
          <div className="relative z-10 w-full h-full rounded-[6px] bg-[#1A1721] grid grid-cols-[30px,1fr,30px]">
            <div className="flex justify-center items-center w-full">
              <Image src="/assets/search.svg" alt="" width={12} height={12} />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full focus:outline-none rounded-[6px] bg-[#1A1721] hover:outline-none text-[11px] font-normal text-[#787B99] h-full"
              name=""
              id=""
            />
            <div className="w-full flex justify-center items-center">
              <RxCross2 className="text-[20px] text-[#787B99]" />
            </div>
          </div>
        </div>

        {/* right portion */}
        <div className="flex justify-center items-center gap-3">
          <div className="relative hidden lg:flex">
            <div className="absolute inset-0 before:left-[-.4px] before:right-[-.4px] before:rounded-[6px] before:bottom-[-0.45px] gradient-border"></div>
            <div className="flex justify-center rounded-[6px] z-10 navibarCardSh px-2 py-1 bg-[#1A1721] items-center gap-4">
              <p className="text-[10px] uppercase font-normal text-white-1">
                {" "}
                <span className="bg-blue-1 uppercase p-[2px] mr-1">
                  {" "}
                  $BUZZ airdrop{" "}
                </span>{" "}
                Leaderboard S1
              </p>
              <Image
                src="/assets/coin.svg"
                alt=""
                className="object-fill"
                width={19}
                height={19}
              />
            </div>
          </div>
          {/* postions  */}
          <button onClick={openActiveModal} className="relative hidden md:flex">
            <div className="absolute inset-0 before:left-[-.8px] before:right-[-.7px] before:rounded-[6px] before:bottom-[-1.5px] gradient-border"></div>
            <div className="flex !z-10 px-1 py-1 bg-[#1A1721] rounded-[6px] justify-center items-center gap-1">
              <p className="px-[5px] text-[10px] font-normal text-white-1 rounded-[4px] bg-[#449C6E] py-[1px]">
                1
              </p>
              <p className="text-[12px] font-normal text-white-1">Positions</p>
            </div>
          </button>
          {/* favorite --->  */}
          <button
            onClick={openWatchListModal}
            className="w-[35px] h-[35px] flex relative"
          >
            <div className="absolute inset-0 before:left-[-.8px] before:right-[-.8px] before:rounded-[6px] before:bottom-[-1.5px] gradient-border"></div>
            <div className="bg-[#1A1721] z-10 rounded-[6px] w-full h-full flex justify-center items-center">
              <MdOutlineStarBorder className="text-[#EBFF00C4] text-[24px]" />
            </div>
          </button>
          {/* chat -----> */}
          <div className="w-[35px] h-[35px] flex relative">
            <div className="absolute inset-0 before:left-[-.8px] before:right-[-.8px] before:rounded-[6px] before:bottom-[-1.5px] gradient-border"></div>
            <button
              onClick={openChatDrawer}
              className="bg-[#1A1721] z-10 rounded-[6px] w-full h-full flex justify-center items-center"
            >
              <BsChatLeftText className="text-[#787B99] text-[20px]" />
            </button>
          </div>
          {/* Notification -----> */}
          <Menu
            classNames={{
              dropdown:
                "dark:!bg-[#336FFE] !bg-white-2 dark:!border-[.2px] dark:!border-white-1/20 max-w-[309px]",
              item: "!text-black-1 dark:text-white-1 text-[14px] font-normal hover:!bg-blue-1/20",
              arrow: "!border-t-white-1/20  !border-l-white-1/20",
            }}
            withArrow
          >
            <Menu.Target>
              <div className="w-[35px] h-[35px] flex relative">
                <div className="absolute inset-0 before:left-[-.8px] before:right-[-.8px] before:rounded-[6px] before:bottom-[-1.5px] gradient-border"></div>
                <button className="bg-[#1A1721] z-10 rounded-[6px] w-full h-full flex justify-center items-center">
                  <div className="relative flex">
                    <IoMdNotificationsOutline className="text-[#787B99] text-[20px]" />
                    <div className="w-[7px] absolute top-0 right-0 h-[7px] bg-red-1 justify-center items-center rounded-full flex">
                      <p className="text-[4px] text-center mt-[1px] font-normal text-white-1 ">
                        1
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </Menu.Target>
            {/* Menu dropdown */}
            <Menu.Dropdown>
              <div className="w-full p-1 gap-2 flex flex-col">
                {/*  */}
                <div className="w-full h-[25px] relative after:min-w-[4px] after:h-full after:absolute after:right-0 after:top-0 after:bg-black-1 before:absolute before:min-w-[4px] before:h-full before:bg-black-1 before:left-0 before:top-0 text-[14px] flex justify-center items-center font-normal text-black-1 bg-[#1957EA]">
                  Notifications
                </div>
                {/*  */}
                <div className="w-full bg-[#1957EA] p-[4px]">
                  <div className="w-full bg-[#336FFE] gap-2 p-1 flex flex-col">
                    <p className="text-[10px] text-black-1 font-normal">
                      {pattern1}{" "}
                    </p>
                    <p className="text-[10px] text-black-1 font-normal">
                      Would you like to accept this transfer?
                    </p>
                  </div>
                  {/* buttons ---->  */}
                  <div className="w-full grid grid-cols-2 h-[33px] gap-7">
                    <button className="w-full h-full flex bg-black-1/30 justify-center items-center text-[14px] font-normal text-white-1">
                      Refuse
                    </button>
                    <button className="w-full h-full flex bg-black-1 justify-center items-center text-[14px] font-normal text-white-1">
                      Accept
                    </button>
                  </div>
                </div>
                <hr className="w-full border-[1px] border-black-1" />
                {/*  */}
                <div className="flex px-4 relative py-1 after:min-w-[4px] after:h-full after:absolute after:right-0 after:top-0 after:bg-[#1957EA] before:absolute before:min-w-[4px] before:h-full before:bg-[#1957EA] before:left-0 before:top-0 justify-center items-center gap-2">
                  <Image src="/assets/vip.svg" alt="" width={30} height={30} />
                  <p className="text-[10px] text-black-1 font-normal">
                    You have been tagged in Pink Hood Froglicker chat.{" "}
                    <span className="underline"> See Tag</span>.
                  </p>
                </div>
              </div>
            </Menu.Dropdown>
          </Menu>
          {/* hamburger  */}
          <button
            onClick={openNavigationDrawer}
            className="w-[35px] lg:hidden h-[35px] bg-[#EF7216] rounded-[2px] flex justify-center items-center"
          >
            <RxHamburgerMenu className="text-[22px] text-black-1" />
          </button>
        </div>
      </div>

      {/* active user modal -------------> */}
      <CustomModal size="40rem" open={activeModal} onClose={closeActiveModal}>
        <div className="w-full relative overflow-auto flex flex-col bg-black-1 px-1 csm:px-3">
          <div className="w-full min-w-[420px] csm:min-w-auto flex flex-col">
            {/* modal header ---> */}
            <div className="w-full border-b-[1px] border-white-1/20 pb-3 flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <PiBagSimple className="text-[#808080] text-[14px]" />
                <p className="text-[12px] font-normal text-yellow-1">Active</p>
                <p className="text-[12px] font-normal text-[#808080]">
                  Active Degenerations
                </p>
              </div>
              <button
                onClick={closeActiveModal}
                className="w-[24px] h-[24px] flex justify-center items-center border-[1px] border-white-1/10 rounded-[2px]"
              >
                <RxCross2 className="text-[16px] cursor-pointer text-blue-1" />
              </button>
            </div>
            {/* table header  */}
            <div className="w-full border-b-[1px] border-white-1/20 py-3 grid grid-cols-[1.2fr,1fr,1fr,1fr]">
              {/* token name */}
              <div className="w-full flex justify-between items-center">
                <p className="text-[12px] font-normal text-white-1">Token</p>
                <FaFilter className="text-white-1 cursor-pointer text-[16px]" />

                {/* <Menu
                  classNames={{
                    dropdown: `dark:!bg-[#336FFE] !z-50 !p-2 !bg-white-2 dark:!border-[.2px] dark:!border-white-1/20`,
                    item: "!text-black-1 dark:text-white-1 text-[14px] font-normal hover:!bg-transparent",
                    arrow: "!border-t-white-1/20 !border-l-white-1/20",
                  }}
                  trigger="click"
                  withArrow
                >
                  <Menu.Target>
                    <FaFilter className="text-white-1 cursor-pointer text-[16px]" />
                  </Menu.Target>

                  <Menu.Dropdown>
                    <div className="w-full !z-50 flex flex-col">
                      {filterOptions.map((option: any) => (
                        <Menu.Item
                          className={`relative w-full transition-colors duration-200 ${
                            filter === option
                              ? "!bg-[#1957EA] font-semibold before:absolute before:h-full before:inset-y-0 before:left-0 before:w-[5px] before:bg-black-1 after:absolute after:h-full after:inset-y-0 after:right-0 after:w-[5px] after:bg-black-1"
                              : "hover:!bg-blue-1/20"
                          }`}
                          key={option}
                          onClick={() => setFilter(option)}
                        >
                          <div className="py-[2px] w-full gap-2 px-4 flex justify-between items-center">
                            <p>{option.name}</p>
                            {option.icon}
                          </div>
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Dropdown>
                </Menu> */}
              </div>
              {/* amount  */}
              <div className="w-full flex justify-end items-center gap-1">
                <p className="text-[12px] font-normal text-white-1">
                  Amount USD
                </p>
                <div className="flex flex-col">
                  <IoCaretUp className="text-purple-1 cursor-pointer text-[12px]" />
                  <IoCaretUp className="text-purple-1 cursor-pointer rotate-180 text-[12px]" />
                </div>
              </div>
              {/* Liquidity  */}
              <div className="w-full flex justify-end items-center gap-1">
                <p className="text-[12px] font-normal text-white-1">
                  Liquidity
                </p>
                <div className="flex flex-col">
                  <IoCaretUp className="text-purple-1 cursor-pointer text-[12px]" />
                  <IoCaretUp className="text-purple-1 cursor-pointer rotate-180 text-[12px]" />
                </div>
              </div>
              {/* PnL  */}
              <div className="w-full flex justify-end items-center gap-1">
                <p className="text-[12px] font-normal text-white-1">PnL</p>
                <div className="flex flex-col">
                  <IoCaretUp className="text-purple-1 cursor-pointer text-[12px]" />
                  <IoCaretUp className="text-purple-1 cursor-pointer rotate-180 text-[12px]" />
                </div>
              </div>
            </div>
            {/* rows ----> */}
            {[0, 1, 2, 3, 4, 5].map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full py-3 border-b-[1px] border-white-1/20 grid grid-cols-[1.2fr,1fr,1fr,1fr]"
                >
                  {/* token name */}
                  <div className="w-full flex justify-between items-center">
                    <div className="flex justify-center items-center gap-2">
                      <Image
                        src="/assets/active.svg"
                        alt=""
                        width={29}
                        height={26}
                      />
                      <p className="text-[12px] font-normal text-white-1">
                        Mog
                      </p>
                    </div>
                    <IoEyeOutline className="text-white-1 text-[16px]" />
                  </div>
                  {/* amount  */}
                  <div className="w-full flex justify-end items-center gap-1">
                    <p className="text-[12px] font-normal text-white-1">
                      $3.4k
                    </p>
                  </div>
                  {/* Liquidity  */}
                  <div className="w-full flex justify-end items-center gap-1">
                    <p className="text-[12px] font-normal text-white-1">
                      $3.4k
                    </p>
                  </div>
                  {/* PnL  */}
                  <div className="w-full flex justify-end items-center gap-1">
                    <p className="text-[12px] font-normal text-[#57C78D]">
                      +$ 769,57
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CustomModal>

      {/* Watchlist user modal ------------>  */}

      <CustomModal
        size="40rem"
        open={watchListModal}
        onClose={closeWatchListModal}
      >
        <div className="w-full flex overflow-auto flex-col bg-black-1 px-3">
          <div className="w-full min-w-[400px] csm:min-w-auto flex flex-col">
            {/* modal header ---> */}
            <div className="w-full border-b-[1px] border-white-1/20 pb-3 flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <IoIosStarOutline className="text-yellow-1 text-[14px]" />
                <p className="text-[12px] font-normal text-yellow-1">
                  Watchlist{" "}
                </p>
              </div>
              <button
                onClick={closeWatchListModal}
                className="w-[24px] h-[24px] flex justify-center items-center border-[1px] border-white-1/10 rounded-[2px]"
              >
                <RxCross2 className="text-[16px] text-blue-1" />
              </button>
            </div>
            {/* table header  */}
            <div className="w-full border-b-[1px] border-white-1/20 py-3 grid grid-cols-[1.2fr,1fr,1fr,1fr]">
              {/* token name */}
              <div className="w-full flex justify-start items-center">
                <p className="text-[12px] font-normal text-white-1">Token</p>
              </div>
              {/* mcap  */}
              <div className="w-full flex justify-end items-center gap-1">
                <p className="text-[12px] font-normal text-white-1">MCAP</p>
                <div className="flex flex-col">
                  <IoCaretUp className="text-purple-1 cursor-pointer text-[12px]" />
                  <IoCaretUp className="text-purple-1 cursor-pointer rotate-180 text-[12px]" />
                </div>
              </div>
              {/* volume  */}
              <div className="w-full flex justify-end items-center gap-1">
                <p className="text-[12px] font-normal text-white-1">Volume</p>
                <div className="flex flex-col">
                  <IoCaretUp className="text-purple-1 cursor-pointer text-[12px]" />
                  <IoCaretUp className="text-purple-1 cursor-pointer rotate-180 text-[12px]" />
                </div>
              </div>
              {/* 24H  */}
              <div className="w-full flex justify-end items-center gap-1">
                <p className="text-[12px] font-normal text-white-1">24H%</p>
                <div className="flex flex-col">
                  <IoCaretUp className="text-purple-1 cursor-pointer text-[12px]" />
                  <IoCaretUp className="text-purple-1 cursor-pointer rotate-180 text-[12px]" />
                </div>
              </div>
            </div>
            {/* rows ----> */}
            {[0, 1, 2, 3, 4].map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full py-3 border-b-[1px] border-white-1/20 grid grid-cols-[1.2fr,1fr,1fr,1fr]"
                >
                  {/* token name */}
                  <div className="flex justify-start items-center gap-2">
                    <Image
                      src="/assets/active.svg"
                      alt=""
                      width={29}
                      height={26}
                    />
                    <p className="text-[12px] font-normal text-white-1">Mog</p>
                  </div>
                  {/* amount  */}
                  <div className="w-full flex justify-end items-center gap-1">
                    <p className="text-[12px] font-normal text-white-1">
                      $3.4k
                    </p>
                  </div>
                  {/* Liquidity  */}
                  <div className="w-full flex justify-end items-center gap-1">
                    <p className="text-[12px] font-normal text-white-1">
                      $3.4k
                    </p>
                  </div>
                  {/* PnL  */}
                  <div className="w-full flex justify-end items-center gap-1">
                    <p className="text-[12px] font-normal text-[#57C78D]">
                      +$ 769,57
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CustomModal>

      {/* drawer for small screen ---------------->  */}
      <LeftNavigation open={navigationDrawer} close={closeNavigationDrawer} />
      {/* chat drawer ----------------> */}
      <div className="w-full lg:hidden block">
        <ChatDrawer open={chatDrawer} closeDrawer={closeChatDrawer} />
      </div>
    </React.Fragment>
  );
};

const socialLinks = [
  {
    path: "#",
    name: "/assets/twitter.svg",
  },
  {
    path: "#",
    name: "/assets/tellegram.svg",
  },
  {
    path: "#",
    name: "/assets/insta.svg",
  },
];

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

const pattern1 =
  "User {insert username} Would like to transfer the ownership of [Insert Group chat name] to you.";

const newtworks = ["Tron", "B2B", "B3BC"];

const filterOptions = [
  {
    name: "Ethereum",
    icon: <Icons.ethereum />,
  },
  {
    name: "Base",
    icon: <Icons.subtract />,
  },
];

export default Navibar;
