import React from "react";

export default function CardContainer({ children }) {
  return (
    <>
      <p className="text-center my-8">
        Card has youtube video embeded into it, user do not have to only provide
        card title and content. <br />
        User can also create dummy card just by pressing save button.
      </p>
      <div className="max-w-sm mx-auto grid gap-6 md:gap-12 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
        {children}
      </div>
    </>
  );
}
