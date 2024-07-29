import ComponentWrapper from "./components/shared/layout/ComponentWrapper";
import Image from "next/image";
import Hero from "./components/HomePage/Hero";
import Stats from "./components/HomePage/Stats";
import SearchBar from "./components/HomePage/SearchBar";
import CoinTable from "./components/HomePage/CoinTable";
import TokenCards from "./components/HomePage/TokenCards";
import Trusted from "./components/HomePage/Trusted";

export default function Home() {
  return (
    <main className="bg-white-2 dark:bg-[#1D252C] pb-16 w-full">
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
          {/* Search Bar   */}
          <SearchBar />
          {/* Coin Table */}
          <CoinTable />
          {/* Stats */}
          <Stats />
          {/* Trusted */}
          <Trusted />
          {/* Down Section */}
          <div className="w-full mt-16 flex justify-center items-center">
            <div className="w-full bg-white-1 p-5 max-w-[1200px] flex justify-between items-center">
              <p className="text-[12px] font-normal uppercase bg-black-1 px-4 py-2 text-white-1">
                Buzz.Fun 2024
              </p>
              <p className="text-[12px] font-normal uppercase text-black-1">
                This site is protected by recaptcha and the google privacy
                policy and terms of service apply{" "}
              </p>
              <p className="text-[12px] font-normal uppercase bg-black-1 px-4 py-2 text-white-1">
                Buzz.Fun 2024
              </p>
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </main>
  );
}

const pattern1 =
  '//import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; Degen420690.exe\\{}..**//Standby; {Ultra deployments in progress} bool = True. Super community loading..Airdrop pending. {**';
