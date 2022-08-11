import * as actionTypes from "../actions/types";
export const initialState = {
  buckets: [],
  selected: null,
};

const bucketReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BUCKET: {
      return { ...state, buckets: action.payload, selected: action.payload[0] };
    }

    case actionTypes.SET_SELECTED_BUCKET: {
      return { ...state, selected: action.payload };
    }

    case actionTypes.ADD_BUCKET: {
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

export default bucketReducer;
