import * as React from "react";
import { fetchLatLong } from "../../../../services/GoogleMaps";
import { fetchCityForID } from "../../../../services/IBGE";
import {
	GoogleMap,
	useJsApiLoader,
	MarkerF,
} from "@react-google-maps/api";
import LocalContext from "../../../user-location/Context";

const DengueMap = (props) => {
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
	/*const [map, setMap] = React.useState(null);
	const options = {
		imagePath: "https://i.stack.imgur.com/ILTQq.png",
	};*/

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			radius={100}
			zoom={14}
			zoomControl={false}
			scrollwheel={false}
		>
			{props.locations.map((location) => (
				<MarkerF
					key={location.id}
					position={location.location}
					icon={{
						url: process.env.PUBLIC_URL + props.icon,
					}}
				/>
			))}
		</GoogleMap>
	) : (
		<></>
	);
};

export default React.memo(DengueMap);