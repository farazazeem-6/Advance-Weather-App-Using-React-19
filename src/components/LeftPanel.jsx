import React, { useState } from "react";
import "../styles/LeftPanel.css";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

function LeftPanel({ weather, onCityChange, dayForcast }) {
  const [inputValue, setInputValue] = useState("");

const handleSearch = () => {
  if (inputValue.trim()) {
    onCityChange(inputValue);
    setInputValue("");
  }
};

const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
};

  if (!weather || Object.keys(weather).length === 0) {
    return <div className="left-panel">Loading...</div>;
  }
  if (!dayForcast || Object.keys(dayForcast).length === 0) {
    return <div className="left-panel">Loading...</div>;
  }
  console.log(dayForcast);

  function getShortDayName(dateString) {
    const cleanDate = dateString.split(":")[0];
    const date = new Date(cleanDate);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  }
  function extractDate(datetimeString) {
    return datetimeString.split(" ")[0];
  }

  return (
    <div className="left-panel">
      <div className="header">
        <p className="city-name">{weather.city_name}</p>
        <p className="date">{extractDate(weather.ob_time)}</p>
        <div className="search-bar">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Enter City"
          />
          <button onClick={handleSearch} className="search-btn">Search</button>
        </div>
      </div>
      <div className="left-panel-body">
        <div className="temp-section">
          <p className="act-temp">{weather.app_temp}</p>
          <p className="weather-type">{weather.weather.description}</p>
        </div>
        <div className="extra-detail-section">
          <div className="wind-detail">
            <span>
              <AirIcon />
            </span>
            <p className="wind">{weather.wind_spd} mph</p>
          </div>
          <div className="moisture">
            <span>
              <WaterDropIcon />
            </span>
            <p className="moisture-percentage">{weather.rh} %</p>
          </div>
        </div>
      </div>
      <div className="days-forcast">
        {dayForcast.map((item, index) => (
          <div className="day-weather-detail" key={index}>
            <div className="day-name">{getShortDayName(item.datetime)}</div>
            <div className="day-temp">{item.app_min_temp}°</div>
            <div className="day-type">{item.weather.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftPanel;
