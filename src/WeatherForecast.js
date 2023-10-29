import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "f5e814a04eddfab1740f07bf0328eee2";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Sun</div>
          <WeatherIcon code="01d" size={36} color={"#323233"} />
          <div className="ForecastTemperatures">
            <span className="ForecastTemperatureMax">19°</span>
            <span className="ForecastTemperatureMin">14°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
