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
import { Container, InputPontosContainer } from "./styles";
import { TextField, Button, ButtonGroup, Typography } from "@mui/material";
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
		googleMapsApiKey: "AIzaSyAyL6LiHvrtlZvM6nq5qzkuhed1RiFe1kk",
		libraries: ["places"],
	});

	const [map, setMap] = useState(null);
	const [duration, setDuration] = useState("");
	const locationRef = useRef();
	const userLocationCoords = useRef();
	const [route, setRoute] = useState(null);

	const rotaTempLatLong = [[
		{lat: -22.092556, lng: -51.412123},
		{lat: -22.098600, lng: -51.424032},
		{lat: -22.097924, lng: -51.424059},
		{lat: -22.096358, lng: -51.417664},
		{lat: -22.092292, lng: -51.412847},
	]];

	// Location Functions
	function getLocation() {
		clearRoute();
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				console.table(position);
				userLocationCoords.current = { 
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				};
				setCenter({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
			});
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	}

	function setLocation() {
		clearRoute();
		// Set location using the locationRef input
		if (locationRef.current.value === "") {
			getLocation();
		}
		// eslint-disable-next-line no-undef
		const geocoder = new google.maps.Geocoder();
		geocoder.geocode({ address: locationRef.current.value }, (results) => {
			console.table(results);
			userLocationCoords.current = { 
				lat: results[0].geometry.location.lat(),
				lng: results[0].geometry.location.lng(),
			};
			setCenter({
				lat: results[0].geometry.location.lat(),
				lng: results[0].geometry.location.lng(),
			});
		});
	}

	// Directions Functions
	async function getRouteOfMyLocation() {
		// eslint-disable-next-line no-undef
		const directionsService = new google.maps.DirectionsService();

		rotaTempLatLong.forEach((coord) => {
			clearRoute();
			directionsService.route(
				{
					origin: coord[0],
					destination: coord[coord.length - 1],
					waypoints: coord.slice(1, -1).map((location) => ({
						location,
						stopover: true,
					})),
					travelMode: "DRIVING",
				},
				(result, status) => {
					if (status === "OK") {
						// eslint-disable-next-line no-undef
						const routePolyline = new google.maps.Polyline({
							path: result.routes[0].overview_path,
						});
						// eslint-disable-next-line no-undef
						const location = new google.maps.LatLng(center.lat, center.lng);
						// eslint-disable-next-line no-undef
						if (google.maps.geometry.poly.containsLocation(location, routePolyline)) {
							console.log("Está na rota");
							setRoute(result);
							return;
						}
					}
				}
			);
		});
		clearRoute();
	}

	async function clearRoute() {
		setRoute(null);
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
				{route && (
					<DirectionsRenderer
						directions={route}
						options={{ draggable: false }}
					/>
				)}
			</GoogleMap>

			<InputPontosContainer>
				
				<Typography variant="" component="div" sx={{ flexGrow: 1 }}>
					Utilizar Endereço ou Pegar Localização Atual:
				</Typography>

				<Autocomplete>
					<TextField
						type="text"
						placeholder="Meu Endereço"
						inputRef={locationRef}
					/>
				</Autocomplete>

				{/* This code is commented, since it is not part of the actual idea anymore  
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
				*/}

				<br />

				<ButtonGroup>
					{/*
					This code is commented, since it is not part of the actual idea anymore  
					<Button type="submit" onClick={calculateRoute}>
						Calcular Rota
					</Button> 
					*/}
					
					<Button type="submit" onClick={setLocation}>
						Meu Endereço
					</Button>
					<Button type="submit" onClick={getLocation}>
						Localização
					</Button>

					{/* <MdClear size={35} onClick={clearRoute} /> */}
				</ButtonGroup>

				<br />

				<ButtonGroup>
					<Button type="submit" onClick={getRouteOfMyLocation}>
						Procurar Rota
					</Button>
				</ButtonGroup>
			
				<br />

				<Typography variant="" component="div" sx={{ flexGrow: 1 }}>
					Informações do Caminhão:
					<br />
					Tipo de coleta: 
					<br />
					Duração: {duration}
				</Typography>

			</InputPontosContainer>

		</Container>
	) : (
		<></>
	);
};

export default Map;
