import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../styles/WeatherContainer.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

function WeatherContainer() {
  const [cityName, setCityName] = useState("Lahore");
  const [weatherData, setWeatherData] = useState(null);
  const [hoursForcast, setHourForcast] = useState([]);
  const [daysForcast, setDaysForcast] = useState([]);

  const API_KEY = "63c7960e2af24fe2a62e376c3a2a9e91";

  async function fetchWeatherData() {
    const currWeatherResponse = await fetch(
      `https://api.weatherbit.io/v2.0/current?city=${cityName}&key=${API_KEY}`
    );
    const responseData = await currWeatherResponse.json();
    const currDaysForcast = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&days=6&key=${API_KEY}`
    );
    const responseDataDaysForcast = await currDaysForcast.json();
    const currHoursForcast = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/hourly?city=${cityName}&hours=48&key=${API_KEY}`
    );
    const responseDataHoursForcast = await currHoursForcast.json();

    setWeatherData(responseData.data[0]);
    // console.log(responseData.data[0]);

    setHourForcast(responseDataHoursForcast.data.slice(0,6));
    // console.log(responseDataHoursForcast.data.slice(0, 6));

    // console.log(responseDataDaysForcast.data.slice(0,6));
    setDaysForcast(responseDataDaysForcast.data.slice(0, 6))
  }

  useEffect(() => {
    fetchWeatherData();
  }, [cityName]);

  const handleCityChange = (newCity) => {
    setCityName(newCity);
  };

  return (
    <div className="weatherContainer">
      <LeftPanel
        weather={weatherData}
        onCityChange={handleCityChange}
        dayForcast={daysForcast}
      />
      <RightPanel hoursForcast={hoursForcast} />
    </div>
  );
}

export default WeatherContainer;
