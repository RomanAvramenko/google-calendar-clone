import React from "react";

export const Calendar = ({
  selectedDay,
  todayTimestamp,
  monthDetails,
  selectDay,
  selectMonth,
}) => {
  /*TODO*/
  /*Доробити у функції можливість при зміні дати, 
  що не стосується теперішнього місяця підсвічувати дату яку було обрано*/
  const onDateClick = (day) => {
    //console.log(new Date(day.timestamp).getDate());
    //console.log(day);
    selectMonth(day.month);
    return selectDay(day.timestamp);
  };

  const isCurrentDay = (day) => day.timestamp === todayTimestamp;

  const isSelectedDay = (day) => day.timestamp === selectedDay;

  let days = monthDetails.map((day, index) => {
    let highlighter = () => {
      if (day.month !== 0) {
        return " disabled";
      }
      if (isCurrentDay(day)) {
        return " highlight";
      }
      if (isSelectedDay(day)) {
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
