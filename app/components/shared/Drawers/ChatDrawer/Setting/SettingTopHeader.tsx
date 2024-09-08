import React from "react";
import Image from "next/image";
import { IoMdSkipBackward } from "react-icons/io";

interface Props {
    goBack:(value:boolean) => void
}

const SettingTopHeader:React.FC<Props> = ({goBack}:Props) => {



  return (
    <div className="w-full bg-[#D4DDE6] relative h-[40px] px-3 csm:px-4 flex justify-between items-center">
      <div className="flex justify-center items-center gap-3">
        <Image src="/assets/token3.svg" alt="" width={26} height={26} />
        <p className="text-[12px] csm:text-[14px] font-semibold text-black-1">
          {`$Froglic: Settings > [Chat permissions]`}
        </p>
      </div>
      <IoMdSkipBackward onClick={()=>goBack(false)} className="text-[20px] cursor-pointer text-black-1 csm:hidden block" />
    </div>
  );
};

export default SettingTopHeader;
