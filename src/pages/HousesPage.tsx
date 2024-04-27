import Houses from "../components/House";
import type { DarkModeProps } from "../types";
import { twMerge as tm } from "tailwind-merge";
const HousesPage = ({ dark, setDark }: DarkModeProps) => {
  return (
    <>
      <h2
        className={tm(
          "w-full text-center text-4xl font-bold",
          dark && "text-white",
        )}
      >
        Houses
      </h2>
      <main className="flex w-full flex-wrap items-center justify-center gap-10 pl-10 pr-10">
        <Houses dark={dark} setDark={setDark} />
      </main>
    </>
  );
};
export default HousesPage;
