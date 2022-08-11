import * as actionTypes from "../actions/types";
export const initialState = [];

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_HISTORY: {
      return [...state, action.payload];
    }

    case actionTypes.SET_HISTORY: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default historyReducer;
