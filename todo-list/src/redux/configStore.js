import { createStore, combineReducers } from "redux";
import todolist from "./modules/todolist";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
const rootReducer = combineReducers({ todolist });
const store = createStore(rootReducer);
export default store;
