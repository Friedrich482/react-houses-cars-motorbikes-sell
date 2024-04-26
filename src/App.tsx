import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
// import Houses from "./components/House";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Description from "./components/Description";
import ArticleCards from "./components/Articles";
import CommentsCards from "./components/Comments/CommentsCards";
import { twMerge as tm } from "tailwind-merge";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
function App() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <div
        className={tm(
          "align-center flex flex-col justify-center gap-12 bg-default-white transition duration-300",
          dark && "bg-default-black",
        )}
      >
        <Header dark={dark} setDark={setDark} />
        <HeroSection dark={dark} setDark={setDark} />
        <Description dark={dark} setDark={setDark} />
        <ArticleCards dark={dark} setDark={setDark} />
        <CommentsCards dark={dark} setDark={setDark} />
        {/* <main className="flex w-full flex-wrap items-center justify-center gap-10 pl-10 pr-10">
          <Houses dark={dark} setDark={setDark} />
        </main> */}
        <Footer dark={dark} setDark={setDark} />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
