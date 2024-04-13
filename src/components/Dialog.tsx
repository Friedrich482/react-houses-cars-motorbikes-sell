const Dialog = () => {
  const yesButton = () => {
    const confirmDialog = document.querySelector(
      "#confirmDialog",
    ) as HTMLDialogElement;
    confirmDialog.close();
  };
  return (
    <dialog
      className="flex flex-col items-center justify-center gap-4 rounded-xl border border-white bg-black p-4 text-white backdrop:blur-md"
      id="confirmDialog"
    >
      <p>
        Are you sure you want to buy this house ? You wil be taken $price for
        that sale
      </p>
      <div className="flex items-center justify-center gap-2">
        <button
          className="min-w-24 rounded-xl border border-white p-2"
          type="button"
          onClick={() => {
            yesButton();
          }}
        >
          Yes
        </button>
        <button
          className="min-w-24 rounded-xl border border-white p-2"
          type="button"
        >
          No
        </button>
      </div>
    </dialog>
  );
};
export default Dialog;
