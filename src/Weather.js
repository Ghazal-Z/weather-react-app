import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
    });
  }
  function search() {
    const apiKey = "85bbd3d16a2dfe0ecf253c7ae1e8fe03";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              ></input>
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-secondary w-100"
              ></input>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <hr />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#00ab9d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
}
