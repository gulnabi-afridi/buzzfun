"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import NewPost from "./NewPost";

const NewUser: React.FC = () => {
  const [newPost, setNewPost] = useState(false);

  return (
    <React.Fragment>
      {!newPost ? (
        <div className="w-full flex flex-col">
          {/* New post ---> */}
          <div className="w-full bg-[#D4DDE6] h-[40px] px-4 flex justify-between items-center ">
            <p className="text-[14px] font-semibold text-black-1">
              Welcome to Buzz dot News.
            </p>
            <button
              onClick={() => setNewPost(true)}
              className="px-3 py-1 bg-[#1957EA] text-[14px] font-normal text-white-1/80 rounded-[5px]"
            >
              New Post
            </button>
          </div>
          {/* update bar ---> */}
          <div className="w-full mt-[2px] bg-black-1 px-4 h-[40px] flex justify-between items-center ">
            <p className="text-[14px] font-bold text-yellow-1">
              #7 Update: Bot development - dd/mm/yy hh:mm:ss
            </p>
            <button className="w-[20px] h-[20px] bg-yellow-1 flex justify-center items-center">
              <IoIosArrowUp className="text-[16px] cursor-pointer text-black-1" />
            </button>
          </div>
          {/* subheading + links ------->  */}
          <div className="w-full grid mt-2 gap-2 grid-cols-[3fr,1fr]">
            {/* subheadings */}
            <div className="w-full flex gap-2 flex-col">
              <p className="text-[14px] font-normal text-[#004BFE]">
                Subheading
              </p>
              <p className="text-[12px] font-normal text-white-1">{`<MAIN TEXT GOES HERE> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.`}</p>
            </div>
            {/* links  */}
            <div className="w-full flex justify-center items-center gap-2 flex-col">
              <p className="text-[14px] font-normal text-[#004BFE]">Links</p>
              <div className="w-full justify-center items-center flex flex-col gap-2">
                {links.map((link, index) => {
                  return (
                    <p
                      key={index}
                      className="text-white-1 font-normal text-[14px]"
                    >
                      {link}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          {/* image ---> */}
          <div className="w-full flex flex-col gap-3">
            <div className="flex w-full justify-start items-end gap-4">
              <div className="w-[280px] h-[93px] relative">
                <Image
                  src="/assets/message.png"
                  className="object-fill"
                  fill
                  alt=""
                />
              </div>
              {/* image detail */}
              <div className="flex min-w-[160px] flex-col items-start">
                <p className="text-[10px] font-normal dark:text-white-1/80 text-black-1">
                  Image{" "}
                </p>
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-[10px] font-normal dark:text-white-1/80 text-black-1">
                    file type{" "}
                  </p>
                  <p className="text-[10px] font-normal dark:text-white-1/80 text-black-1">
                    .jpg
                  </p>
                </div>{" "}
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-[10px] font-normal dark:text-white-1/80 text-black-1">
                    Size
                  </p>
                  <p className="text-[10px] font-normal dark:text-white-1/80 text-black-1">
                    1.2mb
                  </p>
                </div>
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-[10px] font-normal dark:text-white-1/80 text-black-1">
                    dimensions
                  </p>
                  <p className="text-[10px] font-normal dark:text-white-1/80 text-black-1">
                    1200x1000
                  </p>
                </div>
              </div>
            </div>
            {/* reactions -----> */}
            <div className="flex justify-start items-center gap-3">
              <div className="flex justify-center items-center gap-2">
                🙌
                <p className="text-[11px] font-normal dark:text-white-1/80 text-black-1">
                  2
                </p>
              </div>
              <div className="flex justify-center items-center gap-2">
                😍
                <p className="text-[11px] font-normal dark:text-white-1/80 text-black-1">
                  4
                </p>
              </div>
              {/* dots */}
              <BsThreeDots className="text-white-1 cursor-pointer text-[15px] ml-3" />
            </div>
            {/* updated bar ---> */}
            <div className="w-full flex flex-col gap-1">
              {[0, 1, 2, 3, 4].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full mt-[2px] bg-black-1 px-4 h-[40px] flex justify-between items-center "
                  >
                    <p className="text-[14px] font-bold text-yellow-1">
                      {index + 5} Update: Bot development - dd/mm/yy hh:mm:ss
                    </p>
                    <button className="w-[20px] h-[20px] bg-yellow-1 flex justify-center items-center">
                      <IoIosArrowUp className="text-[16px] cursor-pointer text-black-1" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <NewPost />
      )}
    </React.Fragment>
  );
};

export default NewUser;

const links = [
  "[tweet]",
  "[Website]",
  "[Website]",
  "[CTA]",
  "[CTA]",
  "[CTA]",
  "[CTA]",
];
