import { Navbar, MenuBurger } from "./Navbar";
import type { DarkModeProps } from "../types";
import { twMerge as tm } from "tailwind-merge";
const Header = ({ dark, setDark }: DarkModeProps) => {
  return (
    <header
      className={tm(
        "flex flex-col items-end justify-center bg-default-white text-black transition duration-300 sm:mt-6 sm:p-2",
        dark && "bg-default-black",
      )}
    >
      <Navbar dark={dark} setDark={setDark} />
      <MenuBurger dark={dark} setDark={setDark} />
    </header>
  );
};

export default Header;
