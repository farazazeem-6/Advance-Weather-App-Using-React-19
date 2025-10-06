import { Box } from "@mui/material";
import React from "react";
import "../styles/WeatherContainer.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

function WeatherContainer() {
  return (
    <div className="weatherContainer">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default WeatherContainer;
