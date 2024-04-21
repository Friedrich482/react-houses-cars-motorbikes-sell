import { useEffect } from "react";
import { twMerge as tm } from "tailwind-merge";
import type { ModalProps } from "../types";
const Dialog = ({
  openModal,
  toggleModal,
  dialogRef,
  tempPrice,
}: ModalProps) => {
  useEffect(() => {
    openModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [openModal]);
  return (
    <dialog
      className={tm(
        "flex min-w-[75%] max-w-[80%] flex-col items-center justify-center gap-4 rounded-xl bg-black pb-5 pl-6 pr-6 pt-8 text-white ring-1 ring-stone-800 backdrop:blur-md",
        !openModal && "hidden",
      )}
      ref={dialogRef}
    >
      <h2 className="self-start text-2xl">Are you sure to buy this house ?</h2>
      <p className="self-start">You will be charged $price for this sale</p>
      <div className="flex items-center justify-center gap-4 self-end">
        <button
          className="min-w-24 rounded-xl p-2 ring-1 ring-stone-800"
          type="button"
        >
          No
        </button>
        <button
          className="min-w-24 rounded-xl border border-white bg-white p-2 text-black"
          type="button"
          onClick={() => {
            toggleModal(tempPrice);
          }}
        >
          Yes
        </button>
      </div>
    </dialog>
  );
};

export default Dialog;
