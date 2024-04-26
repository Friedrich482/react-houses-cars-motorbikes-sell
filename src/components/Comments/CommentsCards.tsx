import usersData from "./usersData";
import type { User, DarkModeProps } from "../../types";
import CommentCard from "./CommentCard";
import { twMerge as tm } from "tailwind-merge";

const CommentsCards = ({ dark }: DarkModeProps) => {
  const mappedData = usersData.map((user: User) => ({ ...user, dark }));
  return (
    <section className="flex w-11/12 flex-col items-center justify-center gap-8 self-center">
      <h2
        className={tm(
          "text-4xl font-bold text-neutral-700",
          dark && "text-white",
        )}
      >
        Our Users Opinion
      </h2>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mappedData.map(
          ({
            id,
            firstName,
            lastName,
            image,
            comment,
            title,
            dark,
          }: User & Omit<DarkModeProps, "setDark">) => (
            <CommentCard
              id={id}
              firstName={firstName}
              lastName={lastName}
              image={image}
              comment={comment}
              title={title}
              key={id}
              dark={dark}
            />
          ),
        )}
      </div>
    </section>
  );
};
export default CommentsCards;
