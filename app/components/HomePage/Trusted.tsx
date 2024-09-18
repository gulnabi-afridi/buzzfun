"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Trusted: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>(
    trustedData[0]?.img
  );

  const [selectedContent, setSelectedContent] = useState<any>(
    trustedData[0]?.content
  );

  const handleImageClick = (
    imageSrc: string,
    content?: {
      name?: string;
      userName?: string;
      des?: string;
      message?: string;
    }
  ) => {
    setSelectedImage(imageSrc);
    setSelectedContent(content || null);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div
        className={`w-full max-w-[1200px] border-[1px] rounded-[5px] border-yellow-1/50 flex mt-5 csm:mt-8 flex-col tableShadow dark:forDarkShadow gap-4 sm:gap-7 dark:bg-[#0E161C] bg-white-1 p-3 csm:p-5 `}
      >
        {/* top section */}
        <div className="flex w-full py-2 dark:bg-black-1 px-2 bg-black-1 gap-4 justify-center items-center">
          <p className="text-[40px] uppercase text-white-1">
            <span className="text-orange-1  ">{`//// `}</span>
            thrusted and <span className="text-yellow-1"> backed</span> by{" "}
            <span className="text-orange-1"> gegens</span> {`/////*`}
          </p>
        </div>
        {/* down section */}
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[700px] cxl:max-w-full grid justify-center items-center grid-cols-1 cxl:grid-cols-[.9fr,1fr] gap-4 csm:gap-6">
            {/* 1st col  */}
            <div className="w-full csm:order-1 order-2 grid gap-4 csm:gap-6 h-fit grid-cols-3 sm:grid-cols-4 csm:grid-cols-3">
              {trustedData.map((item, index) => (
                <button
                  key={index}
                  className="w-full h-[90px] csm:h-[150px] relative"
                  onClick={() => handleImageClick(item.img, item.content)}
                >
                  <Image src={item.img} fill alt="" />
                </button>
              ))}
            </div>
            {/* 2nd col  */}
            <div className="w-full bg-yellow-1 csm:bg-black-1 border-[1px] rounded-[5px] border-white-1/50 csm:order-2 order-1 boxShadow2 gap-3 justify-between flex flex-col p-2">
              <div className="grid grid-cols-[130px,calc(100%-130px)] csm:grid-cols-[250px,calc(100%-250px)] gap-2">
                <div className="w-full max-w-[250px] h-[130px] csm:h-full relative">
                  {selectedImage && <Image src={selectedImage} fill alt="" />}
                </div>
                <div className="w-full flex flex-col pr-2 gap-2 csm:gap-4">
                  {selectedContent && (
                    <>
                      {selectedContent.name && (
                        <p className="text-[17px] csm:text-[34px] leading-[40px] py-[0px] csm:py-2 text-white-1 bg-black-1 font-normal px-4 csm:px-5 w-fit">
                          {selectedContent.name}
                        </p>
                      )}
                      {selectedContent.userName && (
                        <p className="text-[12px] csm:text-[23px] text-white-1 bg-black-1 font-normal px-3 csm:px-5 w-fit">
                          {selectedContent.userName}
                        </p>
                      )}
                      {selectedContent.des && (
                        <p className="text-[10px] leading-0 csm:text-[14px] text-white-1 py-[0px] csm:py-[6px] break-words bg-black-1 font-normal px-3 csm:px-5 w-fit">
                          {selectedContent.des}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
              {selectedContent?.message && (
                <p className="w-full text-[21px] csm:text-[40px] px-2 bg-black-1 py-1 csm:py-3 text-white-1 flex justify-start items-center leading-[40px]">
                  {selectedContent.message}
                </p>
              )}
            </div>
          </div>
        </div>
        {/* last section */}
        <div className="flex justify-center items-center gap-2">
          <div className="min-w-[32px] min-h-[32px] relative">
            <Image src="/assets/emoji2.png" alt="" fill />
          </div>
          <p className="text-[10px] csm:text-[12px] font-normal dark:text-white-1 text-black-1">
            {pattern3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trusted;

const pattern3 =
  "//marketing and brand ambassadors for Buzzdotfun. We work closely with our partners to ensure we are providing a service that is powerful. ";

const trustedData = [
  {
    img: "/assets/trusted1.png",
    content: {
      name: "Sibel",
      userName: "@sibeleth",
      des: "Founder @nftftc | Advisor @artyfact_game & Ambassador @planetrefi & @Solchatcoin | I am a girl, not ur bro | Tweets are NFA | ONLY Telegram: “ethsibel”",
      message: "I am not ur bro.",
    },
  },
  {
    img: "/assets/trusted1.png",
    content: {
      name: "Sibel 2",
      userName: "@default1",
      des: "Founder @nftftc | Advisor @artyfact_game & Ambassador @planetrefi & @Solchatcoin | I am a girl, not ur bro | Tweets are NFA | ONLY Telegram: “ethsibel”",

      message: "Default message for image 1.",
    },
  },
  {
    img: "/assets/trusted2.png",
    content: {
      name: "Sibel 3",
      userName: "@default2",
      des: "Founder @nftftc | Advisor @artyfact_game & Ambassador @planetrefi & @Solchatcoin | I am a girl, not ur bro | Tweets are NFA | ONLY Telegram: “ethsibel”",

      message: "Default message for image 2.",
    },
  },
  {
    img: "/assets/trusted1.png",
    content: {
      name: "Sibel 4",
      userName: "@default3",
      des: "Founder @nftftc | Advisor @artyfact_game & Ambassador @planetrefi & @Solchatcoin | I am a girl, not ur bro | Tweets are NFA | ONLY Telegram: “ethsibel”",

      message: "Default message for image 3.",
    },
  },
  {
    img: "/assets/trusted1.png",
    content: {
      name: "Sibel 5",
      userName: "@default4",
      des: "Founder @nftftc | Advisor @artyfact_game & Ambassador @planetrefi & @Solchatcoin | I am a girl, not ur bro | Tweets are NFA | ONLY Telegram: “ethsibel”",

      message: "Default message for image 4.",
    },
  },
  {
    img: "/assets/trusted1.png",
    content: {
      name: "Sibel 6",
      userName: "@default5",
      des: "Founder @nftftc | Advisor @artyfact_game & Ambassador @planetrefi & @Solchatcoin | I am a girl, not ur bro | Tweets are NFA | ONLY Telegram: “ethsibel”",

      message: "Default message for image 5.",
    },
  },
];
