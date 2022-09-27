import {
  AuthUnionType,
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from "../actions/auth";

export interface AuthState {
  signup: {
    loaded: boolean;
    success: boolean;
  };
}

const intialState: AuthState = {
  signup: {
    loaded: false,
    success: false,
  },
};

export default function auth(state = intialState, action: AuthUnionType) {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signup: {
          loaded: false,
          success: false,
        },
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          loaded: true,
          success: true,
        },
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signup: {
          loaded: true,
          success: true,
          message: action.message,
        },
      };
    default:
      return state;
  }
}
