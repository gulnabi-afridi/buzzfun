import React from "react";
import Image from "next/image";

const CoinLabel: React.FC = () => {
  return (
    <div className="bg-white-1  flex justify-center items-center px-2 py-1 navibarCardSh rounded-[2px] gap-2">
      <Image
        src="/assets/green.svg"
        className="object-fill"
        alt=""
        width={22}
        height={22}
      />
      <Image
        src="/assets/coinIcon.svg"
        className="object-fill"
        alt=""
        width={19}
        height={19}
      />
      <p className="font-montserrat text-black-1 text-[14px] font-normal">
        Rambo <span className="font-semibold"> bought</span> 0.1 ETH of X coin{" "}
      </p>
      <Image
        src="/assets/coin.svg"
        alt=""
        className="object-fill"
        width={19}
        height={19}
      />
    </div>
  );
};

export default CoinLabel;
