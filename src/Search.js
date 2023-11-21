import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  function handleSubmit(event) {
    event.preventDefault();
    let cityName = event.target.city.value;
    displayCity(cityName);
  }
  function displayCity(cityName) {
    const cityDisplay = document.querySelector("#city-display");
    cityDisplay.textContent = cityName;
  }
  return (
    <div className="container">
      <form className="searching" id="form-input" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city..."
              autocomplete="off"
              autofocus="off"
              className="form-control shadow-sm"
              id="city-input"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-dark"
            />
          </div>
          <div className="col-3">
            <button type="button" className="form-control btn btn-dark">
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
