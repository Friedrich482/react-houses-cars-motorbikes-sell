import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="align-center flex flex-col justify-center gap-12">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
