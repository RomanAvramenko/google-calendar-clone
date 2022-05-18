import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../UI/Button/Button";
import { Dropdown } from "../UI/Dropdown/Dropdown";
import { DatePicker } from "../UI/DatePicker/DatePicker";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { selectDay } from "../../redux/actions/calendar";
import "./Header.scss";

export const Header = () => {
  const dispatch = useDispatch();
  const { todayTimestamp } = useSelector((state) => state.date);

  return (
    <div className="header">
      <div className="header_logo">
        <img
          className="header_logo_img"
          src={`https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${new Date(
            todayTimestamp
          ).getDate()}_2x.png`}
          alt=""
        />
        <span className="header_logo_title">
          <h2>Calendar</h2>
        </span>
      </div>
      <div className="header_nav">
        <div className="header_nav_controls">
          <Button onClick={() => dispatch(selectDay(todayTimestamp))}>
            Today
          </Button>
          <div className="header_nav_controls_arrows">
            <button>
              <ChevronLeftIcon />
            </button>
            <button>
              <ChevronRightIcon />
            </button>
          </div>
          <DatePicker />
        </div>
        <Dropdown />
      </div>
    </div>
  );
};
