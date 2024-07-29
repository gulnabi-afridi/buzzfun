import ComponentWrapper from "./components/shared/layout/ComponentWrapper";
import Image from "next/image";
import Hero from "./components/HomePage/Hero";
import Stats from "./components/HomePage/Stats";
import SearchBar from "./components/HomePage/SearchBar";
import CoinTable from "./components/HomePage/CoinTable";
import Pagination from "./components/shared/Pagination";
import TokenCards from "./components/HomePage/TokenCards";

export default function Home() {
  return (
    <main className="bg-white-2 dark:bg-[#1D252C] pb-28 w-full">
      <ComponentWrapper style="">
        <div className="flex min-h-screen flex-col">
          {/* Hero Section */}
          <Hero />
          <div className="w-full my-5 flex justify-center items-center">
            <div className="w-full max-w-[1350px] bg-white-1 p-3 flex justify-center items-center gap-2">
              <Image src="/assets/emoji.png" alt="" width={33} height={33} />
              <p className="text-[12px] font-normal text-black-1">{pattern1}</p>
            </div>
          </div>
          {/* Token Cards --------> */}
          <TokenCards />
          {/* Stats */}
          {/* <Stats /> */}
          {/* Search Bar   */}
          <SearchBar />
          {/* Coin Table */}
          <CoinTable />
          {/* Pagination */}
          <Pagination />
        </div>
      </ComponentWrapper>
    </main>
  );
}

const pattern1 =
  '//import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; Degen420690.exe\\{}..**//Standby; {Ultra deployments in progress} bool = True. Super community loading..Airdrop pending. {**';
