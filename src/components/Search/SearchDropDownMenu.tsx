import { useState } from "react";
import SearchPriceBar from "./SearchPriceBar";
import { twMerge as tm } from "tailwind-merge";
import type { SearchPrice } from "../../types";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const SearchDropDownMenu = ({
  dark,
  priceSearch,
  setPriceSearch,
}: SearchPrice) => {
  const [searchParameter, setSearchParameter] = useState("none");
  return (
    <div
      className={tm(
        "group flex h-7 w-7/12 items-center justify-center house-break:w-5/12",
        dark && "",
        searchParameter === "none" && "cursor-pointer",
      )}
    >
      <div
        className={tm(
          "group flex h-full w-full min-w-40 items-center justify-center rounded-lg border border-neutral-600 bg-default-white house-break:w-6/12",
          dark && "bg-default-black",
        )}
      >
        {searchParameter === "none" ? (
          <button
            className={tm(
              "flex items-center justify-between",
              dark && "text-white",
              searchParameter && "w-9/12",
            )}
          >
            <div className="">Select...</div>
            <div className="flex h-5 flex-col items-start justify-center">
              <MdKeyboardArrowUp className="size-3" />
              <MdKeyboardArrowDown className="size-3" />
            </div>
          </button>
        ) : (
          <SearchPriceBar
            dark={dark}
            priceSearch={priceSearch}
            setPriceSearch={setPriceSearch}
          />
        )}
      </div>
    </div>
  );
};
export default SearchDropDownMenu;
