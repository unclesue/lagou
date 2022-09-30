import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import auth, { AuthState } from "./auth";
import category, { CategoryState } from "./category";
import product, { ProductState } from "./product";

export interface AppState {
  router: RouterState;
  auth: AuthState;
  category: CategoryState;
  product: ProductState;
}

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    category,
    product,
  });

export default createRootReducer;
