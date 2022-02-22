import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DayPage } from "../../pages/DayPage";
import { MonthPage } from "../../pages/MonthPage";
import { WeekPage } from "../../pages/WeekPage";
import { YearPage } from "../../pages/YearPage";
import "./App.scss";

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/day" />} />
          <Route path="/day" element={<DayPage />} />
          <Route path="/week" element={<WeekPage />} />
          <Route path="/month" element={<MonthPage />} />
          <Route path="/year" element={<YearPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
