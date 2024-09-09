import React from "react";

import { useDisclosure } from "@mantine/hooks";
import FilterDrawer from "../shared/Drawers/FilterDrawer";
import CoinStatsCard from "../shared/Cards/CoinStatsCard";

interface Props {
  selectedCard: number;
}

const CoinStatsCards: React.FC<Props> = ({ selectedCard }: Props) => {
  const [filterDrawer, { open: openFilterDrawer, close: closeFilterDrawer }] =
    useDisclosure(false);

  return (
    <React.Fragment>
      <div className="w-full flex gap-6 flex-col mt-3 bg-transparent dark:bg-[#0E161C] rounded-[5px] border-[1px] border-[#38394A] py-4 px-2">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-3">
          {coinsStatsCards.map((item, index) => {
            return (
              <CoinStatsCard
                key={index}
                openFilter={openFilterDrawer}
                borderColor={item.cardBorderColor}
                title={item.title}
              />
            );
          })}
        </div>
        <p className="text-[10px] csm:block hidden font-normal px-2 text-white-1">
          <span className="text-[#EBFF00]">{`//`}</span>{" "}
          <span className="text-[#B746F0]">{`ô¿ô `}</span>{" "}
          <span className="text-[#EBFF00]">{`+`}</span>{" "}
          <span className="text-[#EBFF00]">{`( .  Y . ) > (@_@)....<*_*> / (♥️_♥️)][L][F][G][][][0]******_______¯\_(ツ)_/¯_________8=======D`}</span>{" "}
          <span className="text-[#336FFE]">{`ฅ^•ﻌ•^ฅ`}</span>{" "}
        </p>
      </div>
      {/* Filter drawer -------------------> */}
      <FilterDrawer open={filterDrawer} closeDrawer={closeFilterDrawer} />
    </React.Fragment>
  );
};

const coinsStatsCards = [
  {
    title: "// Tokens recently created \\ ",
    cardBorderColor: "border-[#FEF652]",
  },
  {
    title: "// Bonding almost complete \\ ",
    cardBorderColor: "border-[#A03ED2]",
  },
  {
    title: "// LFG to Uniswap \\ ",
    cardBorderColor: "border-[#61D937]",
  },
];

export default CoinStatsCards;
