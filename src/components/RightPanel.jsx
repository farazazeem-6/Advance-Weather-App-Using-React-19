import React from "react";
import "../styles/RightPanel.css";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

function RightPanel() {
  return (
    <div className="right-panel">
      <p className="greet">Good Morning</p>
      <p className="time">12:27 PM</p>

      <div className="right-panel-body">
        <div className="temp-right-section">
          <p className="act-right-temp">20°</p>
        </div>
        <div className="extra-detail-right-section">
          <div className="wind-detail-right">
            <span>
              <AirIcon fontSize="small" />
            </span>
            <p className="wind-right">6.1 mph</p>
          </div>
          <div className="moisture-right">
            <span>
              <WaterDropIcon fontSize="small" />
            </span>
            <p className="moisture-percentage-right">90 %</p>
          </div>
        </div>
      </div>
      <div className="discryption">
        <p className="discrypt-text">Feels like 19°</p>
        <p className="right-weather-type">Cloudy</p>
      </div>
      <div className="hourly-forcast">
        <div className="day-weather-detail">
          <div className="day-name">Monday</div>
          <div className="day-temp">20°</div>
          <div className="day-type">Rainy</div>
        </div>
        <div className="day-weather-detail">
          <div className="day-name">Monday</div>
          <div className="day-temp">20°</div>
          <div className="day-type">Rainy</div>
        </div>
        <div className="day-weather-detail">
          <div className="day-name">Monday</div>
          <div className="day-temp">20°</div>
          <div className="day-type">Rainy</div>
        </div>
        <div className="day-weather-detail">
          <div className="day-name">Monday</div>
          <div className="day-temp">20°</div>
          <div className="day-type">Rainy</div>
        </div>
        <div className="day-weather-detail">
          <div className="day-name">Monday</div>
          <div className="day-temp">20°</div>
          <div className="day-type">Rainy</div>
        </div>
        <div className="day-weather-detail">
          <div className="day-name">Monday</div>
          <div className="day-temp">20°</div>
          <div className="day-type">Rainy</div>
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
