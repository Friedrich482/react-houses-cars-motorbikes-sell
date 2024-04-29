import { CiSearch } from "react-icons/ci";
import type { SearchCity } from "../../types";
import { twMerge as tm } from "tailwind-merge";
const SearchCityBar = ({ citySearch, setCitySearch, dark }: SearchCity) => {
  const searchCityInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCitySearch(event.target.value);
  };
  return (
    <>
      <CiSearch
        className={tm(
          "peer size-6 w-2/12 flex-shrink-0 rounded-lg text-neutral-600",
          dark && "bg-default-black",
        )}
      />
      <input
        type="text"
        value={citySearch}
        onChange={(event) => {
          searchCityInputHandler(event);
        }}
        className={tm(
          "h-full w-10/12 flex-shrink-0 rounded-lg bg-default-white indent-1 outline-none",
          dark && "bg-default-black text-white",
        )}
        placeholder="Enter city..."
      />
    </>
  );
};
export default SearchCityBar;
