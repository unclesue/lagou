import {
  AuthUnionType,
  RESET_SIGNUP,
  SIGNIN,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from "../actions/auth";

export interface AuthState {
  signup: {
    loaded: boolean;
    success: boolean;
    message: string;
  };
  signin: {
    loaded: boolean;
    success: boolean;
    message: string;
  };
}

const intialState: AuthState = {
  signup: {
    loaded: false,
    success: false,
    message: "",
  },
  signin: {
    loaded: false,
    success: false,
    message: "",
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
          success: false,
          message: action.message,
        },
      };
    case RESET_SIGNUP:
      return {
        ...state,
        signup: {
          loaded: false,
          success: false,
          message: "",
        },
      };
    case SIGNIN:
      return {
        ...state,
        signin: {
          loaded: false,
          success: false,
        },
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        signin: {
          loaded: true,
          success: true,
        },
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        signin: {
          loaded: true,
          success: false,
          message: action.message,
        },
      };
    default:
      return state;
  }
}
