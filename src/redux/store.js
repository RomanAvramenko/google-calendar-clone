import { configureStore } from "@reduxjs/toolkit";
import { calendarReducer } from "./reducers/calendarReducer";
import { headerReducer } from "./reducers/headerReducer";

export const store = configureStore({
  reducer: {
    date: calendarReducer,
    header: headerReducer,
  },
});
