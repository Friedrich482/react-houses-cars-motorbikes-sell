import { useEffect } from "react";
import { twMerge as tm } from "tailwind-merge";
import type { ModalProps } from "../types";
const Dialog = ({
  openModal,
  toggleModal,
  dialogRef,
  tempPrice,
  dark,
}: ModalProps) => {
  useEffect(() => {
    openModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [openModal]);
  return (
    <dialog
      className={tm(
        "z-50 flex min-w-64 flex-col items-center justify-center gap-4 rounded-xl bg-default-white pb-5 pl-6 pr-6 pt-8 text-black ring-1 ring-stone-800 backdrop:backdrop-brightness-[0.3] sm:w-[62%] md:w-[55%] lg:w-[45%]",
        !openModal && "hidden",
        dark && "bg-default-black text-white",
      )}
      ref={dialogRef}
    >
      <h2 className="self-start text-2xl">Are you sure to buy this house ?</h2>
      <p className="self-start">
        You will be charged <b>{tempPrice}</b> $ for this sale
      </p>
      <div className="flex items-center justify-center gap-4 self-end">
        <button
          className={tm(
            "min-w-24 rounded-lg p-2 ring-1 ring-stone-800 hover:bg-zinc-200",
            dark && "hover:bg-zinc-900",
          )}
          type="button"
        >
          No
        </button>
        <button
          className={tm(
            "min-w-24 rounded-lg border border-white bg-black p-2 text-white hover:bg-stone-900",
            dark && "bg-default-white text-black hover:bg-stone-200",
          )}
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
