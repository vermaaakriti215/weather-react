import React from "react";
import DateFormat from "./DateFormat";
export default function WeatherInfo(props) {
  return (
    <div clasName="WeatherInfo">
      <br />
      <div className="CurrentWeather">
        <div className="row">
          <div className="col-6">
            <h1>{props.data.city}</h1>
            <div className="clearfix weather-temperature">
              <img
                src={`https://openweathermap.org/img/wn/${props.data.iconnumber}@2x.png`}
                alt="Weather Icon"
                id="cloud-icon"
              />
              <span id="current-temp">{props.data.temp}</span>
              <span className="small" id="temp-C">
                &deg;C{" "}
              </span>
            </div>
          </div>
          <div className="col-6">
            <span className="corner">
              Weather <br />
              <span className="grey">
                <span className="dateChange" id="date-time">
                  {" "}
                  <DateFormat />
                </span>
                <span id="description">{props.data.description}</span>
              </span>
            </span>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-6">
            {" "}
            Humidity: <span id="humidity-input">{props.data.humidity}</span>%
          </div>
          <div className="col-6">
            Wind: <span id="wind-input">{props.data.wind} </span>km/h
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
