import Vehicles from "../components/Vehicle";
import { CarsData } from "../components/Vehicle";
import type { DarkModeProps } from "../types";
import { twMerge as tm } from "tailwind-merge";
import SearchDropDownMenu from "../components/Search/";
import { useState } from "react";

const CarsPage = ({ dark }: DarkModeProps) => {
  const [priceSearch, setPriceSearch] = useState(0);
  const [citySearch, setCitySearch] = useState("");
  const [dropDownMenuVisibility, setDropDownMenuVisibility] = useState(false);
  const [searchParameter, setSearchParameter] = useState("none");
  const vehicleSelected = "Car";
  const isVehicle = true;
  return (
    <main className="flex min-h-[100vh] flex-col gap-12">
      <section className="flex items-center justify-center gap-3 max-house-break:flex-col">
        <h2
          className={tm(
            "flex items-center justify-end text-4xl font-bold house-break:w-7/12",
            dark && "text-white",
          )}
        >
          {`${vehicleSelected}s`}
        </h2>
        <SearchDropDownMenu
          dark={dark}
          priceSearch={priceSearch}
          setPriceSearch={setPriceSearch}
          dropDownMenuVisibility={dropDownMenuVisibility}
          setDropDownMenuVisibility={setDropDownMenuVisibility}
          citySearch={citySearch}
          setCitySearch={setCitySearch}
          searchParameter={searchParameter}
          setSearchParameter={setSearchParameter}
          isVehicle={isVehicle}
        />
      </section>
      <section
        className={tm(
          "flex w-full flex-wrap items-center justify-center gap-10 pl-10 pr-10",
        )}
      >
        <Vehicles
          dark={dark}
          priceSearch={priceSearch}
          citySearch={citySearch}
          searchParameter={searchParameter}
          vehicleData={CarsData}
          vehicleSelected={vehicleSelected}
          isVehicle={isVehicle}
        />
      </section>
    </main>
  );
};
export default CarsPage;
