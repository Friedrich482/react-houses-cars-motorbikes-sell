import { CarsData } from "../components/Vehicle";
import type { DarkModeProps } from "../types";
import VehiclesPage from "./VehiclesPage";

const CarsPage = ({ dark }: DarkModeProps) => {
  const vehicleSelected = "Car";
  return (
    <VehiclesPage
      dark={dark}
      vehicleSelected={vehicleSelected}
      vehicleData={CarsData}
    />
  );
};
export default CarsPage;
