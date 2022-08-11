import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { connect } from "react-redux";
import { setSelectedBucket } from "../store/actions/bucketAction";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className="h-5 w-5 fill-blue-500"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);

function BucketSelector({ buckets = [], selectedBucket, setSelectedBucket }) {
  const [selected, setSelected] = useState(
    selectedBucket ? selectedBucket : { name: "No buckets" }
  );

  useEffect(() => {
    setSelected(selectedBucket ? selectedBucket : { name: "No buckets" });
  }, [buckets]);

  return (
    <Listbox
      value={selected}
      onChange={(bucket) => {
        setSelected(bucket);
        setSelectedBucket(bucket);
      }}
      className="mb-8 max-w-lg mx-auto"
    >
      <div className="relative my-12">
        <Listbox.Button className="px-1.5 md:px-8 relative h-12 border w-full cursor-default rounded-lg bg-white py-2 pl-6 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300">
          <span className="block truncate">{selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-2 w-[90vw] md:max-w-lg overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {buckets.map((bucket, bucketIdx) => (
              <Listbox.Option
                key={bucketIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-3 pl-10 pr-4 ${
                    active ? "bg-blue-100 md:text-md" : "text-gray-900"
                  }`
                }
                value={bucket}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {bucket.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <CheckIcon />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

const mapStateToProps = (state) => {
  return {
    buckets: state.bucket.buckets,
    selectedBucket: state.bucket.selected,
  };
};

export default connect(mapStateToProps, { setSelectedBucket })(BucketSelector);
