import React, { useState, useContext, useEffect } from "react";
import {
	GoogleMap,
	DirectionsRenderer,
	useJsApiLoader,
} from "@react-google-maps/api";
import LocalContext from "../../../user-location/Context";
import { fetchLatLong } from "../../../../services/GoogleMaps";
import { fetchCityForID } from "../../../../services/IBGE";

const Map = (props) => {
	const [center, setCenter] = useState({ lat: 0, lng: 0 });
	const [cityName, setCityName] = useState("");
	const [formValues, setFormValues] = useContext(LocalContext);
	fetchCityForID(formValues.city).then((city) => {
		setCityName(city);
	});
	useEffect(() => {
		fetchCityForID(formValues.city).then((city) => {
			setCityName(city);
		});
		fetchLatLong(cityName).then((data) => {
			setCenter({
				lat: data.results[0].geometry.location.lat,
				lng: data.results[0].geometry.location.lng,
			});
		});
	}, [cityName]);
	const containerStyle = {
		width: "100%",
		height: "500px",
	};
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyBQ7EzutsOQVslr8TE5Zh2s5XKK50Q4Oo8",
	});

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			radius={100}
			zoom={13}
		>
			{props.routes.map((route) => (
				<h1>tste</h1>
			))}
		</GoogleMap>
	) : (
		<></>
	);
};

export default Map;
