import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "f9d2aaa2ba94d7f625369864581a7430"; 
  const handleSearch = async () => {
    if (!city) 
    {
      alert("Enter the city name");
      return;
    }

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>🔍</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div className="weather-box">
          <h2>📍 {weather.name}</h2>
          <p>🌤 {weather.weather[0].description}</p>
          <p>🌡️ {Math.round(weather.main.temp)}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>💨 Wind: {weather.wind.speed} km/h</p>
        </div>
      )}
    </div>
  );
}

export default App;
