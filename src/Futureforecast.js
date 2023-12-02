import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ForecastDay from "./ForecastDay";

export default function Futureforecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Futureforecast">
        <div className="weather-forecast">
          <div className="row">
            <div className="col-2">
              <ForecastDay data={forecast[1]} />
            </div>
            <div className="col-2">
              <ForecastDay data={forecast[2]} />
            </div>
            <div className="col-2">
              <ForecastDay data={forecast[3]} />
            </div>
            <div className="col-2">
              <ForecastDay data={forecast[4]} />
            </div>
            <div className="col-2">
              <ForecastDay data={forecast[5]} />
            </div>
            <div className="col-2">
              <ForecastDay data={forecast[6]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `ff1d9ea9376b5c27a82e04fc2b2abdbb`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);

    return null;
  }
}
