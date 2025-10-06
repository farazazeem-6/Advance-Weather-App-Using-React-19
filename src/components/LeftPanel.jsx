import React from "react";
import "../styles/LeftPanel.css";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

function LeftPanel() {
  return (
    <div className="left-panel">
      <div className="header">
        <p className="city-name">Multan</p>
        <p className="date">06-09-2025</p>
        <div className="search-bar">
          <input type="text" placeholder="Enter City" />
          <button className="search-btn">Search</button>
        </div>
      </div>
      <div className="left-panel-body">
        <div className="temp-section">
          <p className="act-temp">20°</p>
          <p className="weather-type">Cloudy</p>
        </div>
        <div className="extra-detail-section">
          <div className="wind-detail">
            <span>
              <AirIcon />
            </span>
            <p className="wind">6.1 mph</p>
          </div>
          <div className="moisture">
            <span>
              <WaterDropIcon />
            </span>
            <p className="moisture-percentage">90 %</p>
          </div>
        </div>
      </div>
      <div className="days-forcast">
        
      </div>
    </div>
  );
}

export default LeftPanel;
