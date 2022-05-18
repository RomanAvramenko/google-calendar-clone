import { configureStore } from "@reduxjs/toolkit";
import { calendarReducer } from "./reducers/calendarReducer";

export const store = configureStore({
  reducer: {
    date: calendarReducer
  }
})