import Modal from "./Modal";
import { Dialog } from "@headlessui/react";

export const MoveModal = ({
  moveModalOpen,
  setMoveModalOpen,
  handleMultiMove,
}) => {
  return (
    <Modal open={moveModalOpen} setOpen={() => setMoveModalOpen(false)}>
      <div className="p-8 md:p-10 pb-4">
        <Dialog.Title
          as="h3"
          className="text-2xl text-center px-8 font-medium leading-6 text-gray-900"
        >
          Move Cards
        </Dialog.Title>
        <div className="mt-8 text-sm text-gray-600">
          Are you sure, do you want to Move this cards?
        </div>
      </div>
      <div className="px-4 md:px-6 py-3 md:py-4 gap-4 bg-gray-200 flex flex-row-reverse">
        <button
          type="button"
          className="inline-flex w-28 justify-center rounded-md border border-transparent bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-[3px] focus:ring-blue-300"
          onClick={() => setMoveModalOpen(false)}
        >
          Cancel
        </button>
        <button
          type="button"
          className="inline-flex w-28 justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-[3px] focus:ring-blue-300"
          onClick={() => {
            handleMultiMove();
            setMoveModalOpen(false);
          }}
        >
          Move
        </button>
      </div>
    </Modal>
  );
};
