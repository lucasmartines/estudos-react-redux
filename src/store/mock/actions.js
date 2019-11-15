export const getAllUsers = items => {
  return {
    type: "GET_ITEMS",
    items
  };
};

export const modifyUser = item => {
  return {
    type: "CHANGE_ITEM",
    item
  };
};
