import React, { useState } from 'react';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const apiKey = 'c85e2d41169e22f5b2aeacd548d9d3e7'; // Reemplaza con tu clave API de OpenWeatherMap

    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error('Ciudad no encontrada');
            }
            const data = await response.json();
            setWeather(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setWeather(null);
        }
    };

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearchClick = () => {
        fetchWeather();
    };

    return (
        <div className="weather-container">
            <input
                type="text"
                value={city}
                onChange={handleInputChange}
                placeholder="Ingresa el nombre de la ciudad"
            />
            <button onClick={handleSearchClick}>Buscar Clima</button>

            {error && <p>{error}</p>}
            {weather && (
                <div className="weather-info">
                    <h2>{weather.name}</h2>
                    <p>Temperatura: {weather.main.temp}°C</p>
                    <p>Humedad: {weather.main.humidity}%</p>
                    <p>Condiciones: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;