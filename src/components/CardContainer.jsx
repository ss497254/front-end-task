import React from "react";

export default function CardContainer({ children }) {
  return (
    <>
      <div className="max-w-sm mx-auto grid gap-6 md:gap-12 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
        {children}
      </div>
    </>
  );
}
