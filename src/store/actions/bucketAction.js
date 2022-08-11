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

// export const SignInUser = (userData, toast) => (dispatch) => {
//   dispatch(setLoading(true));
//   axios
//     .post("sign-in", userData)
//     .then((res) => {
//       const { token, user } = res.data;
//       localStorage.setItem("token", token);
//       setAuthToken(token);
//       dispatch(setUser(user));
//       dispatch(setLoading(false));
//       toast({
//         title: "Sign in Succefully",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//     })
//     .catch((err) => {
//       console.log("err", err);
//       dispatch(setLoading(false));
//       toast({
//         title: "Failed to Sign in",
//         description: "Please Try Again",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     });
// };

// export const SignUpUser = (userData, toast) => (dispatch) => {
//   dispatch(setLoading(true));
//   axios
//     .post("/sign-up", userData)
//     .then((res) => {
//       const { token, user } = res.data;
//       localStorage.setItem("token", token);
//       setAuthToken(token);
//       dispatch(setUser(user));
//       dispatch(setLoading(false));
//       toast({
//         title: "Sign up Succefully",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//     })
//     .catch((err) => {
//       console.log("err", err);
//       dispatch(setLoading(false));
//       toast({
//         title: "Failed to Sign up",
//         description: "Please Try Again.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     });
// };

// export const fetchUser = (token) => (dispatch) => {
//   axios
//     .post(
//       "/fetch-user",
//       {},
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     )
//     .then((res) => {
//       setAuthToken(token);
//       dispatch(setUser(res.data.user));
//     })
//     .catch((err) => {
//       console.log(err);
//       localStorage.removeItem("token");
//     });
// };

// export const logoutUser = () => (dispatch) => {
//   localStorage.removeItem("token");
//   setAuthToken(false);
//   dispatch(setUser({}));
// };
