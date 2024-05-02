import { useState, useRef } from "react";
import House from "./House";
import HousesData from "./HousesData";
import Dialog from "../Dialog";
import { toast } from "react-toastify";
import type { HousesListProps } from "../../types";
import { twMerge as tm } from "tailwind-merge";
const Houses = ({
  dark,
  priceSearch,
  citySearch,
  searchParameter,
}: HousesListProps) => {
  const [tempPrice, setTempPrice] = useState<number>(0);
  const [openModal, setOpenModal] = useState(false);
  const [yesButtonDialog, setYesButtonDialog] = useState(false);

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const toggleModal = (price: number) => {
    if (openModal) {
      setOpenModal(false);
      dialogRef.current?.close();

      toast.success(
        <div>
          <p>
            House successfully sold ! <br /> {price} $ have been taken from your
            account.
          </p>
        </div>,
      );
    } else {
      setTempPrice(price);
      setOpenModal(true);
      dialogRef.current?.showModal();
    }
  };
  const houses = HousesData.map(({ src, id, price, location, sold }) => (
    <House
      src={src}
      id={id}
      key={id}
      price={price}
      location={location}
      sold={sold}
      dark={dark}
      toggleModal={toggleModal}
      yesButtonDialog={yesButtonDialog}
      setYesButtonDialog={setYesButtonDialog}
    />
  ));
  const filteredPerPriceHouses = HousesData.filter(
    ({ price }) => priceSearch === price,
  ).map(({ src, id, price, location, sold }) => (
    <House
      src={src}
      id={id}
      key={id}
      price={price}
      location={location}
      sold={sold}
      dark={dark}
      toggleModal={toggleModal}
      yesButtonDialog={yesButtonDialog}
      setYesButtonDialog={setYesButtonDialog}
    />
  ));
  const filteredPerCityHouses = HousesData.filter(
    ({ location }) => citySearch === location,
  ).map(({ src, id, price, location, sold }) => (
    <House
      src={src}
      id={id}
      key={id}
      price={price}
      location={location}
      sold={sold}
      dark={dark}
      toggleModal={toggleModal}
      yesButtonDialog={yesButtonDialog}
      setYesButtonDialog={setYesButtonDialog}
    />
  ));
  return (
    <>
      {searchParameter === "none" ? (
        houses
      ) : searchParameter === "price" ? (
        priceSearch === 0 ? (
          houses
        ) : filteredPerPriceHouses.length === 0 ? (
          <p
            className={tm(
              "flex h-72 items-center justify-center text-center text-3xl",
              dark && "text-white",
            )}
          >
            No houses found at {priceSearch} $
          </p>
        ) : (
          <>
            <p className={tm("text-2xl", dark && "text-neutral-400")}>
              <b className={tm("", dark && "text-white")}>
                {filteredPerPriceHouses.length}
              </b>{" "}
              {filteredPerPriceHouses.length === 1
                ? `house found at ${priceSearch}$`
                : `houses found at ${priceSearch}$`}
            </p>
            <div className="flex w-full flex-wrap items-center justify-center gap-10 pl-10 pr-10">
              {filteredPerPriceHouses}
            </div>
          </>
        )
      ) : citySearch === "" ? (
        houses
      ) : filteredPerCityHouses.length === 0 ? (
        <p
          className={tm(
            "flex h-72 items-center justify-center text-center text-3xl",
            dark && "text-white",
          )}
        >
          No houses found at {citySearch}
        </p>
      ) : (
        <>
          <p className={tm("text-2xl", dark && "text-neutral-400")}>
            <b className={tm("", dark && "text-white")}>
              {filteredPerCityHouses.length}
            </b>{" "}
            {filteredPerCityHouses.length === 1
              ? `house found at ${citySearch}`
              : `houses found at ${citySearch}`}
          </p>
          <div className="flex w-full flex-wrap items-center justify-center gap-10 pl-10 pr-10">
            {filteredPerCityHouses}
          </div>
        </>
      )}
      <Dialog
        openModal={openModal}
        setOpenModal={setOpenModal}
        toggleModal={toggleModal}
        dialogRef={dialogRef}
        tempPrice={tempPrice}
        dark={dark}
        yesButtonDialog={yesButtonDialog}
        setYesButtonDialog={setYesButtonDialog}
      />
    </>
  );
};

export default Houses;
