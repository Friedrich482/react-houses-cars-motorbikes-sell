import Houses from "../components/House";
import type { DarkModeProps } from "../types";
import { twMerge as tm } from "tailwind-merge";
import SearchDropDownMenu from "../components/Search/";
import { useState } from "react";
const HousesPage = ({ dark }: DarkModeProps) => {
  const [priceSearch, setPriceSearch] = useState(0);
  const [citySearch, setCitySearch] = useState("");
  const [dropDownMenuVisibility, setDropDownMenuVisibility] = useState(false);
  const [searchParameter, setSearchParameter] = useState("none");

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
        <SearchDropDownMenu
          dark={dark}
          priceSearch={priceSearch}
          setPriceSearch={setPriceSearch}
          dropDownMenuVisibility={dropDownMenuVisibility}
          setDropDownMenuVisibility={setDropDownMenuVisibility}
          citySearch={citySearch}
          setCitySearch={setCitySearch}
          searchParameter={searchParameter}
          setSearchParameter={setSearchParameter}
        />
      </section>
      <section
        className={tm(
          "flex w-full flex-wrap items-center justify-center gap-10 pl-10 pr-10",
        )}
      >
        <Houses
          dark={dark}
          priceSearch={priceSearch}
          citySearch={citySearch}
          searchParameter={searchParameter}
        />
      </section>
    </main>
  );
};
export default HousesPage;
