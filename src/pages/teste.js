import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const Teste = () => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyBQ7EzutsOQVslr8TE5Zh2s5XKK50Q4Oo8",
	});
	const containerStyle = {
		width: "400px",
		height: "400px",
	};

	const center = {
		lat: -3.745,
		lng: -38.523,
	};

	const [map, setMap] = React.useState(null);

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);
		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	return (
		<div>
			{isLoaded ? (
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={10}
					onLoad={onLoad}
					onUnmount={onUnmount}
				>
					{/* Child components, such as markers, info windows, etc. */}
					<></>
				</GoogleMap>
			) : (
				<></>
			)}
		</div>
	);
};
export default Teste;
