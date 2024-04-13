import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
const Footer = () => {
  const date = new Date();
  return (
    <footer className="flex flex-col items-center justify-center border-t-4 border-t-black bg-white text-center text-2xl text-black">
      <p>&copy; {date.getFullYear()}, Friedrich482, All rights reserved</p>
      <div className=" mb-3 flex flex-row gap-1">
        <FaGithub className="size-10 transform cursor-pointer rounded-lg p-1 duration-500 hover:scale-110 hover:shadow-md hover:shadow-black" />
        <FaLinkedin className="size-10 transform cursor-pointer rounded-lg p-1 duration-500 hover:scale-110 hover:shadow-md hover:shadow-black" />
        <TbMailFilled className="size-10 transform cursor-pointer rounded-lg p-1 duration-500 hover:scale-110 hover:shadow-md hover:shadow-black" />
      </div>
    </footer>
  );
};

export default Footer;
