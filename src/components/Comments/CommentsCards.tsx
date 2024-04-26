import usersData from "./usersData";
import type { User } from "../../types";
import CommentCard from "./Commentcard";
const CommentsCards = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
