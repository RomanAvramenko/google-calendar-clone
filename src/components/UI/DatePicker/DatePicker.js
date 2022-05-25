import React, { useEffect, useRef, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { Calendar } from "../Calendar/Calendar";
import { daysMap, monthMap } from "../../../utils/calendarHelper";
import { getDateStringFromTimestamp } from "../../../redux/actions/calendar";
import "./DatePicker.scss";

export const DatePicker = () => {
  let date = new Date();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [monthDetails, setMonthDetails] = useState([]);
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

  const dispatch = useDispatch();
  const { selectedDay } = useSelector((state) => state.date);
  const { currentPage } = useSelector((state) => state.header);

  const ref = useRef(null);

  useEffect(() => {
    setMonthDetails(getMonthDetails(year, month));
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref.current]);

  const getNumberOfDays = (year, month) =>
    40 - new Date(year, month, 40).getDate();

  const getDayDetails = (args) => {
    let date = args.index - args.firstDay;
    let day = (args.index % 7) - 1;
    if (day === -1) {
      day = 6;
    }
    let prevMonth = args.month - 1;
    let prevYear = args.year;
    if (prevMonth < 0) {
      prevMonth = 11;
      prevYear--;
    }
    let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
    let _date =
      date < 0
        ? prevMonthNumberOfDays + date + 1
        : (date % args.numberOfDays) + 1;
    let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
    let timestamp = new Date(args.year, args.month, _date).getTime();
    return {
      date: _date,
      day,
      month,
      timestamp,
      dayString: daysMap[day],
    };
  };

  const getMonthDetails = (year, month) => {
    let firstDay = new Date(year, month).getDay() - 1;
    if (firstDay < 0) {
      firstDay = 6;
    }
    let numberOfDays = getNumberOfDays(year, month);
    let monthArray = [];
    let rows = 6;
    let currentDay = null;
    let index = 0;
    let cols = 7;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        currentDay = getDayDetails({
          index,
          numberOfDays,
          firstDay,
          year,
          month,
        });
        monthArray.push(currentDay);
        index++;
      }
    }
    return monthArray;
  };

  const getMonthStr = (month) =>
    monthMap[Math.max(Math.min(11, month), 0)] || "Month";

  /* const handleYear = (offset) => {
    let year = year + offset;
    let month = month;
    setYear(year);
    setMonthDetails(getMonthDetails(year, month));
  }; */

  const handleMonth = (offset) => {
    let currYear = year;
    let currMonth = month + offset;
    if (currMonth === -1) {
      currMonth = 11;
      currYear--;
    } else if (currMonth === 12) {
      currMonth = 0;
      currYear++;
    }
    setYear(currYear);
    setMonth(currMonth);
    setMonthDetails(getMonthDetails(currYear, currMonth));
  };

  const selectMonth = (monthIndex) => handleMonth(monthIndex);

  return (
    <div className="datepicker">
      <div className="date-label" onClick={() => setShowDatePicker(true)}>
        <span className="mdp-date">
          {getDateStringFromTimestamp(selectedDay, currentPage)}
        </span>
        <ArrowDropDownIcon />
      </div>
      <div className={showDatePicker ? "date-picker_show" : "date-picker_hide"}>
        <div className="mdp-container" ref={ref}>
          <div className="mdpc-head">
            <div className="mdpch-container">
              <span className="mdpchc-year">
                {getMonthStr(month)} {year}
              </span>
              <button className="button" onClick={() => handleMonth(-1)}>
                <ChevronLeftIcon />
              </button>
              <button className="button" onClick={() => handleMonth(1)}>
                <ChevronRightIcon />
              </button>
            </div>
          </div>
          {monthDetails && (
            <Calendar monthDetails={monthDetails} selectMonth={selectMonth} />
          )}
        </div>
      </div>
    </div>
  );
};
