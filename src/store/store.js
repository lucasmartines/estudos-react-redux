import { createStore, combineReducers } from "redux";

import ContadorReducer, {
  incrementar,
  decrementar
} from "./contador/reducer.js";

window.store = createStore(
  combineReducers({
    contador: ContadorReducer
  })
);
window.store.dispatch(incrementar());
window.store.dispatch(incrementar());
window.store.dispatch(incrementar());
window.store.dispatch(decrementar());
