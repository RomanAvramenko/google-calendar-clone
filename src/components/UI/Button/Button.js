import React from "react";
import "./Button.scss";

export const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};
