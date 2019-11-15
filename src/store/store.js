import { createStore, combineReducers } from "redux";

import ContadorReducer from "./contador/reducer.js";
import UsuarioReducer from "./usuario/reducer.js";
import mockReducer from "./mock/reducer.js";

window.store = createStore(
  combineReducers({
    contador: ContadorReducer,
    usuario: UsuarioReducer,
    mock: mockReducer
  })
);

const Store = window.store;
export default Store;
