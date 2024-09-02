import { Modal } from "@mantine/core";
import React, { ReactNode } from "react";

interface Props {
  open: boolean;
  onClose: any;
  title: string;
  des1: string;
  des2?: string;
  size?: string;
  btn2: string;
  btn2Event?: any;
  children?: ReactNode;
}

const ConfirmationModal: React.FC<Props> = ({
  open,
  onClose,
  title,
  des1,
  size = "24rem",
  des2,
  btn2,
  btn2Event = () => {},
  children,
}: Props) => {
  return (
    <Modal
      opened={open}
      onClose={onClose}
      centered
      withCloseButton={false}
      size={size}
      classNames={{ content: "!bg-white-2 dark:!bg-black-1 !p-0" }}
    >
      <div className="w-full flex flex-col gap-3 p-1 dark:p-5 bg-white-2 dark:bg-black-1 border-[1px] border-transparent dark:border-white-1">
        <p className="text-[14px] font-normal text-blue-1 dark:text-[#FEF652]">{title}</p>
        <p className="text-[14px] font-normal text-black-1 dark:text-white-1">{des1}</p>
        {des2 && (
          <p className="text-[11px] font-normal text-[#6D6D6D] mt-3">
            You will no longer be the owner of this group chat.
          </p>
        )}
        {children}

        {/* buttons */}
        <div className="w-full mt-8 h-[34px] grid grid-cols-2 justify-center items-center">
          <button
            onClick={onClose}
            className="w-full text-white-1 bg-[#224aaa] h-full flex justify-center items-center relative before:w-[5px] before:h-full before:bg-[#336FFE] before:absolute before:left-0 before:top-0 after:w-[5px] after:h-full after:bg-[#336FFE] after:absolute after:top-0 after:right-0"
          >
            Cancel
          </button>
          <button
            onClick={btn2Event}
            className="w-full hover:bg-[#FEF652] hover:text-black-1 text-black-1 dark:text-white-1 bg-transparent h-full flex justify-center items-center relative after:w-[5px] after:h-full after:bg-[#336FFE] after:absolute after:top-0 after:right-0"
          >
            {btn2}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
