import React from "react";
import { LuSearch } from "react-icons/lu";

const LeftSideBar: React.FC = () => {
  return (
    <div className="w-full bg-transparent dark:bg-black-1 flex flex-col gap-2">
      <div className="w-full flex border-[1px] border-blue-1 flex-col h-[calc(100vh-156px)]">
        {/* Fixed header */}
        <div className="w-full flex flex-col gap-2 px-4 py-2">
          <p className="text-[14px] font-normal dark:text-white-1 text-black-1">
            {" "}
            My Chats (13){" "}
          </p>
          {/* search  */}
          <div className="w-full grid grid-cols-[1fr,30px]">
            <input
              type="text"
              className="h-[20px] text-[12px] font-normal text-black-1 w-full rounded-[2px] pl-2 focus:ring-0 focus:outline-none bg-[#D1DBE4]"
              name=""
              id=""
            />
            <div className="w-full flex justify-end items-center">
              <button className="w-[18px] h-[18px] flex justify-center items-center bg-black-1">
                <LuSearch className="text-[12px] text-white-1" />
              </button>
            </div>
          </div>
          {/* online  */}
          <div className="w-full relative flex justify-center items-center">
            <p
              className="text-[14px]
                   dark:text-blue-1 font-semibold text-blue-1"
            >
              {`<General Chat>`}
            </p>
            <div className="w-[4px] h-[28px] bg-[#004BFE] absolute -left-2"></div>
            <div className="w-[4px] h-[28px] bg-[#004BFE] absolute -right-2"></div>
          </div>
        </div>

        {/* Scrollable user list */}
        <div className="w-full flex-grow overflow-y-auto px-4">
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 3, 4, 5, 6, 3, 2, 1, 3, 2, 3,
            1, 2, 1, 1, 2,
          ].map((item, index) => {
            return (
              <div key={index} className="w-full ">
                <div></div>
                <p className="text-[14px] py-[4px] w-full flex justify-start font-normal dark:text-white-1 text-black-1">
                  {`<Chat Name>`}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
