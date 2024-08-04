import React from "react";

const dummy = () => {
  return (
    <Drawer
      opened={opened}
      onClose={close}
      position="right"
      size="60rem"
      withCloseButton={false}
      overlayProps={{ backgroundOpacity: 0, blur: 0 }}
      classNames={{
        content: "!bg-[#D4DDE6] !h-screen !mt-[106px] !overflow-hidden",
      }}
    >
      <div className="w-full h-full grid grid-cols-[30px,1fr]">
        {/* close drawer  */}
        <div className="w-full flex justify-start">
          <div
            onClick={close}
            className="w-[23px] h-[380px] cursor-pointer relative"
          >
            <Image
              src="/assets/drawerBtn.svg"
              alt=""
              fill
              className="object-fill"
            />
          </div>
        </div>
        {/* content */}
        <div className="w-full bg-white-1 grid grid-cols-[3.5fr,1fr]">
          {/* ist col ----->  */}
          <div className="w-full p-3 overflow-auto flex flex-col">
            {/* top header  */}
            <div className="w-full px-4 h-[50px] flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <p className="text-[14px] font-bold text-black-1">News</p>
                <p className="bg-[#FF0000] px-[8px] py-[0px] text-white-1">2</p>
              </div>
              <p className="text-[14px] font-bold text-black-1">
                General [Chat]
              </p>
              <p className="text-[14px] font-bold text-black-1">[My Chats]</p>
            </div>
            {/* token name ---> */}
            <div className="w-full bg-[#D4DDE6] h-[40px] px-4 flex justify-between items-center ">
              <p className="text-[14px] font-bold text-black-1">
                Token name [chet]
              </p>
              <HiOutlineDotsHorizontal className="text-[20px] cursor-pointer text-black-1" />
            </div>
            {/* update bar ---> */}
            <div className="w-full mt-[2px] bg-black-1 px-4 h-[40px] flex justify-between items-center ">
              <p className="text-[14px] font-bold text-yellow-1">
                #9 Update: Bot development
              </p>
              <button className="w-[20px] h-[20px] bg-yellow-1 flex justify-center items-center">
                <FaRegFlag className="text-[16px] cursor-pointer text-black-1" />
              </button>
            </div>
            <div className="w-full overflow-auto h-[calc(100%-580px)] flex flex-col">
              {/* messages ---> */}
              <div className="w-full flex flex-col">
                {messageData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full px-4 py-2 grid items-start grid-cols-[80px,110px,1fr]"
                    >
                      <p className="w-full flex justify-start text-[14px] font-normal text-black-1">
                        {item.serNo}
                      </p>
                      <div className="w-full flex flex-col gap-1 items-center justify-center">
                        <p className="text-[14px] font-semibold text-[#004BFE]">
                          {item.userName}
                        </p>
                        <p className="text-[14px] font-normal text-black-1">
                          {item.roloe}
                        </p>
                      </div>
                      <div className="w-full pl-3 items-start gap-2 flex flex-col">
                        <p className="text-[12px] font-normal text-black-1">
                          {item.message}
                        </p>
                        {/* image ---> */}
                        {item.isImage && (
                          <div className="flex w-full justify-start items-end gap-3">
                            <Image
                              src="/assets/message.png"
                              width={130}
                              height={95}
                              alt=""
                            />
                            {/* image detail */}
                            <div className="flex w-full max-w-[180px] flex-col items-start">
                              <p className="text-[10px] font-normal text-black-1">
                                Image{" "}
                              </p>
                              <div className="flex w-full justify-between items-center gap-2">
                                <p className="text-[10px] font-normal text-black-1">
                                  file type{" "}
                                </p>
                                <p className="text-[10px] font-normal text-black-1">
                                  .jpg
                                </p>
                              </div>{" "}
                              <div className="flex w-full justify-between items-center gap-2">
                                <p className="text-[10px] font-normal text-black-1">
                                  Size
                                </p>
                                <p className="text-[10px] font-normal text-black-1">
                                  1.2mb
                                </p>
                              </div>
                              <div className="flex w-full justify-between items-center gap-2">
                                <p className="text-[10px] font-normal text-black-1">
                                  dimensions
                                </p>
                                <p className="text-[10px] font-normal text-black-1">
                                  1200x1000
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* reaction */}
                        {item.isReactions && (
                          <div className="flex justify-center items-center gap-3">
                            <div className="flex justify-center items-center gap-1">
                              ♥️
                              <p className="text-[11px] font-normal text-black-1">
                                2
                              </p>
                            </div>
                            <div className="flex justify-center items-center gap-1">
                              😍
                              <p className="text-[11px] font-normal text-black-1">
                                4
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* send message ui ---> */}
              <div className="w-full grid grid-cols-[1fr,80px] rounded-[2px] gap-3 border-[1px] border-blue-1">
                <p className="text-[14px] p-2 font-normal text-black-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum passages, and more recently
                  with desktop publishing software like{" "}
                </p>
                <button className="bg-[#D4DDE6] p-2 flex flex-col justify-center items-center w-full">
                  <p className="text-[14px] font-normal text-black-1 bg-yellow-1 px-[4px]">
                    /SEND
                  </p>
                  <p className="text-[14px] font-normal text-black-1">
                    [image]
                  </p>
                  <p className="text-[14px] font-normal text-black-1">
                    [Emoji]
                  </p>
                </button>
              </div>
            </div>
          </div>
          {/* 2nd col ----> */}
          <div className="w-full flex flex-col gap-2 px-4 py-2 h-[calc(100%-140px)] overflow-auto">
            {/* search bar  */}
            <div className="w-full flex justify-between items-center">
              <p className="text-[14px] font-normal text-black-1">
                Degens (13)
              </p>
              <LuSearch className="text-[22px] text-black-1" />
            </div>
            {/* admin */}
            <div className="w-full grid grid-cols-[50px,1fr]">
              <p className="w-full flex justify-start">@</p>
              <div className="w-full flex justify-start items-center">
                <p className="[text-shadow:_-0.4px_-0.4px_0_#D90000,_0.4px_-0.4px_0_#D90000,_-0.4px_0.4px_0_#D90000,_0.4px_0.4px_0_#D90000] text-[14px] font-semibold text-black-1">
                  {admin}
                </p>
              </div>
            </div>
            {/* mode */}
            <div className="w-full grid grid-cols-[50px,1fr]">
              <p className="w-full flex justify-start">@</p>
              <div className="w-full flex justify-start items-center">
                <p className="[text-shadow:_-0.4px_-0.4px_0_#D90000,_0.4px_-0.4px_0_#D90000,_-0.4px_0.4px_0_#D90000,_0.4px_0.4px_0_#D90000] text-[14px] font-semibold text-black-1">
                  {mode}
                </p>
              </div>
            </div>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 3, 4, 5, 6, 3, 2, 1].map(
              (item, index) => {
                return (
                  <div key={index} className="w-full grid grid-cols-[50px,1fr]">
                    <div></div>
                    <p className="text-[14px] w-full flex justify-start font-normal text-black-1">
                      {userName}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default dummy;
