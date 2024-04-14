const Dialog = () => {
  const yesButton = () => {
    const confirmDialog = document.querySelector(
      "#confirmDialog",
    ) as HTMLDialogElement;
    confirmDialog.close();
  };
  return (
    <dialog
      className="flex min-w-[75%] max-w-[80%] flex-col items-center justify-center gap-4 rounded-xl bg-black pb-5 pl-6 pr-6 pt-8 text-white ring-1 ring-stone-800 backdrop:blur-md"
      id="confirmDialog"
    >
      <h2 className="self-start text-2xl">Are you sure to buy this house ?</h2>
      <p className="self-start">You wil be taken $price for that sale</p>
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
            yesButton();
          }}
        >
          Yes
        </button>
      </div>
    </dialog>
  );
};
export default Dialog;
