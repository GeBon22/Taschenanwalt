import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import {Jost} from "@next/font/google";
import {useState} from "react";
import AppContext from "../components/AppContext";
import {useLoadScript} from "@react-google-maps/api";

const jost = Jost({
  subsets: ["latin"],
  weight: "300",
});

const libraries = ["places", "geometry"];

function MyApp({Component, pageProps}) {
  const [status, setStatus] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [clickedMarker, setClickedMarker] = useState(null);
  const [lawyers, setLawyers] = useState([]);
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  return (
    <AppContext.Provider
      value={{
        status,
        setStatus,
        userLocation,
        setUserLocation,
        clickedMarker,
        setClickedMarker,
        lawyers,
        setLawyers,
        isLoaded,
      }}
    >
      <main className={jost.className}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
        <Navigation />
      </main>
    </AppContext.Provider>
  );
}

export default MyApp;
