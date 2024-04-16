import type { DarkModeProps } from "../types";
const Footer = ({ dark }: DarkModeProps) => {
  return (
    <footer
      className={`flex flex-col items-center justify-center text-center text-2xl ${dark ? " bg-default-black text-white" : " bg-default-white text-black"}`}
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
