import { twMerge as tm } from "tailwind-merge";
import { DropDownMenuFilter } from "../../types";

const DropDownMenu = ({
  searchParameter,
  setSearchParameter,
  dark,
}: DropDownMenuFilter) => {
  return (
    <span className="relative top-1 z-10 h-0 w-full min-w-40 house-break:w-1/2">
      <ul
        className={tm(
          "rounded-lg border border-black bg-default-white p-1",
          dark && "border-neutral-700 bg-default-black text-white",
        )}
      >
        <li
          className={tm(
            "cursor-pointer rounded-lg text-center hover:bg-neutral-300",
            dark && "hover:bg-neutral-800",
          )}
        >
          per price
        </li>
        <li
          className={tm(
            "cursor-pointer rounded-lg text-center hover:bg-neutral-300",
            dark && "hover:bg-neutral-800",
          )}
        >
          per city
        </li>
      </ul>
    </span>
  );
};
export default DropDownMenu;
