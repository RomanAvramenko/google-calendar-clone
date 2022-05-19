import { monthMap } from "../../utils/calendarHelper";

export const getDateStringFromTimestamp = (timestamp) => {
  let dateObject = new Date(timestamp);
  let month = dateObject.getMonth();
  let date = dateObject.getDate();
  return `${monthMap[month]} ${date}, ${dateObject.getFullYear()}`;
};

export const selectDay = (timeStamp) => {
  return {
    type: "DATE",
    payload: timeStamp
  }
}