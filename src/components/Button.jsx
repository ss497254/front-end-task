import React from "react";

export default function Button({ className, children, ...props }) {
  return (
    <button
      type="button"
      className={`text-white font-medium leading-tight rounded shadow-md hover:shadow-lg focus:ring-[3px] focus:shadow-lg focus:outline-none active:shadow-lg transition duration-150 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
