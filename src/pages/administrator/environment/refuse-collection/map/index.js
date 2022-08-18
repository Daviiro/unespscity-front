import React, { useState } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	Autocomplete,
} from "@react-google-maps/api";
import { Container } from "./styles";

const Map = (props) => {
	const { center } = props;
	const containerStyle = {
		width: "100%",
		height: "500px",
	};
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPSAPIKEY,
		libraries: ["places"],
	});

	const [map, setMap] = useState(null);

	return isLoaded ? (
		<Container>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				options={{
					zoomControl: false,
					streetViewControl: false,
					mapTypeControl: false,
					fullscreenControl: false,
				}}
				radius={100}
				zoom={13}
				onLoad={(map) => setMap(map)}
			>
				<Marker position={center} />
			</GoogleMap>
		</Container>
	) : (
		<></>
	);
};

export default Map;
