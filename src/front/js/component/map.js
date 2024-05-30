import React, { useState } from 'react';

const Map = () => {
    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleSearch = () => {
        // Hacer la solicitud a la API de Google Maps
        const apiKey = 'AIzaSyC_ohBk2Zlu4SnUzA6Dc2EFYmNRLAPexAs';
        const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.results.length > 0) {
                    const location = data.results[0].geometry.location;
                    setLatitude(location.lat);
                    setLongitude(location.lng);
                } else {
                    alert('No se encontraron resultados para la dirección proporcionada.');
                }
            })
            .catch(error => console.error('Error al buscar la dirección:', error));
    };

    return (
        <div>
            <h2>Buscar Dirección</h2>
            <input
                type="text"
                placeholder="Ingresa una dirección"
                value={address}
                onChange={handleAddressChange}
            />
            <button onClick={handleSearch}>Buscar</button>
            <div>
                <label>Latitud:</label>
                <input type="text" value={latitude} disabled />
            </div>
            <div>
                <label>Longitud:</label>
                <input type="text" value={longitude} disabled />
            </div>
        </div>
    );
};

export default Map;
