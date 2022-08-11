import axios from "axios";
import { HIDEMODAL, SHOWMODAL, HIDEMODAL_ASYNC } from "../const/modal";

export const show = (payload) => ({ type: SHOWMODAL, payload });
export const hide = (payload) => ({ type: HIDEMODAL, payload });

// redux-thunk
export const showAsync = (payload) => async (dispatch) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch(show(data));
};

// redux-saga
export const hideAsync = (payload) => ({ type: HIDEMODAL_ASYNC, payload });
