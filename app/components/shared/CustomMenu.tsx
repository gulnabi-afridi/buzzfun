import React, { ReactNode } from "react";
import { Menu } from "@mantine/core";
import { RiArrowDownSLine } from "react-icons/ri";

interface Props {
  size: string;
  options: any;
  value: number | string;
  setValue: (value: any) => void;
  targetComponent: ReactNode;
  trigger: "click" | "hover";
  position?:'bottom'| 'left'
}

const CustomMenu: React.FC<Props> = ({
  size = "min-w-[160px]",
  options,
  value,
  setValue,
  trigger,
  targetComponent,
  position = 'bottom'
}: Props) => {
  return (
    <Menu
      classNames={{
        dropdown: `dark:!bg-[#336FFE] !p-2 !bg-white-2 dark:!border-[.2px] dark:!border-white-1/20 ${size}`,
        item: "!text-black-1 dark:text-white-1 text-[14px] font-normal hover:!bg-transparent",
        arrow: "!border-t-white-1/20  !border-l-white-1/20",
      }}
      trigger={trigger}
      withArrow
      position={position}
    >
      <Menu.Target>{targetComponent}</Menu.Target>

      <Menu.Dropdown>
        <div className="flex flex-col">
          {options.map((option: any) => (
            <Menu.Item
              className={`relative w-full transition-colors duration-200 ${
                value === option
                  ? "!bg-[#1957EA] font-semibold before:absolute before:h-full before:inset-y-0 before:left-0 before:w-[5px] before:bg-black-1 after:absolute after:h-full after:inset-y-0 after:right-0 after:w-[5px] after:bg-black-1"
                  : "hover:!bg-blue-1/20"
              }`}
              key={option}
              onClick={() => setValue(option)}
            >
              <div className="py-[2px] px-4">{option}</div>
            </Menu.Item>
          ))}
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};

export default CustomMenu;
