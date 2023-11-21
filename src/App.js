import "./App.css";
import "./styles.css";
import CurrentWeather from "./CurrentWeather";
import Search from "./Search";
import Futureforecast from "./Futureforecast";
function App() {
  return (
    <div className="App">
      <div className="content">
        <Search />
        <CurrentWeather city="Jhansi" />
        <Futureforecast />
      </div>
      <div className="me">
        <a
          href="https://github.com/vermaaakriti215/weather-project"
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
