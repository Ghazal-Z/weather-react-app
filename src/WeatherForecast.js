import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
