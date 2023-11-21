import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
export default function Futureforecast() {
  return (
    <div className="Futureforecast">
      <div className="weather-forecast">
        <div className="row">
          <div className="col-2">
            <p>Wed</p>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            ></img>
            <span id="temp-input">45</span>
            <span className="small">&deg;C </span>
          </div>
          <div className="col-2">
            <p>Thur</p>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            ></img>
            <span id="temp-input">45</span>
            <span className="small">&deg;C </span>
          </div>
          <div className="col-2">
            <p>Fri</p>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            ></img>
            <span id="temp-input">45</span>
            <span className="small">&deg;C </span>
          </div>
          <div className="col-2">
            <p>Sat</p>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            ></img>
            <span id="temp-input">45</span>
            <span className="small">&deg;C </span>
          </div>
          <div className="col-2">
            <p>Sun</p>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            ></img>
            <span id="temp-input">45</span>
            <span className="small">&deg;C </span>
          </div>
          <div className="col-2">
            <p>Mon</p>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            ></img>
            <span id="temp-input">45</span>
            <span className="small">&deg;C </span>
          </div>
        </div>
      </div>
    </div>
  );
}
