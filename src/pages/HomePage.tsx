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
    </>
  );
};
export default HomePage;
