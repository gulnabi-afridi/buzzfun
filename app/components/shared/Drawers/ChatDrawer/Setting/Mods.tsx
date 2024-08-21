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
  }, [modsMenu, openChangeRoleModal, openBlackListModal, openPromoteModal]);

  return (
    <React.Fragment>
      <div className="w-full border-[1px] border-blue-1 rounded-[2px] flex flex-col">
        {/* top header */}
        <div className="w-full flex flex-col p-3 gap-2">
          <div className="w-full bg-[#D4DDE6] relative h-[43px] flex justify-between items-center">
            <div className="flex pl-4 justify-center items-center gap-3">
              <Image src="/assets/token3.svg" alt="" width={26} height={26} />
              <p className="text-[14px] font-semibold text-black-1">
                {addAdmin
                  ? `$Froglic: Settings > [MODS] > Add Mod`
                  : `$Froglic: Settings > [MODS][Total 15]`}
              </p>
            </div>
            {/* add mods button --------->  */}
            <div className="w-[50px] h-full bg-white-1 flex justify-center items-center">
              {addAdmin ? (
                <FiSkipBack
                  onClick={() => setAddAdmin(!addAdmin)}
                  className="text-[23px] cursor-pointer text-black-1"
                />
              ) : (
                <FaRegSquarePlus
                  onClick={() => setAddAdmin(!addAdmin)}
                  className="text-[23px] cursor-pointer text-black-1"
                />
              )}
            </div>
          </div>
          {/* filter ---> */}
          <div className="w-full flex justify-between items-center px-4 bg-[#D4DDE6] h-[43px]">
            {/* sort by  */}
            <div className="flex justify-center items-center gap-3">
              <p className="text-[16px] font-normal text-black-1">Sort by</p>
              <button className="px-2 bg-black-1 py-[2px] flex justify-center items-center gap-1">
                <p className="text-[16px] font-normal text-white-1">A-Z</p>
                <MdKeyboardArrowDown className="text-blue-1 text-[14px]" />
              </button>
            </div>
            {/* search  */}
            <div className="flex justify-center items-center gap-3">
              <input
                type="text"
                placeholder="insert username or wallet address"
                className="text-[10px] pl-2 focus:outline-none placeholder:text-black-1/35 bg-[#A1A1A1] w-[230px] h-[27px] rounded-[2px] font-normal text-black-1/35"
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
                    className="w-full grid border-b-[1px] border-white-1/10 py-2 px-6 grid-cols-[1fr,2fr,1fr,50px]"
                  >
                    {/* ist col */}
                    <div className="w-full flex justify-center items-start gap-[2px] flex-col">
                      <p className="text-[14px] font-normal text-blue-1">{`<Username>`}</p>
                      <p className="text-[14px] text-center font-normal text-white-1">
                        [Role]
                      </p>
                    </div>
                    {/* 2nd col */}
                    <div className="w-full flex gap-7 justify-start items-center">
                      <button>
                        <IoCopySharp className="text-white-1 text-[16px]" />
                      </button>
                      <button className="flex justify-center items-center gap-2">
                        <FiMessageCircle className="text-white-1 text-[18px]" />
                        <p className="text-[14px] font-normal text-white-1">
                          1,234
                        </p>
                      </button>
                      <button className="flex justify-center items-center gap-2">
                        <FaRegCalendarCheck className="text-white-1 text-[20px]" />
                        <p className="text-[14px] font-normal text-white-1">
                          12days
                        </p>
                      </button>
                    </div>
                    {/* 3rd col  */}
                    <div className="w-full flex justify-center gap-6 items-center">
                      <LuCrown className="text-[22px] cursor-pointer text-white-1" />
                      <RiPushpin2Line className="text-[22px] cursor-pointer text-white-1" />
                      <FaFilter className="text-[20px] cursor-pointer text-white-1" />
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
                            <HiOutlineDotsHorizontal className="text-[20px] text-white-1" />
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
      <Modal
        opened={changeRoleModal}
        onClose={closeChangeRoleModal}
        centered
        withCloseButton={false}
        size="24rem"
        classNames={{ content: "!bg-black-1 !p-0" }}
      >
        <div className="w-full flex flex-col gap-3 p-5 bg-black-1 border-[1px] border-white-1">
          <p className="text-[14px] font-normal text-[#FEF652]">
            / Attention - Transfer Owner
          </p>
          <p className="text-[14px] font-normal text-white-1">
            Are you sure you want to transfer ownership to [insert user name]?
          </p>
          <p className="text-[11px] font-normal text-[#6D6D6D] mt-3">
            You will no longer be the owner of this group chat.
          </p>
          {/* buttons */}
          <div className="w-full mt-8 h-[34px] grid grid-cols-2 justify-center items-center">
            <button
              onClick={closeChangeRoleModal}
              className="w-full text-white-1 bg-[#224aaa] h-full flex justify-center items-center relative before:w-[5px] before:h-full before:bg-[#336FFE] before:absolute before:left-0 before:top-0 after:w-[5px] after:h-full after:bg-[#336FFE] after:absolute after:top-0 after:right-0"
            >
              Cancel
            </button>
            <button className="w-full hover:bg-[#FEF652] hover:text-black-1 text-white-1 bg-transparent h-full flex justify-center items-center relative after:w-[5px] after:h-full after:bg-[#336FFE] after:absolute after:top-0 after:right-0">
              Handover
            </button>
          </div>
        </div>
      </Modal>
      {/* blacklist modal --------------->  */}
      <Modal
        opened={blackListModal}
        onClose={closeBlackListModal}
        centered
        withCloseButton={false}
        size="24rem"
        classNames={{ content: "!bg-black-1 !p-0" }}
      >
        <div className="w-full flex flex-col gap-3 p-5 bg-black-1 border-[1px] border-white-1">
          <p className="text-[14px] font-normal text-[#FEF652]">
            / Attention - Blacklist
          </p>
          <p className="text-[14px] font-normal text-white-1">
            Are you sure you want to Blacklist Mod [insert user name]?
          </p>
          <p className="text-[11px] font-normal text-[#6D6D6D] mt-3">
            They will have their admin tole removed and added to the blacklist.
          </p>
          {/* buttons */}
          <div className="w-full mt-8 h-[34px] grid grid-cols-2 justify-center items-center">
            <button
              onClick={closeChangeRoleModal}
              className="w-full text-white-1 bg-[#224aaa] h-full flex justify-center items-center relative before:w-[5px] before:h-full before:bg-[#336FFE] before:absolute before:left-0 before:top-0 after:w-[5px] after:h-full after:bg-[#336FFE] after:absolute after:top-0 after:right-0"
            >
              Cancel
            </button>
            <button className="w-full hover:bg-[#FEF652] hover:text-black-1 text-white-1 bg-transparent h-full flex justify-center items-center relative after:w-[5px] after:h-full after:bg-[#336FFE] after:absolute after:top-0 after:right-0">
              Blacklist
            </button>
          </div>
        </div>
      </Modal>
      {/* Promote Modal --------------->  */}
      <Modal
        opened={promoteModal}
        onClose={closePromoteModal}
        centered
        withCloseButton={false}
        size="24rem"
        classNames={{ content: "!bg-black-1 !p-0" }}
      >
        <div className="w-full flex flex-col gap-3 p-5 bg-black-1 border-[1px] border-white-1">
          <p className="text-[14px] font-normal text-[#FEF652]">
            / Attention - Change role
          </p>
          <p className="text-[14px] font-normal text-white-1">
            Are you sure you want to apply Mod role to [insert user name]?
          </p>
          <p className="text-[11px] font-normal text-[#6D6D6D] mt-3">
            They will be able to manage all chats, blacklist users and assign
            mods.
          </p>
          {/* buttons */}
          <div className="w-full mt-8 h-[34px] grid grid-cols-2 justify-center items-center">
            <button
              onClick={closeChangeRoleModal}
              className="w-full text-white-1 bg-[#224aaa] h-full flex justify-center items-center relative before:w-[5px] before:h-full before:bg-[#336FFE] before:absolute before:left-0 before:top-0 after:w-[5px] after:h-full after:bg-[#336FFE] after:absolute after:top-0 after:right-0"
            >
              Cancel
            </button>
            <button className="w-full hover:bg-[#FEF652] hover:text-black-1 text-white-1 bg-transparent h-full flex justify-center items-center relative after:w-[5px] after:h-full after:bg-[#336FFE] after:absolute after:top-0 after:right-0">
              Promote
            </button>
          </div>
        </div>
      </Modal>
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
