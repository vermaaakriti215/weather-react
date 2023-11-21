import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
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
  let [precipitation, setPrecipitation] = useState("1");
  function handleCityChange(response) {
    setCity(city);
    setTemp(Math.round(response.data.main.temp));
    setIcon(response.data.weather[0].icon);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setPrecipitation(response.data.rain ? response.data.rain["1h"] : 0);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=62231151ce343c4d68652e1617efc22f&units=metric`;
  axios.get(url).then(handleCityChange);

  return (
    <div class="container">
      <br />
      <div className="CurrentWeather">
        <div className="row">
          <div className="col-6">
            <h1>{city}</h1>
            <div className="clearfix weather-temperature">
              <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="Clear"
                id="cloud-icon"
              />
              <span id="current-temp">{temp}</span>
              <span className="small">&deg;C </span>
            </div>
          </div>
          <div className="col-6">
            <span className="corner">
              Weather <br />
              <span className="grey">
                <span className="dateChange" id="date-time">
                  {" "}
                  Tuesday, 1:00pm
                </span>
                <br />
                <span id="description">{des}</span>
              </span>
            </span>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            {" "}
            Humidity: <span id="humidity-input">{humidity}</span>%
          </div>
          <div className="col-4">
            Wind: <span id="wind-input">{wind} </span>km/h
          </div>
          <div className="col-4">
            Precipitation :<span id="precipitation-input">{precipitation}</span>
            %
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
