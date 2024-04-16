import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { useState } from "react";
import type { DarkModeProps } from "../types";
const Header = ({ dark, setDark }: DarkModeProps) => {
  const [dropDownList, setDropDownList] = useState(false);
  const darkModeButtonHandler = (previousState: boolean) => {
    setDropDownList(!previousState);
  };
  const darkHandler = (previousState: boolean) => {
    !previousState ? setDark(!previousState) : true;
  };
  const lightHandler = (previousState: boolean) => {
    previousState ? setDark(!previousState) : true;
  };

  return (
    <header
      className={`mt-6  flex flex-col items-end justify-center p-2 text-black ${dark ? "bg-default-black" : " bg-default-white"} transition duration-300 `}
    >
      <nav className="flex w-full flex-row items-center justify-start text-xl">
        <div className="flex w-3/12 flex-row items-center justify-start pl-12">
          <MdSell className={`size-6 ${dark ? "text-white" : "text-black"}`} />
          <p
            className={`cursor-pointer  ${dark ? "text-white" : "text-black"}`}
          >
            Friedrich Sell's
          </p>
        </div>
        <ul
          className={`flex w-7/12 items-center justify-end gap-5 ${dark ? "text-stone-400" : "text-stone-500"}`}
        >
          <li
            className={`cursor-pointer ${dark ? "hover:text-white" : "hover:text-black"} `}
          >
            Houses
          </li>
          <li
            className={`cursor-pointer ${dark ? "hover:text-white" : "hover:text-black"} `}
          >
            Cars
          </li>
          <li
            className={`cursor-pointer ${dark ? "hover:text-white" : "hover:text-black"} `}
          >
            Motorbikes
          </li>
        </ul>
        <div className="mr-8 flex w-2/12 items-center justify-end gap-0">
          <div
            className={` flex cursor-pointer items-center justify-center p-3 hover:rounded-lg ${dark ? "hover:bg-neutral-800" : "hover:bg-neutral-300"}`}
          >
            <MdDarkMode
              onClick={() => {
                darkModeButtonHandler(dropDownList);
              }}
              className={`${dark ? "text-white" : ""}`}
            />
          </div>
          <div
            className={` flex cursor-pointer items-center justify-center p-3 hover:rounded-lg ${dark ? "hover:bg-neutral-800" : "hover:bg-neutral-300"}`}
          >
            <FaGithub className={`${dark ? "text-white" : ""}`} />
          </div>
        </div>
      </nav>

      <span className="z-10 h-0">
        <ul
          className={`mr-3 w-32 flex-col rounded-lg p-1  text-base text-white ring-1 ring-stone-800 ${dropDownList ? "flex" : "invisible"} ${dark ? "bg-default-black text-white" : "bg-default-white"}`}
        >
          <li
            className={`flex cursor-pointer items-center justify-start gap-2 rounded-lg p-1  pl-2 text-start ${dark ? "  hover:bg-neutral-800" : "text-black hover:bg-neutral-300"} `}
            onClick={() => {
              lightHandler(dark);
            }}
          >
            <CiLight className="" />
            Light
          </li>
          <li
            className={`flex cursor-pointer items-center justify-start gap-2 rounded-lg   p-1 pl-2 text-start ${dark ? " hover:bg-neutral-800" : "text-black hover:bg-neutral-300"} `}
            onClick={() => {
              darkHandler(dark);
            }}
          >
            <MdDarkMode className="" />
            Dark
          </li>
          <li
            className={`flex cursor-pointer items-center justify-start gap-2 rounded-lg p-1  pl-2 text-start ${dark ? "  hover:bg-neutral-800" : "text-black hover:bg-neutral-300"} `}
          >
            <FaDesktop />
            System
          </li>
        </ul>
      </span>
    </header>
  );
};

export default Header;
