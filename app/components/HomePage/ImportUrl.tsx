"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const ImportUrl: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div></div>;

  return (
    <div className="w-full my-5 flex justify-center items-center">
      <div className="w-full max-w-[1350px] dark:bg-black-1 bg-white-1 p-3 flex justify-center items-center gap-2">
        <Image
          src={
            resolvedTheme === "dark"
              ? "/assets/emoji2.png"
              : "/assets/emoji.png"
          }
          alt=""
          width={33}
          height={33}
        />
        <p className="text-[12px] font-normal dark:text-white-1 text-black-1">
          {pattern1}
        </p>
      </div>
    </div>
  );
};

export default ImportUrl;

const pattern1 =
  '//import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; Degen420690.exe\\{}..**//Standby; {Ultra deployments in progress} bool = True. Super community loading..Airdrop pending. {**';
