"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { IoCopySharp } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";
import { LuCrown } from "react-icons/lu";
import { RiPushpin2Line } from "react-icons/ri";
import { FaFilter } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import CustomMenu from "../../../CustomMenu";
import { FiSkipBack } from "react-icons/fi";
import AddAdmin from "./AddAdmin";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import ConfirmationModal from "../../../Modals/ConfirmationModal";
import { IoMdSkipBackward } from "react-icons/io";

const Mods: React.FC = () => {
  const [modsMenu, setModsMenu] = useState("");
  const [addAdmin, setAddAdmin] = useState(false);

  // states for modal -------->

  const [
    changeRoleModal,
    { open: openChangeRoleModal, close: closeChangeRoleModal },
  ] = useDisclosure(false);
  const [
    blackListModal,
    { open: openBlackListModal, close: closeBlackListModal },
  ] = useDisclosure(false);
  const [promoteModal, { open: openPromoteModal, close: closePromoteModal }] =
    useDisclosure(false);
  const [demoteModal, { open: openDemoteModal, close: closeDemoteModal }] =
    useDisclosure(false);

  // useeffect for handling the modal opening ------->

  useEffect(() => {
    if (modsMenu === "Transfer Ownership") {
      openChangeRoleModal();
    }
    if (modsMenu === "Blacklist") {
      openBlackListModal();
    }
    if (modsMenu === "Revoke Admin") {
      openPromoteModal();
    }
    if (modsMenu === "View Profile") {
      openDemoteModal();
    }
  }, [
    modsMenu,
    openChangeRoleModal,
    openBlackListModal,
    openPromoteModal,
    openDemoteModal,
  ]);

  return (
    <React.Fragment>
      <div className="w-full border-[1px] border-none csm:border-blue-1 rounded-[2px] flex flex-col">
        {/* top header */}
        <div className="w-full flex flex-col py-1 px-0 cmd:px-3 cmd:py-3 gap-0 cmd:gap-2">
        
          {/* filter ---> */}
          <div className="w-full flex justify-between items-center px-4 bg-[#D4DDE6] h-[43px]">
            {/* sort by  */}
            <div className="flex justify-center items-center gap-3">
              <p className="text-[14px] csm:text-[16px] font-normal text-black-1">Sort by</p>
              <button className="px-2 bg-black-1 py-[2px] flex justify-center items-center gap-1">
                <p className="text-[14px] csm:text-[16px] font-normal text-white-1">A-Z</p>
                <MdKeyboardArrowDown className="text-blue-1 text-[14px]" />
              </button>
            </div>
            {/* search  */}
            <div className="flex justify-center items-center gap-3">
              <input
                type="text"
                placeholder="insert username or wallet address"
                className="text-[10px] pl-2 focus:outline-none placeholder:text-black-1/35 bg-[#A1A1A1] w-[130px] csm:w-[230px] h-[27px] rounded-[2px] font-normal text-black-1/35"
              />
              <button className="bg-black-1 py-[3px] px-[3px]">
                <LuSearch className="text-[16px] text-white-1" />
              </button>
            </div>
          </div>
        </div>
        {/* members details ----> */}
        {addAdmin ? (
          <AddAdmin />
        ) : (
          <div className="w-full h-[calc(100vh-300px)] relative overflow-y-auto flex-grow flex flex-col gap-1">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
              (item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full grid border-b-[1px] border-white-1/10 py-2 px-2 csm:px-6 grid-cols-[1fr,2fr,1fr,50px]"
                  >
                    {/* ist col */}
                    <div className="w-full flex justify-center items-start gap-[2px] flex-col">
                      <p className="text-[14px] font-normal text-blue-1">{`<Username>`}</p>
                      <p className="text-[14px] text-center font-normal text-black-1 dark:text-white-1">
                        [Role]
                      </p>
                    </div>
                    {/* 2nd col */}
                    <div className="w-full flex gap-7 justify-start items-center">
                      <button>
                        <IoCopySharp className="text-black-1 dark:text-white-1 text-[16px]" />
                      </button>
                      <button className="flex justify-center items-center gap-2">
                        <FiMessageCircle className="text-black-1 dark:text-white-1 text-[18px]" />
                        <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
                          1,234
                        </p>
                      </button>
                      <button className="flex justify-center items-center gap-2">
                        <FaRegCalendarCheck className="text-black-1 dark:text-white-1 text-[20px]" />
                        <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
                          12days
                        </p>
                      </button>
                    </div>
                    {/* 3rd col  */}
                    <div className="w-full flex justify-center gap-6 items-center">
                      <LuCrown className="text-[22px] cursor-pointer text-black-1 dark:text-white-1" />
                      <RiPushpin2Line className="text-[22px] cursor-pointer text-black-1 dark:text-white-1" />
                      <FaFilter className="text-[20px] cursor-pointer text-black-1 dark:text-white-1" />
                    </div>
                    {/* 4rth col  */}
                    <div className="w-full flex justify-end items-center">
                      <CustomMenu
                        options={modsOptions}
                        value={modsMenu}
                        setValue={setModsMenu}
                        trigger="click"
                        position="bottom"
                        size="!w-[160px]"
                        targetComponent={
                          <button className="w-full flex justify-end items-center">
                            <HiOutlineDotsHorizontal className="text-[20px] text-black-1 dark:text-white-1" />
                          </button>
                        }
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>
      {/* Transfer Owner Modal ------------------> */}
      <ConfirmationModal
        open={changeRoleModal}
        onClose={closeChangeRoleModal}
        title=" / Attention - Transfer Owner"
        des1="Are you sure you want to transfer ownership to [insert user name]?"
        des2="You will no longer be the owner of this group chat."
        btn2="Handover"
      />

      {/* blacklist modal --------------->  */}
      <ConfirmationModal
        open={blackListModal}
        onClose={closeBlackListModal}
        title="/ Attention - Blacklist"
        des1="Are you sure you want to Blacklist Mod [insert user name]?"
        des2="They will have their admin tole removed and added to the blacklist."
        btn2="Blacklist"
      />

      {/* Promote Modal --------------->  */}
      <ConfirmationModal
        open={promoteModal}
        onClose={closePromoteModal}
        title="/ Attention - Change role"
        des1="Are you sure you want to apply Mod role to [insert user name]?"
        des2="They will be able to manage all chats, blacklist users and assign
            mods."
        btn2="Promote"
      />

      {/* demote modal ---------------> */}
      <ConfirmationModal
        open={demoteModal}
        btn2="Demote"
        onClose={closeDemoteModal}
        title="/ Attention - Change role"
        des1="Are you sure you want to apply Mod role to [insert user name]?"
        des2="They will be able to manage all chats, blacklist users and assign
            mods."
      />
    </React.Fragment>
  );
};

export default Mods;

const modsOptions = [
  "View Profile",
  "Revoke Admin",
  "Blacklist",
  "Transfer Ownership",
];
