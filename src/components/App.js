// App.js
import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  // State to store weather data
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  // Setting weather data when the component loads
  useEffect(() => {
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      <h1>Weather Report</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;

