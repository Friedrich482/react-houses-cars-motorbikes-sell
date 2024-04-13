import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Houses from "./components/House";
import Footer from "./components/Footer";
import Dialog from "./components/Dialog";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <div className="align-center flex flex-col justify-center gap-12">
        <Header />
        <main className="flex w-full flex-wrap items-center justify-center gap-10 pl-10 pr-10">
          <Houses />
        </main>
        <Footer />
        <Dialog />
      </div>
      <ToastContainer className="" />
    </>
  );
}

export default App;
