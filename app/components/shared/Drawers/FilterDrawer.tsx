import React from "react";
import { Checkbox, Drawer } from "@mantine/core";
import { RxCross2 } from "react-icons/rx";
import { VscPercentage } from "react-icons/vsc";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa6";

interface Props {
  open: boolean;
  closeDrawer: any;
}

const FilterDrawer: React.FC<Props> = ({ open, closeDrawer }: Props) => {
  return (
    <Drawer
      opened={open}
      onClose={closeDrawer}
      position="right"
      transitionProps={{
        transition: "slide-left",
        duration: 300,
        timingFunction: "linear",
      }}
      size="24rem"
      withCloseButton={false}
      overlayProps={{ backgroundOpacity: 0, blur: 0 }}
      classNames={{
        content:
          "!bg-[#1D252C] border-[1px] border-[#2B2C39] !h-[calc(100vh-106px)] !mt-[106px] !overflow-auto",
      }}
    >
      <div className="w-full justify-between h-[calc(100vh-146px)]  gap-3 flex flex-col">
        <div className="w-full flex flex-col gap-3">
          {/* close drawer */}
          <div className="w-full flex justify-start">
            <div className="w-full flex justify-between items-center">
              <div className="flex bg-[#0E161C] py-1 px-2 rounded-[2px] justify-center items-center gap-1">
                <FaFilter className="text-[16px] text-white-1" />
                <p className="text-[10px] font-normal text-white-1">Filters:</p>
                <p className="text-[10px] font-normal text-white-1">
                  New Tokens
                </p>
              </div>
              <button className="w-[18px] h-[18px] bg-[#1C2126] flex justify-center items-center ">
                <RxCross2 className="text-[#004BFE] text-[14px]" />
              </button>
            </div>
          </div>
          {/* check boxes */}
          <div className="w-full mt-3 flex flex-col gap-3">
            {filters.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="w-full flex justify-between items-center"
                  >
                    <Checkbox
                      classNames={{
                        body: "!flex !w-full !justify-between",
                        root: "!w-full",
                        label: "text-[12px] font-normal !text-white-1",
                        input: "!bg-black-1 !border-transparent",
                      }}
                      label={item}
                      color="black"
                      radius="xl"
                      labelPosition="left"
                    />
                  </div>
                  {index === 1 && (
                    <div className="w-full h-[1px] bg-[#2E2B36]"></div>
                  )}
                </>
              );
            })}
          </div>
          <div className="w-full my-2 h-[1px] bg-[#2E2B36]"></div>

          {/* range filters */}
          <div className="w-full flex flex-col gap-3">
            {rangeFilters.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex justify-between items-center"
                >
                  <p className="text-[12px] font-normal text-white-1">
                    {item.label}
                  </p>
                  <div className="flex justify-center items-center gap-2">
                    {item.inputs?.map((inp, index) => {
                      return (
                        <div
                          key={index}
                          className="w-[100px] bg-[#282828] px-1 justify-center items-center border-[1px] border-[#B746F0] rounded-[4px] grid grid-cols-[1fr,auto] h-[29px]"
                        >
                          <input
                            placeholder={inp.place}
                            type="text"
                            className="w-full focus:outline-none text-[10px] font-normal text-white-1/30 bg-transparent h-full"
                          />
                          {inp.icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* buttons ----> */}
        <div className="w-full flex justify-between gap-2 items-center">
          <button className="flex justify-center items-center gap-1">
            <RiArrowGoBackLine className="text-[14px] text-[#6E6E6E]" />
            <p className="text-[10px] font-normal text-[#6E6E6E]">Reset</p>
          </button>
          <button className="flex rounded-[4px] bg-[#004BFE] w-[75px] h-[31px] justify-center items-center gap-1">
            <p className="text-[10px] font-normal text-white-1">/ Save</p>
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default FilterDrawer;

const filters = [
  "Retard Contract",
  "Beast Contract",
  "Top 10 Holders",
  "Live Chat Enabled",
  "Has Twitter",
  "Has Telegram",
  "Has Website",
];

const rangeFilters = [
  {
    label: "Dev Owns less than",
    inputs: [
      {
        place: "Max",
        icon: <VscPercentage className="text-[12px] text-white-1/30" />,
      },
    ],
  },
  {
    label: "Age",
    inputs: [
      {
        place: "Min",
        icon: <p className="text-[12px] font-normal text-white-1/30">sec</p>,
      },
      {
        place: "Max",
        icon: <p className="text-[12px] font-normal text-white-1/30">min</p>,
      },
    ],
  },
  {
    label: "Liquidity",
    inputs: [
      {
        place: "Min",
        icon: <p className="text-[12px] font-normal text-white-1/30">$</p>,
      },
      {
        place: "Max",
        icon: <p className="text-[12px] font-normal text-white-1/30">$</p>,
      },
    ],
  },
  {
    label: "Volume",
    inputs: [
      {
        place: "Min",
        icon: <p className="text-[12px] font-normal text-white-1/30">$</p>,
      },
      {
        place: "Max",
        icon: <p className="text-[12px] font-normal text-white-1/30">$</p>,
      },
    ],
  },
  {
    label: "Market Cap",
    inputs: [
      {
        place: "Min",
        icon: <p className="text-[12px] font-normal text-white-1/30">$</p>,
      },
      {
        place: "Max",
        icon: <p className="text-[12px] font-normal text-white-1/30">$</p>,
      },
    ],
  },
  {
    label: "Txns",
    inputs: [
      {
        place: "Min",
        icon: <p className="text-[12px] font-normal text-white-1/30">$</p>,
      },
      {
        place: "Max",
        icon: <p className="text-[12px] font-normal text-white-1/30">$</p>,
      },
    ],
  },
  {
    label: "Buys",
    inputs: [
      {
        place: "Min",
        icon: <p className="text-[12px] font-normal text-white-1/30">$</p>,
      },
      {
        place: "Max",
        icon: <p className="text-[12px] font-normal text-white-1/30">$</p>,
      },
    ],
  },
  {
    label: "Sells",
    inputs: [
      {
        place: "Min",
        icon: <p className="text-[12px] font-normal text-white-1/30">$</p>,
      },
      {
        place: "Max",
        icon: <p className="text-[12px] font-normal text-white-1/30">$</p>,
      },
    ],
  },
  {
    label: "Holders",
    inputs: [
      {
        place: "Al least",
        icon: "",
      },
    ],
  },
];
