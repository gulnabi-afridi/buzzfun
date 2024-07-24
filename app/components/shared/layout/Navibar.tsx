import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Navibar: React.FC = () => {
  return (
    <div className="w-full bg-white-2 px-5 flex justify-between items-center h-[65px]">
      {/* left portion */}
      <div className="flex justify-center items-center gap-6">
        <div className="w-[193px] mr-8 h-[53px] relative">
          <Image src="/assets/logo.svg" className="object-fill" fill alt="" />
        </div>
        <div className="flex justify-center items-center gap-3">
          {socialLinks.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.path}
                className="w-[28px] hover:opacity-80 h-[28px] rounded-[1px] flex justify-center items-center bg-blue-1"
              >
                <Image src={item.name} alt="" width={20} height={22}></Image>
              </Link>
            );
          })}
        </div>
        <div className="bg-white-1 flex justify-center items-center px-2 py-1 navibarCardSh rounded-[2px] gap-2">
          <Image
            src="/assets/green.svg"
            className="object-fill"
            alt=""
            width={22}
            height={22}
          />
          <Image
            src="/assets/coinIcon.svg"
            className="object-fill"
            alt=""
            width={19}
            height={19}
          />
          <p className="font-montserrat text-black-1 text-[10px] font-normal">
            Rambo <span className="font-semibold"> bought</span> 0.1 ETH of X
            coin{" "}
          </p>
          <Image
            src="/assets/coin.svg"
            alt=""
            className="object-fill"
            width={19}
            height={19}
          />
        </div>
      </div>

      {/* right portion */}
      <div className="flex justify-center items-center gap-2">
        <div className="flex justify-center navibarCardSh bg-blue-1 rounded-[2px] px-2 py-1  items-center gap-4">
          <p className="text-[10px] uppercase font-normal text-white-1">
            {" "}
            <span className="bg-black-1 uppercase p-[2px] mr-1">
              {" "}
              $BUZZ airdrop{" "}
            </span>{" "}
            Leaderboard S1
          </p>
          <Image
            src="/assets/coin.svg"
            alt=""
            className="object-fill"
            width={19}
            height={19}
          />
        </div>
        {/* connect btn */}
        <button className="bg-yellow-1 ml-4 h-[30px] text-black-1 navibarCardSh rounded-[2px] px-4 flex justify-center items-center text-[15px] font-normal">
          Connect
        </button>
        {/* hamburger */}
        <button className="w-[33px] bg-orange-1 flex justify-center items-center h-[30px] rounded-[2px] ">
          <RxHamburgerMenu className="text-[20px] text-black-1" />
        </button>
      </div>
    </div>
  );
};

const socialLinks = [
  {
    path: "#",
    name: "/assets/twitter.svg",
  },
  {
    path: "#",
    name: "/assets/tellegram.svg",
  },
  {
    path: "#",
    name: "/assets/insta.svg",
  },
];

export default Navibar;
