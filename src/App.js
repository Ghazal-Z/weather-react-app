import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://ghazal-ziadlou-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Ghazal Ziadlou
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Ghazal-Z/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://soft-arithmetic-1670f3.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
