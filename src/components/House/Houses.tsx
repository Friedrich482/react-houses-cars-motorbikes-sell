import House from "./House";
import HousesData from "./HousesData";
const Houses = () => {
  return HousesData.map(({ src, id, price, location, sold }) => (
    <House
      src={src}
      id={id}
      key={id}
      price={price}
      location={location}
      sold={sold}
    />
  ));
};

export default Houses;
