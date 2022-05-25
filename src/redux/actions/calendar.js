import { monthMap } from "../../utils/calendarHelper";

export const getDateStringFromTimestamp = (timestamp, pageName) => {
  let dateObject = new Date(timestamp);
  let month = dateObject.getMonth();
  let date = dateObject.getDate();
  switch (pageName) {
    case "Day":
      return `${monthMap[month]} ${date}, ${dateObject.getFullYear()}`;
    case "Week":
      return `${monthMap[month]} ${dateObject.getFullYear()}`;
    case "Month":
      return `${monthMap[month]} ${dateObject.getFullYear()}`;
    case "Year":
      return `${dateObject.getFullYear()}`;
    case "Schedule":
      return `${monthMap[month]} ${dateObject.getFullYear()} - ${monthMap[month]} ${dateObject.getFullYear()}`;
    default:
      return;
  }
};

export const selectDay = (timeStamp) => {
  return {
    type: "DATE",
    payload: timeStamp,
  };
};
