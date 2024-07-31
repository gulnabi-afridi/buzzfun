"use client";

import React, { useState } from "react";
import ComponentWrapper from "../components/shared/layout/ComponentWrapper";
import { IoIosArrowDown } from "react-icons/io";

const BeastMode = () => {
  const [fileName, setFileName] = useState<string>("no file chosen");
  const [taxOption, setTaxOption] = useState<string>("option1");
  const [isExpanded, setIsExpended] = useState(false);
  const [mediumPhaseExtended, setMediumPhaseExtended] = useState(false);
  const [higherPhaseExtended, sethigherPhaseExtended] = useState(false);
  const [liveChat, setLiveChat] = useState(false);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("no file chosen");
    }
  };

  return (
    <ComponentWrapper style="bg-white-2">
      <div className="w-full py-10 flex justify-center items-center">
        <div className="w-full min-h-[calc(100vh-250px)] max-w-[650px] flex gap-6 flex-col justify-center items-start">
          <p className="text-[45px] font-normal text-black-1 leading-[40px] uppercase">
            beast <br /> MODE
          </p>
          <div className="flex bg-white-1 justify-center py-8 items-center w-full">
            <div className="w-full max-w-[500px] gap-7 flex flex-col">
              {/* name  */}
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[18px] uppercase text-black-1 font-normal"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Insert name here"
                  className="placeholder:text-[#6D6D6D] text-black-1 border-[1px] h-[40px] text-[12px] focus:outline-0 px-3 border-black-1  w-full font-normal"
                />
              </div>
              {/* ticker  */}
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[18px] uppercase text-black-1 font-normal"
                >
                  Ticker
                </label>
                <input
                  type="text"
                  placeholder="Insert ticker here"
                  className="placeholder:text-[#6D6D6D] text-black-1 border-[1px] h-[40px] text-[12px] focus:outline-0 px-3 border-black-1  w-full font-normal"
                />
              </div>
              {/* image   */}
              <div className="justify-center items-center px-2 border-[1px] border-black-1 h-[50px] grid grid-cols-[98px,calc(100%-98px)]">
                <label className="flex justify-center border-[1px] border-black-1 py-1 items-center cursor-pointer">
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <p className="text-[14px] font-normal text-black-1">
                    / Select
                  </p>
                </label>
                <p
                  className={`text-[12px] ${
                    fileName === "no file chosen"
                      ? "text-[#6D6D6D]"
                      : "text-black-1"
                  } font-normal pl-3`}
                >
                  {fileName}
                </p>
              </div>
              {/* description   */}
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[18px] uppercase text-black-1 font-normal"
                >
                  Description
                </label>
                <textarea
                  placeholder="write something interesting here or people will probably still buy. "
                  className="placeholder:text-[#6D6D6D] text-black-1 border-[1px] min-h-[60px] text-[12px] focus:outline-0 px-3 py-2 border-black-1  w-full font-normal"
                />
              </div>
              {/* show more options button */}
              <button
                onClick={() => setIsExpended(!isExpanded)}
                className="flex justify-start items-center gap-3"
              >
                <p className="text-[18px] font-normal text-black-1 uppercase">
                  Show More options
                </p>
                <IoIosArrowDown
                  className={`${
                    isExpanded ? "rotate-180" : "rotate-0"
                  } text-black-1 duration-300 text-[24px]`}
                />
              </button>
              {isExpanded && (
                <div className={`flex flex-col gap-7`}>
                  {/* twitter link  */}
                  <div className="flex w-full flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[18px] uppercase text-black-1 font-normal"
                    >
                      Twitter Link
                    </label>
                    <input
                      type="text"
                      placeholder="(optional)"
                      className="placeholder:text-[#6D6D6D] text-black-1 border-[1px] h-[40px] text-[12px] focus:outline-0 px-3 border-black-1  w-full font-normal"
                    />
                  </div>
                  {/* telegram link  */}
                  <div className="flex w-full flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[18px] uppercase text-black-1 font-normal"
                    >
                      Telegram Link
                    </label>
                    <input
                      type="text"
                      placeholder="(optional)"
                      className="placeholder:text-[#6D6D6D] text-black-1 border-[1px] h-[40px] text-[12px] focus:outline-0 px-3 border-black-1  w-full font-normal"
                    />
                  </div>
                  {/* website link  */}
                  <div className="flex w-full flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[18px] uppercase text-black-1 font-normal"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      placeholder="(optional)"
                      className="placeholder:text-[#6D6D6D] text-black-1 border-[1px] h-[40px] text-[12px] focus:outline-0 px-3 border-black-1  w-full font-normal"
                    />
                  </div>
                </div>
              )}
              {/* create a coin button */}
              <div className="w-full flex justify-center items-center">
                <button className="w-full max-w-[380px] justify-center bg-blue-1 items-center text-white-1 uppercase text-[18px] font-normal h-[40px]">
                  Create coin
                </button>
              </div>

              {/* CHAT  ---->  */}
              <div className="w-full gap-2 flex flex-col p-3 border-[1px] border-[#B88E5B] rounded-[2px]">
                <p className="uppercase text-[18px] font-normal text-black-1">
                  Chat
                </p>
                <p className="text-[14px] font-normal text-black-1">
                  Enable community growth on buzz(dot)fun and create your own
                  live chat that others can subscribe to for 0.005ETH.
                </p>
                <div className="w-full grid grid-cols-2 gap-2">
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => setLiveChat(true)}
                      className="min-w-[25px] h-[25px] border-[1px] border-black-1 p-[1px]"
                    >
                      {liveChat && (
                        <div className="w-full h-full bg-[red]"></div>
                      )}
                    </button>
                    <p
                      onClick={() => setLiveChat(true)}
                      className="text-[14px] font-normal text-black-1"
                    >
                      Yes, I want a live chat.
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => setLiveChat(false)}
                      className="min-w-[25px] h-[25px] border-[1px] border-black-1 p-[1px]"
                    >
                      {!liveChat && (
                        <div className="w-full h-full bg-[yellow]"></div>
                      )}
                    </button>
                    <p
                      onClick={() => setLiveChat(false)}
                      className="text-[14px] font-normal text-black-1"
                    >
                      Na, I don’t want a live chat.
                    </p>
                  </div>
                </div>
              </div>

              {/* TAX  ---->  */}
              <div className="w-full gap-2 flex flex-col p-3 border-[1px] border-red-1 rounded-[2px]">
                <p className="uppercase text-[18px] font-normal text-black-1">
                  TAX
                </p>
                <div className="flex flex-col gap-4">
                  {/* option 1 */}
                  <button onClick={()=>setTaxOption('option1')} className="flex justify-start items-center gap-4">
                    <div className="min-w-[25px] h-[25px] border-[1px] border-black-1 p-[1px]">
                      {taxOption === "option1" && (
                        <div className="w-full h-full bg-[red]"></div>
                      )}
                    </div>
                    <div className="flex flex-col justify-start items-start">
                      <p className="text-[14px] font-normal text-black-1">
                        [Option 1]
                      </p>
                      <ul className="pl-6 list-disc">
                        <li className="text-[14px] font-normal text-black-1">
                          No Tax.
                        </li>
                      </ul>
                    </div>
                  </button>
                  {/* option 2 */}
                  <div className="flex flex-col gap-2">
                    <div className="w-full flex justify-between items-center">
                      <button
                      onClick={()=>setTaxOption('option2')}
                      className="flex justify-start items-center gap-4">
                        <div className="min-w-[25px] h-[25px] border-[1px] border-black-1 p-[1px]">
                          {taxOption === "option2" && (
                            <div className="w-full h-full bg-[red]"></div>
                          )}
                        </div>
                        <div className="flex flex-col justify-start items-start">
                          <p className="text-[14px] font-normal text-black-1">
                            [Option 2]
                          </p>
                          <ul className="pl-6 list-disc">
                            <li className="text-[14px] font-normal text-black-1">
                              Medium Tax
                            </li>
                          </ul>
                        </div>
                      </button>
                      <button
                        onClick={() =>
                          setMediumPhaseExtended(!mediumPhaseExtended)
                        }
                        className="flex justify-center items-center gap-2"
                      >
                        <p className="text-[11px] font-normal text-black-1">
                          Show Details
                        </p>
                        <IoIosArrowDown
                          className={`${
                            mediumPhaseExtended ? "rotate-180" : "rotate-0"
                          } duration-300 text-[25px] text-black-1`}
                        />
                      </button>
                    </div>
                    {/* option details ---> */}
                    {mediumPhaseExtended && (
                      <div className="flex flex-col gap-3">
                        {/* phase 1 */}
                        <div className="flex flex-col gap-1">
                          <p className="text-black-1 w-fit text-[12px] bg-yellow-1 font-normal">
                            Phase 1
                          </p>
                          <ul className="list-disc pl-6">
                            <li className="text-[12px] font-normal text-black-1">
                              5% launch tax 15 mins (0 to 15mins post LP
                              provision)
                            </li>
                          </ul>
                          <div className="flex flex-col gap-1">
                            <p className="text-[12px] font-normal text-black-1">
                              Allocation:
                            </p>
                            <ul className="list-disc pl-6">
                              <li className="text-[12px] font-normal text-black-1">
                                50% to Buzz LP wallet. Creator to receive 1.75x
                                XP.{" "}
                              </li>
                              <li className="text-[12px] font-normal text-black-1">
                                50% to Creator for marketing.{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* phase 2 */}
                        <div className="flex flex-col gap-1">
                          <p className="text-white-1 w-fit text-[12px] bg-blue-1 font-normal">
                            Phase 2
                          </p>
                          <ul className="list-disc pl-6">
                            <li className="text-[12px] font-normal text-black-1">
                              5% launch tax 15 mins (0 to 15mins post LP
                              provision)
                            </li>
                          </ul>
                          <div className="flex flex-col gap-1">
                            <p className="text-[12px] font-normal text-black-1">
                              Allocation:
                            </p>
                            <ul className="list-disc pl-6">
                              <li className="text-[12px] font-normal text-black-1">
                                50% to Buzz LP wallet. Creator to receive 1.75x
                                XP.{" "}
                              </li>
                              <li className="text-[12px] font-normal text-black-1">
                                50% to Creator for marketing.{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* phase 3 */}
                        <div className="flex flex-col gap-1">
                          <p className="text-white-1 w-fit text-[12px] bg-black-1 font-normal">
                            Phase 3
                          </p>
                          <ul className="list-disc pl-6">
                            <li className="text-[12px] font-normal text-black-1">
                              0/0 at 60 mins post LP provision.
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* option 3 */}
                  <div className="flex flex-col gap-2">
                    <div className="w-full flex justify-between items-center">
                      <button
                      onClick={()=>setTaxOption('option3')}
                      className="flex justify-start items-center gap-4">
                        <div className="min-w-[25px] h-[25px] border-[1px] border-black-1 p-[1px]">
                          {taxOption === "option3" && (
                            <div className="w-full h-full bg-[red]"></div>
                          )}
                        </div>
                        <div className="flex flex-col justify-start items-start">
                          <p className="text-[14px] font-normal text-black-1">
                            [Option 3]
                          </p>
                          <ul className="pl-6 list-disc">
                            <li className="text-[14px] font-normal text-black-1">
                              Higher Tax
                            </li>
                          </ul>
                        </div>
                      </button>
                      <button
                        onClick={() =>
                          sethigherPhaseExtended(!higherPhaseExtended)
                        }
                        className="flex justify-center items-center gap-2"
                      >
                        <p className="text-[11px] font-normal text-black-1">
                          Show Details
                        </p>
                        <IoIosArrowDown
                          className={`${
                            higherPhaseExtended ? "rotate-180" : "rotate-0"
                          } duration-300 text-[25px] text-black-1`}
                        />
                      </button>
                    </div>
                    {/* option details ---> */}
                    {higherPhaseExtended && (
                      <div className="flex flex-col gap-3">
                        {/* phase 1 */}
                        <div className="flex flex-col gap-1">
                          <p className="text-black-1 w-fit text-[12px] bg-yellow-1 font-normal">
                            Phase 1
                          </p>
                          <ul className="list-disc pl-6">
                            <li className="text-[12px] font-normal text-black-1">
                              5% launch tax 15 mins (0 to 15mins post LP
                              provision)
                            </li>
                          </ul>
                          <div className="flex flex-col gap-1">
                            <p className="text-[12px] font-normal text-black-1">
                              Allocation:
                            </p>
                            <ul className="list-disc pl-6">
                              <li className="text-[12px] font-normal text-black-1">
                                50% to Buzz LP wallet. Creator to receive 1.75x
                                XP.{" "}
                              </li>
                              <li className="text-[12px] font-normal text-black-1">
                                50% to Creator for marketing.{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* phase 2 */}
                        <div className="flex flex-col gap-1">
                          <p className="text-white-1 w-fit text-[12px] bg-blue-1 font-normal">
                            Phase 2
                          </p>
                          <ul className="list-disc pl-6">
                            <li className="text-[12px] font-normal text-black-1">
                              5% launch tax 15 mins (0 to 15mins post LP
                              provision)
                            </li>
                          </ul>
                          <div className="flex flex-col gap-1">
                            <p className="text-[12px] font-normal text-black-1">
                              Allocation:
                            </p>
                            <ul className="list-disc pl-6">
                              <li className="text-[12px] font-normal text-black-1">
                                50% to Buzz LP wallet. Creator to receive 1.75x
                                XP.{" "}
                              </li>
                              <li className="text-[12px] font-normal text-black-1">
                                50% to Creator for marketing.{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* phase 3 */}
                        <div className="flex flex-col gap-1">
                          <p className="text-white-1 w-fit text-[12px] bg-black-1 font-normal">
                            Phase 3
                          </p>
                          <ul className="list-disc pl-6">
                            <li className="text-[12px] font-normal text-black-1">
                              0/0 at 60 mins post LP provision.
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default BeastMode;
