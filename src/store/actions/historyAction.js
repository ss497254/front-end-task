import * as actionTypes from "./types";

export const addHistory = (value) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_HISTORY,
    payload: value,
  });
};
