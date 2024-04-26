import type { User } from "../../types";
const CommentCard = ({ firstName, lastName, title, comment, image }: User) => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border border-neutral-300 bg-neutral-100 p-6 transition duration-300 ease-in-out hover:border-black">
      <div className="flex w-full items-center justify-start gap-3">
        <img
          src={image}
          alt={`image of ${firstName} ${lastName}`}
          className="size-16 place-self-start rounded-full"
        />
        <div className="flex w-9/12 flex-col items-center justify-center">
          <p className="w-full text-start font-bold">{`${firstName} ${lastName}`}</p>
          <p className="w-full text-start text-neutral-500">{`${title}`}</p>
        </div>
      </div>
      <div>{comment}</div>
    </div>
  );
};
export default CommentCard;
