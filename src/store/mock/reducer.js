import axios from "axios";

const INITIAL_STATE = { items: [] };

const mockReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "GET_ITEMS") {
    return { ...state, items: action.items };
  }
  return state;
};
export default mockReducer;
