import axios from "axios";
import { HIDEMODAL, SHOWMODAL } from "../const/modal.const";

export const show = (payload) => ({ type: SHOWMODAL, payload });
export const hide = (payload) => ({ type: HIDEMODAL, payload });

export const showAsync = (payload) => async (dispatch) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch(show(data));
};
