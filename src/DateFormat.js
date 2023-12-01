import React from "react";
import "./styles.css";

export default function DateFormat() {
  function zero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayNow = days[now.getDay()];
  let time = zero(now.getHours());
  let minutes = zero(now.getMinutes());
  return (
    <div className="DateFormat">
      {dayNow}, {time}:{minutes}
    </div>
  );
}
