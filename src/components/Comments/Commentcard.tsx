import type { User } from "../../types";
const CommentCard = ({ firstName, lastName, title, comment, image }: User) => {
  return (
    <div className="">
      <div>
        <img src={image} alt={`image of ${firstName} ${lastName}`} />
        <p>{`${firstName} ${lastName}`}</p>
        <p>{`${title}`}</p>
      </div>
      <div>{comment}</div>
    </div>
  );
};
export default CommentCard;
