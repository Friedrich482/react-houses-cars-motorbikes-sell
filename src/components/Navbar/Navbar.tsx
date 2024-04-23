import { useEffect, useState, useRef } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { FaGithub, FaDesktop } from "react-icons/fa";
import type { DarkModeProps } from "../../types";
import { twMerge as tm } from "tailwind-merge";
import HorizontalNavbar from "./HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar";
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
  useEffect(() => {
    dropDownList
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [dropDownList]);
  return (
    <>
      <nav
        className={tm(
          "fixed top-0 z-10 flex min-h-14 w-full flex-row items-center justify-end border-b border-b-black text-xl backdrop-blur-lg backdrop-opacity-100 sm:justify-start",
          dark && "border-b-stone-600",
        )}
      >
        <HorizontalNavbar dark={dark} setDark={setDark} />
        <VerticalNavbar dark={dark} setDark={setDark} />
        <div className=" mr-8 flex items-center justify-end gap-0 sm:w-2/12">
          <div
            onClick={() => {
              darkModeButtonHandler(dropDownList);
            }}
            className={tm(
              "flex cursor-pointer items-center justify-center p-3 hover:rounded-lg hover:bg-neutral-300",
              dark && "hover:bg-neutral-800",
            )}
          >
            {dark ? (
              <MdDarkMode className={tm("", dark && "text-white")} />
            ) : (
              <CiLight />
            )}
          </div>
          <a href="https://github.com/Friedrich482" target="_blank">
            <div
              className={tm(
                "flex cursor-pointer items-center justify-center p-3 hover:rounded-lg hover:bg-neutral-300",
                dark && "hover:bg-neutral-800",
              )}
            >
              <FaGithub className={tm("", dark && "text-white")} />
            </div>
          </a>
        </div>
      </nav>

      <span className="fixed top-[3.25rem] z-10 h-0" ref={ref}>
        <ul
          className={tm(
            "invisible mr-3 w-32 flex-col rounded-lg  border border-default-black bg-default-white p-1 text-base text-white transition duration-300 ease-out",
            dark && "border-neutral-700 bg-default-black text-white",
            dropDownList && "visible flex",
          )}
        >
          <li
            className={tm(
              "flex cursor-pointer items-center justify-start gap-2 rounded-lg p-1  pl-2 text-start text-black hover:bg-neutral-300",
              dark && "text-white hover:bg-neutral-800",
            )}
            onClick={() => {
              lightHandler(dark);
            }}
          >
            <CiLight />
            Light
          </li>
          <li
            className={tm(
              "flex cursor-pointer items-center justify-start gap-2 rounded-lg   p-1 pl-2 text-start text-black hover:bg-neutral-300",
              dark && "text-white hover:bg-neutral-800",
            )}
            onClick={() => {
              darkHandler(dark);
            }}
          >
            <MdDarkMode />
            Dark
          </li>
          <li
            className={tm(
              "flex cursor-pointer items-center justify-start gap-2 rounded-lg p-1  pl-2 text-start text-black hover:bg-neutral-300",
              dark && "text-white hover:bg-neutral-800",
            )}
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
