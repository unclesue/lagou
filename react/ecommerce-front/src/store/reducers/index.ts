import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import auth, { AuthState } from "./auth";

export interface AppState {
  router: RouterState;
  auth: AuthState;
}

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth,
  });

export default createRootReducer;
