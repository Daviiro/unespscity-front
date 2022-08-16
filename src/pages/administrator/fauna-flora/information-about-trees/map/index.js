import * as React from "react";
import { fetchLatLong } from "../../../../../services/GoogleMaps";
import { fetchCityForID } from "../../../../../services/IBGE";
import {
	GoogleMap,
	useJsApiLoader,
	MarkerF,
	InfoWindow,
} from "@react-google-maps/api";
import LocalContext from "../../../../user-location/Context";
import { InfoWindowContainer } from "./styles";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const TreesMap = (props) => {
	const [center, setCenter] = React.useState({ lat: 0, lng: 0 });
	const [cityName, setCityName] = React.useState("");
	const [formValues, setFormValues] = React.useContext(LocalContext);
	const { handleDelete } = props;

	fetchCityForID(formValues.city).then((city) => {
		setCityName(city);
	}); //API DO IBGE, SEM PROBLEMAS DE COBRANCA

	React.useEffect(() => {
		if (formValues.city !== undefined) {
			fetchCityForID(formValues.city).then((city) => {
				setCityName(city);
			});
			if (cityName != "") {
				fetchLatLong(cityName).then((data) => {
					setCenter({
						lat: data.results[0].geometry.location.lat,
						lng: data.results[0].geometry.location.lng,
					});
				});
			}
		}
	}, [cityName]); //DENTRO DESTE TEM A API DO GEOCODE, DE JEITO NENHUM CRIE UM LOOP NESTE USEEFFECT

	const containerStyle = {
		width: "100%",
		height: "500px",
	};
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPSAPIKEY,
	});
	const [map, setMap] = React.useState(null);
	const options = {
		imagePath: "https://i.stack.imgur.com/ILTQq.png",
	};

	const [selected, setSelected] = React.useState({});

	const onSelect = (item) => {
		setSelected(item);
	};

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			radius={100}
			zoom={13}
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
				<MarkerF
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
						<Button
							fulldwith
							onClick={() => handleDelete(selected)}
						>
							Deletar
						</Button>
					</InfoWindowContainer>
				</InfoWindow>
			)}
		</GoogleMap>
	) : (
		<></>
	);
};

export default React.memo(TreesMap);
