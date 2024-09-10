"use client";

import React, { useState, useEffect } from "react";
import ComponentWrapper from "../components/shared/layout/ComponentWrapper";
import Image from "next/image";
import { FiCopy } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import Followers from "../components/Profile/Followers";
import Following from "../components/Profile/Following";
import Replies from "../components/Profile/Replies";
import CoinsLaunched from "../components/Profile/CoinsLaunched";
import CoinsHeld from "../components/Profile/CoinsHeld";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import Breadcrumb from "../components/shared/layout/Breadcrumb";
import BuzzEngage from "../components/Profile/BuzzEngage";
import CustomModal from "../components/shared/Modals/CustomModal";
import { PiSealCheck } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
import { LuCoins } from "react-icons/lu";
import { BsEmojiSmileFill } from "react-icons/bs";
import Footer from "../components/shared/layout/Footer";

const ProfilePage = () => {
  // states ----------->
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedName, setSelectedName] = useState("Followers");
  const [opened, { open, close }] = useDisclosure(false);

  //   functions --------->
  const handleButtonClick = (index: any, name: string) => {
    setSelectedIndex(index);
    setSelectedName(name);
  };

  // useEffect -------------------------------> 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 540) {
        setSelectedName("");
      } else {
        setSelectedName("Followers");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="w-full bg-white-2 dark:bg-[#201e26] csm:dark:bg-[#201e26] csm:h-auto overflow-hidden flex flex-col justify-between h-[calc(100vh-65px)]">
        <ComponentWrapper style="csm:h-auto h-[calc(100vh-150px)]">
          {/* top section */}
          {selectedName === "" && (
            <div className="w-full flex justify-center items-center pt-4 csm:pt-8">
              <div className="flex w-fit  px-4 csm:px-8 lg:px-6 py-2 dark:bg-black-1 bg-black-1 gap-4 justify-center items-center">
                <p className=" text-center text-[35px] sm:text-[40px] uppercase leading-[48px] font-normal text-orange-1">
                  {`///`}
                </p>
                <p className="uppercase text-[35px] sm:text-[40px] leading-[48px] dark:bg-black-1 bg-yellow-1 dark:text-yellow-1 text-black-1 font-normal">
                  Profile
                </p>
                <p className="text-[20px] csm:block hidden md:text-[30px] text-center xl:text-[40px] uppercase leading-[48px] font-normal text-orange-1">
                  {`/////////////////`}
                </p>

                <p className="text-[35px] sm:text-[40px] csm:hidden block  text-center  uppercase leading-[48px] font-normal text-orange-1">
                  {`////`}
                </p>
              </div>
            </div>
          )}
          <div className="w-full pt-4 csm:pt-10 min-h-screen pb-0 csm:pb-10 flex justify-center items-start">
            <div
              className={`w-full grid gap-4 sm:gap-4 md:gap-6 justify-center items-start 
            ${
              selectedName === "Replies" &&
              "max-w-[950px] grid-cols-[1.2fr,1fr] csm:grid-cols-2 xl:grid-cols-[1fr,1fr,2fr]"
            }
            ${
              selectedName === "Coins Launched" &&
              "max-w-[950px] grid-cols-[1.2fr,1fr] csm:grid-cols-2 xl:grid-cols-[1fr,1fr,2fr]"
            }
                ${
                  selectedName === "Buzz engage" &&
                  "max-w-[900px] grid-cols-[1.2fr,1fr] csm:grid-cols-2 xl:grid-cols-[1fr,1fr,1.8fr]"
                }
            ${
              !["Replies", "Coins Launched", "Buzz engage"].includes(
                selectedName
              ) &&
              "max-w-[860px] grid-cols-[1.2fr,1fr] csm:grid-cols-2 xl:grid-cols-[1fr,1fr,1.5fr]"
            }
          `}
            >
              {/* uer profile ----> */}
              <div
                className={`w-full ${
                  selectedName === "" ? "flex" : "hidden csm:flex"
                } flex justify-center items-center`}
              >
                <div className="w-full max-w-[300px] flex flex-col gap-3">
                  <div className="w-full flex flex-col border-[1px] bg-transparent dark:bg-black-1 dark:border-[#317C85] border-blue-1 rounded-[2px] py-[8px] px-[7px]">
                    {/* profile image */}
                    <div className="w-full h-[200px] relative">
                      <Image src="/assets/profile.png" alt="" fill />
                    </div>
                    {/* user name */}
                    <div className="w-full mt-3 border-[1px] dark:border-[#317C85] border-blue-1 grid grid-cols-[1fr,1.4fr] px-[5px] h-[43px] justify-center items-center">
                      <p className="text-[14px] uppercase font-normal dark:text-white-1 text-black-1">
                        Username:
                      </p>
                      <input
                        placeholder="insert username"
                        type="text"
                        className="w-full focus:outline-none px-1 text-[10px] font-normal placeholder:text-white-1 text-white-1 uppercase h-[60%] bg-[#404040]"
                        name="name"
                        id="name"
                      />
                    </div>
                    {/* edit your profile */}
                    <div className="flex justify-start mt-5 mb-3 items-center gap-2 pl-4">
                      <button
                        onClick={open}
                        className="text-white-1 dark:bg-[#317C85] hover:opacity-80 font-normal text-[10px] uppercase bg-black-1 px-2 py-[2px]"
                      >
                        Edit
                      </button>
                      <p className="text-[10px] uppercase font-normal dark:text-white-1 text-black-1">
                        Your Profile
                      </p>
                    </div>
                  </div>
                  {/* referal link ---> */}
                  <div className="w-full h-[44px] dark:bg-[#317C85] bg-transparent border-[1px] dark:border-[#317C85] border-blue-1 rounded-[2px] flex justify-between items-center px-2 gap-3">
                    <p className="text-[10px] dark:text-white-1 uppercase font-normal text-black-1">
                      Referral Link
                    </p>
                    <button className="px-2 py-1 text-[10px] font-normal text-white-1 bg-[#404040]">
                      Generate
                    </button>
                    <button className="w-[18px] h-[18px] bg-black-1 flex justify-center items-center">
                      <FiCopy className="text-white-1 text-[12px]" />
                    </button>
                  </div>
                  {/* reactions to profile */}
                  <div className="w-full flex justify-between items-center csm:gap-3 gap-0 csm:items-start csm:flex-col flex-row">
                    <div className="bg-white-1 dark:bg-black-1 rounded-sm w-fit py-[6px] px-3 flex justify-center items-center gap-3">
                      <div className="flex justify-center items-center gap-1">
                        <p>❤️</p>
                        <p className="text-[10px] font-normal dark:text-white-1 text-black-1">
                          12
                        </p>
                      </div>
                      <div className="flex justify-center items-center gap-1">
                        <p>🤬</p>
                        <p className="text-[10px] font-normal dark:text-white-1 text-black-1">
                          12
                        </p>
                      </div>
                    </div>
                    {/* follow button */}
                    <button className="bg-yellow-1 p-1 w-fit">
                      <div className="text-[10px] font-normal text-black-1 dark:text-white-1 bg-white-1 dark:bg-black-1 w-fit px-1 py-[2px]">
                        Follow
                      </div>
                    </button>
                  </div>
                  {/* bio for small screen ----> */}
                  <div className="w-full csm:hidden flex flex-col gap-1">
                    <p className="w-full py-2 p-2 text-[10px] font-normal text-yellow-1 rounded-[4px] border-[1px] border-yellow-1">
                      Bio:
                    </p>
                    <p className="text-[10px] p-2 text-white-1 font-normal border-[1px] border-[#317C85] rounded-[4px]">
                      Bio goes here. Make sure it is interesting or they will
                      hate you.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`w-full ${
                  selectedName === "" ? "flex" : "hidden csm:flex"
                } csm:flex hidden  justify-center items-center`}
              >
                <div className="w-full bg-transparent max-w-[300px] mt-0 sm:mt-5 flex flex-col">
                  {/* Bio ---> */}
                  <p className="text-[10px] csm:flex hidden rounded-[2px] w-fit px-2 py-[2px] justify-start pl-1 dark:mb-2 mb-0 items-center dark:bg-yellow-1 bg-transparent h-[28px] uppercase font-normal text-black-1">
                    Bio:
                  </p>
                  <p className="border-[1px] csm:flex hidden dark:bg-black-1 bg-transparent dark:border-[#317C85] rounded-[2px] border-blue-1 text-[10px] font-normal dark:text-white-1 text-black-1 px-2 py-1">
                    bio goes here. make sure it is interesting otherwise people
                    will hate you.
                  </p>
                  <div className="mt-4 sm:mt-10 dark:bg-black-1 bg-transparent flex-col py-1 border-[1px] dark:border-[#317C85] rounded-[2px] border-blue-1">
                    {/* header */}
                    <div className="w-full h-[30px] px-2 dark:bg-blue-1 bg-transparent justify-center items-center grid grid-cols-[1.5fr,1fr,1fr]">
                      <h2 className="text-[15px] font-normal uppercase dark:text-white-1 text-black-1">
                        BUZZ XP
                      </h2>
                      <h2 className="text-[15px] font-normal uppercase dark:text-white-1 text-black-1">
                        4000{" "}
                      </h2>
                    </div>
                    {/* rows */}
                    <div className="flex flex-col">
                      {userDetails.map((item, index) => {
                        // Determine if the current item is selected
                        const isSelected = selectedIndex === index;

                        return (
                          <button
                            key={index}
                            onClick={() => handleButtonClick(index, item.name)}
                            className={`w-full ${
                              isSelected && "bg-[#317C85]"
                            } px-2 justify-center items-center h-[28px] grid grid-cols-[1.5fr,1fr,1fr]`}
                          >
                            <p
                              className={`w-full flex text-left dark:text-white-1 text-black-1 justify-start items-center text-[10px] font-normal`}
                            >
                              {item.name}
                            </p>
                            <p
                              className={`w-full flex justify-start dark:text-white-1 text-black-1 items-center text-[10px] font-normal }`}
                            >
                              {item.value}
                            </p>
                            <div className="w-full flex justify-end items-center">
                              <div
                                className={`w-[12px] flex justify-center bg-white-1 items-center h-[12px]`}
                              >
                                <GoArrowUpRight
                                  className={`text-[11px] text-black-1`}
                                />
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              {/* for small screen  */}
              {selectedName === "" && (
                <div className="w-full h-full csm:hidden justify-between flex flex-col">
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex flex-col gap-3 p-2 bg-blue-1">
                      <div className="w-full flex justify-between items-center">
                        <p className="text-[15px] font-normal text-white-1">
                          BUZZ XP
                        </p>
                        <div
                          className={`w-[12px] flex justify-center bg-white-1 items-center h-[12px]`}
                        >
                          <GoArrowUpRight
                            className={`text-[11px] text-black-1`}
                          />
                        </div>
                      </div>
                      <p className="text-[15px] font-normal text-white-1">
                        4000{" "}
                      </p>
                    </div>
                    {/* followers */}
                    <button
                      onClick={() => setSelectedName("Followers")}
                      className="flex flex-col gap-3 p-2 bg-yellow-1"
                    >
                      <div className="w-full flex justify-between items-center">
                        <p className="text-[15px] uppercase font-normal text-black-1">
                          Followers
                        </p>
                        <div
                          className={`w-[12px] flex justify-center bg-white-1 items-center h-[12px]`}
                        >
                          <GoArrowUpRight
                            className={`text-[11px] text-black-1`}
                          />
                        </div>
                      </div>
                      <p className="text-[15px] font-normal text-black-1">
                        4000{" "}
                      </p>
                    </button>
                    {/* following */}
                    <button
                      onClick={() => setSelectedName("Following")}
                      className="flex flex-col gap-3 p-2 bg-orange-1"
                    >
                      <div className="w-full flex justify-between items-center">
                        <p className="text-[15px] uppercase font-normal text-white-1">
                          Following
                        </p>
                        <div
                          className={`w-[12px] flex justify-center bg-white-1 items-center h-[12px]`}
                        >
                          <GoArrowUpRight
                            className={`text-[11px] text-black-1`}
                          />
                        </div>
                      </div>
                      <p className="text-[15px] font-normal text-white-1">
                        4000{" "}
                      </p>
                    </button>
                    {/* replies */}
                    <button
                      onClick={() => setSelectedName("Replies")}
                      className="flex flex-col gap-3 p-2 bg-[#317C85]"
                    >
                      <div className="w-full flex justify-between items-center">
                        <p className="text-[15px] uppercase font-normal text-white-1">
                          Replies
                        </p>
                        <div
                          className={`w-[12px] flex justify-center bg-white-1 items-center h-[12px]`}
                        >
                          <GoArrowUpRight
                            className={`text-[11px] text-black-1`}
                          />
                        </div>
                      </div>
                      <p className="text-[15px] font-normal text-white-1">
                        4000{" "}
                      </p>
                    </button>
                  </div>
                  {/* isconnected ---->  */}
                  <div className="w-full bg-black-1 p-2 rounded-[4px] border-[1px] border-yellow-1 flex flex-col gap-2">
                    <p className="w-full p-1 text-[12px] uppercase font-normal text-black-1 bg-yellow-1">
                      x/Twitter
                    </p>
                    <div className="w-full flex justify-between items-center p-1">
                      <p className="text-[12px] font-normal text-yellow-1 uppercase">
                        X Connected{" "}
                      </p>
                      <PiSealCheck className="text-[#80FF00] text-[21px]" />
                    </div>
                  </div>
                </div>
              )}

              {/* user - details components  */}
              {selectedName === "Followers" && (
                <Followers setSelectedItem={setSelectedName} />
              )}
              {selectedName === "Following" && (
                <Following setSelectedItem={setSelectedName} />
              )}
              {selectedName === "Replies" && (
                <Replies setSelectedItem={setSelectedName} />
              )}
              {selectedName === "Coins Launched" && (
                <CoinsLaunched setSelectedItem={setSelectedName} />
              )}
              {selectedName === "Coins held" && (
                <CoinsHeld setSelectedItem={setSelectedName} />
              )}
              {selectedName === "Buzz engage" && (
                <BuzzEngage setSelectedItem={setSelectedName} />
              )}
            </div>
          </div>
        </ComponentWrapper>
        {/* down navigation bar for small screen -------->  */}
        <div className="w-full h-[55px] justify-center items-center bg-[#262934] csm:hidden grid grid-cols-4">
          <button
            onClick={() => setSelectedName("")}
            className={`w-full boxShadow3 ${
              selectedName === "" ? "bg-purple-1" : "bg-transparent"
            }  h-full flex justify-center items-center`}
          >
            <FaRegUser
              className={`text-[30px] ${
                selectedName === "" ? "text-white-1" : "text-[#6C6C6C]"
              } `}
            />
          </button>
          <button
            onClick={() => setSelectedName("Coins Launched")}
            className={`w-full ${
              selectedName === "Coins Launched"
                ? "bg-purple-1"
                : "bg-transparent"
            } boxShadow3 h-full flex justify-center items-center`}
          >
            <IoRocketOutline
              className={`text-[30px] ${
                selectedName === "Coins Launched"
                  ? "text-white-1"
                  : "text-[#6C6C6C]"
              }`}
            />
          </button>
          <button
            onClick={() => setSelectedName("Coins held")}
            className={`w-full ${
              selectedName === "Coins held" ? "bg-purple-1" : "bg-transparent"
            } boxShadow3 h-full flex justify-center items-center`}
          >
            <LuCoins
              className={`text-[30px] ${
                selectedName === "Coins held"
                  ? "text-white-1"
                  : "text-[#6C6C6C]"
              }`}
            />
          </button>
          <button
            onClick={() => setSelectedName("Buzz engage")}
            className={`w-full ${
              selectedName === "Buzz engage" ? "bg-purple-1" : "bg-transparent"
            } boxShadow3 h-full flex justify-center items-center`}
          >
            <BsEmojiSmileFill
              className={`text-[30px] ${
                selectedName === "Buzz engage"
                  ? "text-white-1"
                  : "text-[#6C6C6C]"
              } text-[#6C6C6C]`}
            />
          </button>
        </div>
      </div>
      {/* EDIT USER PROFILE MODAL ---------------->  */}
      <CustomModal open={opened} onClose={close} size="19rem">
        <div className="w-full flex justify-center items-center">
          <div className="w-full pb-5 pt-3 max-w-[230px] flex flex-col">
            <div className="flex justify-start mt-5 mb-3 items-center gap-2 pl-4">
              <button className="text-white-1 dark:text-black-1 dark:bg-yellow-1 hover:opacity-80 font-normal text-[10px] uppercase bg-black-1 px-2 py-[2px]">
                Edit
              </button>
              <p className="text-[10px] uppercase font-normal dark:text-white-1 text-black-1">
                Your Profile
              </p>
            </div>
            {/* user pic  */}
            <div className="w-full mt-4 border-[1px] dark:border-yellow-1 border-blue-1 rounded-[2px] p-2 grid grid-cols-[71px,1fr] justify-center items-center gap-2">
              <div className="w-full h-[72px] relative">
                <Image
                  src="/assets/profile.png"
                  alt=""
                  fill
                  className="object-fill"
                />
              </div>
              <div className="flex justify-center items-center w-full flex-col gap-2">
                <p className="text-[10px] font-normal dark:text-white-1 text-black-1 uppercase">
                  Profile photo
                </p>
                <button className="text-[10px] font-normal dark:text-white-1 text-black-1 underline">
                  Edit
                </button>
              </div>
            </div>
            {/* user name */}
            <div className="w-full mt-3 rounded-[2px] border-[1px] border-blue-1 grid grid-cols-[1fr,1.4fr] px-[5px] h-[43px] justify-center items-center">
              <p className="text-[14px] uppercase font-normal dark:text-white-1 text-black-1">
                Username:
              </p>
              <input
                placeholder="insert username"
                type="text"
                className="w-full focus:outline-none dark:bg-[#1D252C] px-1 text-[10px] font-normal placeholder:text-white-1 text-white-1 uppercase h-[60%] bg-[#404040]"
                name="name"
                id="name"
              />
            </div>
            <p className="text-[8px] dark:text-yellow-1 font-normal text-[#343434] my-3">
              [you can only edit your username <br /> every 69 hours]
            </p>
            {/* Bio */}
            <div className="flex flex-col gap-1">
              <p className="text-[10px] dark:text-white-1 uppercase font-normal text-black-1">
                Bio:
              </p>
              <p className="border-[1px] rounded-[2px] dark:bg-[#1D252C] dark:text-white-1 border-blue-1 text-[10px] font-normal text-black-1 px-2 py-1">
                bio goes here. make sure it is interesting otherwise people will
                hate you.
              </p>
            </div>
            {/* buttons  */}
            <div className="w-full px-4 mt-4 flex justify-between items-center">
              <button
                onClick={close}
                className="px-3 hover:opacity-80 text-[12px] font-normal text-white-1 py-2 bg-black-1 rounded-[2px]"
              >
                \ Close
              </button>
              <button className="px-3 hover:opacity-80 hover:bg-yellow-1 hover:text-black-1 hover:dark:text-black-1 text-[12px] hover:dark:bg-yellow-1 font-normal text-white-1 py-2 dark:bg-blue-1 bg-blue-1 rounded-[2px]">
                \ Save
              </button>
            </div>
          </div>
        </div>
      </CustomModal>
      <div className="w-full csm:block hidden">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default ProfilePage;

const userDetails = [
  {
    name: "Followers",
    value: "12",
  },
  {
    name: "Following",
    value: "12",
  },
  {
    name: "Replies",
    value: "15",
  },
  {
    name: "Coins Launched",
    value: "1",
  },
  {
    name: "Coins held",
    value: "8",
  },
  {
    name: "Buzz engage",
    value: "8",
  },
];
