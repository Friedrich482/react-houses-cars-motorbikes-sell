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
} & DarkModeProps;
export type House = HouseProps &
  DarkModeProps &
  Omit<ModalProps, "dialogRef" | "setOpenModal" | "openModal" | "tempPrice">;
