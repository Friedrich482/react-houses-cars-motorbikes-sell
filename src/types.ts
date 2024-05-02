export type HouseProps = {
  src: string;
  id: number;
  price: number;
  location: string;
  sold: boolean;
};

export type DarkModeProps = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UseCloseMenuProps = {
  dropDownList: boolean;
};

type dark = Omit<DarkModeProps, "setDark">;

export type ModalProps = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModal: (price: number) => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
  tempPrice: number;
  yesButtonDialog: boolean;
  setYesButtonDialog: React.Dispatch<React.SetStateAction<boolean>>;
} & dark & { vehicleSelected: string; isVehicle: boolean };

export type House = HouseProps &
  dark &
  Omit<ModalProps, "dialogRef" | "setOpenModal" | "tempPrice" | "openModal">;

export type HousesListProps = dark &
  Omit<SearchPrice, "setPriceSearch"> &
  Omit<SearchCity, "setCitySearch"> &
  Omit<DropDownMenuFilter, "setSearchParameter">;

export type ArticleCardProps = {
  name: string;
  src: string;
} & dark;

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  image: string;
  comment: string;
};

export type UserDark = User & dark;

export type SearchPrice = {
  priceSearch: number;
  setPriceSearch: React.Dispatch<React.SetStateAction<number>>;
} & dark;

export type SearchCity = {
  citySearch: string;
  setCitySearch: React.Dispatch<React.SetStateAction<string>>;
} & dark;

export type SearchDropDownMenuProps = SearchPrice &
  SearchCity &
  DropDownMenuFilterVisibility &
  DropDownMenuFilter & { isVehicle: boolean };

export type DefaultSearchBarProps = dark &
  Omit<DropDownMenuFilter, "setSearchParameter">;

export type DropDownMenuFilter = {
  searchParameter: string;
  setSearchParameter: React.Dispatch<React.SetStateAction<string>>;
} & dark;

export type DropDownMenuFilterVisibility = {
  dropDownMenuVisibility: boolean;
  setDropDownMenuVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};
type unitVehicle = {
  id: number;
  src: string;
  price: number;
  sold: boolean;
  name: string;
};
export type Vehicle = unitVehicle &
  dark &
  Omit<
    ModalProps,
    | "dialogRef"
    | "setOpenModal"
    | "tempPrice"
    | "openModal"
    | "vehicleSelected"
    | "isVehicle"
  > & { vehicleSelected: string };

export type VehicleData = unitVehicle[];

export type VehiclesProps = { vehicleData: VehicleData } & dark &
  Omit<SearchPrice, "setPriceSearch"> &
  Omit<SearchCity, "setCitySearch"> &
  Omit<DropDownMenuFilter, "setSearchParameter"> & {
    vehicleSelected: string;
    isVehicle: boolean;
  };

export type VehiclePageProps = dark & { vehicleSelected: string } & {
  vehicleData: VehicleData;
};
