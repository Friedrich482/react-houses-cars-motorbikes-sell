import House from "../../assets/imgs/cards/house.webp";
import Bike from "../../assets/imgs/cards/bike.webp";
import Car from "../../assets/imgs/cards/car.jpg";
import Card from "./Card";
import type { CardProps } from "../../types";
const Cards = () => {
  const cardsElements = [
    {
      name: "House",
      src: House,
    },
    {
      name: "Car",
      src: Car,
    },
    {
      name: "Bike",
      src: Bike,
    },
  ];
  return (
    <section className=" flex w-10/12 flex-col items-center justify-center gap-6 self-center description-section:flex-row">
      {cardsElements.map(({ src, name }: CardProps) => (
        <Card src={src} name={name} />
      ))}
    </section>
  );
};
export default Cards;
