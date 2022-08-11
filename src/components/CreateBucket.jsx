import React, { useState } from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { addBucket } from "../store/actions/bucketAction";

function CreateBucket({ addBucket }) {
  const [bucketName, setBucketName] = useState("");

  const handleCreateBucket = () => {
    if (bucketName === "") return;
    addBucket(bucketName);
    setBucketName("");
  };

  return (
    <div className="w-full mx-auto bg-red p-5 max-w-lg">
      <h2 className="my-10 mx-auto text-center text-3xl font-semibold md:text-4xl">
        Create bucket
      </h2>
      <div className="my-4 flex gap-4">
        <input
          type="text"
          value={bucketName}
          autoComplete="off"
          className="w-full p-2 px-4 bg-white outline-none border border-gray-300 rounded-md"
          onChange={(e) => setBucketName(e.target.value)}
        />
        <Button
          className="w-48 py-3 md:px-5 bg-blue-500 hover:bg-blue-600 focus:ring-blue-300 text-white"
          onClick={handleCreateBucket}
        >
          Add Bucket
        </Button>
      </div>
    </div>
  );
}

export default connect(null, { addBucket })(CreateBucket);
