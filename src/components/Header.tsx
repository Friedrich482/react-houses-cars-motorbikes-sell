import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { useState } from "react";
const Header = () => {
  const [DropDownList, setDropDownList] = useState(false);
  const darkModeButtonHandler = () => {};
  return (
    <header className="mt-6 flex flex-col items-end justify-center gap-2 text-black">
      <nav className="flex w-full flex-row items-center justify-start text-xl">
        <div className="flex w-3/12 items-center justify-start pl-12">
          <MdSell className="size-6" />
          <p className="cursor-pointer text-black">Friedrich Sell's</p>
        </div>
        <ul className="flex w-7/12 items-center justify-end gap-5 text-stone-500">
          <li className="cursor-pointer hover:text-black">Houses</li>
          <li className="cursor-pointer hover:text-black">Cars</li>
          <li className="cursor-pointer hover:text-black">Motorbikes</li>
        </ul>
        <div className="mr-8 flex w-2/12 items-center justify-end gap-5">
          <MdDarkMode />
          <FaGithub />
        </div>
      </nav>
      <div className="flex items-center justify-end backdrop-blur-sm">
        <ul className="z-10 mr-3 w-32 rounded-lg bg-black p-1 text-base text-white ring-1 ring-stone-800">
          <li className="flex cursor-pointer items-center justify-start gap-2 rounded-lg p-1 pl-2 text-start hover:bg-stone-800">
            <CiLight className="text-white" />
            Light
          </li>
          <li className="flex cursor-pointer items-center justify-start gap-2 rounded-lg p-1  pl-2 text-start hover:bg-stone-800">
            <MdDarkMode className="" />
            Dark
          </li>
          <li className="flex cursor-pointer items-center justify-start gap-2 rounded-lg p-1 pl-2 text-start hover:bg-stone-800">
            <FaDesktop />
            System
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
