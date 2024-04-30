import { twMerge as tm } from "tailwind-merge";
import { DropDownMenuFilter, DropDownMenuFilterVisibility } from "../../types";
import { useEffect, useRef } from "react";

const DropDownMenu = ({
  searchParameter,
  setSearchParameter,
  dark,
  dropDownMenuVisibility,
  setDropDownMenuVisibility,
}: DropDownMenuFilter & DropDownMenuFilterVisibility) => {
  const handlePerPriceSearchOptionClick = () => {
    setSearchParameter("price");
    setDropDownMenuVisibility(false);
  };

  const handlePerCitySearchOptionClick = () => {
    setSearchParameter("city");
    setDropDownMenuVisibility(false);
  };

  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (
        !ref.current?.contains(event.target as Node) &&
        dropDownMenuVisibility &&
        searchParameter === "none"
      ) {
        setDropDownMenuVisibility(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [dropDownMenuVisibility, setDropDownMenuVisibility, searchParameter]);

  return (
    <span
      className="relative top-1 z-10 h-0 w-full min-w-40 house-break:w-1/2"
      ref={ref}
    >
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
          Per Price
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
          Per City
        </li>
      </ul>
    </span>
  );
};

export default DropDownMenu;
