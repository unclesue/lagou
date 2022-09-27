import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { API } from "../../config";
import {
  signupFail,
  signupSuccess,
  SignupAction,
  SIGNUP,
} from "../actions/auth";

function* handleSignup(action: SignupAction) {
  try {
    yield axios.post(`${API}/signup`, action.payload);
    yield put(signupSuccess());
  } catch (error) {
    yield put(signupFail(error.response.data.error));
  }
}

export default function* auth() {
  yield takeEvery(SIGNUP, handleSignup);
}
