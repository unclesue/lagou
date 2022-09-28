import axios, { AxiosResponse } from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { API } from "../../config";
import {
  signupFail,
  signupSuccess,
  SignupAction,
  SIGNUP,
  SIGNIN,
  SigninAction,
  signinSuccess,
  signinFail,
} from "../actions/auth";

function* handleSignup(action: SignupAction) {
  try {
    yield axios.post(`${API}/signup`, action.payload);
    yield put(signupSuccess());
  } catch (error: any) {
    yield put(signupFail(error.response.data.error));
  }
}

function* handleSignin(action: SigninAction) {
  try {
    let response: AxiosResponse = yield axios.post(`${API}/signin`, action.payload);
    localStorage.setItem("jwt", JSON.stringify(response.data))
    yield put(signinSuccess());
  } catch (error: any) {
    yield put(signinFail(error.response.data.error));
  }
}

export default function* auth() {
  yield takeEvery(SIGNUP, handleSignup);
  yield takeEvery(SIGNIN, handleSignin);
}
