import Houses from "../components/House";
import type { DarkModeProps } from "../types";
import { twMerge as tm } from "tailwind-merge";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
const HousesPage = ({ dark }: DarkModeProps) => {
  const [priceSearch, setPriceSearch] = useState(0);
  return (
    <main className="flex min-h-[100vh] flex-col gap-12">
      <section className="flex items-center justify-center gap-3 max-house-break:flex-col">
        <h2
          className={tm(
            "flex items-center justify-end text-4xl font-bold house-break:w-7/12",
            dark && "text-white",
          )}
        >
          Houses
        </h2>
        <SearchBar
          dark={dark}
          priceSearch={priceSearch}
          setPriceSearch={setPriceSearch}
        />
      </section>
      <section className="flex w-full flex-wrap items-center justify-center gap-10 pl-10 pr-10">
        <Houses dark={dark} priceSearch={priceSearch} />
      </section>
    </main>
  );
};
export default HousesPage;
