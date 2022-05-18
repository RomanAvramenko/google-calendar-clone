export const selectDay = (timeStamp) => {
  return {
    type: "DATE",
    payload: timeStamp
  }
}