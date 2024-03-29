const ContadorReducer = (store = 0, action) => {
  if (action.type === "INCREMENT") {
    return store + 1;
  } else if (action.type === "DECREMENT") {
    return store - 1;
  }
  return store;
};

const incrementar = (inc = 1) => {
  return {
    type: "INCREMENT",
    payload: inc
  };
};
const decrementar = (inc = 1) => {
  return {
    type: "DECREMENT",
    payload: inc
  };
};

export { incrementar, decrementar };
export default ContadorReducer;
