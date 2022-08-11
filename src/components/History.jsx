import React, { useEffect, useState } from "react";
import Button from "./Button";
import { connect } from "react-redux";

function History({ history = [] }) {
  const [size, setSize] = useState(Math.min(history.length, 4));

  useEffect(() => {
    setSize(Math.min(history.length, 4));
  }, [history]);

  return (
    <div className="w-full mx-auto bg-red p-5 max-w-lg mb-8">
      <h2 className="my-10 mx-auto text-center text-3xl font-semibold md:text-4xl">
        History
        <br />
        <span className="text-lg font-medium text-gray-700">
          History of all of your played videos.
        </span>
      </h2>
      <div className="my-4 flex flex-col gap-4">
        {history.length ? (
          history.slice(0, size).map((item, index) => (
            <div
              key={index}
              className="text-gray-700 bg-white p-6 border-2 rounded-md overflow-hidden"
            >
              <div className="flex pb-3 text-xl">
                {item?.name}
                <div className="flex-1 text-right text-xs">
                  {new Date(item?.date).toDateString()}
                  <br />
                  {new Date(item?.date).toLocaleTimeString()}
                </div>
              </div>
              <a
                href={item?.link}
                className="text-blue-600 truncate break-words"
              >
                Video Link
              </a>
            </div>
          ))
        ) : (
          <div className="text-center mb-8">No history</div>
        )}
      </div>
      <Button
        className="mx-auto my-6 w-fit py-2 px-6 bg-blue-500 flex items-center justify-center hover:bg-blue-600 text-white"
        onClick={() => setSize(Math.min(history.length, size + 4))}
      >
        {size === history.length ? "No More" : "Show More"}
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    history: state.history,
  };
};

export default connect(mapStateToProps, {})(History);
