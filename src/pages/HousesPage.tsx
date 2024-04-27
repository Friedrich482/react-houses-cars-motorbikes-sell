import Houses from "../components/House";
import type { DarkModeProps } from "../types";
const HousesPage = ({ dark, setDark }: DarkModeProps) => {
  return (
    <>
      <main className="flex w-full flex-wrap items-center justify-center gap-10 pl-10 pr-10">
        <Houses dark={dark} setDark={setDark} />
      </main>
    </>
  );
};
export default HousesPage;
