import { HIDEMODAL, SHOWMODAL } from "../const/modal.const";

export const show = (payload) => ({ type: SHOWMODAL, payload });
export const hide = (payload) => ({ type: HIDEMODAL, payload });

export const showAsync = (payload) => (dispatch) => {
  setTimeout(() => {
    dispatch(show(payload));
  }, 2000);
};
