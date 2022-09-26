import test from "./test";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    test,
  });

export default createRootReducer;
