import { useState } from "react";
import SearchPriceBar from "./SearchPriceBar";
import DefaultSearchBar from "./DefaultSearchBar";
import DropDownMenu from "./DropDownMenu";
import { twMerge as tm } from "tailwind-merge";
import type { SearchPrice } from "../../types";
const SearchDropDownMenu = ({
  dark,
  priceSearch,
  setPriceSearch,
}: SearchPrice) => {
  const [searchParameter, setSearchParameter] = useState("none");
  const [dropDownMenuVisibility, setDropDownMenuVisibility] = useState(false);
  return (
    <>
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
            <DefaultSearchBar
              dark={dark}
              searchParameter={searchParameter}
              dropDownMenuVisibility={dropDownMenuVisibility}
              setDropDownMenuVisibility={setDropDownMenuVisibility}
            />
          ) : (
            <SearchPriceBar
              dark={dark}
              priceSearch={priceSearch}
              setPriceSearch={setPriceSearch}
            />
          )}
        </div>
      </div>

      {dropDownMenuVisibility ? (
        <DropDownMenu
          searchParameter={searchParameter}
          setSearchParameter={setSearchParameter}
        />
      ) : null}
    </>
  );
};
export default SearchDropDownMenu;
