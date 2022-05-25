export const selectPage = (selectedPage) => {
  return {
    type: "PAGE",
    payload: selectedPage,
  };
};
