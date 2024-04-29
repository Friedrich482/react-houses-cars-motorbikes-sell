import { DropDownMenuFilter } from "../../types";

const DropDownMenu = ({
  searchParameter,
  setSearchParameter,
}: DropDownMenuFilter) => {
  return (
    <span className="relative top-1 z-10 h-0 w-full flex-none house-break:w-1/2">
      <ul className="rounded-lg border border-black bg-default-white p-1">
        <li className="rounded-lg text-center hover:bg-neutral-300">
          per price
        </li>
        <li className="rounded-lg text-center hover:bg-neutral-300">
          per city
        </li>
      </ul>
    </span>
  );
};
export default DropDownMenu;
