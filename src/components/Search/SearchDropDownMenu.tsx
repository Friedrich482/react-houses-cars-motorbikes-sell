import SearchPriceBar from "./SearchPriceBar";
import SearchCityBar from "./SearchCityBar";
import DefaultSearchBar from "./DefaultSearchBar";
import DropDownMenu from "./DropDownMenu";
import { twMerge as tm } from "tailwind-merge";
import { IoIosCloseCircleOutline } from "react-icons/io";
import type { SearchDropDownMenuProps } from "../../types";
import { useEffect } from "react";
const SearchDropDownMenu = ({
  dark,
  priceSearch,
  setPriceSearch,
  dropDownMenuVisibility,
  setDropDownMenuVisibility,
  citySearch,
  setCitySearch,
  searchParameter,
  setSearchParameter,
}: SearchDropDownMenuProps) => {
  const handleSearchDropDownMenuClick = () => {
    setDropDownMenuVisibility(true);
  };
  const handleCloseButtonClick = () => {
    setSearchParameter("none");
  };

  useEffect(() => {
    dropDownMenuVisibility
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [dropDownMenuVisibility, searchParameter]);

  return (
    <>
      <div
        className={tm(
          "group flex h-7 w-7/12 items-center justify-center gap-1 house-break:w-5/12",
          dark && "",
          searchParameter === "none" && "flex-col",
        )}
      >
        <div
          className={tm(
            "group flex h-full w-full min-w-40 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg border border-neutral-600 bg-default-white house-break:w-6/12",
            dark && "bg-default-black",
          )}
          onClick={() => {
            searchParameter === "none" && handleSearchDropDownMenuClick();
          }}
        >
          {searchParameter === "none" ? (
            <DefaultSearchBar dark={dark} searchParameter={searchParameter} />
          ) : searchParameter === "price" ? (
            <>
              <SearchPriceBar
                dark={dark}
                priceSearch={priceSearch}
                setPriceSearch={setPriceSearch}
              />
            </>
          ) : (
            <>
              <SearchCityBar
                dark={dark}
                citySearch={citySearch}
                setCitySearch={setCitySearch}
              />
            </>
          )}
        </div>
        {dropDownMenuVisibility && searchParameter === "none" ? (
          <DropDownMenu
            searchParameter={searchParameter}
            setSearchParameter={setSearchParameter}
            dark={dark}
            dropDownMenuVisibility={dropDownMenuVisibility}
            setDropDownMenuVisibility={setDropDownMenuVisibility}
          />
        ) : null}
        <IoIosCloseCircleOutline
          className={tm(
            "size-8 flex-shrink-0 cursor-pointer font-light text-neutral-700 hover:text-black",
            searchParameter === "none" && "hidden",
            dark && "text-neutral-600 hover:text-neutral-200",
          )}
          onClick={() => {
            handleCloseButtonClick();
          }}
          title="Close"
        />
      </div>
    </>
  );
};
export default SearchDropDownMenu;
