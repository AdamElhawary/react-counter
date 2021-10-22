import { createStore } from "redux";
import { TodoReducer } from "../reducers";

export const store = createStore(TodoReducer);
