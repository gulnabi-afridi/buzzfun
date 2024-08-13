"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Menu } from "@mantine/core";
import { IoCopyOutline } from "react-icons/io5";
import ThemeSwitch from "../../ThemeSwitch";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { GoArrowUpRight } from "react-icons/go";

const Navibar: React.FC = () => {
  const [connectWalletOpened, { open: connectOpen, close: connectClose }] =
    useDisclosure(false);
  const [createWalletOpened, { open: createOpen, close: createClose }] =
    useDisclosure(false);
  const [connectWallet2Opened, { open: connect2Open, close: connect2Close }] =
    useDisclosure(false);

  return (
    <React.Fragment>
      <div className="w-full  dark:bg-black-3 bg-white-2 px-5 flex justify-between items-center h-[65px]">
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
          <div className="bg-white-1 xl:flex hidden justify-center items-center px-2 py-1 navibarCardSh rounded-[2px] gap-2">
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

        {/* right portion */}
        <div className="flex justify-center items-center gap-2">
          <div className="hidden lg:flex justify-center navibarCardSh bg-blue-1 rounded-[2px] px-2 py-1  items-center gap-4">
            <p className="text-[10px] uppercase font-normal text-white-1">
              {" "}
              <span className="bg-black-1 uppercase p-[2px] mr-1">
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
          {/* connect btn */}
          <button
            onClick={connectOpen}
            className="bg-yellow-1 ml-4 h-[30px] text-black-1 navibarCardSh rounded-[2px] px-4 flex justify-center items-center text-[15px] font-normal"
          >
            Connect
          </button>
        
        </div>
      </div>
      {/* MDOAL FOR CONNECT WALLET -------------->  */}
      {/* 1 Connect Wallet Modal  */}
      <Modal
        opened={connectWalletOpened}
        onClose={connectClose}
        centered
        size="md"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        classNames={{
          body: "bg-white-2 rounded-[2px]",
        }}
        withCloseButton={false}
      >
        <div className="w-full flex p-3 flex-col justify-center items-center">
          {/* header  */}
          <div className="flex justify-start items-center gap-2">
            <button className="text-white-1 uppercase hover:opacity-80 font-normal text-[12px] bg-black-1 px-2 py-[2px]">
              Connect
            </button>
            <p className="text-[12px] uppercase font-normal text-black-1">
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
              className="w-full cursor-pointer bg-white-1 p-2 rounded-[3px]"
            >
              <div className="w-full flex justify-between items-start">
                <p className="text-[12px] font-normal text-black-1 uppercase">
                  Create a wallet
                </p>
                <div
                  className={`w-[12px] bg-black-1 flex justify-center items-center h-[12px] `}
                >
                  <GoArrowUpRight className={`text-white-1 text-[11px] `} />
                </div>
              </div>
              <p className="text-[12px] mt-6 font-normal text-black-1 uppercase">
                text goes here to explain stuff
              </p>
            </button>
            {/* connect a wallet */}
            <button
              onClick={() => {
                connect2Open();
                createClose();
                connectClose();
              }}
              className="w-full cursor-pointer bg-white-1 p-2 rounded-[3px]"
            >
              <div className="w-full flex justify-between items-start">
                <p className="text-[12px] font-normal text-black-1 uppercase">
                  Connect a wallet
                </p>
                <div
                  className={`w-[12px] bg-black-1 flex justify-center items-center h-[12px] `}
                >
                  <GoArrowUpRight className={`text-white-1 text-[11px] `} />
                </div>
              </div>
              <p className="text-[12px] mt-6 font-normal text-black-1 uppercase">
                text goes here to explain stuff
              </p>
            </button>
          </div>
          {/*  */}
          <button
            onClick={connectClose}
            className="text-black-1 font-normal text-[12px] uppercase"
          >
            \ pussy out
          </button>
        </div>
      </Modal>
      {/* 2) Create Wallet Modal */}
      <Modal
        opened={createWalletOpened}
        onClose={createClose}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        size="xs"
        classNames={{
          body: "bg-white-2 rounded-[2px]",
        }}
        withCloseButton={false}
      >
        <div className="w-full px-3 py-8 flex justify-center items-center">
          <div className="w-full max-w-[230px] flex flex-col justify-center items-center">
            {/* header  */}
            <div className="flex justify-start items-center gap-2">
              <button className="text-white-1 uppercase hover:opacity-80 font-normal text-[12px] bg-black-1 px-2 py-[2px]">
                create
              </button>
              <p className="text-[12px] uppercase font-normal text-black-1">
                A Wallet
              </p>
            </div>
            {/* smal wallet */}
            <div className="w-full text-[12px] font-normal my-8 px-2 py-2 uppercase rounded-[2px] border-[1px] border-blue-1">
              Smart wallet
            </div>
            {/*  */}
            <button
              onClick={() => {
                createClose();
                connectOpen();
              }}
              className="text-black-1 font-normal text-[12px] uppercase"
            >
              \ go back
            </button>
          </div>
        </div>
      </Modal>
      {/* connect Wallet Modal  */}
      <Modal
        opened={connectWallet2Opened}
        onClose={connect2Close}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        size="xs"
        classNames={{
          body: "bg-white-2 rounded-[2px]",
        }}
        withCloseButton={false}
      >
        <div className="w-full flex py-8 px-3 flex-col justify-center items-center">
          {/* header  */}
          <div className="flex justify-start items-center gap-2">
            <button className="text-white-1 uppercase hover:opacity-80 font-normal text-[12px] bg-black-1 px-2 py-[2px]">
              Connect
            </button>
            <p className="text-[12px] uppercase font-normal text-black-1">
              Your Wallet
            </p>
          </div>
          <div className="w-full mt-8 max-w-[230px] flex flex-col gap-5">
            {connectWallet.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex justify-start px-3 items-center gap-3 py-[10px] uppercase rounded-[2px] border-[1px] border-blue-1"
                >
                  <img src={item.img} className="w-[28px] h-[28px]" alt="" />
                  <p className="text-[12px] font-normal"> {item.name}</p>
                </div>
              );
            })}
            {/* button */}
            <button
              onClick={connect2Close}
              className="px-4 w-fit hover:opacity-80 py-[6px] text-[10px] font-normal text-white-1 rounded-[5px] bg-black-1"
            >
              /close
            </button>
          </div>
        </div>
      </Modal>
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

export default Navibar;
