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

	const [selected, setSelected] = React.useState({});

	const onSelect = (item) => {
		setSelected(item);
	};

	const locations = [
		{
			name: "Location 1",
			imgsrc: "/assets/img/default-tree.png",
			specie: "Pata de Vaca",
			age: 50,
			location: {
				lat: 41.3954,
				lng: 2.162,
			},
		},
		{
			name: "Location 2",
			imgsrc: "/assets/img/default-tree.png",
			specie: "Sibipiruna",
			age: 50,
			location: {
				lat: 41.3917,
				lng: 2.1649,
			},
		},
		{
			name: "Location 3",
			imgsrc: "/assets/img/default-tree.png",
			specie: "Manacá da Serra",
			age: 50,
			location: {
				lat: 41.3773,
				lng: 2.1585,
			},
		},
		{
			name: "Location 4",
			imgsrc: "/assets/img/default-tree.png",
			specie: "Quaresmeira ",
			age: 50,
			location: {
				lat: 41.3797,
				lng: 2.1682,
			},
		},
		{
			name: "Location 5",
			imgsrc: "/assets/img/default-tree.png",
			specie: "Sibipiruna ",
			age: 50,
			location: {
				lat: -22.131951,
				lng: -51.40933,
			},
		},
		//{ lat: -22.131951, lng: -51.40933 },
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
			{locations.map((location) => (
				<Marker
					key={createKey(location)}
					position={location.location}
					onClick={() => onSelect(location)}
					//icon={{ url: options.imagePath }}
					icon={{
						url:
							process.env.PUBLIC_URL +
							"/assets/img/tree-default-icon.png",
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
