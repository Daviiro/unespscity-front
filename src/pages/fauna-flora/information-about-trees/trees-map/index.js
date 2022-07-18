import * as React from "react";
import { fetchLatLong } from "../../../../services/GoogleMaps";
import { fetchCityForID } from "../../../../services/IBGE";
import {
	GoogleMap,
	useJsApiLoader,
	LoadScript,
	MarkerClusterer,
	Marker,
} from "@react-google-maps/api";
import LocalContext from "../../../user-location/Context";

const TreesMap = () => {
	const [center, setCenter] = React.useState({ lat: 0, lng: 0 });
	const [cityName, setCityName] = React.useState("");
	const [formValues, setFormValues] = React.useContext(LocalContext);

	fetchCityForID(formValues.city).then((city) => {
		setCityName(city);
	});

	React.useEffect(() => {
		fetchCityForID(formValues.city).then((city) => {
			setCityName(city);
		});
		console.log(cityName);
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
	const [map, setMap] = React.useState(null);
	const options = {
		imagePath: "https://i.stack.imgur.com/ILTQq.png",
	};
	const onLoad = (circle) => {
		console.log("Circle onLoad circle: ", circle);
	};
	const onUnmount = (circle) => {
		console.log("Circle onUnmount circle: ", circle);
	};

	const locations = [
		{ lat: -33.718234, lng: 150.363181 },
		{ lat: -33.727111, lng: 150.371124 },
		{ lat: -33.848588, lng: 151.209834 },
		{ lat: -33.851702, lng: 151.216968 },
		{ lat: -34.671264, lng: 150.863657 },
		{ lat: -35.304724, lng: 148.662905 },
		{ lat: -36.817685, lng: 175.699196 },
		{ lat: -36.828611, lng: 175.790222 },
		{ lat: -37.75, lng: 145.116667 },
		{ lat: -37.759859, lng: 145.128708 },
		{ lat: -37.765015, lng: 145.133858 },
		{ lat: -37.770104, lng: 145.143299 },
		{ lat: -37.7737, lng: 145.145187 },
		{ lat: -37.774785, lng: 145.137978 },
		{ lat: -37.819616, lng: 144.968119 },
		{ lat: -38.330766, lng: 144.695692 },
		{ lat: -39.927193, lng: 175.053218 },
		{ lat: -41.330162, lng: 174.865694 },
		{ lat: -42.734358, lng: 147.439506 },
		{ lat: -42.734358, lng: 147.501315 },
		{ lat: -42.735258, lng: 147.438 },
		{ lat: -22.131951, lng: -51.40933 },
	];

	function createKey(location) {
		return location.lat + location.lng;
	}

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			radius={100}
			zoom={13}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			<MarkerClusterer options={options}>
				{(clusterer) =>
					locations.map((location) => (
						<Marker
							key={createKey(location)}
							position={location}
							clusterer={clusterer}
						/>
					))
				}
			</MarkerClusterer>
		</GoogleMap>
	) : (
		<></>
	);
};

export default React.memo(TreesMap);
