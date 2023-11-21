import React, { useState } from "react";
import axios from "axios";
export default function Weather() {
  let [detail, setDetail] = useState("");
  function getUpdate(response) {
    let temp = Math.round(response.data.main.temp);
    let des = response.data.weather[0].description;
    let humid = response.data.main.humidity;
    let wind = response.data.wind.speed;
    let icon = response.data.weather[0].icon;
    setDetail(
      <div className="row">
        <div className="col-6">
          <h2>
            Paris
            <br />
            {temp}°C
          </h2>
        </div>
        <div className="col-6">
          <h3>{des}</h3>
          <br />
          <h4>Tuesday, 13:37</h4>
        </div>
        <h1>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Clear"
            id="cloud-icon"
          />
        </h1>
        <div className="row">
          <div className="col-6">Wind : {wind} km/h</div>
          <div className="col-6">Humidity : {humid} %</div>
        </div>
      </div>
    );
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=&appid=25fad9f7e87157d33dde0f82ab269ee8&units=metric`;
  axios.get(url).then(getUpdate);

  return (
    <div className="Weather">
      <form>
        <input type="search" />
        <input type="submit" />
      </form>
      {detail}
    </div>
  );
}
