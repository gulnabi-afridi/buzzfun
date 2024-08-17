import React from "react";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <div className="w-full z-50 text-center overflow-auto bg-[#FEF652] h-[38px] flex justify-center items-center">
      <Marquee play speed={50} loop={0} className="">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
          return (
            <p
              key={index}
              className="text-blue-1 whitespace-nowrap text-[10px] font-normal"
            >
              $BUZZ AIRDROP LEADERBOARD \\\\\\\
            </p>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Footer;
