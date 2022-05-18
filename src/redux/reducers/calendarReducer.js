let oneDay = 60 * 60 * 24 * 1000;
let todayTimestamp =
  Date.now() -
  (Date.now() % oneDay) +
  new Date().getTimezoneOffset() * 1000 * 60;

const initialState = {
  selectedDay: todayTimestamp,
  todayTimestamp: todayTimestamp,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATE":
      return {
        ...state,
        selectedDay: action.payload,
      };
    default:
      return state;
  }
};
