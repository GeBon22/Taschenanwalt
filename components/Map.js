import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';
import { useEffect, useState, React } from "react";

const containerStyle = {
  width: '75vw',
  height: '50vh',
  borderRadius: '10px',
};

export default function Map() {
  const [status, setStatus] = useState(null);
  const [center, setCenter] = useState(null);
  const [lawyers, setLawyers] = useState([]);
  const ApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: ApiKey,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("It seems your browser does not support geolocation. Switch to another browser.");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        position => {
          setStatus(null);
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          loadLawyers(position.coords.latitude, position.coords.longitude);
        },
        () => {
          setStatus("Locating failed");
        }
      );
    }
  }, []);

  function loadLawyers(lat, lng) {
    // Load the lawyers using the Google Maps Places function
    if (isLoaded && !loadError) {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      const request = {
        location: new window.google.maps.LatLng(lat, lng),
        radius: 50000, // 50 km
        type: ['lawyer'],
      };
      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setLawyers(results.map(result => ({
            name: result.name,
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng(),
          })));
        }
      });
    }
  }

  if (status === "Locating failed") {
    return <h3>{status}</h3>;
  } else {
    return (
      <>
        {status === "Locating..." && <h3>Loading...</h3>}
        <LoadScript
          googleMapsApiKey={ApiKey}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            <Marker position={center} />

            {lawyers.map(lawyer => (
            <Marker key={lawyer.name} position={{ lat: lawyer.lat, lng: lawyer.lng }} />
            ))}



            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </LoadScript>
      </>
    );
  }
}
