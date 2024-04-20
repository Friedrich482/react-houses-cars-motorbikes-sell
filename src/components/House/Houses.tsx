import House from "./House";
import HousesData from "./HousesData";
import Dialog from "../Dialog";
import type { DarkModeProps } from "../../types";
const Houses = ({ dark, setDark }: DarkModeProps) => {
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
        />
      ))}
      <Dialog />
    </>
  );
};

export default Houses;
