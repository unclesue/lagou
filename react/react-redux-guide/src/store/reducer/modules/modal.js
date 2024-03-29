import { HIDEMODAL, SHOWMODAL } from "../../const/modal";

const initalState = { show: false, posts: [] }

export const modal = (state = initalState, action) => {
  switch (action.type) {
    case SHOWMODAL:
      return { ...state, show: true, posts: action.payload };
    case HIDEMODAL:
      return { ...state, show: false };
    default:
      return state;
  }
}
