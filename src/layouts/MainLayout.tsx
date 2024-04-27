import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { twMerge as tm } from "tailwind-merge";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { DarkModeProps } from "../types";

const MainLayout = ({ dark, setDark }: DarkModeProps) => {
  return (
    <div
      className={tm(
        "align-center flex flex-col justify-center gap-12 bg-default-white transition duration-300",
        dark && "bg-default-black",
      )}
    >
      <Header dark={dark} setDark={setDark} />
      <Outlet />
      <Footer dark={dark} setDark={setDark} />
      <ToastContainer />
    </div>
  );
};
export default MainLayout;
