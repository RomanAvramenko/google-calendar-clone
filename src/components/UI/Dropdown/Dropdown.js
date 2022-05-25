import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectPage } from "../../../redux/actions/header";
import { Button } from "../Button/Button";
import "./Dropdown.scss";

//TODO write interface

const dropDownLinks = [
  {
    id: 1,
    name: "Day",
    shortCut: "D",
    link: "/day",
  },
  {
    id: 2,
    name: "Week",
    shortCut: "W",
    link: "/week",
  },
  {
    id: 3,
    name: "Month",
    shortCut: "M",
    link: "/month",
  },
  {
    id: 4,
    name: "Year",
    shortCut: "Y",
    link: "/year",
  },
  {
    id: 5,
    name: "Schedule",
    shortCut: "A",
    link: "/schedule",
  },
];

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentPage } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    dispatch(
      selectPage(dropDownLinks.find((i) => i.link === location.pathname).name)
    );
  }, [location.pathname]);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (selectedItem, linkTo) => () => {
    dispatch(selectPage(selectedItem));
    navigate(linkTo);
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <Button onClick={handleMenu}>
        <span>{currentPage}</span>
        <span className="dropdown_icon"></span>
      </Button>
      <ul className={isOpen ? "dropdown_menu" : "dropdown_hide"}>
        {dropDownLinks.map((i) => {
          return (
            <li
              key={i.id}
              className="dropdown_menu_item"
              onClick={handleChange(i.name, i.link)}
            >
              <span>{i.name}</span>
              <span>{i.shortCut}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
