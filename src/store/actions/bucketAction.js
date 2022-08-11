import axios from "axios";
import * as actionTypes from "./types";
import { API_URL } from "../../constants";
import { toast } from "react-toastify";
import { fetchAllCards } from "./cardAction";

export const fetchAllBuckets = () => (dispatch) => {
  axios.get(API_URL + "/buckets").then((res) => {
    if (typeof res.data === "object") {
      dispatch({
        type: actionTypes.SET_BUCKET,
        payload: res.data,
      });
      fetchAllCards(res.data[0].name)(dispatch);
    }
  });
};

export const createBucket = () => (dispatch) => {
  axios.post(API_URL + "/buckets").then((res) => {
    toast(res.data);
  });
};

export const setBuckets = (value) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_BUCKET,
    payload: value,
  });
};

export const setSelectedBucket = (value) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_SELECTED_BUCKET,
    payload: value,
  });
  fetchAllCards(value.name)(dispatch);
};

export const addBucket = (value) => (dispatch) => {
  axios
    .post(API_URL + "/buckets", { data: value })
    .then((res) => {
      if (res.data === "Done") {
        toast.success(res.data);
        dispatch({
          type: actionTypes.ADD_BUCKET,
          payload: value,
        });
        setSelectedBucket({ name: value })(dispatch);
      } else {
        toast.error(res.data);
      }
    })
    .catch((err) => {
      toast.error("Unable to Create");
    });
};

export const removeBucket = (value) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_BUCKET,
    payload: value,
  });
};
