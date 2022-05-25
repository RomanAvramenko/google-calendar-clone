const initialState = {
  currentPage: null,
};

export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
