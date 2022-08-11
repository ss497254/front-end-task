import * as actionTypes from "./types";
import axios from "axios";
import { API_URL } from "../../constants";

export const fetchPrevHistory = () => (dispatch) => {
  axios.get(API_URL + "/history").then((res) => {
    if (typeof res.data === "object") {
      console.log({ data: res.data });
      dispatch({
        type: actionTypes.SET_HISTORY,
        payload: res.data,
      });
    }
  });
};

export const addHistory = (value) => (dispatch) => {
  axios.post(API_URL + "/history", { data: value }).then((res) => {
    if (res.data === "Done") {
      dispatch({
        type: actionTypes.ADD_HISTORY,
        payload: value,
      });
    }
  });
};
