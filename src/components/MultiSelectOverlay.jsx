import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function MutlitSelectOverlay({
  multiSelectOverlay,
  itemSelected,
  multiSelectOverlayClose,
  setMultiDeleteModal,
  setMultiMoveModal,
}) {
  const noOfItems = () => {
    let i = 0;
    Object.keys(itemSelected).forEach((item) => (i += itemSelected[item]));
    return i;
  };

  return (
    <div
      className={
        multiSelectOverlay
          ? "opacity-100 z-10 scale-100 ease-out duration-200 fixed bottom-3 right-3 md:bottom-6 md:right-6 lg:bottom-10 lg:right-10 transition transform origin-bottom-right"
          : "opacity-0 hidden scale-95 fixed bottom-0 inset-x-0 p-2 transition transform origin-bottom-right"
      }
    >
      <div className="rounded-lg shadow-2xl border border-gray-300 ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-200">
        <div className="flex flex-col p-6 gap-3">
          <div className="flex gap-4 -mt-2 justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center text-lg font-medium">
                {noOfItems()}
              </span>
              Selected Items
            </div>
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center  text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={multiSelectOverlayClose}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <Button
            className="py-2 px-3 w-60 bg-red-500 flex gap-2 items-center justify-center hover:bg-red-600 text-white"
            onClick={() => setMultiDeleteModal(true)}
          >
            Delete Multiple
          </Button>
          {/* <div className="flex gap-4">
            <Button
              className="py-2 px-3 bg-blue-500 flex gap-2 items-center justify-center hover:bg-blue-600 text-white"
              onClick={() => setMultiMoveModal(true)}
            >
              Move Multiple
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
