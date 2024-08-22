import React from "react";

const Pagination = () => {
  return (
      <div className="w-fit px-4 py-1 dark:bg-yellow-1 bg-black-1 rounded-[2px] flex justify-center items-center gap-4">
        <button className="text-[14px] font-normal dark:text-black-1 text-white-1">
          {pattern1}
        </button>
        <p className="text-[14px] font-normal dark:text-black-1 text-white-1">1</p>
        <button className="text-[14px] font-normal dark:text-black-1 text-white-1">
          {pattern2}
        </button>
      </div>
  );
};

export default Pagination;


const pattern1 = "<<";
const pattern2 = ">>";