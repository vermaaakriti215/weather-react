import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import Futureforecast from "./Futureforecast";

export default function Search(props) {
  let [city, setCity] = useState(props.city || "");
  const [weatherData, setData] = useState({ ready: false });

  function handleCityChange(response) {
    setData({
      ready: true,
      coordinates: response.data.coord,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconnumber: response.data.weather[0].icon,
      precipitation: response.data.rain ? response.data.rain["1h"] : 0,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = `ff1d9ea9376b5c27a82e04fc2b2abdbb`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleCityChange);
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <form className="searching" id="form-input" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Type a city..."
                autocomplete="off"
                autofocus
                className="form-control shadow-sm"
                id="city-input"
                onChange={handleCity}
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-dark"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <hr />
        <Futureforecast data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
