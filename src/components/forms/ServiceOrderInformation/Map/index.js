import * as React from "react";
import { fetchLocation } from "../../../../services/GoogleMaps";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Circle } from "@react-google-maps/api";
const Map = () => {
	const containerStyle = {
		width: "400px",
		height: "400px",
	};

	const [center, setCenter] = React.useState({ lat: 0, lng: 0 });

	navigator.geolocation.getCurrentPosition((location) => {
		fetchLocation(location.coords.latitude, location.coords.longitude).then(
			(data) => {
				console.log("localizacao abaixo");
				console.log(data);
			}
		);
		setCenter({
			lat: location.coords.latitude,
			lng: location.coords.longitude,
		});
	});

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyBQ7EzutsOQVslr8TE5Zh2s5XKK50Q4Oo8",
	});

	const [map, setMap] = React.useState(null);

	const options = {
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35,
		clickable: false,
		draggable: false,
		editable: false,
		visible: true,
		radius: 300,
		zIndex: 1,
	};

	const onLoad = (circle) => {
		console.log("Circle onLoad circle: ", circle);
	};

	const onUnmount = (circle) => {
		console.log("Circle onUnmount circle: ", circle);
	};

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			radius={100}
			zoom={15}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			<Circle
				// optional
				onLoad={onLoad}
				// optional
				onUnmount={onUnmount}
				// required
				center={center}
				// required
				options={options}
			/>
			<></>
		</GoogleMap>
	) : (
		<></>
	);
};

export default Map;
