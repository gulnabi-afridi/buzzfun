import ComponentWrapper from "./components/shared/layout/ComponentWrapper";
import Hero from "./components/HomePage/Hero";
import Stats from "./components/HomePage/Stats";
import SearchBar from "./components/HomePage/SearchBar";
import CoinTable from "./components/HomePage/CoinTable";
import TokenCards from "./components/HomePage/TokenCards";
import Trusted from "./components/HomePage/Trusted";
import ImportUrl from "./components/HomePage/ImportUrl";
import Breadcrumb from "./components/shared/layout/Breadcrumb";
import CoinStatsCards from "./components/HomePage/CoinStatsCards";
import CoinLabel from "./components/ForSmallScreen/CoinLabel";
import { Select } from "@mantine/core";
import CreatCoin from "./components/ForSmallScreen/CreateToken";

export default function Home() {
  return (
    <main className="bg-white-2 dark:bg-[#201e26] pb-16 w-full">
      <ComponentWrapper style="">
        <div className="pt-6 csm:block hidden">
          <Breadcrumb />
        </div>
        <div className="csm:hidden block pt-4">
          <CoinLabel />
        </div>
        <CreatCoin/>
      
        <div className="flex min-h-screen flex-col">
          {/* Hero Section */}
          <Hero />
          <ImportUrl />
          {/* Token Cards --------> */}
          <TokenCards />
          {/* Search Bar   */}
          <div className="w-full flex flex-col my-4">
            <SearchBar />
            {/* Coin Table */}
            <CoinTable />
          </div>
          {/* Stats */}
          {/* <Stats /> */}
          {/* Trusted */}
          {/* <Trusted /> */}
          {/* Down Section */}
          {/* <div className="w-full mt-16 flex justify-center items-center">
            <div className="w-full dark:bg-[#25303A] border-[1px] border-transparent dark:border-white-1 bg-white-1 p-5 max-w-[1200px] flex justify-between items-center">
              <p className="text-[12px] font-normal uppercase bg-black-1 px-4 py-2 text-white-1">
                Buzz.Fun 2024
              </p>
              <p className="text-[12px] font-normal uppercase dark:text-white-1 text-black-1">
                This site is protected by recaptcha and the google privacy
                policy and terms of service apply{" "}
              </p>
              <p className="text-[12px] font-normal uppercase bg-black-1 px-4 py-2 text-white-1">
                Buzz.Fun 2024
              </p>
            </div>
          </div> */}
        </div>
      </ComponentWrapper>
    </main>
  );
}
