const INITIAL_STATE = {
  name: ""
};
const usuarioReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "RENAME_USER") {
    return { ...state, name: action.name };
  }
  return state;
};
export default usuarioReducer;
