import "../styles/RightPanel.css";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

function RightPanel({ hourlyForecast, weather, loading }) {
  if (loading && !weather) {
    return <div className="right-panel">Loading...</div>;
  }

  if (!weather) {
    return <div className="right-panel">No weather data available.</div>;
  }

  function getHourFromTimestamp(ts) {
    const date = new Date(ts * 1000);
    return String(date.getHours()).padStart(2, "0");
  }

  return (
    <div className="right-panel">
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
      <h6 style={{ fontSize: "16px" }}>Hourly Forecast</h6>
      <div className="hourly-forecast">
        {hourlyForecast.length ? (
          hourlyForecast.map((item) => (
            <div className="day-weather-detail" key={item.ts}>
              <div className="day-name">{getHourFromTimestamp(item.ts)}:00</div>
              <div className="day-temp">{item.app_temp}°</div>
              <div className="day-type">{item.weather.description}</div>
            </div>
          ))
        ) : (
          <div className="loading-state">No hourly forecast available.</div>
        )}
      </div>
    </div>
  );
}

export default RightPanel;
