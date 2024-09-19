import React from "react";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full text-center overflow-auto bg-[#FEF652] h-[38px] hidden csm:flex justify-center items-center">
        <Marquee play speed={50} loop={0} className="">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return (
              <p
                key={index}
                className="text-blue-1 z-0 whitespace-nowrap text-[10px] font-normal"
              >
                $BUZZ AIRDROP LEADERBOARD \\\\\\\
              </p>
            );
          })}
        </Marquee>
      </div>

      {/* for small screen  */}
      <div className="w-full csm:hidden block bg-transparent px-3 py-4">
        <div className="w-full bg-[#25303A] gap-4 border-[1px] border-white-1 flex flex-col justify-center items-center px-4 py-7">
          <p className="text-[10px] max-w-[170px] text-center uppercase w-full bg-black-1 px-4 py-4 font-normal text-white-1">
            buzz.fun 2024
          </p>
          <p className="text-[10px] text-center leading-[30px] font-normal text-white-1">
            This site is protected by reCAPTCHA and the Google{" "}
            <span className="underline"> Privacy Policy</span> and{" "}
            <span className="underline"> Terms of Service apply.</span>
          </p>
          <p className="text-[10px] max-w-[170px] text-center uppercase w-full bg-black-1 px-4 py-4 font-normal text-white-1">
            BUZZLABZ
          </p>
        </div>
      </div>

    </div>
  );
};

export default Footer;
