import type { CardProps } from "../../types";
const Card = ({ name, src }: CardProps) => {
  return (
    <div
      className="group flex h-[350px] w-80 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-black transition duration-500 ease-in-out hover:scale-110"
      key={name}
    >
      <img
        src={src}
        alt={`${name} of the Cards section`}
        className="h-3/4 w-full rounded-t-lg"
      />
      <p className="flex h-1/4 w-full items-center justify-center text-center text-3xl">
        See our {`${name}s`}
      </p>
    </div>
  );
};
export default Card;
