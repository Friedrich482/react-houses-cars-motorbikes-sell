import { useEffect, useState, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import type { House } from "../../types";
import { twMerge as tm } from "tailwind-merge";
const House = ({
  src,
  id,
  price,
  location,
  sold,
  dark,
  toggleModal,
  yesButtonDialog,
  setYesButtonDialog,
}: House) => {
  const [houseSold, setHouseSold] = useState(sold);

  const handleSoldButtonClick = () => {
    updateHouseId(id);
    toggleModal(price);
  };
  const houseIdRef = useRef<number | null>(null);

  const updateHouseId = (newId: number) => {
    houseIdRef.current = newId;
  };

  useEffect(() => {
    if (yesButtonDialog && houseIdRef.current === id) {
      setHouseSold(true);
      setYesButtonDialog(false);
    }
  }, [
    yesButtonDialog,
    setYesButtonDialog,
    setHouseSold,
    houseSold,
    houseIdRef,
    id,
  ]);
  return (
    <>
      <div
        key={id}
        className={tm(
          "flex min-h-[30rem] min-w-72 max-w-80 transform cursor-pointer flex-col items-center gap-4 rounded-lg border border-default-black bg-stone-100  duration-700 hover:scale-110",
          dark && "border-default-white bg-default-black",
        )}
      >
        <img
          src={src}
          alt={`House n°${id + 1}`}
          className=" aspect-square h-72  w-full rounded-tl-lg rounded-tr-lg"
        />
        <div className="flex w-5/6 items-center justify-center text-center text-xl">
          <FaMapMarkerAlt
            className={tm(
              "relative left-3 mb-1 size-6 w-2/6 text-default-black",
              dark && "text-default-white",
            )}
          />
          <p
            className={tm(
              "w-4/6 text-start text-2xl font-bold text-default-black",
              dark && "text-default-white",
            )}
          >
            {location}
          </p>
        </div>
        <p
          className={tm(
            "flex w-full items-center justify-center gap-2 border-b-4 border-t-4 border-double border-default-white bg-default-black text-center text-3xl font-bold text-default-white",
          )}
        >
          <SlBadge className={tm("size-8 text-default-white")} />
          {price} $
        </p>
        <button
          type="button"
          className={tm(
            "mt-1 w-8/12 transform rounded-lg bg-default-black p-2 font-bold text-default-white outline-none duration-500 hover:outline-1 hover:outline-stone-700",
            houseSold &&
              "cursor-not-allowed opacity-65  hover:outline-0 hover:outline-transparent",
            dark &&
              "bg-default-white text-default-black hover:outline-stone-300",
          )}
          onClick={() => (!houseSold ? handleSoldButtonClick() : true)}
        >
          {houseSold ? "Already sold !" : "Buy now !"}
        </button>
      </div>
    </>
  );
};

export default House;
