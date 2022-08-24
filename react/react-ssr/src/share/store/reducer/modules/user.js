import { SAVE_USER } from "../../actions/user";

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_USER:
      return action.payload;
    default:
      return state;
  }
};
