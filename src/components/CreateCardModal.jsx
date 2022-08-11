import React from "react";

export default function CreateCardModal() {
  return (
    <Modal open={formOpen} setOpen={() => setFormOpen(false)}>
      <Dialog.Title
        as="h3"
        className="text-xl text-center px-8 pt-6 font-medium leading-6 text-gray-900"
      >
        Create Card
      </Dialog.Title>
      <CardForm />
      <div className="px-4 md:px-6 py-3 md:py-4 gap-4 bg-gray-200 flex flex-row-reverse">
        <button
          type="button"
          className="inline-flex w-32 justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-[3px] focus:ring-blue-300"
          onClick={() => setFormOpen(false)}
        >
          Close
        </button>
        <button
          type="button"
          className="inline-flex w-28 justify-center rounded-md border border-transparent bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-[3px] focus:ring-blue-300"
          onClick={() => setFormOpen(false)}
        >
          Save
        </button>
      </div>
    </Modal>
  );
}
