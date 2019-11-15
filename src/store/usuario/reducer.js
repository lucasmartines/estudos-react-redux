const INITIAL_STATE = {
  name: "Sem Nome",
  photo:
    "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
};
const usuarioReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "RENAME_USER") {
    return { ...state, name: action.name };
  } else if (action.type === "CHANGE_PHOTO") {
    return { ...state, photo: action.photo || INITIAL_STATE.photo };
  }
  return state;
};
export default usuarioReducer;
