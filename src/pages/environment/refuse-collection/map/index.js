import React, { useState, useContext, useEffect, useRef } from "react";
import {
	GoogleMap,
	DirectionsRenderer,
	useJsApiLoader,
	Marker,
	Autocomplete,
} from "@react-google-maps/api";
import LocalContext from "../../../user-location/Context";
import { fetchLatLong } from "../../../../services/GoogleMaps";
import { fetchCityForID } from "../../../../services/IBGE";
import { Container, DirectionsContainer } from "./styles";
import { TextField, Button, ButtonGroup } from "@mui/material";
import { MdClear } from "react-icons/md";

const Map = (props) => {
	const [center, setCenter] = useState({ lat: 0, lng: 0 });
	const [cityName, setCityName] = useState("");
	const [formValues, setFormValues] = useContext(LocalContext);
	fetchCityForID(formValues.city).then((city) => {
		setCityName(city);
	}); //API DO IBGE, SEM PROBLEMAS DE COBRANCA
	useEffect(() => {
		if (formValues.city !== undefined) {
			fetchCityForID(formValues.city).then((city) => {
				setCityName(city);
			}); //API DO IBGE, SEM PROBLEMAS DE COBRANCA
			if (cityName != "") {
				fetchLatLong(cityName).then((data) => {
					setCenter({
						lat: data.results[0].geometry.location.lat,
						lng: data.results[0].geometry.location.lng,
					});
				});
			} //DENTRO DESTE TEM A API DO GEOCODE, DE JEITO NENHUM CRIE UM LOOP NESTE USEEFFECT
		}
	}, [cityName]);
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
	const [directionsResponse, setDirectionsResponse] = useState(null);
	const [distance, setDistance] = useState("");
	const [duration, setDuration] = useState("");
	const originRef = useRef();
	const destinationRef = useRef();

	async function calculateRoute() {
		console.log("TESTE" + destinationRef.current.value);
		if (
			originRef.current.value === "" ||
			destinationRef.current.value === ""
		) {
			return;
		}
		// eslint-disable-next-line no-undef
		const directionsService = new google.maps.DirectionsService();
		const results = await directionsService.route({
			origin: originRef.current.value,
			destination: destinationRef.current.value,
			// eslint-disable-next-line no-undef
			travelMode: google.maps.TravelMode.DRIVING,
		});
		setDirectionsResponse(results);
		setDistance(results.routes[0].legs[0].distance.text);
		setDuration(results.routes[0].legs[0].duration.text);
	}

	function clearRoute() {
		setDirectionsResponse(null);
		setDistance("");
		setDuration("");
		originRef.current.value = "";
		destinationRef.current.value = "";
	}

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
				{directionsResponse && (
					<DirectionsRenderer
						directions={directionsResponse}
						options={{ draggable: true }}
					/>
				)}
				{/*{props.routes.map((route) => (
				<h1>tste</h1>
			))}*/}
			</GoogleMap>
			<DirectionsContainer>
				<Autocomplete>
					<TextField
						type="text"
						placeholder="Origem"
						inputRef={originRef}
					/>
				</Autocomplete>
				<br />
				<Autocomplete>
					<TextField
						type="text"
						placeholder="Destino"
						inputRef={destinationRef}
					/>
				</Autocomplete>
				<br />
				<ButtonGroup>
					<Button type="submit" onClick={calculateRoute}>
						Calcular Rota
					</Button>
					<MdClear size={35} onClick={clearRoute} />
				</ButtonGroup>
			</DirectionsContainer>
		</Container>
	) : (
		<></>
	);
};

export default Map;
