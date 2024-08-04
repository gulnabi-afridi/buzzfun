import React from "react";

const OpenChartBtn: React.FC = () => {
  return (
    <div className="absolute lg:block hidden right-9 -top-[121px]">
      <button className="text-[14px] font-normal text-black-1">
        / Open <span className="bg-yellow-1 px-[2px]"> Chet</span>
      </button>
    </div>
  );
};

export default OpenChartBtn;
