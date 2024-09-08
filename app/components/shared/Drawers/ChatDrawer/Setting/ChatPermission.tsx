import React, { useState } from "react";
import Image from "next/image";
import { IoMdSkipBackward } from "react-icons/io";

//  A union type for the possible keys in SelectedPermissions =================>
type PermissionType =
  | "send messages"
  | "Send Images"
  | "Send Links"
  | "Cooldown"
  | "Set Cooldown";

interface ChatPermissionItem {
  type: PermissionType;
  durations?: string[];
}

const chatPermission: ChatPermissionItem[] = [
  {
    type: "send messages",
  },
  {
    type: "Send Images",
  },
  {
    type: "Send Links",
  },
  {
    type: "Cooldown",
  },
  {
    type: "Set Cooldown",
    durations: ["10sec", "30sec", "60sec", "120sec"],
  },
];

interface SelectedPermissions {
  "send messages": string | null;
  "Send Images": string | null;
  "Send Links": string | null;
  Cooldown: string | null;
  "Set Cooldown": string | null;
}

const ChatPermission: React.FC = () => {
  const [selectedPermissions, setSelectedPermissions] =
    useState<SelectedPermissions>({
      "send messages": null,
      "Send Images": null,
      "Send Links": null,
      Cooldown: null,
      "Set Cooldown": null,
    });

  const handleSelect = (type: PermissionType, value: string) => {
    setSelectedPermissions((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className="w-full border-[1px] border-none csm:border-blue-1 rounded-[2px] p-0 csm:p-3 flex flex-col">
   
      {/* permissions */}
      <div className="w-full flex mt-2 flex-col gap-2">
        {chatPermission.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full h-[34px] bg-black-1 ${
                item.type === "Set Cooldown"
                  ? "grid-cols-[auto,1fr] gap-14"
                  : "grid-cols-[2fr,1fr] gap-2"
              } grid items-center px-3`}
            >
              <p className="w-full flex justify-start text-white-1 font-normal text-[12px] csm:text-[14px] items-center">
                {item.type}
              </p>
              {/* checkbox */}
              {item.type !== "Set Cooldown" ? (
                <div className="w-full flex justify-between items-center">
                  <button
                    className={`flex justify-center items-center gap-2`}
                    onClick={() => handleSelect(item.type, "ON")}
                  >
                    <p className="text-[12px] csm:text-[14px] font-normal text-white-1">
                      ON
                    </p>
                    <div className="min-w-[20px] min-h-[20px] flex justify-center items-center border-[1px] border-white-1 rounded-[2px]">
                      {selectedPermissions[item.type] === "ON" && (
                        <div className="min-w-[10px] min-h-[10px] bg-white-1 rounded-[1px]"></div>
                      )}
                    </div>
                  </button>
                  <button
                    className={`flex justify-center items-center gap-2 `}
                    onClick={() => handleSelect(item.type, "OFF")}
                  >
                    <p className="text-[12px] csm:text-[14px] font-normal text-white-1">
                      OFF
                    </p>
                    <div className="min-w-[20px] min-h-[20px] flex justify-center items-center border-[1px] border-white-1 rounded-[2px]">
                      {selectedPermissions[item.type] === "OFF" && (
                        <div className="min-w-[10px] min-h-[10px] bg-white-1 rounded-[1px]"></div>
                      )}
                    </div>
                  </button>
                </div>
              ) : (
                <div className="w-full flex-wrap flex justify-between items-center gap-x-2 gap-y-4">
                  {item.durations?.map((dur, index) => {
                    return (
                      <button
                        key={index}
                        className={`flex justify-center items-center gap-2`}
                        onClick={() => handleSelect(item.type, dur)}
                      >
                        <p className="text-[12px] csm:text-[14px] font-normal text-white-1">
                          {dur}
                        </p>
                        <div className="min-w-[20px] min-h-[20px] flex justify-center items-center border-[1px] border-white-1 rounded-[2px]">
                          {selectedPermissions[item.type] === dur && (
                            <div className="min-w-[10px] min-h-[10px] bg-white-1 rounded-[1px]"></div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatPermission;
