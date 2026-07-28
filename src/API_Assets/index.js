export const BASE_URL = "https://api.weatherbit.io/v2.0/";

export const LatLongApi =
  "https://nominatim.openstreetmap.org/search?city=Faisalabad&format=json";

// Weatherbit API

export const currentWeather = `${BASE_URL}current?city=Seattle&key=63c7960e2af24fe2a62e376c3a2a9e91`;
export const hourlyForecast = `${BASE_URL}forecast/hourly?city=Seattle&hours=48&key=63c7960e2af24fe2a62e376c3a2a9e91`;
export const dailyForecast = `${BASE_URL}forecast/daily?city=Seattle&days=6&key=63c7960e2af24fe2a62e376c3a2a9e91`;
