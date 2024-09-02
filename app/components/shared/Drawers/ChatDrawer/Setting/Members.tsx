import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { IoCopySharp } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { LuSkull } from "react-icons/lu";
import { BsVolumeMuteFill } from "react-icons/bs";
import { LuTimerOff } from "react-icons/lu";
import CustomMenu from "../../../CustomMenu";
import { useDisclosure } from "@mantine/hooks";
import ConfirmationModal from "../../../Modals/ConfirmationModal";
import { GoUnmute } from "react-icons/go";
import { FiClock } from "react-icons/fi";



const Members: React.FC = () => {
  const [sortOption, setSortOption] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [userDetail, setUserDetail] = useState({
    isMute: false,
    timeout: "",
    blacklist: false,
  });

  // stats for modeling
  const [muteModal, { open: openMuteModal, close: closeMuteModal }] =
    useDisclosure(false);
  const [
    blackListEnableModal,
    { open: openBlackListEnableModal, close: closeBlackListEnableModal },
  ] = useDisclosure(false);
  const [timeOutModal, { open: openTimeOutModal, close: closeTimeOutModal }] =
    useDisclosure(false);

  // functins --------------------------->
  const handleMute = () => {
    setUserDetail((prevState) => ({
      ...prevState,
      isMute: !userDetail.isMute,
    }));

    closeMuteModal();
  };

  const addTimeOut = () => {
    setUserDetail((prevState) => ({
      ...prevState,
      timeout: timeOut,
    }));

    closeTimeOutModal();
  };

  const removeTimeOut = () => {
    setUserDetail((prevState) => ({
      ...prevState,
      timeout: "",
    }));

    closeTimeOutModal();
  };

  return (
    <React.Fragment>
      <div className="w-full border-[1px] border-blue-1 rounded-[2px] flex flex-col">
        {/* top header */}
        <div className="w-full flex flex-col p-3 gap-2">
          <div className="w-full bg-[#D4DDE6] relative h-[43px] px-4 flex justify-between items-center">
            <div className="flex justify-center items-center gap-3">
              <Image src="/assets/token3.svg" alt="" width={26} height={26} />
              <p className="text-[14px] font-semibold text-black-1">
                {`$Froglic: Settings > Members [Total 1200]`}
              </p>
            </div>
          </div>
          {/* filter ---> */}
          <div className="w-full flex justify-between items-center px-4 bg-[#D4DDE6] h-[43px]">
            {/* sort by  */}
            <div className="flex justify-center items-center gap-3">
              <p className="text-[16px] font-normal text-black-1">Sort by</p>
              <CustomMenu
                size="!w-[150px]"
                options={sortOptions}
                value={sortOption}
                trigger="click"
                setValue={setSortOption}
                targetComponent={
                  <button className="px-2 bg-black-1 py-[2px] flex justify-center items-center gap-1">
                    <p className="text-[16px] font-normal text-white-1">A-Z</p>
                    <MdKeyboardArrowDown className="text-blue-1 text-[14px]" />
                  </button>
                }
              />
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
        <div className="w-full h-[calc(100vh-300px)] overflow-y-auto flex-grow flex flex-col gap-1">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => {
            return (
              <div
                key={index}
                className="w-full grid border-b-[1px] border-blue-1/20 dark:border-white-1/10 py-2 px-6 grid-cols-[1fr,2fr,1fr]"
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
                    <FiMessageCircle className="text-black-1 dark:text-white-1text-[18px]" />
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
                <div className="w-full flex justify-end gap-6 items-center">
                  <LuSkull
                    onClick={openBlackListEnableModal}
                    className="text-[22px] cursor-pointer text-black-1 dark:text-white-1"
                  />

                  {userDetail.isMute ? (
                    <BsVolumeMuteFill
                      onClick={openMuteModal}
                      className="text-[22px] cursor-pointer text-black-1 dark:text-white-1"
                    />
                  ) : (
                    <GoUnmute
                      onClick={openMuteModal}
                      className="text-[22px] cursor-pointer text-black-1 dark:text-white-1"
                    />
                  )}

                  {userDetail.timeout === "" ? (
                    <FiClock
                      onClick={openTimeOutModal}
                      className="text-[22px] cursor-pointer text-black-1 dark:text-white-1"
                    />
                  ) : (
                    <LuTimerOff
                      onClick={openTimeOutModal}
                      className="text-[22px] cursor-pointer text-black-1 dark:text-white-1"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* modals -------------------->   */}
      {/* mute + unmute user ----> */}
      {userDetail.isMute ? (
        <ConfirmationModal
          open={muteModal}
          onClose={closeMuteModal}
          title="/ Attention - Unmute User"
          des1="Are you sure you want to unmute [insert user name]?"
          des2="They will be able to view and interact in the chat as normal."
          btn2="Unmute"
          btn2Event={handleMute}
        />
      ) : (
        <ConfirmationModal
          open={muteModal}
          onClose={closeMuteModal}
          title="/ Attention - Mute User"
          des1="Are you sure you want to 
           Mute [insert user name]?"
          des2="They will be able to view but not interact in the chat until the mute is removed. "
          btn2="Mute"
          btn2Event={handleMute}
        />
      )}
      {/* blacklist + unblacklist user -------->  */}
      <ConfirmationModal
        open={blackListEnableModal}
        onClose={closeBlackListEnableModal}
        title="/ Attention - Blacklist"
        des1="Are you sure you want to Blacklist [insert user name]?"
        des2="They will no longer be able to access the chat and be added to the chat blacklist. "
        btn2="Blacklist"
      />

      {/* set timeout modal ---------> */}
      {userDetail.timeout === "" ? (
        <ConfirmationModal
          open={timeOutModal}
          onClose={closeTimeOutModal}
          title="/ Attention - Timeout"
          des1="How long would you like to apply timeout for?"
          btn2="Apply"
          btn2Event={addTimeOut}
        >
          {/* times  */}
          <div className="w-full mt-4 grid gap-3 grid-cols-5">
            {timeOutOptions.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setTimeOut(item)}
                  className={`text-[10px] ${
                    timeOut === item &&
                    "border-[1px] p-1 rounded-[2px] border-blue-1"
                  } font-normal text-black-1 dark:text-white-1`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </ConfirmationModal>
      ) : (
        <ConfirmationModal
          open={timeOutModal}
          onClose={closeTimeOutModal}
          title="/ Attention - Remove Timeout"
          des1="Are you sure you want to remove the timeout for [insert username]?"
          btn2="Yes, Remove"
          btn2Event={removeTimeOut}
        ></ConfirmationModal>
      )}
    </React.Fragment>
  );
};

const sortOptions = ["Recently Joined", "Oldest", "A-Z", "Z-A"];
const timeOutOptions = ["5 min", "15 min", "30 min", "1hr ", "24hr"];

export default Members;
