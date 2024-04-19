import type { DarkModeProps } from "../../types";
import { twMerge as tm } from "tailwind-merge";
import { IoIosClose } from "react-icons/io";
import { MdSell } from "react-icons/md";
import { useState } from "react";
const MenuBurger = ({ dark }: DarkModeProps) => {
  const [openVerticalNavbar, setOpenVerticalNavbar] = useState(true);
  const handleCloseButtonClick = (previousState: boolean) => {
    setOpenVerticalNavbar(!previousState);
  };
  return (
    <span
      className={
        openVerticalNavbar
          ? "z-20 inline h-0 transform place-self-start duration-1000"
          : "hidden"
      }
    >
      <div
        className={tm(
          "flex h-[200vh] w-[22rem] min-w-48 max-w-[32.4rem] flex-col items-center justify-start gap-8 border border-stone-600 bg-default-white pt-5 sm:hidden",
          dark && "bg-default-black",
        )}
      >
        <div className="justify- flex w-full items-center justify-between pr-2">
          <div className="ml-8 flex flex-row items-center justify-center gap-2">
            <MdSell className={tm("size-6 text-black", dark && "text-white")} />
            <p
              className={tm("cursor-pointer text-black", dark && "text-white")}
            >
              Friedrich Sell's
            </p>
          </div>
          <IoIosClose
            className={tm(
              "hover: mr-3 size-6 cursor-pointer rounded-md border-2 border-stone-500 text-stone-950 hover:border-default-black hover:text-default-black",
              dark &&
                "border-stone-400 text-stone-400 hover:border-default-white hover:text-default-white",
            )}
            onClick={() => {
              handleCloseButtonClick(openVerticalNavbar);
            }}
          />
        </div>

        <ul className="flex w-full flex-col gap-3">
          {" "}
          <li
            className={tm("ml-16 cursor-pointer", dark && "text-default-white")}
          >
            Houses
          </li>
          <li
            className={tm("ml-16 cursor-pointer", dark && "text-default-white")}
          >
            Cars{" "}
          </li>
          <li
            className={tm("ml-16 cursor-pointer", dark && "text-default-white")}
          >
            Motorbikes
          </li>
        </ul>
      </div>
    </span>
  );
};
export default MenuBurger;
