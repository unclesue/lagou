import { HIDEMODAL, SHOWMODAL } from "../const/modal.const";

const initalState = { show: false }

export const modalReducer = (state = initalState, action) => {
  switch (action.type) {
    case SHOWMODAL:
      return { ...state, show: true };
    case HIDEMODAL:
      return { ...state, show: false };
    default:
      return state;
  }
}
