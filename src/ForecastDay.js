import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <p>
        {day()}
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt=""
          width="62"
        ></img>
        <span className="forecastC">
          {Math.round(props.data.temp.max)} &deg;C |
          {Math.round(props.data.temp.min)} &deg;C
        </span>
      </p>
    </div>
  );
}
