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
