import { twMerge as tm } from "tailwind-merge";
import type { DarkModeProps } from "../types";
import HeroSection from "../components/HeroSection";
import Description from "../components/Description";
import ArticleCards from "../components/Articles";
import CommentsCards from "../components/Comments/CommentsCards";
const HomePage = ({ dark, setDark }: DarkModeProps) => {
  return (
    <>
      <HeroSection dark={dark} setDark={setDark} />
      <Description dark={dark} setDark={setDark} />
      <ArticleCards dark={dark} setDark={setDark} />
      <CommentsCards dark={dark} setDark={setDark} />
      {/* <main className="flex w-full flex-wrap items-center justify-center gap-10 pl-10 pr-10">
        <Houses dark={dark} setDark={setDark} />
      </main> */}
    </>
  );
};
export default HomePage;
