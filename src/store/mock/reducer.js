import axios from "axios";

const INITIAL_STATE = { items: [] };

const mockReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "GET_ITEMS") {
    return { ...state, items: action.items };
  }
  if (action.type === "CHANGE_ITEM") {
    let oldState = { ...state };

    oldState.items.forEach(e => {
      if (e.id === action.item) {
        e.completed = !e.completed;
      }
    });

    return { ...state, oldState };
  }
  return state;
};
export default mockReducer;
