import type { DarkModeProps } from "../types";
import { Link } from "react-router-dom";
import { twMerge as tm } from "tailwind-merge";
const NotFoundPage = ({ dark }: DarkModeProps) => {
  document.title = "Not found";
  return (
    <main className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-6">
      <div
        className={tm(
          "text-9xl font-extrabold max-very-small:text-6xl",
          dark && "text-white",
        )}
      >
        404
      </div>
      <div className={tm("text-center text-xl", dark && "text-white")}>
        This page could not be found
      </div>
      <Link
        to={"/"}
        className={tm(
          "text-neutral-700 transition duration-300 ease-out hover:text-black hover:underline",
          dark && "text-neutral-400 hover:text-white",
        )}
      >
        Go back to the main page
      </Link>
    </main>
  );
};
export default NotFoundPage;
