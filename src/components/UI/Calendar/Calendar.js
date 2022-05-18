import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDay } from "../../../redux/actions/calendar";

export const Calendar = ({
  monthDetails,
  selectMonth,
}) => {
  const dispatch = useDispatch();
  const {selectedDay, todayTimestamp} = useSelector(state=> state.date)

  /*TODO*/
  /*Доробити у функції можливість при зміні дати, 
  що не стосується теперішнього місяця підсвічувати дату яку було обрано*/
  const onDateClick = (day) => {
    selectMonth(day.month);
    return dispatch(selectDay(day.timestamp));
  };

  let days = monthDetails.map((day, index) => {
    let highlighter = () => {
      if (day.month !== 0) {
        return " disabled";
      }
      if (day.timestamp === todayTimestamp) {
        return " highlight";
      }
      if (day.timestamp === selectedDay) {
        return " highlight-blue";
      }
      return "";
    };
    return (
      <div className="calendar-body-container-template_box" key={index}>
        <div className={"c-day-container" + highlighter()}>
          <span className="cdc-day" onClick={() => onDateClick(day)}>
            {day.date}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="calendar-body">
      <div className="calendar-body-container">
        <div className="calendar-body-container-head">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div key={i} className="calendar-body-container-head-name">
              {d}
            </div>
          ))}
        </div>
        <div className="calendar-body-container-template">{days}</div>
      </div>
    </div>
  );
};
