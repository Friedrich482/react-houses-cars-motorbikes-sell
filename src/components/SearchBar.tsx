import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  return (
    <div className="group flex h-7 w-7/12 items-center justify-center house-break:w-5/12">
      <div className="group flex h-full w-full min-w-40 items-center justify-center rounded-lg border border-neutral-600 bg-default-white house-break:w-6/12">
        <CiSearch className="size-6 w-2/12 flex-shrink-0 text-neutral-600" />
        <input
          type="text"
          className="h-full w-10/12 flex-shrink-0 rounded-lg bg-default-white indent-1 outline-none"
        />
      </div>
    </div>
  );
};
export default SearchBar;
