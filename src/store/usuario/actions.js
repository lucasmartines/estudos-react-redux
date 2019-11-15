export const renameUser = (name = "") => {
  return {
    type: "RENAME_USER",
    name
  };
};
