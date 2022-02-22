import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  let navigate = useNavigate();

  const handleChange = (value) => {
    console.log(value);
    navigate(`/${value}`);
  };
  return (
    <div>
      <select name="" id="" onChange={(e) => handleChange(e.target.value)}>
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
};
