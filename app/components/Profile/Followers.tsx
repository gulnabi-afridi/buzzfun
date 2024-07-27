import React from "react";

const Followers: React.FC = () => {
  return (
    <div className="w-full md:col-span-1 col-span-1 sm:col-span-2 md:mt-8 mt-0 sm:mt-5 flex justify-center items-center">
      <div className="w-full max-w-[290px] flex flex-col gap-3">
        <p className="text-[14px] font-normal text-black-1 pl-2 py-1 dark:bg-white-1 bg-transparent">Followers</p>
        <div className="w-full flex dark:bg-black-1 bg-transparent h-[600px] overflow-auto scrollSize bg-white-1 flex-col border-[1px] border-blue-1 rounded-[2px] gap-3 px-2 py-1">
          {/* rows ---> */}
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 12, 2, 1, 2, 4, 5, 6,
            7, 83, 2, 3, 4, 5,
          ].map((item, index) => {
            return (
              <div
                key={index}
                className="w-full grid grid-cols-[1.5fr,1fr,1fr] gap-2"
              >
                <p className="w-full flex justify-start items-center text-[14px] font-normal dark:text-white-1 text-black-1">
                  Username
                </p>
                <p className="w-full flex justify-start items-center text-[14px] font-normal dark:text-white-1 text-black-1">
                  153000
                </p>
                <p className="w-full flex justify-start items-center text-[14px] font-normal dark:text-white-1 text-black-1">
                  followers
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Followers;
