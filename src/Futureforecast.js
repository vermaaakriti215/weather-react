import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
export default function Futureforecast() {
  return (
    <div className="Futureforecast">
      <div class="weather-forecast" id="forecast">
        <div className="row">
          <div class="col-2">
            <p>Wed</p>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            ></img>
            <span id="temp-input">45</span>
            <span class="small">&deg;C </span>
          </div>
          <div class="col-2">
            <p>Thur</p>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            ></img>
            <span id="temp-input">45</span>
            <span class="small">&deg;C </span>
          </div>
          <div class="col-2">
            <p>Fri</p>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            ></img>
            <span id="temp-input">45</span>
            <span class="small">&deg;C </span>
          </div>
          <div class="col-2">
            <p>Sat</p>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            ></img>
            <span id="temp-input">45</span>
            <span class="small">&deg;C </span>
          </div>
          <div class="col-2">
            <p>Sun</p>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            ></img>
            <span id="temp-input">45</span>
            <span class="small">&deg;C </span>
          </div>
          <div class="col-2">
            <p>Mon</p>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="42"
            ></img>
            <span id="temp-input">45</span>
            <span class="small">&deg;C </span>
          </div>
        </div>
      </div>
    </div>
  );
}
