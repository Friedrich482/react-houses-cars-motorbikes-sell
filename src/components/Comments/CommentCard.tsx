import { twMerge as tm } from "tailwind-merge";
import type { User, DarkModeProps } from "../../types";
const CommentCard = ({
  firstName,
  lastName,
  title,
  comment,
  image,
  dark,
}: User & Omit<DarkModeProps, "setDark">) => {
  return (
    <div
      className={tm(
        "flex cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border border-neutral-300 bg-neutral-100 p-6 transition duration-300 ease-in-out hover:border-black",
        dark &&
          "border border-neutral-500 bg-default-black hover:border-neutral-500 hover:bg-neutral-900",
      )}
    >
      <div className="flex w-full items-center justify-start gap-3">
        <img
          src={image}
          alt={`image of ${firstName} ${lastName}`}
          className="size-16 place-self-start rounded-full"
        />
        <div className="flex w-9/12 flex-col items-center justify-center">
          <p
            className={tm("w-full text-start font-bold", dark && "text-white")}
          >{`${firstName} ${lastName}`}</p>
          <p className="w-full text-start text-neutral-500">{`${title}`}</p>
        </div>
      </div>
      <div className={tm("", dark && "text-white")}>{comment}</div>
    </div>
  );
};
export default CommentCard;
