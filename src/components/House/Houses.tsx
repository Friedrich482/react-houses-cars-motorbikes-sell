import { useState, useRef } from "react";
import House from "./House";
import HousesData from "./HousesData";
import Dialog from "../Dialog";
import { toast } from "react-toastify";
import type { DarkModeProps } from "../../types";
const Houses = ({ dark, setDark }: DarkModeProps) => {
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
          yesButtonDialog={yesButtonDialog}
          setYesButtonDialog={setYesButtonDialog}
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
        yesButtonDialog={yesButtonDialog}
        setYesButtonDialog={setYesButtonDialog}
      />
    </>
  );
};

export default Houses;
