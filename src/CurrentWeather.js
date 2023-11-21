import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function CurrentWeather() {
  let [city, setCity] = useState("Jhansi");
  let [icon, setIcon] = useState(
    "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
  );
  let [temp, setTemp] = useState("42");
  let [des, setDescription] = useState("Sunny");
  let [humidity, setHumidity] = useState("60");
  let [wind, setWind] = useState("10");
  function handleCityChange(response) {
    setCity(city);
    setTemp(response.data.main.temp);
    setIcon(response.data.weather[0].icon);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=62231151ce343c4d68652e1617efc22f&units=metric`;
  axios.get(url).then(handleCityChange);

  return (
    <div class="container">
      <div className="CurrentWeather">
        <h1>{city}</h1>
        <div class="row">
          <div class="col-3">
            <div class="clearfix weather-temperature">
              <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="Clear"
                id="cloud-icon"
              />
              <span id="temp-input">{temp}</span>
              <span class="small">&deg;C </span>
            </div>
          </div>
          <div class="col-5">
            <ul class="list">
              <li>
                Humidity: <span id="humidity-input">{humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind-input">{wind} </span>km/h
              </li>
            </ul>
          </div>
          <div class="col-4">
            <span class="corner">
              Weather <br />
              <span class="grey">
                <span class="dateChange" id="date-time">
                  {" "}
                  Tuesday, 1:00pm
                </span>
                <br />
                <span id="description">{des}</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
