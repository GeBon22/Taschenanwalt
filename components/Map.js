import {GoogleMap, Marker, InfoWindow} from "@react-google-maps/api";
import {useEffect, React, useMemo, useContext} from "react";
import AppContext from "./AppContext";
import styled from "styled-components";
const containerStyle = {
  width: "75vw",
  height: "50vh",
  borderRadius: "10px",
  border: "1px solid white",
};

export default function Map() {
  const context = useContext(AppContext);

  const onLoadMap = map => {
    handleLoadLawyers(context.userLocation, map);
  };

  const options = useMemo(
    () => ({
      mapId: "terrain",
      disableDefaultUI: true,
      clickableIcons: false,
      fullscreenControl: true,
      gestureHandling: "greedy",
    }),
    []
  );

  const handleMarkerClick = id => {
    context.setClickedMarker(id);
  };

  const currLocationMarker = {
    url: "../assets/CurrentLocation.svg",
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      context.setStatus(
        "It seems your browser does not support geolocation. Switch to another browser."
      );
      status;
    } else {
      context.setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        position => {
          context.setStatus(null);
          context.setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          context.setStatus("Locating failed");
        }
      );
    }
  }, []);
  function handleLoadLawyers(location, map) {
    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      location: location,
      radius: 5000, // 5 km
      type: ["lawyer"],
    };
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        context.setLawyers(results);
      }
    });
  }

  if (!context.isLoaded) return "Loading map";
  return (
    <>
      {context.userLocation && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={context.userLocation}
          zoom={14}
          options={options}
          onLoad={onLoadMap}
          animation={window.google.maps.Animation.DROP}
        >
          <Marker position={context.userLocation} icon={currLocationMarker} />

          {context.lawyers.length > 0 &&
            context.lawyers.map(lawyer => (
              <Marker
                key={lawyer.place_id}
                position={lawyer.geometry.location}
                onClick={() => handleMarkerClick(lawyer.place_id)}
              />
            ))}
          {context.clickedMarker &&
            context.lawyers.map(lawyer => {
              if (lawyer.place_id === context.clickedMarker) {
                return (
                  <InfoWindow
                    position={lawyer.geometry.location}
                    key={lawyer.place_id}
                  >
                    <InfoBox>
                      <h3>{lawyer.name}</h3>
                      <p>
                        Rating: {lawyer.rating} ⭐ Anzahl der Bewertungen (
                        {lawyer.user_ratings_total})
                      </p>
                      <p>
                        Adresse: <br /> {lawyer.vicinity}
                      </p>
                    </InfoBox>
                  </InfoWindow>
                );
              }
            })}
        </GoogleMap>
      )}
    </>
  );
}

const InfoBox = styled.div`
  background-color: var(--primary-background-color);
  padding: 0.25em;
  text-align: center;
  font-weight: 300;
  box-shadow: var(--box-shadow);
`;
