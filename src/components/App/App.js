import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DayPage } from "../../pages/DayPage";
import { MonthPage } from "../../pages/MonthPage";
import { WeekPage } from "../../pages/WeekPage";
import { YearPage } from "../../pages/YearPage";
import { SchedulePage } from "../../pages/SchedulePage";
import { useSelector } from "react-redux";
import { getDateStringFromTimestamp } from "../../redux/actions/calendar";
import "./App.scss";

export const App = () => {
  const { selectedDay, todayTimestamp } = useSelector((state) => state.date);
  const currentToggledDay = new Date(selectedDay).getDay();

  const titleString = `Google Calendar - ${new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(currentToggledDay)}, ${getDateStringFromTimestamp(selectedDay)}${
    selectedDay == todayTimestamp ? ", today" : ""
  }`;

  useEffect(() => {
    document.title = titleString;
  }, [selectedDay]);

  useEffect(() => {
    document.getElementById(
      "favicon"
    ).href = `https://calendar.google.com/googlecalendar/images/favicons_2020q4/calendar_${new Date(
      todayTimestamp
    ).getDate()}.ico`;
  }, [todayTimestamp]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/day" />} />
          <Route path="/day" element={<DayPage />} />
          <Route path="/week" element={<WeekPage />} />
          <Route path="/month" element={<MonthPage />} />
          <Route path="/year" element={<YearPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
