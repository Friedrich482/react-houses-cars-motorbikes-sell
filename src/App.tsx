import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import HousesPage from "./pages/HousesPage";
function App() {
  const [dark, setDark] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout dark={dark} setDark={setDark} />}>
        <Route index element={<HomePage dark={dark} setDark={setDark} />} />
        <Route
          path="/houses"
          element={<HousesPage dark={dark} setDark={setDark} />}
        />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
