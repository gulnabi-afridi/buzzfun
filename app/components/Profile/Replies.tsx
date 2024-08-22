import React from "react";
import Image from "next/image";
import Pagination from "../shared/Pagination";

const Replies: React.FC = () => {
  return (
    <div className="w-full md:mt-0 mt-0 sm:mt-5 md:col-span-1 col-span-1 sm:col-span-2 flex justify-center items-center">
      <div className="w-full bg-transparent max-w-[500px] overflow-auto flex gap-3 flex-col rounded-[2px] px-3 py-3">
        <p className="text-[14px] font-normal bg-yellow-1 w-fit px-2 py-[2px] rounded-[2px] text-black-1 ">Replies</p>
        <p className="text-[14px] font-normal dark:text-white-1 text-black-1">
          [only you can view your replies]
        </p>
        {/* replies  */}
        <div className="w-full flex flex-col gap-3">
          {replies.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full bg-black-1 p-2 flex flex-col gap-2"
              >
                {/* replyer details ---- */}
                <div className="flex justify-start items-center gap-2">
                  <p className="bg-black-1 dark:bg-white-1 text-[11px] dark:text-black-1 px-[2px] font-normal text-white-1">
                    Username
                  </p>
                  <p className="text-[11px] font-normal dark:text-white-1 text-black-1">
                    DD/MM/YYYY ,{" "}
                  </p>
                  <p className="text-[11px] font-normal dark:text-white-1 text-black-1">
                    hh:mm:ss
                  </p>
                  <p className="text-[11px] font-normal dark:text-white-1 text-black-1">
                    #1945448
                  </p>
                  <p className="text-[11px] font-normal dark:text-white-1 text-black-1">❤️2</p>
                  <p className="text-[11px] font-normal dark:text-white-1 text-black-1">
                    / View{" "}
                  </p>
                </div>
                {/* reply */}
                {item.image ? (
                  <div className="w-full grid grid-cols-[140px,1fr] justify-center items-center gap-2">
                    <div className="w-full h-[60px] relative">
                      <Image
                        src="/assets/coin3.png"
                        className="object-fill"
                        alt=""
                        fill
                      />
                    </div>
                    <p className="text-[11px] font-normal dark:text-white-1 text-black-1">
                      lorem ipsum talkem sumit here making it cool and
                      reassruing and no rugginess for sure makin it based, yeah.
                      innt. lorem ipsum talkem sumit here making it cool and
                      reassruing and no rugginess for sure makin it based, yeah.
                      innt.
                    </p>
                  </div>
                ) : (
                  <p className="text-[11px] font-normal dark:text-white-1 text-black-1">
                    lorem ipsum talkem sumit here making it cool and reassruing
                    and no rugginess for sure makin it based, yeah. innt. lorem
                    ipsum talkem sumit here making it cool and reassruing and no
                    rugginess for sure makin it based, yeah. innt.
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-center items-center my-3">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

const replies = [
  {
    review:
      "lorem ipsum talkem sumit here making it cool and reassruing and no rugginess for sure makin it based, yeah. innt. lorem ipsum talkem sumit here making it cool and reassruing and no rugginess for sure makin it based, yeah. innt.",
  },
  {
    image: "/assets/coin3.png",
    review:
      "lorem ipsum talkem sumit here making it cool and reassruing and no rugginess for sure makin it based, yeah. innt. lorem ipsum talkem sumit here making it cool and reassruing and no rugginess for sure makin it based, yeah. innt.",
  },
  {
    review:
      "lorem ipsum talkem sumit here making it cool and reassruing and no rugginess for sure makin it based, yeah. innt. lorem ipsum talkem sumit here making it cool and reassruing and no rugginess for sure makin it based, yeah. innt.",
  },
  {
    review:
      "lorem ipsum talkem sumit here making it cool and reassruing and no rugginess for sure makin it based, yeah. innt. lorem ipsum talkem sumit here making it cool and reassruing and no rugginess for sure makin it based, yeah. innt.",
  },
  {
    image: "/assets/coin3.png",
    review:
      "lorem ipsum talkem sumit here making it cool and reassruing and no rugginess for sure makin it based, yeah. innt. lorem ipsum talkem sumit here making it cool and reassruing and no rugginess for sure makin it based, yeah. innt.",
  },
];

export default Replies;
