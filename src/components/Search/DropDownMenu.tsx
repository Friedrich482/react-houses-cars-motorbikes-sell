import { twMerge as tm } from "tailwind-merge";
import { DropDownMenuFilter } from "../../types";
// import { useEffect } from "react";

const DropDownMenu = ({ setSearchParameter, dark }: DropDownMenuFilter) => {
  const handlePerPriceSearchOptionClick = () => {
    setSearchParameter("price");
  };
  const handlePerCitySearchOptionClick = () => {
    setSearchParameter("city");
  };

  // useEffect(() => {
  //   console.log(searchParameter);
  // }, [searchParameter]);

  return (
    <span className="relative top-1 z-10 h-0 w-full min-w-40 house-break:w-1/2">
      <ul
        className={tm(
          "rounded-lg border border-black bg-default-white p-1",
          dark && "border-neutral-700 bg-default-black text-white",
        )}
      >
        <li
          className={tm(
            "cursor-pointer rounded-lg text-center hover:bg-neutral-300",
            dark && "hover:bg-neutral-800",
          )}
          onClick={() => {
            handlePerPriceSearchOptionClick();
          }}
        >
          per price
        </li>
        <li
          className={tm(
            "cursor-pointer rounded-lg text-center hover:bg-neutral-300",
            dark && "hover:bg-neutral-800",
          )}
          onClick={() => {
            handlePerCitySearchOptionClick();
          }}
        >
          per city
        </li>
      </ul>
    </span>
  );
};
export default DropDownMenu;
