import * as React from "react";
import { fetchLatLong } from "../../../../services/GoogleMaps";
import { fetchCityForID } from "../../../../services/IBGE";
import {
	GoogleMap,
	useJsApiLoader,
	LoadScript,
	MarkerClusterer,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";
import LocalContext from "../../../user-location/Context";
import { InfoWindowContainer } from "./styles";
import { Typography } from "@mui/material";
import { useEffect } from "react";

const TreesMap = (props) => {
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

	const [selected, setSelected] = React.useState({});

	const onSelect = (item) => {
		setSelected(item);
	};

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
			onClick={(coords) => {
				//handleCoordChange(coords);
				props.onMapClick({
					lat: coords.latLng.lat(),
					lng: coords.latLng.lng(),
				});
				console.log("Coordenadas clickadas: " + coords.latLng);
			}}
		>
			{props.locations.map((location) => (
				<Marker
					key={location.id}
					position={location.location}
					onClick={() => onSelect(location)}
					//icon={{ url: options.imagePath }}
					icon={{
						url: process.env.PUBLIC_URL + props.icon,
					}}
				/>
			))}
			{selected.location && (
				<InfoWindow
					position={selected.location}
					clickable={true}
					onCloseClick={() => setSelected({})}
				>
					<InfoWindowContainer>
						<Typography variant="subtitle2">
							Titulo: {selected.name}
						</Typography>
						<img
							src={process.env.PUBLIC_URL + selected.imgsrc}
							width="77"
							height="77"
						/>

						<Typography variant="body2">
							Espécie: {selected.specie}
						</Typography>
						<Typography variant="body2">
							Idade: {selected.age} anos
						</Typography>
					</InfoWindowContainer>
				</InfoWindow>
			)}
		</GoogleMap>
	) : (
		<></>
	);
};

export default React.memo(TreesMap);
