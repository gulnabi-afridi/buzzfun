import React from "react";

const ChatHeader:React.FC = () => {
  return (
    <div
      className={`w-full flex bg-white-1 cmd:bg-[#1B2A35] px-4 h-[50px] justify-between items-center`}
    >
      <div className="flex px-2 py-[4px] bg-white-1 dark:bg-black-1 justify-center items-center gap-2">
        <p className="text-[14px] font-bold text-black-1 dark:text-white-1">
          News
        </p>
        <p className="bg-[#FF0000] px-[8px] py-[0px] text-black-1 dark:text-white-1">
          2
        </p>
      </div>
      <p className="text-[14px] font-semibold text-black-1 cmd:hidden block">
        General [Chet]
      </p>
      <p className="text-[14px] csm:block hidden font-bold text-white-1 dark:text-black-1 cmd:dark:text-white-1">
        General [Chat]
      </p>
      <p className="text-[14px] csm:hidden block font-bold text-white-1 dark:text-black-1 cmd:dark:text-white-1">
        [My Chats]
      </p>
    </div>
  );
};

export default ChatHeader;
