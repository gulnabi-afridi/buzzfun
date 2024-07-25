import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col max-w-[1350px] mt-4 px-4 py-3 dark:bg-black-1 bg-white-1 border-[1px] border-[#000B6D] rounded-[5px]">
        <div className="w-full grid gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[1fr,1fr,40px,1fr]">
          {/* 1st col ------>  */}
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[500px] flex flex-col gap-3">
              {/* 1st portion */}
              <div className="w-full flex flex-col">
                {/* header */}
                <div className="w-full bg-[#317C85] p-2 flex justify-center items-center gap-2">
                  <p className="text-[18px] sm:text-[20px] text-white-1 font-montserrat bg-black-1 px-2">
                    #2
                  </p>
                  <p className="text-black-1 sm:block hidden text-[20px]">
                    {pattern1}
                  </p>
                  <p className="text-black-1 sm:hidden block text-[20px]">
                    {pattern12}
                  </p>
                </div>
                <div className="w-full shadow2 bg-[#317C85] p-2 grid gap-3 grid-cols-[150px,1fr]">
                  <div className="w-full h-full relative">
                    <Image src="/assets/token1.svg" alt="" fill />
                  </div>
                  <div className="w-full sm:flex-row flex-col flex gap-1">
                    <div className="w-full flex flex-col gap-2">
                      <div className="w-full gap-1 px-1 bg-purple-1 flex justify-start items-center py-1">
                        <p className="text-[12px] text-white-1 font-normal">
                          Creator:
                        </p>
                        <Image
                          src="/assets/collector.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] text-white-1 uppercase font-normal">
                          user name
                        </p>
                      </div>
                      <div className="w-full gap-1 bg-orange-1 flex justify-start px-1 items-center py-1">
                        <p className="text-[12px] text-white-1 font-normal">
                          Market cap: 45.3K [rank:2]
                        </p>
                      </div>
                      <div className="w-full gap-1 px-1 bg-white-1 flex justify-start items-center py-1">
                        <p className="text-[12px] text-black-1 font-normal">
                          Replies: 45
                        </p>
                      </div>
                      <div className="w-full gap-1 px-1 bg-black-1 flex justify-start items-center py-1">
                        <p className="text-[12px] text-white-1 font-normal">
                          Name: Pink Hood Frog...
                        </p>
                      </div>
                      <div className="w-full gap-1 bg-purple-1 px-1 flex justify-start items-center py-1">
                        <p className="text-[12px] text-white-1 font-normal">
                          Ticker: Froglic
                        </p>
                      </div>
                    </div>
                    <p className="w-fit bg-orange-1 py-3 sm:flex hidden font-courier px-1 justify-start text-[20px] font-semibold items-center verticalOr">
                      BUZZING
                    </p>
                    <p className="w-full bg-orange-1 py-[2px] sm:hidden font-courier px-1 flex justify-start text-[18px] sm:text-[20px] font-semibold items-center">
                      BUZZING
                    </p>
                  </div>
                </div>
              </div>
              {/* 2nd portion */}
              <div className="w-full my-1 bg-orange-1 flex justify-center items-center px-2 h-[42px]">
                <p className="text-[13px] text-black-1 font-normal">{text}</p>
              </div>
              {/* 3rd portion */}
              <div className="w-full flex flex-col">
                {/* header */}
                <div className="w-full bg-black-3 p-2 flex justify-center items-center gap-2">
                  <p className="text-[18px] sm:text-[20px] text-white-1 font-montserrat bg-black-1 px-2">
                    #3
                  </p>
                  <p className="text-white-1 sm:block hidden text-[20px]">
                    {pattern2}
                  </p>
                  <p className="text-white-1 sm:hidden block text-[20px]">
                    {pattern21}
                  </p>
                </div>
                <div className="w-full shadow2 bg-black-3 p-2 grid gap-3 grid-cols-[150px,1fr]">
                  <div className="w-full h-full relative">
                    <Image src="/assets/token2.svg" alt="" fill />
                  </div>
                  <div className="w-full sm:flex-row flex-col flex gap-1">
                    <div className="w-full flex flex-col gap-2">
                      <div className="w-full gap-1 px-1 bg-purple-1 flex justify-start items-center py-1">
                        <p className="text-[12px] text-white-1 font-normal">
                          Creator:
                        </p>
                        <Image
                          src="/assets/collector.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] text-white-1 uppercase font-normal">
                          user name
                        </p>
                      </div>
                      <div className="w-full gap-1 bg-orange-1 flex justify-start px-1 items-center py-1">
                        <p className="text-[12px] text-white-1 font-normal">
                          Market cap: 45.3K [rank:2]
                        </p>
                      </div>
                      <div className="w-full gap-1 px-1 bg-white-1 flex justify-start items-center py-1">
                        <p className="text-[12px] text-black-1 font-normal">
                          Replies: 45
                        </p>
                      </div>
                      <div className="w-full gap-1 px-1 bg-black-1 flex justify-start items-center py-1">
                        <p className="text-[12px] text-white-1 font-normal">
                          Name: Pink Hood Frog...
                        </p>
                      </div>
                      <div className="w-full gap-1 bg-purple-1 px-1 flex justify-start items-center py-1">
                        <p className="text-[12px] text-white-1 font-normal">
                          Ticker: Froglic
                        </p>
                      </div>
                    </div>
                    <p className="w-fit bg-white-1 text-black-1 py-3 font-courier px-1 hidden sm:flex justify-start text-[20px] font-semibold items-center verticalOr">
                      BUZZING
                    </p>
                    <p className="w-full bg-white-1 text-black-1 py-[2px] font-courier px-1 flex sm:hidden justify-start text-[18px] font-semibold items-center">
                      BUZZING
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd col ------>  */}
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[500px] bg-yellow-1 navibarCardSh rounded-[5px] flex flex-col p-3">
              {/* 1st portiom */}
              <div className="flex mt-1 justify-center gap-1 items-center px-1 bg-black-1">
                <p className="text-yellow-1">#1</p>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
                  return (
                    <Image
                      key={index}
                      src="/assets/pattern3.svg"
                      width={15}
                      height={15}
                      alt=""
                    />
                  );
                })}
              </div>
              {/* 2nd portion */}
              <div className="w-full justify-center grid grid-cols-[6px,1fr] sm:grid-cols-[10px,1fr] items-center gap-1 sm:gap-2">
                <div className="w-full h-[70%] bg-black-1"></div>
                <h2 className="uppercase text-[50px] sm:text-[60px] font-normal text-black-1">
                  BUzz King
                </h2>
              </div>
              {/* 3rd portion */}
              <div className="w-full h-[40px] sm:h-[50px] relative">
                <Image src="/assets/downArrows.svg" alt="" fill />
              </div>
              {/* 4rth portion  */}
              <div className="w-full mt-3 sm:mt-4 flex gap-2 rounded-[5px] flex-col bg-yellow-1 p-2 shadow3">
                <div className="w-full flex flex-col">
                  <div className="w-full bg-transparent grid gap-3 grid-cols-[150px,1fr]">
                    <div className="w-full h-full relative">
                      <Image src="/assets/token3.svg" alt="" fill />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div className="w-full gap-1 px-1 bg-transparent flex justify-start items-center py-1">
                        <p className="text-[12px] text-black-1 font-normal">
                          Creator by:
                        </p>
                        <Image
                          src="/assets/collector.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] text-black-1 uppercase font-normal">
                          user name
                        </p>
                      </div>
                      <div className="w-full gap-1 bg-orange-1 flex justify-start px-1 items-center py-1">
                        <p className="text-[12px] text-white-1 font-normal">
                          Market cap: 45.3K [rank:2]
                        </p>
                      </div>
                      <div className="w-full gap-1 px-1 bg-blue-2 flex justify-start items-center py-1">
                        <p className="text-[12px] text-white-1 font-normal">
                          Replies: 45
                        </p>
                      </div>
                      <div className="w-full gap-1 px-1 bg-black-1 flex justify-start items-center py-1">
                        <p className="text-[12px] text-white-1 font-normal">
                          Name:: Pink Hood Fro...
                        </p>
                      </div>
                      <div className="w-full gap-1 bg-transparent px-1 flex justify-start items-center py-1">
                        <p className="text-[12px] text-black-1 font-normal">
                          Ticker: Froglic
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="bg-[#194348] text-[12px] font-normal text-white-1 p-2 rounded-[5px]">
                  Description: lorem ipsum talkem sumit here making it cool and
                  reassruing and no rugginess for sure makin it based, yeah.
                  innt. lorem ipsum talkem sumit here making it cool and
                  reassruing and no rugginess for sure makin it based, yeah.
                  innt.
                </p>
                <button className="w-full font-courier hover:opacity-80 bg-black-1 rounded-[5px] text-[12px] h-[35px] text-white-1 font-semibold">
                  Ape Now
                </button>
              </div>
            </div>
          </div>
          {/* 3rd col -----> */}
          <div className="2xl:flex hidden my-2 justify-center items-center gap-2">
            <div className="w-[8px] h-full bg-blue-2"></div>
            <div className="w-[8px] h-full bg-orange-1"></div>
            <div className="w-[8px] h-full bg-purple-1"></div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[500px] rounded-[5px] bg-black-1 relative min-h-[540px] h-full">
              <Image src="/assets/3rdCol.png" fill alt="" />
            </div>
          </div>
        </div>
        {/* down section */}
        <div className="w-full px-3 bg-blue-2 py-3 flex justify-between gap-2 items-center mt-3 sm:mt-6">
          <p className="text-black-1 text-[10px] font-normal">{pattern3}</p>
          <p className="text-white-1 uppercase py-[2px] rounded-md font-semibold font-montserrat text-[10px] bg-black-1 px-2">
            minimise ^^
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const text = "//YOU ARE A WINNER!¯_(ツ)_/¯_YOU ARE A WINNER!\\";
const pattern1 = ">>>>>>>>>>>>>>>>>>>>>>>>>>";
const pattern12 = ">>>>>>>>>>>>>";
const pattern2 = "<<<<<<<<<<<<<<<<<<<<<<<<<<";
const pattern21 = "<<<<<<<<<<<<<";
const pattern3 =
  "/////////////////////////////////#######( .  Y . )#######********}}}}}}}[][][L][F][G][][][0]******_______¯_(ツ)_/¯_________8==============D";
