import { Modal } from "@mantine/core";
import React, { ReactNode } from "react";

interface Props {
  open: boolean;
  size?: string;
  children?: ReactNode;
  onClose: any;
}

const CustomModal: React.FC<Props> = ({
  open,
  size,
  children,
  onClose,
}: Props) => {
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
      classNames={{ content: "!bg-white-2 dark:!bg-black-1 !shadow-none dark:!shadow-[0_0_4px_0_#ffffff] !p-0 !border-[1px]  !border-transparent dark:!border-white-1" }}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
