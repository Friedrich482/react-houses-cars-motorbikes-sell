import HouseLight from "../../assets/imgs/cards/houseLight.webp";
import HouseDark from "../../assets/imgs/cards/houseDark.jpg";
import Bike from "../../assets/imgs/cards/bikeDark.png";
import Car from "../../assets/imgs/cards/car.jpg";
import Card from "./Card";
import type { DarkModeProps } from "../../types";
import type { CardProps } from "../../types";
const Cards = ({ dark }: DarkModeProps) => {
  const cardsElements = [
    {
      name: "House",
      src: dark ? HouseDark : HouseLight,
      dark: dark,
    },
    {
      name: "Car",
      src: Car,
      dark: dark,
    },
    {
      name: "Bike",
      src: Bike,
      dark: dark,
    },
  ];
  return (
    <section className="mb-24 mt-24 flex w-10/12 flex-wrap items-center justify-center gap-6 self-center">
      {cardsElements.map(({ src, name, dark }: CardProps) => (
        <Card src={src} name={name} dark={dark} />
      ))}
    </section>
  );
};
export default Cards;
