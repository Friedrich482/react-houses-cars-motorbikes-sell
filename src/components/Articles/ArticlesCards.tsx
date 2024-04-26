import HouseLight from "../../assets/imgs/cards/houseLight.webp";
import HouseDark from "../../assets/imgs/cards/houseDark.jpg";
import Bike from "../../assets/imgs/cards/bikeDark.png";
import Car from "../../assets/imgs/cards/car.jpg";
import ArticleCard from "./ArticleCard";
import type { DarkModeProps } from "../../types";
import type { ArticleCardProps } from "../../types";
import { twMerge as tm } from "tailwind-merge";
const ArticleCards = ({ dark }: DarkModeProps) => {
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
    <section className="mb-24 mt-12 flex w-10/12 flex-wrap items-center justify-center gap-8 self-center">
      <h2
        className={tm(
          "text-4xl font-bold text-neutral-700",
          dark && "text-default-white",
        )}
      >
        Articles
      </h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-8 self-center">
        {cardsElements.map(({ src, name, dark }: ArticleCardProps) => (
          <ArticleCard src={src} name={name} dark={dark} key={name} />
        ))}
      </div>
    </section>
  );
};
export default ArticleCards;
