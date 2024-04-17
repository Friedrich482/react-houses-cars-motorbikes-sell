import { useEffect, useState, useRef } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import type { DarkModeProps } from "../../types";
const Navbar = ({ dark, setDark }: DarkModeProps) => {
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
  //  This part checks if the users click outside the dark mode dropdown menu to close it.
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handleOutSideClick = (event: Event) => {
      if (!ref.current?.contains(event.target as Node) && dropDownList) {
        darkModeButtonHandler(dropDownList);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref, dropDownList]);

  return (
    <>
      <nav
        className={` fixed top-0 z-10 flex min-h-14 w-full flex-row items-center justify-start border-b backdrop-opacity-100 ${dark ? "border-b-stone-600" : "border-b-black"}  hidden text-xl backdrop-blur-lg sm:flex`}
      >
        {" "}
        <div className="flex w-5/12 flex-row items-center justify-start gap-2 pl-12">
          <MdSell className={`size-6 ${dark ? "text-white" : "text-black"}`} />
          <p
            className={`cursor-pointer  ${dark ? "text-white" : "text-black"}`}
          >
            Friedrich Sell's
          </p>
        </div>
        <ul
          className={`flex w-5/12 items-center justify-end gap-5 ${dark ? "text-stone-400" : "text-stone-500"}`}
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
            onClick={() => {
              darkModeButtonHandler(dropDownList);
            }}
            className={` flex cursor-pointer items-center justify-center p-3 hover:rounded-lg ${dark ? "hover:bg-neutral-800" : "hover:bg-neutral-300"}`}
          >
            <MdDarkMode className={`${dark ? "text-white" : ""}`} />
          </div>
          <a href="https://github.com/Friedrich482" target="_blank">
            <div
              className={` flex cursor-pointer items-center justify-center p-3 hover:rounded-lg ${dark ? "hover:bg-neutral-800" : "hover:bg-neutral-300"}`}
            >
              <FaGithub className={`${dark ? "text-white" : ""}`} />
            </div>
          </a>
        </div>
      </nav>

      <span className="fixed top-[3.25rem] z-10 h-0" ref={ref}>
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
    </>
  );
};
export default Navbar;
