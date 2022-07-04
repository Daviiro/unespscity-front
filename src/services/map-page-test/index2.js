import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: "75vw",
  height: "75vh"
};

let Lat = 0, Lng = 0;

navigator.geolocation.getCurrentPosition((location) => {
  Lat = location.coords.latitude;  //-23.5557714 (coordenadas do Inova, como exemplo)
  Lng = location.coords.longitude; //-46.6395571
});

function MapComponent() {

  const center = {  // calibrando a Latitude e Longitude //
    lat: (Lat + 1.4217894),
    lng: (Lng - 4.8080857)
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBQ7EzutsOQVslr8TE5Zh2s5XKK50Q4Oo8"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    console.log(center);
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle = {containerStyle}
        zoom = {0}
        onLoad = {onLoad}
        center = {center}
        onUnmount = {onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapComponent);