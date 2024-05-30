import React, { useEffect, useState } from "react";


const GetCoordinates = () =>{
    const [city,setCity] = useState("")
    const APIkey=`c85e2d41169e22f5b2aeacd548d9d3e7`
    const [lat,setLat] = useState()
    const [lon,setLon] = useState() 

    useEffect(() => {
        if (city ) {
            const fetchCoordinates = async () => {
                try {
                    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIkey}`);
                    const data = await response.json();
                    if (data.length > 0) {
                        console.log(data)
                        setLat(data[0].lat);
                        setLon(data[0].lon);
                    } else {
                        console.error('No se encontraron resultados para la ciudad y el país proporcionados.');
                    }
                } catch (error) {
                    console.error('Error al buscar las coordenadas:', error);
                }
            };

            fetchCoordinates();
        }
    }, [city,  APIkey]);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };


    return (
        <div>
            
            <div>
                <label htmlFor="city">Ciudad:</label>
                <input
                    type="text"
                    id="city"
                    value={city.capitalize}
                    onChange={handleCityChange}
                />
            </div>
            <div>
                <button onClick={() => {
                    if (city ) {
                        setLat("");
                        setLon("");
                    } else {
                        alert('Por favor, ingresa  la ciudad ');
                    }
                }}>Buscar</button>
            </div>
            <div>
                <p>Latitud: {lat}</p>
                <p>Longitud: {lon}</p>
            </div>
        </div>
    );
};




export default GetCoordinates