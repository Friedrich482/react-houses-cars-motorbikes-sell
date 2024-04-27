import type { DarkModeProps } from "../types";
import { twMerge as tm } from "tailwind-merge";
const Footer = ({ dark }: DarkModeProps) => {
  return (
    <footer
      className={tm(
        "mb-0 flex flex-col items-center justify-center text-center text-2xl text-black",
        dark && "text-white",
      )}
    >
      <p className="mb-2 text-base">
        Built by{" "}
        <a
          target="_blank"
          href="https://github.com/Friedrich482"
          className="underline"
        >
          Friedrich482
        </a>
        . The code source is available on{" "}
        <a
          href="https://github.com/Friedrich482/react-mp-App"
          className="underline"
        >
          GitHub.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
