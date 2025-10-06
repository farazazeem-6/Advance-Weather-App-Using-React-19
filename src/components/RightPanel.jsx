import React from "react";
import "../styles/RightPanel.css";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

function RightPanel({ hoursForcast, weather }) {
  if (!hoursForcast || Object.keys(hoursForcast).length === 0) {
    return <div className="right-panel">Loading...</div>;
  }
  if (!weather || Object.keys(weather).length === 0) {
    return <div className="right-panel">Loading...</div>;
  }
  function extractDate(datetimeString) {
    return datetimeString.split(" ")[0];
  }
  function getAmOrPmFromTimestamp(ts) {
    const date = new Date(ts * 1000);
    const hours = date.getHours();
    return hours >= 12 ? "PM" : "AM";
  }

  function getHourFromTimestamp(ts) {
    const date = new Date(ts * 1000);
    return date.getHours();
  }

  return (
    <div className="right-panel">
      {/* <p className="greet">Good Morning</p>
      <p className="time">{getAmOrPmFromTimestamp(hoursForcast[0].ts)}</p> */}

      <div className="right-panel-body">
        <div className="temp-right-section">
          <p className="act-right-temp">{weather.app_temp}°</p>
        </div>
        <div className="extra-detail-right-section">
          <div className="wind-detail-right">
            <span>
              <AirIcon fontSize="small" />
            </span>
            <p className="wind-right">{weather.wind_spd} mph</p>
          </div>
          <div className="moisture-right">
            <span>
              <WaterDropIcon fontSize="small" />
            </span>
            <p className="moisture-percentage-right">{weather.rh} %</p>
          </div>
        </div>
      </div>
      <div className="discryption">
        <p className="discrypt-text">Feels like {weather.app_temp}°</p>
        <p className="right-weather-type">{weather.weather.description}</p>
      </div>
      <h6 style={{ fontSize: "16px" }}>Hourly Forcast</h6>
      <div className="hourly-forcast">
        {hoursForcast.map((item, index) => (
          <div className="day-weather-detail">
            <div className="day-name">{getHourFromTimestamp(item.ts)}:00</div>
            <div className="day-temp">{item.app_temp}°</div>
            <div className="day-type">{item.weather.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightPanel;
