import { twMerge as tm } from "tailwind-merge";
import type { DarkModeProps } from "../../types";
import { MdSell } from "react-icons/md";
import { Link } from "react-router-dom";
const HorizontalNavbar = ({ dark }: DarkModeProps) => {
  return (
    <div className="hidden w-10/12 sm:flex">
      <Link
        to={"/"}
        className="flex w-6/12 flex-row items-center justify-start gap-2 pl-12"
      >
        <MdSell className={tm("size-6 text-black", dark && "text-white")} />
        <p className={tm("cursor-pointer text-black", dark && "text-white")}>
          Friedrich Sell's
        </p>
      </Link>
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
          <Link to="/houses">Houses</Link>
        </li>
        <li
          className={tm(
            "cursor-pointer hover:text-black",
            dark && "hover:text-white",
          )}
        >
          <Link to="/cars">Cars</Link>
        </li>
        <li
          className={tm(
            "cursor-pointer hover:text-black",
            dark && "hover:text-white",
          )}
        >
          <Link to="/motorbikes">Motorbikes</Link>
        </li>
      </ul>
    </div>
  );
};
export default HorizontalNavbar;
