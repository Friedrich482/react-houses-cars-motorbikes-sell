import type { DarkModeProps } from "../../types";
import { twMerge as tm } from "tailwind-merge";
import { IoIosClose } from "react-icons/io";
import { MdSell } from "react-icons/md";
const MenuBurger = ({ dark }: DarkModeProps) => {
  return (
    <span className="z-20 inline h-0 place-self-start">
      <div
        className={tm(
          "flex h-dvh w-[22rem] min-w-48 max-w-[32.4rem] flex-col items-center justify-start border border-stone-600 bg-default-white pt-5 sm:hidden",
          dark && "text-default-white",
        )}
      >
        <div className=" flex items-center justify-center gap-2 pr-2">
          <MdSell className={tm("size-6 text-black", dark && "text-white")} />
          <p className={tm("cursor-pointer text-black", dark && "text-white")}>
            Friedrich Sell's
          </p>
          <IoIosClose className="align-self-end size-6 cursor-pointer rounded-md border border-black" />
        </div>

        <ul className="flex flex-col items-start justify-center">
          <li>Houses</li>
          <li>Cars </li>
          <li>Motorbikes</li>
        </ul>
      </div>
    </span>
  );
};
export default MenuBurger;
