import React, { useState } from "react";
import "./App.css";
import "./styles.css";
import CurrentWeather from "./CurrentWeather";
import Search from "./Search";
import Futureforecast from "./Futureforecast";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="content">
        <Search />
        <CurrentWeather city="Jhansi" />
        <hr />
        <br />
        <Futureforecast />
      </div>
      <div className="switch-container">
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="me">
        <a
          href="https://github.com/vermaaakriti215/weather-react"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          Open source code
        </a>
        , by Aakriti Verma
      </div>
    </div>
  );
}

export default App;
