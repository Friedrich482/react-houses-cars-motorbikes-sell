import type { CardProps } from "../../types";
import { twMerge as tm } from "tailwind-merge";
const Card = ({ name, src, dark }: CardProps) => {
  return (
    <div
      className={tm(
        "group flex h-[350px] min-w-40 max-w-80 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-black transition duration-500 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-black very-small:flex-shrink-0",
        dark && "border-default-white",
      )}
      key={name}
    >
      <img
        src={src}
        alt={`${name} of the Cards section`}
        className="h-3/4 w-full rounded-t-lg"
      />
      <p
        className={tm(
          "flex h-1/4 w-full items-center justify-center text-center text-3xl",
          dark && "text-default-white",
        )}
      >
        See our {`${name}s`}
      </p>
    </div>
  );
};
export default Card;
