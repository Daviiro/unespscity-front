import React, { useState, useEffect } from "react";
import {
	GoogleMap,
	DirectionsRenderer,
	useJsApiLoader,
	Marker,
	Autocomplete,
} from "@react-google-maps/api";
import { api } from "../../../../../services/api";
import { Container, RoutesContainer, SingleRouteContainer } from "./styles";
import { TextField, Button, ButtonGroup } from "@mui/material";
import Typography from "@mui/material/Typography";
import { BsTrashFill } from "react-icons/bs";

const ShowAllRoutes = (props) => {
	const google = window.google;
	const { center } = props;

	const [isLoading, setLoading] = useState(true);
	const [directionsResponse, setDirectionsResponse] = useState(null);
	const [distance, setDistance] = useState("");
	const [duration, setDuration] = useState("");
	const [flag, setFlag] = useState(false);

	//mockup data
	const data = JSON.parse(localStorage.getItem("locationLocalStorage"));
	const [routes, setRoutes] = useState([
		{
			_id: "blabal",
			cityid: data.city,
			title: "Rota do SR. Miguel",
			origem: "Rua Anna Gerbasi - Jardim Aquinopolis, Presidente Prudente - SP, Brasil",
			destino: "Vila Laide, Presidente Prudente - SP, Brasil",
			waypoints: [],
		},
	]);

	//pra quando conectar com o back e puxar as rotas
	const handleFetchRoutes = async () => {
		const data = JSON.parse(localStorage.getItem("locationLocalStorage"));

		try {
			api.get("/guardian", {
				params: {
					cityid: data.city,
				},
			}).then((res) => {
				setRoutes(res.data);
				console.log(res.data);
				setLoading(false);
			});
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		handleFetchRoutes();
	}, []);

	const containerStyle = {
		width: "100%",
		height: "500px",
	};

	const [origin, setOrigin] = useState("");
	const [destination, setDestination] = useState("");
	const [waypoints, setWaypoints] = useState([]);

	useEffect(() => {
		calculateRoute();
	}, [flag]);

	async function calculateRoute() {
		if (origin === "" || destination === "") {
			return;
		}

		const directionsService = new google.maps.DirectionsService();
		const results = await directionsService.route({
			origin: origin,
			destination: destination,
			waypoints: waypoints,
			travelMode: google.maps.TravelMode.DRIVING,
		});
		setDirectionsResponse(results);
	}

	const handleDell = async (id) => {
		try {
			api.delete("/guardian", {
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
					Accept: "Token",
					"Access-Control-Allow-Origin": "*",
					Authorization: "*",
				},
				params: {
					id: id,
				},
			}).then((res) => {
				console.log("rota excluida com sucesso: ", res.status);
				handleFetchRoutes();
			});
		} catch (e) {
			console.log(e);
		}
	};

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPSAPIKEY,
		libraries: ["places"],
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return isLoaded ? (
		<Container>
			<RoutesContainer>
				{routes &&
					routes.map((rota) => (
						<SingleRouteContainer>
							<Typography variant="body1">
								{rota.title}
							</Typography>
							<br />
							<Typography variant="body2">
								Tempo (carro/moto): {rota.duracao}
							</Typography>
							<br />
							<Typography variant="body2">
								Distância: {rota.distancia}
							</Typography>
							<br />
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Button
									variant="contained"
									onClick={() => {
										console.log(rota.origem);
										console.log(rota.destino);
										console.log(rota.duracao);
										console.log(rota.distancia);
										//console.log(rota.waypoints[0].location.lat);
										setOrigin(rota.origem);
										setDestination(rota.destino);
										let auxiliarWaypoint = [];
										for (
											var i = 0;
											i < rota.waypoints.length;
											i++
										) {
											var point = {
												lat: rota.waypoints[i].location
													.lat,
												lng: rota.waypoints[i].location
													.lng,
											};

											auxiliarWaypoint.push({
												location: point,
												stopover: true,
											});
										}

										setWaypoints(auxiliarWaypoint);
										setDuration(rota.duracao);
										setDistance(rota.distancia);
										setFlag(!flag);
									}}
								>
									Calcular
								</Button>
								<BsTrashFill
									style={{ cursor: "pointer" }}
									color={"red"}
									size={25}
									onClick={() => handleDell(rota._id)}
								/>
							</div>
						</SingleRouteContainer>
					))}
			</RoutesContainer>
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
			>
				<Marker position={center} />
				{directionsResponse && (
					<DirectionsRenderer
						directions={directionsResponse}
						options={{ draggable: false }}
					/>
				)}
			</GoogleMap>
		</Container>
	) : (
		<></>
	);
};

export default ShowAllRoutes;
