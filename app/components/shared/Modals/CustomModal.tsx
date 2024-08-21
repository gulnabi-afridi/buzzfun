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
      classNames={{ content: "!bg-black-1 !p-0" }}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
