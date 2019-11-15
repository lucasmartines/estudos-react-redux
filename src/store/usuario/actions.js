export const renameUser = (name = "") => {
  return {
    type: "RENAME_USER",
    name
  };
};
export const changeUserPhoto = (photo = "") => {
  return {
    type: "CHANGE_PHOTO",
    photo
  };
};
