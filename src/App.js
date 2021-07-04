import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [input, changeInput] = useState();
  const inputHandler = (e) => {
    console.log(e.target.value);
    changeInput(e.target.value);
  };

  const butttonHandler = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=ff19bff5841a489591e101607211304&q=${input}&aqi=no`
      )
      .then((data) => {
        console.log(data.data);
        setWeather(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=ff19bff5841a489591e101607211304&q=London&aqi=no"
      )
      .then((data) => {
        console.log(data.data);
        setWeather(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      {weather && (
        <div>
          <input onChange={inputHandler} type="text" />
          <button onClick={butttonHandler}>Search</button>
          <h1>{weather.location.name}</h1>
          <p>{weather.location.country}</p>
          <p>{weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="Condition" />
          <p>{weather.current.temp_c}C</p>
        </div>
      )}
    </div>
  );
}

export default App;
