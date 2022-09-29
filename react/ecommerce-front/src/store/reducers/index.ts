import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import auth, { AuthState } from "./auth";
import category, { CategoryState } from "./category";

export interface AppState {
  router: RouterState;
  auth: AuthState;
  category: CategoryState;
}

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    category,
  });

export default createRootReducer;
