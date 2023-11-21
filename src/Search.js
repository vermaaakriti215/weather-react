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
    <div class="container">
      <form class="searching" id="form-input" onSubmit={handleSubmit}>
        <div class="row">
          <div class="col-6">
            <input
              type="search"
              placeholder="Type a city..."
              autocomplete="off"
              autofocus="off"
              class="form-control shadow-sm"
              id="city-input"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search"
              class="form-control btn btn-dark"
            />
          </div>
          <div class="col-3">
            <button type="button" id="current-loc">
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
