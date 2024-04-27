import type { ArticleCardProps } from "../../types";
import { twMerge as tm } from "tailwind-merge";
import { Link } from "react-router-dom";
const ArticleCard = ({ name, src, dark }: ArticleCardProps) => {
  return (
    <Link
      to={`/${name.toLowerCase()}s`}
      className={tm(
        "group flex h-[350px] min-w-40 max-w-80 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-black transition duration-500 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-black very-small:flex-shrink-0",
        dark && "border-default-white hover:shadow-neutral-800",
      )}
    >
      <img
        src={src}
        alt={`${name} of the Cards section`}
        className={tm(
          "h-3/4 w-full transform rounded-t-lg duration-1000 ease-in-out group-hover:border-b group-hover:border-b-black",
          dark && "group-hover:border-b-default-white",
        )}
      />
      <p
        className={tm(
          "flex h-1/4 w-full items-center justify-center text-center text-3xl transition duration-1000 ease-in-out group-hover:underline",
          dark && "text-default-white  group-hover:underline",
        )}
      >
        See our {`${name}s`}
      </p>
    </Link>
  );
};
export default ArticleCard;
