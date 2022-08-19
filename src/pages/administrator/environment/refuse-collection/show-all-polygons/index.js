import React, { useState } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	Autocomplete,
	DrawingManager,
	Polygon,
} from "@react-google-maps/api";
import { Container } from "../map/styles";

const ShowAllPolygons = (props) => {
	const google = window.google;
	const { center } = props;
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPSAPIKEY,
		libraries: ["drawing"],
	});
	const containerStyle = {
		width: "100%",
		height: "500px",
	};
	const options = {
		fillColor: "lightblue",
		fillOpacity: 1,
		strokeColor: "red",
		strokeOpacity: 1,
		strokeWeight: 2,
		clickable: false,
		draggable: false,
		editable: false,
		geodesic: false,
		zIndex: 1,
	};
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
			>
				{/*<Polygon paths={[polygonss]} options={options} />*/}
			</GoogleMap>
		</Container>
	) : (
		<></>
	);
};

export default ShowAllPolygons;
