import { twMerge as tm } from "tailwind-merge";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { DefaultSearchBarProps } from "../../types";
// import { useEffect } from "react";

const DefaultSearchBar = ({ dark, searchParameter }: DefaultSearchBarProps) => {
  return (
    <button
      className={tm(
        "flex items-center justify-between",
        dark && "text-white",
        searchParameter && "w-9/12",
      )}
    >
      <div className="">Search ...</div>
      <div className="flex h-5 flex-col items-start justify-center">
        <MdKeyboardArrowUp className="size-3" />
        <MdKeyboardArrowDown className="size-3" />
      </div>
    </button>
  );
};
export default DefaultSearchBar;
