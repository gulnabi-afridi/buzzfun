"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomModal from "../shared/Modals/CustomModal";
import { useDisclosure } from "@mantine/hooks";
import { GoGraph } from "react-icons/go";

const BuyAndSellWidget: React.FC = () => {
  const [commentModal, { open: openCommentModal, close: closeCommentModal }] =
    useDisclosure(false);
  const [fileDetails, setFileDetails] = useState({
    fileName: "",
    fileType: "",
    fileSize: "",
    dimensions: "",
    imageUrl: "",
  });

  // Function to handle file input change ----------->
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Create an image element to get dimensions
        const img = new window.Image();
        img.onload = () => {
          setFileDetails({
            fileName: file.name,
            fileType: file.type,
            fileSize: (file.size / 1024).toFixed(2) + " KB", // Convert to KB
            dimensions: `${img.width} x ${img.height} pixels`,
            imageUrl: URL.createObjectURL(file), // Create a URL for the image
          });
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <React.Fragment>
      <div className="w-full gap-4 csm:gap-0 flex flex-col">
        <div className="w-full flex flex-col gap-3 csm:gap-6 p-3 border-[1px] dark:bg-black-1 textShadow bg-white-1 border-black-1 rounded-[3px]">
          {/* buttons */}
          <div className="w-full grid h-[42px] csm:h-[50px] grid-cols-2 gap-2">
            <button className="text-[22px] font-normal text-black-1 w-full h-full bg-green-1">
              Buy
            </button>
            <button className="text-[22px] font-normal text-black-1/40 w-full h-full bg-[#EA000054]">
              Sell
            </button>
          </div>
          {/* switch to coin --> */}
          <div className="w-full flex justify-between items-center">
            <p className="text-[12px] csm:text-[15px] font-normal text-white-1 bg-black-1 px-[6px] rounded-[3px]">
              Switch to [insert Ticker]
            </p>
            <p className="text-[12px] csm:text-[15px] font-normal text-white-1 bg-blue-1 px-[6px] rounded-[3px]">
              Slippage
            </p>
          </div>
          {/* ticker input --->  */}
          <div className="w-full border-[1px] px-2 dark:border-white-1 border-black-1 h-[41px] csm:h-[50px] grid grid-cols-[1fr,110px]">
            <input
              placeholder="0.0"
              type="text"
              className="w-full dark:placeholder:text-white-1 placeholder:text-black-1 dark:text-white-1 border-r-[1px] dark:border-r-white-1 focus:outline-none border-black-1 h-full bg-transparent text-[22px] font-normal text-black-1"
              name="ticker"
              id=""
            />
            <div className="flex justify-center items-center gap-2">
              <p className="text-[15px] font-normal dark:text-white-1 text-black-1">
                Ticker
              </p>
              <div className="w-[32px] h-[32px] flex justify-center items-center">
                <Image src="/assets/emoji2.png" alt="" width={30} height={30} />
              </div>
            </div>
          </div>
          {/* max ---------> */}
          <div className="w-full flex justify-center items-center gap-4">
            {max.map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-[13px] csm:text-[16px] font-normal text-[#FEF652] bg-[#19171F] px-[4px] py-[2px] rounded-[2px]"
                >
                  {item}
                </p>
              );
            })}

            <p className="px-[4px] py-[2px] text-[13px] csm:text-[16px] font-normal text-[#EF5960] rounded-[2px] bg-[#19171F]">
              MAX
            </p>
          </div>
          {/* you recieve -----> */}
          <div className="w-full flex justify-between items-center">
            <p className="text-[12px] csm:text-[14px] font-normal text-black-1 dark:text-white-1">
              You recieve:
            </p>
            <p className="text-[12px] csm:text-[14px] font-normal text-black-1 dark:text-white-1">
              10000000000000 Ticker
            </p>
          </div>
          {/* system messages ---> */}
          <div className="w-full flex flex-col gap-1">
            <p className="text-[10px] csm:text-[15px] font-normal dark:text-white-1 text-black-1">
              System messages{" "}
            </p>
            <p className="text-black-1 dark:text-white-1 rounded-[4px] font-normal text-[11px] csm:text-[14px] w-full py-[4px] px-2 border-[1px] dark:border-white-1 border-dotted border-black-1">
              Insufficient balance.{" "}
            </p>
          </div>
          {/* place trade button ---->  */}
          <button
            onClick={openCommentModal}
            className="w-full h-[44px] csm:h-[51px] bg-yellow-1 text-[20px] font-normal text-black-1 flex justify-center items-center"
          >
            Place trade
          </button>
        </div>
        {/* for small screen  */}
        <div className="w-full flex flex-col gap-3 csm:hidden">
          <div className="flex flex-col gap-3">
            <div className="flex justify-start items-center gap-2">
              <GoGraph className="text-black-1 dark:text-white-1 text-[14px]" />
              <p className="text-[14px] font-normal dark:text-white-1 text-black-1">
                [Bonding curve progress]{" "}
                <span className="text-[#01C171]"> [69%] </span>
              </p>
            </div>
            <div className="w-full relative rounded-full h-[13px] csm:h-[19px] bg-black-1">
              <div className="w-[70%] absolute left-0 top-0 h-full rounded-full bg-yellow-1"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[10px] csm:text-[14px] font-normal dark:text-white-1 text-black-1">
              When the market cap reaches $66,000 all the liquidity from the
              bonding curve will be deposited into a Uniswap v2 Pool and burned.
              Progression increases as the price goes up.
            </p>
            <p className="text-[10px] csm:text-[14px] font-normal dark:text-white-1 text-black-1">
              There are 479,108,240 tokens still available for sale in the
              bonding curve and there is 12.411 SOL in the bonding curve.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <CustomModal size="28rem" onClose={closeCommentModal} open={commentModal}>
        <div className="w-full flex gap-5 flex-col">
          <div className="w-full flex justify-start items-center gap-2">
            <Image src="/assets/comment.svg" alt="" width={30} height={30} />
            <p className="text-[18px] font-normal text-black-1 dark:text-white-1">
              Add a comment
            </p>
          </div>
          <textarea
            name="comment"
            id="comment"
            className="w-full bg-[#1D252C] text-[14px] font-normal text-white-1 p-2 focus:outline-none min-h-[120px] border-[1px] border-blue-1 dark:border-yellow-1 rounded-[2px]"
          ></textarea>
          {/* upload an image  */}
          <div className="w-full flex flex-col gap-1">
            <p className="text-[14px] font-normal text-black-1 dark:text-white-1">
              Image<span className="text-[10px]"> (optional)</span>
            </p>
            <div className="w-full flex-col bg-black-1 flex justify-center items-start px-3 py-4 gap-2">
              {fileDetails.imageUrl === "" && (
                <div className="w-full justify-start items-center gap-2 flex">
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="fileInput"
                    className="text-[12px] px-2 py-1 font-normal text-white-1 bg-[#4F40FF] rounded-[3px] cursor-pointer"
                  >
                    Upload file
                  </label>
                  {fileDetails.fileName ? (
                    <p className="text-white-1 font-normal text-[12px]">
                      Image Uploaded
                    </p>
                  ) : (
                    <p className="text-white-1 font-normal text-[12px]">
                      No file chosen
                    </p>
                  )}
                </div>
              )}
              {/* uploaded image  */}
              <div className="w-full flex justify-start items-center gap-2">
                {fileDetails.imageUrl && (
                  <div className="w-[150px] h-[80px] relative">
                    <Image src={fileDetails.imageUrl} alt="" fill />
                  </div>
                )}
                {fileDetails.fileName && (
                  <div className="mt-2 text-white-1 text-[12px]">
                    <p>Type: {fileDetails.fileType}</p>
                    <p>Size: {fileDetails.fileSize}</p>
                    <p>Dimensions: {fileDetails.dimensions}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button className="w-full h-[42px] text-[20px] rounded-[3px] hover:dark:text-black-1 hover:dark:bg-yellow-1 font-normal text-black-1 dark:text-[#FEF652] border-[1px] border-black-1 dark:border-yellow-1">
            Send
          </button>
          <div className="w-full flex justify-start items-center">
            <button
              onClick={closeCommentModal}
              className="text-[14px] font-normal text-black-1 dark:text-[#FEF652]"
            >
              / cancel
            </button>
          </div>
        </div>
      </CustomModal>
    </React.Fragment>
  );
};

const max = ["0.005", "0.01", "0.02", "0.05", "0.1"];

export default BuyAndSellWidget;
