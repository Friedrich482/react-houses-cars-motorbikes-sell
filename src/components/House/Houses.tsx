import House from "./House";
import HousesData from "./HousesData";
import type { HousesProps } from "../../types";
const Houses = ({
  houseSold,
  setHouseSold,
  handleSoldButtonClick,
}: HousesProps) => {
  return HousesData.map(({ src, id, price, location }) => (
    <House
      src={src}
      id={id}
      price={price}
      location={location}
      houseSold={houseSold}
      setHouseSold={setHouseSold}
      handleSoldButtonClick={handleSoldButtonClick}
    />
  ));
};

export default Houses;
