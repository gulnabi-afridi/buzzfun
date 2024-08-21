"use client";

import React, { useState } from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoCopySharp } from "react-icons/io5";
import CustomMenu from "../../../CustomMenu";

const AddAdmin = () => {
  const [menuValue, setMenuValue] = useState("");

  return (
    <div className="w-full h-[calc(100vh-300px)] relative overflow-y-auto flex-grow flex flex-col gap-1">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => {
        return (
          <div
            key={index}
            className="w-full grid border-b-[1px] border-white-1/10 py-2 px-6 grid-cols-[1fr,2fr,50px]"
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
                <p className="text-[14px] font-normal text-white-1">1,234</p>
              </button>
              <button className="flex justify-center items-center gap-2">
                <FaRegCalendarCheck className="text-white-1 text-[20px]" />
                <p className="text-[14px] font-normal text-white-1">12days</p>
              </button>
            </div>

            {/* 3rd col  */}
            <div className="w-full flex justify-end items-center">
              <CustomMenu
                options={menuOptions}
                value={menuValue}
                setValue={setMenuValue}
                trigger="click"
                position="bottom"
                size="!w-[150px]"
                targetComponent={
                  <button className="w-full flex justify-end items-center">
                    <HiOutlineDotsHorizontal className="text-[20px] text-white-1" />
                  </button>
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddAdmin;

const menuOptions = ["View Profile", "Assign Admin"];
