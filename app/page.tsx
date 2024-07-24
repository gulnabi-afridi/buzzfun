import ComponentWrapper from "./components/shared/layout/ComponentWrapper";
import Image from "next/image";
import Hero from "./components/HomePage/Hero";

export default function Home() {
  return (
    <main className="bg-white-2 w-full">
      <ComponentWrapper style="">
        <div className="flex min-h-screen flex-col">
          {/* hero section */}
            <Hero/>
        </div>
      </ComponentWrapper>
    </main>
  );
}


