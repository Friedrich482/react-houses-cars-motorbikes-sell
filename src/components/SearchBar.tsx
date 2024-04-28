import { CiSearch } from "react-icons/ci";
import { SearchPrice } from "../types";
import { twMerge as tm } from "tailwind-merge";
const SearchBar = ({ dark, priceSearch, setPriceSearch }: SearchPrice) => {
  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceSearch(Number(event.target.value));
  };
  return (
    <div
      className={tm(
        "group flex h-7 w-7/12 items-center justify-center house-break:w-5/12",
        dark && "bg-default-black",
      )}
    >
      <div
        className={tm(
          "group flex h-full w-full min-w-40 items-center justify-center rounded-lg border border-neutral-600 bg-default-white house-break:w-6/12",
          dark && "bg-default-black",
        )}
      >
        <CiSearch
          className={tm(
            "peer size-6 w-2/12 flex-shrink-0 rounded-lg text-neutral-600",
            dark && "bg-default-black",
          )}
        />
        <input
          type="number"
          value={priceSearch === 0 ? "" : Number(priceSearch).toString()}
          onChange={(event) => {
            searchInputHandler(event);
          }}
          className={tm(
            "h-full w-10/12 flex-shrink-0 rounded-lg bg-default-white indent-1 outline-none",
            dark && "bg-default-black text-white",
          )}
          min={0}
          placeholder="Enter price..."
        />
      </div>
    </div>
  );
};
export default SearchBar;
