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
  const [links, setLinks] = useState([{ name: "", url: "" }]);

  // function for adding the new link ui --------->
  const handleAddLink = () => {
    if (links.length < 5) {
      setLinks([...links, { name: "", url: "" }]);
    }
  };

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
    <div className="w-full gap-1 flex flex-col">
      <div className="w-full bg-[#D4DDE6] h-[40px] px-4 flex justify-start gap-3 items-center ">
      <div className="min-h-[28px] csm:hidden flex bg-purple-1 rounded-[2px] justify-center items-center min-w-[28px]">
                <Image src='/assets/emoji2.png' alt="" width={24} height={24}/>
              </div>
        <p className="text-[14px] font-semibold text-black-1/80">
          Admin Create a News Post
        </p>
      </div>
      <p className="w-full py-3 bg-black-1 px-4 text-[14px] font-semibold text-[#FEF652]">
        Create a News Post.
      </p>
      <form className="w-full h-[calc(100vh-250px)] overflow-auto mt-2 flex flex-col gap-3">
        {/* title */}
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="title"
            className="text-[12px] csm:text-[14px] font-normal text-blue-1/80"
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
            className="text-[12px] csm:text-[14px] font-normal text-blue-1/80"
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
            className="text-[12px] csm:text-[14px] font-normal text-blue-1/80"
          >
            Subheading<span className="text-[10px]"> (mandatory)</span>
          </label>
          <textarea
            id="mainText"
            placeholder={`<MAIN TEXT GOES HERE> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`}
            className="w-full placeholder:text-white-1/50 pl-3 py-2 min-h-[80px] pr-2 focus:outline-none text-white-1/50 bg-black-1 text-[12px] font-normal"
          />
        </div>
        {/* upload an image  */}
        <div className="w-full flex flex-col gap-1">
          <p className="text-[12px] csm:text-[14px] font-normal text-blue-1/80">
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
              {fileDetails.imageUrl && (
                <div className="w-[250px] csm:w-[300px] h-[80px] csm:h-[100px] relative">
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
        {/* links  */}
        <div className="w-full flex flex-col gap-1">
          {" "}
          <p className="text-[12px] csm:text-[14px] font-normal text-blue-1/80">
            Links (Optional)- [max 6]
          </p>
          <div className="w-full overflow-auto flex justify-start bg-black-1 p-5">
            <div className="flex w-full h-[80px] justify-between flex-col gap-3">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="w-full min-h-[30px] grid grid-cols-[120px,1fr] justify-center items-center gap-3"
                >
                  <input
                    type="text"
                    placeholder="Insert Name"
                    value={link.name}
                    className="text-[12px] flex text-center placeholder:text-white-1/35 justify-center items-center pl-1 focus:outline-none bg-transparent w-full h-full rounded-[3px] border-[1px] border-[#004BFE] font-normal text-white-1/35"
                  />
                  <input
                    placeholder="Insert URL [https://..]"
                    type="text"
                    className="w-full placeholder:text-white-1/35 border-[1px] border-white-1/20 rounded-[3px] h-full bg-transparent focus:outline-none text-[12px] font-normal text-white-1/35 pl-1"
                  />
                </div>
              ))}

              {/* add another link  */}
              <button
                type="button"
                onClick={handleAddLink}
                className={`bg-blue-1 w-fit px-3 py-1 rounded-[4px] text-[12px] font-normal text-white-1 ${
                  links.length >= 5 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={links.length >= 5}
              >
                Add Another
              </button>
            </div>
          </div>
        </div>
        {/* buttons ---> */}
        <div className="w-full min-h-[70px] csm:min-h-[69px] px-5 bg-black-1 flex justify-end items-center gap-2">
          <button
            type="button"
            className="px-2 py-[6px] csm:py-1 rounded-[5px] bg-white-1 text-[12px] font-normal text-black-1"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-2 py-[6px] csm:py-1 rounded-[5px] bg-[#FEF652] text-[12px] font-normal text-black-1"
          >
            Save and Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
