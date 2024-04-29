import { useState } from "react";
import SearchPriceBar from "./SearchPriceBar";
import DefaultSearchBar from "./DefaultSearchBar";
import DropDownMenu from "./DropDownMenu";
import { twMerge as tm } from "tailwind-merge";
import type { SearchDropDownMenuProps } from "../../types";
const SearchDropDownMenu = ({
  dark,
  priceSearch,
  setPriceSearch,
  dropDownMenuVisibility,
  setDropDownMenuVisibility,
}: SearchDropDownMenuProps) => {
  const [searchParameter, setSearchParameter] = useState("none");
  const handleSearchDropDownMenuClick = (previousState: boolean) => {
    setDropDownMenuVisibility(!previousState);
  };
  return (
    <>
      <div
        className={tm(
          "group flex h-7 w-7/12 items-center justify-center house-break:w-5/12",
          dark && "",
          searchParameter === "none" && "flex-col",
        )}
      >
        <div
          className={tm(
            "group flex h-full w-full min-w-40 cursor-pointer items-center justify-center rounded-lg border border-neutral-600 bg-default-white house-break:w-6/12",
            dark && "bg-default-black",
          )}
          onClick={() => {
            handleSearchDropDownMenuClick(dropDownMenuVisibility);
          }}
        >
          {searchParameter === "none" ? (
            <DefaultSearchBar dark={dark} searchParameter={searchParameter} />
          ) : (
            <SearchPriceBar
              dark={dark}
              priceSearch={priceSearch}
              setPriceSearch={setPriceSearch}
            />
          )}
        </div>
        {dropDownMenuVisibility ? (
          <DropDownMenu
            searchParameter={searchParameter}
            setSearchParameter={setSearchParameter}
            dark={dark}
          />
        ) : null}
      </div>
    </>
  );
};
export default SearchDropDownMenu;
