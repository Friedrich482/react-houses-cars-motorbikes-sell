import { MdDarkMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { MdSell } from "react-icons/md";
const Header = () => {
  return (
    <header className="mt-3 text-black">
      <nav className="flex w-full flex-row items-center justify-start text-2xl">
        <div className="flex w-3/12 items-center justify-start pl-6">
          <MdSell className="size-6" />
          <p className="cursor-pointer text-black">Friedrich Sell's</p>
        </div>
        <ul className="flex w-7/12 items-center justify-end gap-5 text-slate-500">
          <li className="cursor-pointer hover:text-black">Houses</li>
          <li className="cursor-pointer hover:text-black">Cars</li>
          <li className="cursor-pointer hover:text-black">Motorbikes</li>
        </ul>
        <div className="mr-8 flex w-2/12 items-center justify-end gap-5">
          <MdDarkMode />
          <FaGithub />
        </div>
      </nav>
    </header>
  );
};

export default Header;
