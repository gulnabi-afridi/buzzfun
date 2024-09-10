import { Modal } from '@mantine/core'
import React from 'react'
import { RxCross2 } from 'react-icons/rx';
import Image from 'next/image';
import { MdElectricBolt } from "react-icons/md";

interface Props {
    open: boolean;
    size?: string;
    onClose: any;
  }
  

const TransactionModal:React.FC<Props> = ({open,size,onClose}:Props) => {
  return (
    <Modal
    opened={open}
    onClose={onClose}
    centered
    withCloseButton={false}
    size={size}
    overlayProps={{
      backgroundOpacity: 0.55,
      blur: 3,
    }}
    classNames={{
      content: "!bg-white-2 dark:!bg-black-1 !p-0 !border-[1px] textShadow !border-white-1",
    }}
  >
    <div className="w-full justify-center items-center flex flex-col">
      {/* top header  */}
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-1">
          <MdElectricBolt className="text-[#FEF652] text-[20px]" />
          <p className="text-[14px] font-normal text-white-1">
            {" "}
            <span className="bg-purple-1 px-[4px] py-[2px] text-white-1">
            Transaction 
            </span>{" "}
            in Progress
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-[24px] h-[24px] border-[1px] rounded-[2px] border-blue-1 dark:border-white-1/20 flex justify-center items-center"
        >
          <RxCross2 className="text-blue-1 dark:text-yellow-1 text-[14px]" />
        </button>
      </div>
      <p className="text-[10px] w-full text-left mt-5 font-normal text-black-1 dark:text-white-1">
      Your transaction is currently in progress.
      </p>
      <div className="w-full h-[1px] my-4 bg-white-1/10"></div>
      <div className="w-[210px] h-[133px] relative">
        <Image src="/assets/transcation.png" fill alt="" />
      </div>
      <div className="w-[80px] my-4 rounded-[60px] h-[2px] bg-[#303030] relative">
        <div className="w-1/2 rounded-[60px] h-1/2 bg-[#FEF652] absolute left-0 top-0"></div>
      </div>
      <p className="text-[10px] font-normal text-black-1 dark:text-[#747474]">
      Please wait for the transaction to confirm.
      </p>
      <div className="w-full h-[1px] my-4 bg-white-1/10"></div>
      <button className="w-full h-[28px] text-[12px] font-normal text-blue-1 dark:text-[#FEF652] border-[1px] border-blue-1 dark:border-[#FEF652] rounded-[2px]">
        Continue
      </button>
      <div className="flex mt-4 justify-end w-full items-center gap-1">
        <p className="text-[8px] uppercase font-normal text-blue-1 dark:text-[#EBFF00]">
          Powered by
        </p>
        <p className="text-[10px] text-blue-1 dark:text-[#EBFF00] uppercase font-bold">BUZZ</p>
      </div>
    </div>
  </Modal>
  )
}

export default TransactionModal