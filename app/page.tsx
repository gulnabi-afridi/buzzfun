import ComponentWrapper from "./components/shared/layout/ComponentWrapper";
import Image from "next/image";
import Hero from "./components/HomePage/Hero";
import Stats from "./components/HomePage/Stats";
import SearchBar from "./components/HomePage/SearchBar";
import CoinTable from "./components/HomePage/CoinTable";
import Pagination from "./components/shared/Pagination";

export default function Home() {
  return (
    <main className="bg-white-2 w-full">
      <ComponentWrapper style="">
        <div className="flex min-h-screen flex-col">
          {/* Hero Section */}
          <Hero />
          {/* Stats */}
          <Stats />
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
