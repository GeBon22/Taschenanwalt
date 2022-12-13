import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

function Map() {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: userLat, lng: userLng }}
    >
      <Marker position={{ lat: userLat, lng: userLng }} />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}

export default App;


// in the Wrapper I use '${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}' --> to not show the google maps api key
// that means I need to implement the process.env.REACT_APP_GOOGLE_MAPS_API_KEY file containing the key