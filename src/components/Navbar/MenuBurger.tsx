import type { DarkModeProps } from "../../types";
const MenuBurger = ({ dark }: DarkModeProps) => {
  return (
    <div className={`flex sm:hidden ${dark ? "text-default-white" : ""}`}>
      MenuBurger
    </div>
  );
};
export default MenuBurger;
