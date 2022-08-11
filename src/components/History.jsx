import React, { useState } from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { addBucket } from "../store/actions/bucketAction";

function History({
  history = ["asdf", "asdljflajsdlf asdf", "adsfadgakhsdkfh ashdf"],
}) {
  return (
    <div className="w-full mx-auto bg-red p-5 max-w-lg mb-8">
      <h2 className="my-10 mx-auto text-center text-3xl font-semibold md:text-4xl">
        History
        <br />
        <span className="text-lg font-medium text-gray-700">
          History of all of your operations
        </span>
      </h2>
      <div className="my-4 flex flex-col gap-4">
        {history.map((item, index) => (
          <div
            key={index}
            className="text-gray-700 bg-white p-3 px-6 border-2 rounded-md"
          >
            {item}
          </div>
        ))}
      </div>
      <Button className="mx-auto my-6 w-fit py-2 md:px-6 bg-blue-500 flex items-center justify-center hover:bg-blue-600 text-white">
        Show More
      </Button>
    </div>
  );
}

export default connect(null, { addBucket })(History);
