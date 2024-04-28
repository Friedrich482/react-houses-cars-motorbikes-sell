import { DropDownMenuFilter } from "../../types";

const DropDownMenu = ({
  searchParameter,
  setSearchParameter,
}: DropDownMenuFilter) => {
  return (
    <span>
      <ul>
        <li>per price</li>
        <li>per city</li>
      </ul>
    </span>
  );
};
export default DropDownMenu;
