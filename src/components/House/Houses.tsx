import House from "./House";
import HousesData from "./HousesData";
const Houses = () => {
  return HousesData.map(({ src, id, price, location }) => (
    <House src={src} id={id} price={price} location={location} />
  ));
};

export default Houses;
