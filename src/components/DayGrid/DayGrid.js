import React from "react";
import { useSelector } from "react-redux";
import { daysShortcutMap } from "../../utils/calendarHelper";
import { ButtonCreate } from "../UI/ButtonCreate/ButtonCreate";
import "./DayGrid.scss";

export const DayGrid = () => {
  const { selectedDay, todayTimestamp } = useSelector((state) => state.date);

  const date = (stamp) => new Date(stamp);

  const getWeekday = () => {
    return daysShortcutMap[date(selectedDay).getDay()];
  };

  const currentDayPage = selectedDay === todayTimestamp ? "" : "weekday";

  const dayStart = date(todayTimestamp).getTime();
  const pointValue = ((Date.now() - dayStart) / 75000 + 150).toFixed();

  const timeZone = new Date()
    .toString()
    .split(" ")
    .slice(5, -4)
    .join("")
    .slice(0, -2);

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
        <div className="day-grid_header_gmt">{timeZone}</div>
      </div>
      <div className="day-grid_table">
        <div className="day-grid_table_hours"></div>
        <div className="day-grid_table_lines">
          <div
            className="day-grid_table_indicatior"
            style={{ top: `${pointValue}px` }}
          ></div>
          <div
            className="day-grid_table_point"
            style={{ top: `${pointValue}px` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
