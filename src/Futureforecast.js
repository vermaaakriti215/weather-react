import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
export default function Futureforecast() {
  return (
    <div className="Futureforecast">
      <div className="weather-forecast">
        <div className="row">
          <div className="col-2">
            <p>
              Wed
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="42"
              ></img>
              45
              <span className="small">&deg;C </span>
            </p>
          </div>
          <div className="col-2">
            <p>
              Thur
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="42"
              ></img>
              45
              <span className="small">&deg;C </span>
            </p>
          </div>
          <div className="col-2">
            <p>
              Fri
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="42"
              ></img>
              45
              <span className="small">&deg;C </span>
            </p>
          </div>
          <div className="col-2">
            <p>
              Sat
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="42"
              ></img>
              45
              <span className="small">&deg;C </span>
            </p>
          </div>
          <div className="col-2">
            <p>
              Sun
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="42"
              ></img>
              45
              <span className="small">&deg;C </span>
            </p>
          </div>
          <div className="col-2">
            <p>
              Mon
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="42"
              ></img>
              45
              <span className="small">&deg;C </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
