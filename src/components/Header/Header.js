import React from "react";
import { Button } from "../UI/Button/Button";
import { Dropdown } from "../UI/Dropdown/Dropdown";
import { DatePicker } from "../UI/DatePicker/DatePicker";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img
          className="header_logo_img"
          src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_15_2x.png"
          alt=""
        />
        <span className="header_logo_title">
          <h2>Calendar</h2>
        </span>
      </div>
      <div className="header_nav">
        <Button>Today</Button>
        <DatePicker/>
        <Dropdown />
      </div>
    </div>
  );
};
