import { Navbar, MenuBurger } from "./Navbar";
import type { DarkModeProps } from "../types";
import { twMerge as tm } from "tailwind-merge";
const Header = ({ dark, setDark }: DarkModeProps) => {
  return (
    <header
      className={tm(
        "mt-6 flex flex-col items-end justify-center bg-default-white p-2 text-black transition duration-300",
        dark && "bg-default-black",
      )}
    >
      <Navbar dark={dark} setDark={setDark} />
      <MenuBurger dark={dark} setDark={setDark} />
    </header>
  );
};

export default Header;
