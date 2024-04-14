import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { useEffect, useState } from "react";
const Header = () => {
  const [dropDownList, setDropDownList] = useState(false);
  const darkModeButtonHandler = (previousState: boolean) => {
    setDropDownList(!previousState);
  };
  const [dark, setDark] = useState(false);
  const darkHandler = (previousState: boolean) => {
    !previousState ? setDark(!previousState) : true;
  };
  const lightHandler = (previousState: boolean) => {
    previousState ? setDark(!previousState) : true;
  };
  useEffect(() => {
    console.log(dark);
  }, [dark]);
  return (
    <header className="mt-6 flex flex-col items-end justify-center text-black">
      <nav className="flex w-full flex-row items-center justify-start text-xl">
        <div className="flex w-3/12 flex-row items-center justify-start pl-12">
          <MdSell className="size-6" />
          <p className="cursor-pointer text-black">Friedrich Sell's</p>
        </div>
        <ul className="flex w-7/12 items-center justify-end gap-5 text-stone-500">
          <li className="cursor-pointer hover:text-black">Houses</li>
          <li className="cursor-pointer hover:text-black">Cars</li>
          <li className="cursor-pointer hover:text-black">Motorbikes</li>
        </ul>
        <div className="mr-8 flex w-2/12 items-center justify-end gap-0">
          <div className=" flex cursor-pointer items-center justify-center p-3 hover:rounded-lg hover:bg-neutral-300 focus:bg-neutral-400">
            <MdDarkMode
              onClick={() => {
                darkModeButtonHandler(dropDownList);
              }}
            />
          </div>
          <div className=" flex cursor-pointer items-center justify-center p-3 hover:rounded-lg hover:bg-neutral-300 focus:bg-neutral-400">
            <FaGithub />
          </div>
        </div>
      </nav>
      <span className="z-10 h-0">
        <ul
          className={`mr-3 w-32 flex-col rounded-lg bg-black p-1  text-base text-white ring-1 ring-stone-800 ${dropDownList ? "flex" : "invisible"} `}
        >
          <li
            className="flex cursor-pointer items-center justify-start gap-2 rounded-lg p-1 pl-2 text-start hover:bg-stone-800"
            onClick={() => {
              lightHandler(dark);
            }}
          >
            <CiLight className="text-white" />
            Light
          </li>
          <li
            className="flex cursor-pointer items-center justify-start gap-2 rounded-lg p-1  pl-2 text-start hover:bg-stone-800"
            onClick={() => {
              darkHandler(dark);
            }}
          >
            <MdDarkMode className="" />
            Dark
          </li>
          <li className="flex cursor-pointer items-center justify-start gap-2 rounded-lg p-1 pl-2 text-start hover:bg-stone-800">
            <FaDesktop />
            System
          </li>
        </ul>
      </span>
    </header>
  );
};

export default Header;
