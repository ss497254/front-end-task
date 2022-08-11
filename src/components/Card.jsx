import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import CardForm from "./CardForm";
import Modal from "./Modal";
import { connect } from "react-redux";
import { editCard, removeCards } from "../store/actions/cardAction";
import { addHistory } from "../store/actions/historyAction";
import { DeleteModal } from "./DeleteModal";

function Card({
  addHistory,
  multiSelect = false,
  isSelected,
  title,
  content,
  bucket,
  id,
  onItemSelect,
  url,
  editCard,
  removeCards,
}) {
  let [editOpen, setEditOpen] = useState(false);
  let [viewOpen, setViewOpen] = useState(false);
  let [formData, setFormData] = useState({});
  let [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleMultiSelect = () => {
    if (multiSelect) onItemSelect();
  };

  return (
    <div
      onClick={handleMultiSelect}
      className={`h-full w-full ${multiSelect && "cursor-pointer"}`}
    >
      <div
        className={`flex justify-center h-full w-full lg:w-96 ${
          multiSelect && "pointer-events-none"
        }`}
      >
        <Modal open={viewOpen} setOpen={() => setViewOpen(false)}>
          <iframe
            className="my-6 mx-5 md:m-8 rounded-md w-[80vw] h-[25vh] md:w-[60vw] md:h-[60vh] bg-gray-900"
            src={`${url}?autoplay=1`}
            title="Can You Beat Me At This Interview?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="px-4 md:px-6 py-3 md:py-4 bg-gray-200 flex flex-row-reverse">
            <button
              type="button"
              className="inline-flex w-32 justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-[3px] focus:ring-blue-300"
              onClick={() => setViewOpen(false)}
            >
              Close
            </button>
          </div>
        </Modal>
        <Modal open={editOpen} setOpen={() => setEditOpen(false)}>
          <Dialog.Title
            as="h3"
            className="text-xl text-center px-8 pt-6 font-medium leading-6 text-gray-900"
          >
            Edit Card
          </Dialog.Title>
          <CardForm setFormData={setFormData} />
          <div className="px-4 md:px-6 py-3 md:py-4 gap-4 bg-gray-200 flex flex-row justify-end">
            <button
              type="button"
              className="inline-flex w-28 justify-center rounded-md border border-transparent bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-[3px] focus:ring-blue-300"
              onClick={() => {
                editCard(bucket.name, { ...formData, id, url });
                setEditOpen(false);
              }}
            >
              Save
            </button>
            <button
              type="button"
              className="inline-flex w-32 justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-[3px] focus:ring-blue-300"
              onClick={() => setEditOpen(false)}
            >
              Cancel
            </button>
          </div>
        </Modal>
        <DeleteModal
          deleteModalOpen={deleteModalOpen}
          setDeleteModalOpen={setDeleteModalOpen}
          handleDelete={() => {
            removeCards(bucket.name, { [id]: true });
            setDeleteModalOpen(false);
          }}
        />
        <div className="rounded-lg shadow-lg bg-white w-full flex flex-col">
          <div className="h-[200px]">
            <iframe
              className="w-full rounded-t-md"
              height="200"
              src={url}
              title="Can You Beat Me At This Interview?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div
            className={
              "p-6 min-h-[210px] h-full flex flex-col " +
              (isSelected && "bg-blue-100")
            }
          >
            <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
            <p className="text-gray-700 flex-1 text-base mb-4">{content}</p>
            <div className="flex justify-around gap-3 md:gap-4">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-[3px] focus:ring-blue-300"
                onClick={() => {
                  addHistory({ name: title, date: new Date(), link: url });
                  setViewOpen(true);
                }}
              >
                View
              </button>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-[3px] focus:ring-blue-300"
                onClick={() => setEditOpen(true)}
              >
                Edit
              </button>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-[3px] focus:ring-blue-300"
                onClick={() => setDeleteModalOpen(true)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bucket: state.bucket.selected,
  };
};

export default connect(mapStateToProps, { editCard, removeCards, addHistory })(
  Card
);
