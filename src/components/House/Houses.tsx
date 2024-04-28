import { useState, useRef } from "react";
import House from "./House";
import HousesData from "./HousesData";
import Dialog from "../Dialog";
import { toast } from "react-toastify";
import type { HousesListProps } from "../../types";
const Houses = ({ dark, priceSearch }: HousesListProps) => {
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
      {priceSearch === 0
        ? HousesData.map(({ src, id, price, location, sold }) => (
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
          ))
        : HousesData.filter(({ price }) => priceSearch === price).map(
            ({ src, id, price, location, sold }) => (
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
            ),
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
