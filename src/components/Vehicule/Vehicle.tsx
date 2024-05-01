import { useEffect, useState, useRef } from "react";
import { SlBadge } from "react-icons/fa";
import { twMerge as tm } from "tailwind-merge";
import type { Vehicle } from "../../types";
const Vehicle = ({
  id,
  price,
  sold,
  src,
  dark,
  toggleModal,
  yesButtonDialog,
  setYesButtonDialog,
}: Vehicle) => {
  const [vehicleSold, setVehicleSold] = useState(sold);
  const houseIdRef = useRef<number | null>(null);

  const handleSoldButtonClick = () => {
    updateHouseId(id);
    toggleModal(price);
  };

  const updateHouseId = (newId: number) => {
    houseIdRef.current = newId;
  };
  useEffect(() => {
    if (yesButtonDialog && houseIdRef.current === id) {
      setVehicleSold(true);
      setYesButtonDialog(false);
    }
  }, [
    yesButtonDialog,
    setYesButtonDialog,
    setVehicleSold,
    vehicleSold,
    houseIdRef,
    id,
  ]);

  return (
    <>
      <div></div>
    </>
  );
};
export default Vehicle;
