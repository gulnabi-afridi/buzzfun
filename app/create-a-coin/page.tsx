"use client";

import React from "react";
import { NextPage } from "next";
import ComponentWrapper from "../components/shared/layout/ComponentWrapper";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Breadcrumb from "../components/shared/layout/Breadcrumb";
import { useTheme } from "next-themes";
import Footer from "../components/shared/layout/Footer";

const Page: NextPage = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div>
      <ComponentWrapper style="bg-white-2 dark:bg-[#201e26]">
        <div className="w-full csm:block hidden">
          <Breadcrumb />
        </div>
        <div className="w-full h-[calc(100vh-65px)] csm:min-h-[calc(100vh-247px)] justify-center items-center flex flex-col gap-4">
          <div className="w-full max-w-[700px] flex flex-col md:py-0 py-8 gap-4 md:gap-8 justify-center items-center md:items-start">
            <p className="uppercase text-[17px] flex justify-start csm:justify-center gap-[5px] items-center font-normal">
              <span className="text-[12px] text-white-1 bg-blue-1 font-normal">
                {" "}
                select
              </span>{" "}
              <span className="text-black-1 dark:text-white-1"> Mode</span>
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* retared mode -----> */}
              <div className="w-full flex justify-center items-center">
                <Link
                  href="/retard-mode"
                  className="w-full max-w-[307px] hover:border-blue-1 border-[1px] border-white-1 duration-200 group min-h-[310px] relative p-3 dark:bg-black-1 bg-white-1 rounded-[5px] flex flex-col gap-4"
                >
                  <h1 className="text-[45px] leading-[40px] font-normal dark:text-white-1 text-black-1">
                    RETARD MODE
                  </h1>
                  <p className="text-[15px] dark:text-white-1 max-w-[230px] font-normal leading-[30px] text-black-1">
                    Pick name, upload image & add a description, then send it.
                  </p>
                  <div className="w-full flex justify-end items-center">
                    {resolvedTheme === "dark" ? (
                      <Image
                        src="/assets/dretardMode.png"
                        alt=""
                        width={172}
                        className="absolute right-0 bottom-0"
                        height={100}
                      />
                    ) : (
                      <Image
                        src="/assets/retardMode.svg"
                        alt=""
                        width={172}
                        className="absolute right-0 bottom-0"
                        height={100}
                      />
                    )}
                  </div>
                  {/* arrow */}
                  <button className="w-[40px] duration-300 group-hover:bg-blue-1 absolute dark:bg-white-1 right-[4px] top-[4px] h-[40px] hover:opacity-80 bg-black-1 flex justify-center items-center">
                    <GoArrowUpRight className="text-[34px]  group-hover:text-white-1 dark:text-black-1 text-white-1" />
                  </button>
                </Link>
              </div>
              {/* beast mode -----> */}
              <div className="w-full flex justify-center items-center">
                <Link
                  href="/beast-mode"
                  className="w-full group border-[1px] duration-200 border-white-1 hover:border-blue-1 max-w-[307px] min-h-[310px] dark:bg-black-1 relative p-3 bg-white-1 rounded-[5px] flex flex-col gap-4"
                >
                  <h1 className="text-[45px] dark:text-white-1 uppercase leading-[40px] font-normal text-black-1">
                    Beast <br /> mode
                  </h1>
                  <p className="text-[15px] dark:text-white-1 max-w-[230px] font-normal leading-[30px] text-black-1">
                    Same as Retard, but some tax options and other stuff
                  </p>
                  <div className="w-full flex justify-end items-center">
                    {resolvedTheme === "dark" ? (
                      <Image
                        src="/assets/dDretardMode.svg"
                        alt=""
                        className="absolute bottom-0 right-0"
                        width={215}
                        height={113}
                      />
                    ) : (
                      <Image
                        src="/assets/beastMode.svg"
                        alt=""
                        className="absolute bottom-0 right-0"
                        width={215}
                        height={113}
                      />
                    )}
                  </div>
                  {/* arrow */}
                  <button className="w-[40px] duration-300 group-hover:bg-blue-1 absolute right-[4px] top-[4px] h-[40px] hover:opacity-80 dark:bg-white-1 bg-black-1 flex justify-center items-center">
                    <GoArrowUpRight className="text-[34px] group-hover:text-white-1 dark:text-black-1 text-white-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ComponentWrapper>
      <div className="w-full csm:block hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
