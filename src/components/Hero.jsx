import React from "react";

export default function Hero() {
  return (
    <div className="h-[40vh] w-full flex justify-center bg-gray-800">
      <div className="max-w-3xl px-8 py-8 flex items-center">
        <div className="flex flex-col justify-center items-start text-white font-bold">
          <h1 className="text-4xl xl:text-5xl leading-normal">
            Front End Task (Convin.ai)
            <br />
            <span className="text-2xl md:pl-2">
              by <span className="text-blue-500">Saurabh Singh</span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
