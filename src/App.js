import React, { useState } from "react";
import "./styles.css";
import Search from "./Search";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="content">
        <Search city="Jhansi" />
        <hr />
      </div>

      <div className="switch-container">
        <i className="fa-solid fa-circle-half-stroke" id="display-mode"></i>
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
