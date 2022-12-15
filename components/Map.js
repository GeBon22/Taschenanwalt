import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect, useState, React } from "react";

const containerStyle = {
  width: '75vw',
  height: '50vh',
  borderRadius: '10px',
};

export default function Map() {
  const [status, setStatus] = useState(null);
  const [center, setCenter] = useState(null);
  const ApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

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
        },
        () => {
          setStatus("Locating failed");
        }
      );
    }
  }, []);

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
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </LoadScript>
      </>
    );
  }
}
