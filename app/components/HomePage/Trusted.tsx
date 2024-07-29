"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";


const Trusted: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>(
    trustedData[0]?.img
  );
  const { setTheme, resolvedTheme } = useTheme();

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
      <div className={`w-full max-w-[1200px] flex mt-6 flex-col border-[1px] border-transparent dark:border-white-1 gap-7 dark:bg-black-1 bg-white-1 p-5 ${resolvedTheme === 'dark'?'forDarkShadow':'tableShadow'}`}>
        {/* top section */}
        <div className="flex w-full py-2 dark:bg-[#253039] bg-black-1 gap-4 justify-center items-center">
          <p className="text-[40px] uppercase leading-[48px] font-normal text-orange-1">
            {pattern1}
          </p>
          <p className="uppercase text-[40px] leading-[48px] dark:bg-black-1 bg-yellow-1 dark:text-yellow-1 text-black-1 font-normal">
            Backed
          </p>
          <p className="text-[40px] uppercase leading-[48px] font-normal text-orange-1">
            {pattern2}
          </p>
        </div>
        {/* down section */}
        <div className="w-full grid grid-cols-[.9fr,1fr] gap-6">
          {/* 1st col  */}
          <div className="w-full grid gap-6 grid-cols-4 h-full">
            {trustedData.map((item, index) => (
              <button
                key={index}
                className="w-full h-[110px] relative"
                onClick={() => handleImageClick(item.img, item.content)}
              >
                <Image src={item.img} fill alt="" />
              </button>
            ))}
          </div>
          {/* 2nd col  */}
          <div className="w-full bg-yellow-1 boxShadow2 gap-3 justify-between flex flex-col p-2">
            <div className="grid grid-cols-[250px,calc(100%-250px)] gap-2">
              <div className="w-full h-full relative">
                {selectedImage && <Image src={selectedImage} fill alt="" />}
              </div>
              <div className="w-full flex flex-col pr-2 gap-4">
                {selectedContent && (
                  <>
                    {selectedContent.name && (
                      <p className="text-[34px] leading-[40px] py-2 text-white-1 bg-black-1 font-normal px-5 w-fit">
                        {selectedContent.name}
                      </p>
                    )}
                    {selectedContent.userName && (
                      <p className="text-[23px] text-white-1 bg-black-1 font-normal px-5 w-fit">
                        {selectedContent.userName}
                      </p>
                    )}
                    {selectedContent.des && (
                      <p className="text-[14px] text-white-1 py-[6px] break-words bg-black-1 font-normal px-5 w-fit">
                        {selectedContent.des}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
            {selectedContent?.message && (
              <p className="w-full text-[40px] bg-black-1 py-3 text-white-1 flex justify-start items-center leading-[40px]">
                {selectedContent.message}
              </p>
            )}
          </div>
        </div>
        {/* last section */}
        <div className="flex justify-center items-center gap-2">
          <Image src="/assets/emoji2.png" alt="" width={32} height={34} />
          <p className="text-[12px] font-normal dark:text-white-1 text-black-1">{pattern3}</p>
        </div>
      </div>
    </div>
  );
};

export default Trusted;

const pattern1 = "/////// Trusted and";
const pattern2 = "by Degens \\\\\\\\\\\\\\*";
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
  {
    img: "/assets/trusted1.png",
    content: {
      name: "Sibel 7",
      userName: "@default6",
      des: "Founder @nftftc | Advisor @artyfact_game & Ambassador @planetrefi & @Solchatcoin | I am a girl, not ur bro | Tweets are NFA | ONLY Telegram: “ethsibel”",

      message: "Default message for image 6.",
    },
  },
  {
    img: "/assets/trusted2.png",
    content: {
      name: "Sibel 8",
      userName: "@default7",
      des: "Founder @nftftc | Advisor @artyfact_game & Ambassador @planetrefi & @Solchatcoin | I am a girl, not ur bro | Tweets are NFA | ONLY Telegram: “ethsibel”",

      message: "Default message for image 7.",
    },
  },
  {
    img: "/assets/trusted1.png",
    content: {
      name: "Sibel 9",
      userName: "@default8",
      des: "Founder @nftftc | Advisor @artyfact_game & Ambassador @planetrefi & @Solchatcoin | I am a girl, not ur bro | Tweets are NFA | ONLY Telegram: “ethsibel”",

      message: "Default message for image 8.",
    },
  },
  {
    img: "/assets/trusted1.png",
    content: {
      name: "Sibe 10",
      userName: "@default9",
      des: "Founder @nftftc | Advisor @artyfact_game & Ambassador @planetrefi & @Solchatcoin | I am a girl, not ur bro | Tweets are NFA | ONLY Telegram: “ethsibel”",

      message: "Default message for image 9.",
    },
  },
  {
    img: "/assets/trusted1.png",
    content: {
      name: "Sibel 11",
      userName: "@default10",
      des: "Founder @nftftc | Advisor @artyfact_game & Ambassador @planetrefi & @Solchatcoin | I am a girl, not ur bro | Tweets are NFA | ONLY Telegram: “ethsibel”",

      message: "Default message for image 10.",
    },
  },
  {
    img: "/assets/trusted1.png",
    content: {
      name: "Sibel 123",
      userName: "@default11",
      des: "Founder @nftftc | Advisor @artyfact_game & Ambassador @planetrefi & @Solchatcoin | I am a girl, not ur bro | Tweets are NFA | ONLY Telegram: “ethsibel”",

      message: "Default message for image 11.",
    },
  },
];
