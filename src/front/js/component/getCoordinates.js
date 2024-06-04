import React, { useEffect, useState } from "react";

const GetCoordinates = ({ orderID, onCityChange }) => {
    const [city, setCity] = useState(() => {
        const storedCity = localStorage.getItem(`city_${orderID}`);
        return storedCity ? storedCity : "";
    });
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const APIkey = "c85e2d41169e22f5b2aeacd548d9d3e7";

    useEffect(() => {
        if (city) {
            const fetchCoordinates = async () => {
                try {
                    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIkey}`);
                    const data = await response.json();
                    if (data.length > 0) {
                        console.log(data);
                        setLat(data[0].lat);
                        setLon(data[0].lon);
                    } else {
                        console.error('No se encontraron resultados para la ciudad proporcionada.');
                    }
                } catch (error) {
                    console.error('Error al buscar las coordenadas:', error);
                }
            };

            fetchCoordinates();
        }
    }, [city, APIkey, orderID]);

    const handleCityChange = (e) => {
        const newCity = e.target.value;
        setCity(newCity);
        localStorage.setItem(`city_${orderID}`, newCity);
        onCityChange(orderID, newCity);
    };

    return (
        <div>
            <span>
                <b>CIUDAD</b>
                <p className="card-city">{city}</p>
            </span>
            <div>
                <label htmlFor={`city_${orderID}`}>Ciudad:</label>
                <input
                    type="text"
                    id={`city_${orderID}`}
                    value={city}
                    onChange={handleCityChange}
                />
            </div>
            <div>
                <p>Latitud: {lat}</p>
                <p>Longitud: {lon}</p>
            </div>
        </div>
    );
};

export default GetCoordinates;
