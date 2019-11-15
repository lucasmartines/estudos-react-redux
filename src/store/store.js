import { createStore, combineReducers } from "redux";

import ContadorReducer from "./contador/reducer.js";

window.store = createStore(
  combineReducers({
    contador: ContadorReducer
  })
);

const Store = window.store;
export default Store;
