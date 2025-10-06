import React from "react";
import { Box, Container } from "@mui/material";
import WeatherContainer from "./components/WeatherContainer";
import './styles/App.css'

function App() {
  return (
    <div className="appContainer">
      <WeatherContainer/>
    </div>
  );
}

export default App;
