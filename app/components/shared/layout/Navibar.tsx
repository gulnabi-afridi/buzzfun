"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@mantine/core";
import { Drawer, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { GoArrowUpRight } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineStarBorder } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import CustomModal from "../Modals/CustomModal";

const Navibar: React.FC = () => {
  const [connectWalletOpened, { open: connectOpen, close: connectClose }] =
    useDisclosure(false);
  const [createWalletOpened, { open: createOpen, close: createClose }] =
    useDisclosure(false);
  const [connectWallet2Opened, { open: connect2Open, close: connect2Close }] =
    useDisclosure(false);

  return (
    <React.Fragment>
      <div className="w-full  dark:bg-[#201e26] bg-white-2 px-5 flex justify-between items-center h-[65px]">
        {/* left portion */}
        <div className="flex justify-center items-center gap-6">
          <div className="justify-center md:flex hidden items-center gap-3">
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
        <div className="relative w-[250px] 3xl:w-[460px] h-[35px]">
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
          <div className="relative flex">
            <div className="absolute inset-0 before:left-[-.8px] before:right-[-.7px] before:rounded-[6px] before:bottom-[-1.5px] gradient-border"></div>
            <div className="flex !z-10 px-1 py-1 bg-[#1A1721] rounded-[6px] justify-center items-center gap-1">
              <p className="px-[5px] text-[10px] font-normal text-white-1 rounded-[4px] bg-[#449C6E] py-[1px]">
                1
              </p>
              <p className="text-[12px] font-normal text-white-1">Positions</p>
            </div>
          </div>
          {/* favorite --->  */}
          <div className="w-[35px] h-[35px] flex relative">
            <div className="absolute inset-0 before:left-[-.8px] before:right-[-.8px] before:rounded-[6px] before:bottom-[-1.5px] gradient-border"></div>
            <button className="bg-[#1A1721] z-10 rounded-[6px] w-full h-full flex justify-center items-center">
              <MdOutlineStarBorder className="text-[#EBFF00C4] text-[24px]" />
            </button>
          </div>
          {/* chat -----> */}
          <div className="w-[35px] h-[35px] flex relative">
            <div className="absolute inset-0 before:left-[-.8px] before:right-[-.8px] before:rounded-[6px] before:bottom-[-1.5px] gradient-border"></div>
            <button className="bg-[#1A1721] z-10 rounded-[6px] w-full h-full flex justify-center items-center">
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
                    <button
                      onClick={connectOpen}
                      className="w-full h-full flex bg-black-1 justify-center items-center text-[14px] font-normal text-white-1"
                    >
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
        </div>
      </div>
      {/* MDOAL FOR CONNECT WALLET -------------->  */}
      {/* 1 Connect Wallet Modal  */}
      <CustomModal open={connectWalletOpened} onClose={connectClose} size="md">
        <div className="w-full flex p-3 flex-col justify-center items-center">
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
              className="w-full cursor-pointer border-[1px] border-purple-1 dark:border-white-1 dark:bg-[#1D252C] bg-white-1 p-2 rounded-[3px]"
            >
              <div className="w-full flex justify-between items-start">
                <p className="text-[12px] font-normal dark:text-white-1 text-black-1 uppercase">
                  <span className="bg-yellow-1 text-black-1 px-[2px]">
                    Create
                  </span>{" "}
                  a <br /> wallet
                </p>
                <div
                  className={`w-[12px] bg-yellow-1 flex justify-center items-center h-[12px] `}
                >
                  <GoArrowUpRight className={`text-black-1 text-[11px] `} />
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
              className="w-full cursor-pointer border-[1px] border-purple-1 dark:bg-[#1D252C] bg-white-1 p-2 rounded-[3px]"
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
            className="text-black-1 dark:text-white-1 font-normal text-[12px] uppercase"
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
              <button className="text-white-1 dark:text-white-1 uppercase hover:opacity-80 font-normal text-[12px] bg-black-1 px-2 py-[2px]">
                create
              </button>
              <p className="text-[12px] uppercase dark:text-white-1 font-normal text-black-1">
                A Wallet
              </p>
            </div>
            {/* smal wallet */}
            <div className="w-full text-[12px] font-normal dark:text-white-1 my-8 px-2 py-2 uppercase rounded-[2px] border-[1px] border-blue-1">
              Smart wallet
            </div>
            {/*  */}
            <button
              onClick={() => {
                createClose();
                connectOpen();
              }}
              className="text-black-1 dark:text-white-1 font-normal text-[12px] uppercase"
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
            <button className="text-white-1 uppercase hover:opacity-80 font-normal text-[12px] bg-black-1 px-2 py-[2px]">
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
                   <Image src={item.img} width={28} height={28} alt=""/>
                  <p className="text-[12px] dark:text-white-1 text-black-1 font-normal"> {item.name}</p>
                </button>
              );
            })}
            {/* button */}
            <button
              onClick={()=>{
                connect2Close();
                connectOpen();
              }}
              className="px-4 w-full flex justify-center items-center hover:opacity-80 py-[6px] text-[10px] font-normal text-black-1 dark:text-white-1 rounded-[5px] bg-transparent dark:bg-black-1"
            >
              / Go Back
            </button>
          </div>
        </div>
      </CustomModal>
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
    icon: "/assets/home.svg",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "/assets/profile.svg",
  },
  {
    path: "#",
    name: "My Engage",
    icon: "/assets/engage.svg",
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

export default Navibar;
