import React from 'react'
import Image from 'next/image'

const BuyAndSellWidget:React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-3 border-[1px] bg-white-1 border-black-1 rounded-[3px]">
    {/* buttons */}
    <div className="w-full grid h-[50px] grid-cols-2 gap-2">
      <button className="text-[22px] font-normal text-black-1 w-full h-full bg-green-1">
        Buy
      </button>
      <button className="text-[22px] font-normal text-black-1/40 w-full h-full bg-[#EA000054]">
        Sell
      </button>
    </div>
    {/* switch to coin --> */}
    <div className="w-full flex justify-between items-center">
      <p className="text-[15px] font-normal text-white-1 bg-black-1 px-[6px] rounded-[3px]">
        Switch to ETH
      </p>
      <p className="text-[15px] font-normal text-white-1 bg-blue-1 px-[6px] rounded-[3px]">
        Slippage
      </p>
    </div>
    {/* ticker input --->  */}
    <div className="w-full border-[1px] px-2 border-black-1 h-[50px] grid grid-cols-[1fr,100px]">
      <input
        placeholder="0.0"
        type="text"
        className="w-full placeholder:text-black-1 h-full bg-transparent text-[22px] font-normal text-black-1"
        name="ticker"
        id=""
      />
      <div className="flex justify-center items-center gap-2">
        <p className="text-[15px] font-normal text-black-1">Ticker</p>
        <div className="w-[32px] h-[32px] bg-black-1 flex justify-center items-center">
          <Image
            src="/assets/emoji.png"
            alt=""
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
    {/* you spend ---> */}
    <div className="w-full flex justify-between items-center">
      <p className="text-[15px] pl-32 font-normal text-black-1">
        You spend:
      </p>
      <p className="text-[15px] font-normal text-black-1">0.1 ETH</p>
    </div>
    {/* system messages ---> */}
    <p className="text-[15px] font-normal text-black-1">
      System messages{" "}
    </p>
    {/* place trade button ---->  */}
    <button className="w-full h-[51px] bg-yellow-1 text-[20px] font-normal text-black-1 flex justify-center items-center">
      Place trade
    </button>
  </div>
  )
}

export default BuyAndSellWidget