import axios from "axios";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { API_URL } from "../../constants";
import { youtubeVideoUrl } from "../../youtubeVideo";
import * as actionTypes from "./types";

export const fetchAllCards = (bucket) => (dispatch) => {
  if (bucket) {
    axios.get(API_URL + "/cards?bucket=" + bucket).then((res) => {
      if (typeof res.data === "object") {
        dispatch({
          type: actionTypes.SET_CARD,
          payload: res.data,
        });
      } else {
        toast.error(res.data);
      }
    });
  }
};

export const addCard = (bucket, value) => (dispatch) => {
  value.id = v4();
  value.url = youtubeVideoUrl();

  axios
    .post(API_URL + "/cards", { bucket, data: value })
    .then((res) => {
      if (res.data === "Done") {
        toast.success(res.data);
        dispatch({
          type: actionTypes.ADD_CARD,
          payload: value,
        });
      } else {
        toast.error(res.data);
      }
    })
    .catch((err) => {
      toast.error("Unable to Create");
    });
};

export const editCard = (bucket, value) => (dispatch) => {
  axios
    .patch(API_URL + "/cards", { bucket, data: value })
    .then((res) => {
      if (res.data === "Done") {
        toast.success(res.data);
        dispatch({
          type: actionTypes.EDIT_CARD,
          payload: value,
        });
      } else {
        toast.error(res.data);
      }
    })
    .catch((err) => {
      toast.error("Unable to Edit");
    });
};

export const removeCards = (bucket, value) => (dispatch) => {
  console.log({ bucket, value });
  axios
    .delete(API_URL + "/cards", { data: { bucket, data: value } })
    .then((res) => {
      if (res.data === "Done") {
        toast.success(res.data);
        dispatch({
          type: actionTypes.REMOVE_CARDS,
          payload: value,
        });
      } else {
        toast.error(res.data);
      }
    })
    .catch((err) => {
      toast.error("Unable to Create");
    });
};

export const moveCards = (value) => (dispatch) => {
  dispatch({
    type: actionTypes.MOVE_CARDS,
    payload: value,
  });
};
