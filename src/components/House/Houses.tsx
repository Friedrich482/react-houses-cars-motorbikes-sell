import { useState, useRef } from "react";
import House from "./House";
import HousesData from "./HousesData";
import Dialog from "../Dialog";
import { toast } from "react-toastify";
import type { DarkModeProps } from "../../types";
const Houses = ({ dark, setDark }: DarkModeProps) => {
  const [openModal, setOpenModal] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [tempPrice, setTempPrice] = useState<number>(0);
  const toggleModal = (price: number) => {
    if (openModal) {
      setOpenModal(false);
      dialogRef.current?.close();
      toast.success(
        `House successfully sold ! ${price}$ have been taken from your account.`,
      );
    } else {
      setTempPrice(price);
      setOpenModal(true);
      dialogRef.current?.showModal();
    }
  };

  return (
    <>
      {HousesData.map(({ src, id, price, location, sold }) => (
        <House
          src={src}
          id={id}
          key={id}
          price={price}
          location={location}
          sold={sold}
          dark={dark}
          setDark={setDark}
          toggleModal={toggleModal}
        />
      ))}
      <Dialog
        openModal={openModal}
        setOpenModal={setOpenModal}
        toggleModal={toggleModal}
        dialogRef={dialogRef}
        tempPrice={tempPrice}
        dark={dark}
        setDark={setDark}
      />
    </>
  );
};

export default Houses;
