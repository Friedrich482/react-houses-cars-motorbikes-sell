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
} & dark;

export type House = HouseProps &
  dark &
  Omit<ModalProps, "dialogRef" | "setOpenModal" | "tempPrice" | "openModal">;

export type HousesListProps = dark & Omit<SearchPrice, "setPriceSearch">;
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

export type DefaultSearchBarProps = dark &
  Omit<DropDownMenuFilter, "setSearchParameter"> &
  DropDownMenuFilterVisibility;

export type DropDownMenuFilter = {
  searchParameter: string;
  setSearchParameter: React.Dispatch<React.SetStateAction<string>>;
};
export type DropDownMenuFilterVisibility = {
  dropDownMenuVisibility: boolean;
  setDropDownMenuVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};
