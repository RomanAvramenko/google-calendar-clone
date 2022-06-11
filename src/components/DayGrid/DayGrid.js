import React from "react";
import { useSelector } from "react-redux";
import { daysShortcutMap } from "../../utils/calendarHelper";
import { ButtonCreate } from "../UI/ButtonCreate/ButtonCreate";
import "./DayGrid.scss";

export const DayGrid = () => {
  const { selectedDay, todayTimestamp } = useSelector((state) => state.date);

  const getWeekday = () => {
    return daysShortcutMap[new Date(selectedDay).getDay()];
  };

  const currentDayPage = selectedDay === todayTimestamp ? "" : "weekday";

  return (
    <div className="day-grid">
      <div className="day-grid_header">
        <ButtonCreate />
        <div className="day-grid_header_date">
          <span className={currentDayPage}>{getWeekday()}</span>
          <div className={currentDayPage}>
            {new Date(selectedDay).getDate()}
          </div>
        </div>
      </div>
      <div className="day-grid_table">
        <div className="day-grid_table_hours"></div>
        <div className="day-grid_table_lines">
          <div
            className="day-grid_table_indicatior"
            style={{ top: "838px" }}
          ></div>
          <div className="day-grid_table_point" style={{ top: "838px" }}></div>
        </div>
      </div>
    </div>
  );
};
