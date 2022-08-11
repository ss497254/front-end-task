import * as actionTypes from "../actions/types";
export const initialState = [];

const historyReducer = (state = initialState, action) => {
  console.log({ action });
  switch (action.type) {
    case actionTypes.ADD_HISTORY: {
      return {
        ...state,
        buckets: [...state.buckets, { name: action.payload }],
      };
    }

    case actionTypes.REMOVE_BUCKET: {
      return {
        ...state,
        buckets: state.buckets.filter(
          (bucket) => bucket.name !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default historyReducer;
