import {
	GoogleMap,
	TrafficLayer,
	Marker,
	useJsApiLoader,
} from "@react-google-maps/api";
import LocalContext from "../../../user-location/Context";
import { useContext, useState, useEffect } from "react";
import { fetchCityForID } from "../../../../services/IBGE";
import { fetchLatLong } from "../../../../services/GoogleMaps";
import { Container } from "./styles";

const Maps = (props) => {
	//const { center } = props;
	const [center, setCenter] = useState({ lat: 0, lng: 0 });
	const google = window.google;
	const [cityName, setCityName] = useState("");
	const [formValues, setFormValues] = useContext(LocalContext);
	const containerStyle = {
		width: "100%",
		height: "500px",
	};
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPSAPIKEY,
	});
	fetchCityForID(formValues.city).then((city) => {
		setCityName(city);
	}); //API DO IBGE, SEM PROBLEMAS DE COBRANCA
	useEffect(() => {
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
	return (
		<Container>
			{isLoaded ? (
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					radius={100}
					zoom={13}
				>
					<TrafficLayer autoUpdate />
				</GoogleMap>
			) : (
				<></>
			)}
		</Container>
	);
};

export default Maps;
