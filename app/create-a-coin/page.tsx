import React from "react";
import { NextPage } from "next";
import ComponentWrapper from "../components/shared/layout/ComponentWrapper";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const page: NextPage = () => {
  return (
    // 65+40+50+38
    <ComponentWrapper style="bg-white-2">
      <div className="w-full min-h-[calc(100vh-250px)] justify-center items-center flex flex-col gap-4">
        <div className="w-full max-w-[700px] flex flex-col gap-8 justify-center items-start">
          <p className="uppercase text-[15px] font-normal text-black-1">
            <span className="text-[10px] bg-blue-1 font-normal"> select</span>{" "}
            Mode
          </p>
          <div className="w-full grid grid-cols-2 gap-6">
            {/* retared mode -----> */}
            <Link
              href="/retard-mode"
              className="w-full max-w-[307px] min-h-[310px] relative p-3 bg-white-1 rounded-[5px] flex flex-col gap-4"
            >
              <h1 className="text-[45px] leading-[40px] font-normal text-black-1">
                RETARD MODE
              </h1>
              <p className="text-[15px] max-w-[230px] font-normal leading-[30px] text-black-1">
                Pick name, upload image & add a description, then send it.
              </p>
              <div className="w-full flex justify-end items-center">
                <Image
                  src="/assets/retardMode.svg"
                  alt=""
                  width={172}
                  className="absolute right-0 bottom-0"
                  height={100}
                />
              </div>
              {/* arrow */}
              <button className="w-[40px] absolute right-[4px] top-[4px] h-[40px] hover:opacity-80 bg-black-1 flex justify-center items-center">
                <GoArrowUpRight className="text-[34px] text-white-1" />
              </button>
            </Link>
            {/* beast mode -----> */}
            <div className="w-full max-w-[307px] min-h-[310px] relative p-3 bg-white-1 rounded-[5px] flex flex-col gap-4">
              <h1 className="text-[45px] uppercase leading-[40px] font-normal text-black-1">
                Beast <br /> mode
              </h1>
              <p className="text-[15px] max-w-[230px] font-normal leading-[30px] text-black-1">
                Same as Retard, but some tax options and other stuff
              </p>
              <div className="w-full flex justify-end items-center">
                <Image
                  src="/assets/beastMode.svg"
                  alt=""
                  className="absolute bottom-0 right-0"
                  width={215}
                  height={113}
                />
              </div>
              {/* arrow */}
              <button className="w-[40px] absolute right-[4px] top-[4px] h-[40px] hover:opacity-80 bg-blue-1 flex justify-center items-center">
                <GoArrowUpRight className="text-[34px] text-white-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default page;
