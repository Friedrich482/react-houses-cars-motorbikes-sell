import type { DarkModeProps } from "../types";
import { twMerge as tm } from "tailwind-merge";
const HeroSection = ({ dark }: DarkModeProps) => {
  return (
    <section className="mb-24 ml-12 mr-12 flex flex-col items-center justify-center tracking-tighter sm:ml-14 sm:mr-14">
      <h1
        className={tm(
          "mt-12 max-w-[800px] text-center text-4xl font-extrabold sm:mt-20 sm:text-5xl",
          dark && " text-default-white",
        )}
      >
        Discover Your Next Journey: Homes, Cars, and Bikes Await!
      </h1>
      <p
        className={tm(
          "mt-8 max-w-[700px] text-center text-xl text-neutral-700 sm:text-2xl",
          dark && " text-neutral-400",
        )}
      >
        Awesome website to buy your cars, homes and bikes and best prices and
        with only few clicks!
      </p>
      <a href="#heroSection">
        <button
          className={tm(
            "mt-5 rounded-lg bg-black p-3 pl-8 pr-8 text-xl text-default-white",
            dark && "bg-default-white text-default-black",
          )}
        >
          Discover us
        </button>
      </a>
    </section>
  );
};
export default HeroSection;
