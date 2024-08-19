"use client";

import React, { useState } from "react";
import Image from "next/image";

const NewPost: React.FC = () => {
  const [fileDetails, setFileDetails] = useState({
    fileName: "",
    fileType: "",
    fileSize: "",
    dimensions: "",
    imageUrl: "",
  });

  // Function to handle file input change
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
    <div className="w-full gap-1 flex flex-col">
      <div className="w-full bg-[#D4DDE6] h-[40px] px-4 flex justify-between items-center ">
        <p className="text-[14px] font-semibold text-black-1/80">
          Admin Create a News Post
        </p>
      </div>
      <p className="w-full py-3 bg-black-1 px-4 text-[14px] font-semibold text-[#FEF652]">
        Create a News Post.
      </p>
      <form className="w-full mt-2 flex flex-col gap-3">
        {/* title */}
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="title"
            className="text-[14px] font-normal text-blue-1/80"
          >
            Title <span className="text-[10px]"> (mandatory)</span>
          </label>
          <input
            type="text"
            id="title"
            placeholder="#8 Insert the Title here."
            className="w-full placeholder:text-white-1/50 pl-3 pr-2 focus:outline-none text-white-1/50 h-[34px] bg-black-1 text-[12px] font-normal"
          />
        </div>
        {/* subheading */}
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="subHeading"
            className="text-[14px] font-normal text-blue-1/80"
          >
            Subheading<span className="text-[10px]"> (mandatory)</span>
          </label>
          <input
            type="text"
            id="subHeading"
            placeholder="Insert the Subheading here."
            className="w-full placeholder:text-white-1/50 pl-3 pr-2 focus:outline-none text-white-1/50 h-[34px] bg-black-1 text-[12px] font-normal"
          />
        </div>
        {/* main text  */}
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="mainText"
            className="text-[14px] font-normal text-blue-1/80"
          >
            Subheading<span className="text-[10px]"> (mandatory)</span>
          </label>
          <textarea
            id="mainText"
            placeholder={`<MAIN TEXT GOES HERE> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.`}
            className="w-full placeholder:text-white-1/50 pl-3 py-2 min-h-[170px] pr-2 focus:outline-none text-white-1/50 bg-black-1 text-[12px] font-normal"
          />
        </div>
        {/* upload an image  */}
        <div className="w-full flex flex-col gap-1">
          <p className="text-[14px] font-normal text-blue-1/80">
            Upload an Image<span className="text-[10px]"> (optional)</span>
          </p>
          <div className="w-full flex-col bg-black-1 flex justify-center items-start px-6 py-6 gap-2">
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
            {/* uploaded image  */}
            <div className="w-full flex justify-start items-center gap-2">
              <div className="w-[300px] h-[100px] relative">
                {fileDetails.imageUrl && (
                  <Image src={fileDetails.imageUrl} alt="" fill />
                )}
              </div>
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
      </form>
    </div>
  );
};

export default NewPost;
