import { MotorBikesData } from "../components/Vehicle";
import type { DarkModeProps } from "../types";
import VehiclesPage from "./VehiclesPage";

const CarsPage = ({ dark }: DarkModeProps) => {
  document.title = "Motorbikes";
  const vehicleSelected = "Motorbike";
  return (
    <VehiclesPage
      dark={dark}
      vehicleSelected={vehicleSelected}
      vehicleData={MotorBikesData}
    />
  );
};
export default CarsPage;
