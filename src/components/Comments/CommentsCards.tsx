import usersData from "./usersData";
import type { User } from "../../types";
import CommentCard from "./CommentCard";
const CommentsCards = () => {
  return (
    <section className="flex w-11/12 flex-col items-center justify-center gap-8 self-center">
      <h2 className="text-4xl font-bold text-neutral-700">Our Users Opinion</h2>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {usersData.map(
          ({ id, firstName, lastName, image, comment, title }: User) => (
            <CommentCard
              id={id}
              firstName={firstName}
              lastName={lastName}
              image={image}
              comment={comment}
              title={title}
              key={id}
            />
          ),
        )}
      </div>
    </section>
  );
};
export default CommentsCards;
