import * as actionTypes from "./types";
import axios from "axios";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { API_URL } from "../../constants";

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

// export const updateUserCred = (userData) => (dispatch) => {
//   console.log(userData);
//   dispatch(setLoading(true));
//   axios
//     .patch("/update-usercred", userData)
//     .then((res) => {
//       const { user } = res.data;
//       dispatch(setUser(user));
//       dispatch(setLoading(false));
//     })
//     .catch((err) => {
//       console.log("err", err);
//       dispatch(setLoading(false));
//     });
// };

// export const updateUserInfo = (userData) => (dispatch) => {
//   console.log(userData);
//   dispatch(setLoading(true));
//   axios
//     .patch("/update-userinfo", userData)
//     .then((res) => {
//       const { user } = res.data;
//       dispatch(setUser(user));
//       dispatch(setLoading(false));
//     })
//     .catch((err) => {
//       console.log("err", err);
//       dispatch(setLoading(false));
//     });
// };

// export const SubmitBlog = (blogData, toast, callback) => (dispatch) => {
//   console.log(blogData);
//   axios
//     .post("/blogs", blogData)
//     .then((res) => {
//       callback(res.data.blog.id);
//       toast({
//         title: "Submitted Succefully",
//         description: "Blog has been submitted successfully",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//     })
//     .catch((err) => {
//       console.log("err", err);
//       callback(undefined, err);
//       toast({
//         title: "Failed to Submit",
//         description: "Unable to Submit. Please Try Again.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     });
// };

// export const EditBlog = (blogData, callback) => (dispatch) => {
//   console.log(blogData);
//   axios
//     .post("/blogs", blogData)
//     .then((res) => {
//       console.log(res.data);
//       callback(res.data.id);
//     })
//     .catch((err) => {
//       console.log("err", err);
//       callback(undefined, err);
//     });
// };
