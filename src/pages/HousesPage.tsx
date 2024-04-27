import Houses from "../components/House";
import type { DarkModeProps } from "../types";
import { twMerge as tm } from "tailwind-merge";
import SearchBar from "../components/SearchBar";
const HousesPage = ({ dark, setDark }: DarkModeProps) => {
  return (
    <>
      <section className="flex items-center justify-center gap-3 max-house-break:flex-col">
        <h2
          className={tm(
            "flex items-center justify-end text-4xl font-bold house-break:w-7/12",
            dark && "text-white",
          )}
        >
          Houses
        </h2>
        <SearchBar />
      </section>
      <main className="flex w-full flex-wrap items-center justify-center gap-10 pl-10 pr-10">
        <Houses dark={dark} setDark={setDark} />
      </main>
    </>
  );
};
export default HousesPage;
