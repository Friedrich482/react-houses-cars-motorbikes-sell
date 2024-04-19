import { twMerge as tm } from "tailwind-merge";
import type { DarkModeProps } from "../../types";
import { MdSell } from "react-icons/md";

const HorizontalNavbar = ({ dark }: DarkModeProps) => {
  return (
    <div className="hidden w-10/12 sm:flex">
      <div className="flex w-6/12 flex-row items-center justify-start gap-2 pl-12">
        <MdSell className={tm("size-6 text-black", dark && "text-white")} />
        <p className={tm("cursor-pointer text-black", dark && "text-white")}>
          Friedrich Sell's
        </p>
      </div>
      <ul
        className={tm(
          "flex w-6/12 items-center justify-end gap-5 text-stone-500",
          dark && "text-stone-400",
        )}
      >
        <li
          className={tm(
            "cursor-pointer hover:text-black",
            dark && "hover:text-white",
          )}
        >
          Houses
        </li>
        <li
          className={tm(
            "cursor-pointer hover:text-black",
            dark && "hover:text-white",
          )}
        >
          Cars
        </li>
        <li
          className={tm(
            "cursor-pointer hover:text-black",
            dark && "hover:text-white",
          )}
        >
          Motorbikes
        </li>
      </ul>
    </div>
  );
};
export default HorizontalNavbar;
