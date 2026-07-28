import { useState, useEffect } from "react";
import "../styles/WeatherContainer.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const API_KEY = "63c7960e2af24fe2a62e376c3a2a9e91";
const BASE_URL = "https://api.weatherbit.io/v2.0";

function WeatherContainer() {
  const [cityName, setCityName] = useState("Lahore");
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchWeatherData() {
      setLoading(true);
      setError(null);

      try {
        const currentUrl = `${BASE_URL}/current?city=${encodeURIComponent(cityName)}&key=${API_KEY}`;
        const dailyUrl = `${BASE_URL}/forecast/daily?city=${encodeURIComponent(cityName)}&days=6&key=${API_KEY}`;
        const hourlyUrl = `${BASE_URL}/forecast/hourly?city=${encodeURIComponent(cityName)}&hours=48&key=${API_KEY}`;

        const [currentRes, dailyRes, hourlyRes] = await Promise.all([
          fetch(currentUrl, { signal: controller.signal }),
          fetch(dailyUrl, { signal: controller.signal }),
          fetch(hourlyUrl, { signal: controller.signal }),
        ]);

        if (!currentRes.ok || !dailyRes.ok || !hourlyRes.ok) {
          throw new Error(`Unable to load weather for ${cityName}.`);
        }

        const [currentData, dailyData, hourlyData] = await Promise.all([
          currentRes.json(),
          dailyRes.json(),
          hourlyRes.json(),
        ]);

        setWeatherData(currentData.data?.[0] || null);
        setDailyForecast(dailyData.data?.slice(0, 6) || []);
        setHourlyForecast(hourlyData.data?.slice(0, 6) || []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong while fetching weather.");
          setWeatherData(null);
          setDailyForecast([]);
          setHourlyForecast([]);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchWeatherData();

    return () => controller.abort();
  }, [cityName]);

  const handleCityChange = (newCity) => {
    if (!newCity?.trim()) return;
    setCityName(newCity.trim());
  };

  return (
    <div className="weatherContainer">
      {error ? <div className="weather-error">{error}</div> : null}
      <LeftPanel
        weather={weatherData}
        onCityChange={handleCityChange}
        dailyForecast={dailyForecast}
        loading={loading}
      />
      <RightPanel
        hourlyForecast={hourlyForecast}
        weather={weatherData}
        loading={loading}
      />
    </div>
  );
}

export default WeatherContainer;
