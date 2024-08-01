import React from 'react'
import { RxCrossCircled } from "react-icons/rx";


const DeployementMilestones:React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-3">
    <p className="text-[18px] font-semibold text-black-1">
      Deployment milestones:
    </p>
    <div className="w-full p-3 border-[1px] border-blue-1">
      <div className="w-full flex flex-col gap-2">
        {deploymentMilestones.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full grid py-2 px-5 ${
                item.isComplete ? "bg-green-1" : "bg-white-1"
              } grid-cols-[40px,2fr,1fr]`}
            >
              <p className="w-full text-black-1 flex justify-start items-center">
                #{index + 1}
              </p>
              <p className="max-w-[140px] w-full text-black-1 flex justify-start items-center">
                {item.tokenName}
              </p>
              {item.isComplete ? (
                <p className="w-full underline text-[12px] text-black-1 flex justify-end items-center">
                  Complete
                </p>
              ) : (
                <div className="flex w-full justify-end items-center gap-1">
                  <RxCrossCircled className="text-[16px]" />
                  <p className=" underline text-[12px] text-black-1">
                    Incomplete
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default DeployementMilestones

const deploymentMilestones = [
    {
      tokenName: "Token Deployed",
      isComplete: true,
    },
    {
      tokenName: "Trading on Buzz.fun",
      isComplete: true,
    },
    {
      tokenName: "Max 1% Buy on Bonding curve employed",
      isComplete: true,
    },
    {
      tokenName: "Bonding Curve",
      isComplete: true,
    },
    {
      tokenName: "LP deployed to Uniswap",
      isComplete: false,
    },
    {
      tokenName: "Trading on Uniswap",
      isComplete: false,
    },
    {
      tokenName: "Contract renounced",
      isComplete: false,
    },
    {
      tokenName: "Max buy 1% for 15 mins ",
      isComplete: false,
    },
    {
      tokenName: "Phase 1 Tax (15 mins)",
      isComplete: false,
    },
    {
      tokenName: "LP Burned",
      isComplete: false,
    },
    {
      tokenName: "Phase 2 Tax (45 mins)",
      isComplete: false,
    },
    {
      tokenName: "Tax Zeroed",
      isComplete: false,
    },
  ];
  