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

export type ModalProps = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModal: (price: number) => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
  tempPrice: number;
  yesButtonDialog: boolean;
  setYesButtonDialog: React.Dispatch<React.SetStateAction<boolean>>;
} & Omit<DarkModeProps, "setDark">;

export type House = HouseProps &
  Omit<DarkModeProps, "setDark"> &
  Omit<ModalProps, "dialogRef" | "setOpenModal" | "tempPrice" | "openModal">;

export type HousesListProps = Omit<DarkModeProps, "setDark"> &
  Omit<SearchPrice, "setPriceSearch">;
export type ArticleCardProps = {
  name: string;
  src: string;
} & Omit<DarkModeProps, "setDark">;

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  image: string;
  comment: string;
};

export type UserDark = User & Omit<DarkModeProps, "setDark">;

export type SearchPrice = {
  priceSearch: number;
  setPriceSearch: React.Dispatch<React.SetStateAction<number>>;
} & Omit<DarkModeProps, "setDark">;
