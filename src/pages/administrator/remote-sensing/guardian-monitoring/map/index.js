import React, { useState, useContext, useEffect, useRef } from "react";
import {
	GoogleMap,
	DirectionsRenderer,
	useJsApiLoader,
	Marker,
	Autocomplete,
} from "@react-google-maps/api";
import { Container, DirectionsContainer } from "./styles";
import { TextField, Button, ButtonGroup } from "@mui/material";
import { MdClear } from "react-icons/md";
import Modal from "./modal";
import { api } from "../../../../../services/api";

const Map = (props) => {
	const google = window.google;
	const { center } = props;
	const [auxiliarWaypoint, setAuxiliarWaypoint] = useState([]);
	const [flag, setFlag] = useState(false);

	const containerStyle = {
		width: "100%",
		height: "500px",
	};

	const [map, setMap] = useState(null);
	const [directionsResponse, setDirectionsResponse] = useState(null);

	const [distance, setDistance] = useState("");
	const [duration, setDuration] = useState("");
	const originRef = useRef();
	const destinationRef = useRef();

	async function calculateRoute(e) {
		e.preventDefault();
		if (
			originRef.current.value === "" ||
			destinationRef.current.value === ""
		) {
			return;
		}

		const directionsService = new google.maps.DirectionsService();
		const results = await directionsService.route({
			origin: originRef.current.value,
			destination: destinationRef.current.value,
			waypoints: auxiliarWaypoint,
			travelMode: google.maps.TravelMode.DRIVING,
		});
		setDirectionsResponse(results);
		setDistance(results.routes[0].legs[0].distance.text);
		setDuration(results.routes[0].legs[0].duration.text);
		setFlag(true);
	}

	function clearRoute() {
		setDirectionsResponse(null);
		setDistance("");
		setDuration("");
		originRef.current.value = "";
		destinationRef.current.value = "";
		setFlag(false);
	}

	const handleAddWayPoint = (coords) => {
		if (
			originRef.current.value === "" ||
			destinationRef.current.value === ""
		) {
			return;
		}
		setAuxiliarWaypoint([
			...auxiliarWaypoint,
			{
				location: new google.maps.LatLng(coords.lat, coords.lng),
				stopover: true,
			},
		]);
		//calculateRoute();
	};

	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		console.log("fechando o modal");
		setOpen(false);
	};

	const handleAddRoute = async (title) => {
		//aqui eu mando pro backend usando o axios
		const data = JSON.parse(localStorage.getItem("locationLocalStorage"));
		console.log("Cidade: " + data.city);
		console.log("Titulo: " + title);
		console.log("Origem: " + originRef.current.value);
		console.log("Destino: " + destinationRef.current.value);
		console.log("Waypoints: " + auxiliarWaypoint);
		console.log("Distancia: " + distance);
		console.log("Duracao: " + duration);

		try {
			api.post("/guardian", {
				data: {
					cityid: data.city,
					title: title,
					origem: originRef.current.value,
					destino: destinationRef.current.value,
					waypoints: auxiliarWaypoint,
					distancia: distance,
					duracao: duration,
				},
			}).then((res) => {
				console.log(res.status);
				alert("Rota adiciona com sucesso!");
			});
		} catch (e) {
			console.log(e);
		}

		setAuxiliarWaypoint([]);
		clearRoute();
		handleClose();
	};

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPSAPIKEY,
		libraries: ["places"],
	});

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
				onClick={(coords) => {
					handleAddWayPoint({
						lat: coords.latLng.lat(),
						lng: coords.latLng.lng(),
					});
				}}
				onLoad={(map) => setMap(map)}
			>
				<Marker position={center} />

				{directionsResponse && (
					<DirectionsRenderer
						directions={directionsResponse}
						options={{ draggable: false }}
					/>
				)}
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
				<br />
				{!flag ? (
					<Button
						fullwidth
						variant="contained"
						type="submit"
						disabled
					>
						Adicionar Rota
					</Button>
				) : (
					<Button
						fullwidth
						variant="contained"
						type="submit"
						onClick={() => handleClickOpen()}
					>
						Adicionar Rota
					</Button>
				)}
			</DirectionsContainer>
			<Modal
				open={open}
				handleAddRoute={handleAddRoute}
				handleClose={handleClose}
			/>
		</Container>
	) : (
		<></>
	);
};

export default Map;
