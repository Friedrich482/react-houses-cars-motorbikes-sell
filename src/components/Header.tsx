import Navbar from "./Navbar";
import type { DarkModeProps } from "../types";
const Header = ({ dark, setDark }: DarkModeProps) => {
  return (
    <header
      className={`mt-6 flex flex-col items-end justify-center p-2 text-black ${dark ? "bg-default-black" : " bg-default-white"} transition duration-300 `}
    >
      <Navbar dark={dark} setDark={setDark} />
    </header>
  );
};

export default Header;
