import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Polygon } from "@react-google-maps/api";
import { Container } from "../map/styles";
import { api } from "../../../../../services/api";
import { InfoWindowContainer } from "./styles";
import { InfoWindow } from "@react-google-maps/api";
import Typography from "@mui/material/Typography";
import { Button, setRef } from "@mui/material";

const ShowAllPolygons = (props) => {
	const google = window.google;
	const { center, admin } = props;
	const [refresh, setRefresh] = useState(false);
	const containerStyle = {
		width: "100%",
		height: "500px",
	};
	const options = {
		fillColor: "lightblue",
		fillOpacity: 0.4,
		strokeColor: "blue",
		strokeOpacity: 0.5,
		strokeWeight: 1,
		clickable: true,
		draggable: false,
		editable: false,
		geodesic: false,
		zIndex: 1,
	};
	const options2 = {
		fillColor: "lightgreen",
		fillOpacity: 0.4,
		strokeColor: "blue",
		strokeOpacity: 0.5,
		strokeWeight: 1,
		clickable: true,
		draggable: false,
		editable: false,
		geodesic: false,
		zIndex: 1,
	};
	const [isLoading, setLoading] = useState(true);
	const [polygons, setPolygons] = useState([]);
	
	//recuperar dados do backend
	const fetchData = async () => {
		const data = JSON.parse(localStorage.getItem("locationLocalStorage"));

		try {
			await api
				.get("/refuse", {
					params: {
						cityid: data.city,
					},
				})
				.then((res) => {
					setPolygons(res.data);
					setLoading(false);
				});
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		fetchData();
	}, [refresh]);

	const [selected, setSelected] = useState({});

	const dateFormater = (oldDate) => {
		const newDate = new Date(oldDate);
		let resul = newDate.getMinutes();
		if (resul === 0) {
			resul = newDate.getHours() + "h" + newDate.getMinutes() + "0";
		} else {
			resul = newDate.getHours() + "h" + newDate.getMinutes();
		}
		return resul;
	};

	const handleDelete = async (id) => {
		console.log("ID: " + id);
		try {
			await api
				.delete("/refuse", {
					params: {
						id: id,
					},
				})
				.then((res) => {
					setRefresh(!refresh);
					console.log(res.status);
				});
		} catch (err) {
			console.log(err);
		}
	};

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyCWnTER-hlbvhy9WhYip95-4RFfcIg7hTI",
		libraries: ["drawing"],
	});

	if (isLoading) {
		return <div>Loading...</div>;
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
			>
				{/*{polygons !== null &&
					polygons.map((poly, index) => (
						<Polygon paths={poly.polygon} options={options} />
					))}*/}
				{polygons !== null &&
					polygons.map((poly, index) =>
						poly.typeOfRefuse === "Orgânico" ? (
							<Polygon
								paths={poly.polygon}
								options={options}
								onClick={(ev) => {
									setSelected({
										location: {
											lat: ev.latLng.lat(),
											lng: ev.latLng.lng(),
										},
										type: poly.typeOfRefuse,
										operatingDays: poly.operatingDays,
										title: poly.title,
										start: poly.startTime,
										finish: poly.finishTime,
										id: poly._id,
									});
								}}
							></Polygon>
						) : (
							<Polygon
								paths={poly.polygon}
								options={options2}
								onClick={(ev) => {
									setSelected({
										location: {
											lat: ev.latLng.lat(),
											lng: ev.latLng.lng(),
										},
										type: poly.typeOfRefuse,
										operatingDays: poly.operatingDays,
										title: poly.title,
										start: poly.startTime,
										finish: poly.finishTime,
										id: poly._id,
									});
								}}
							></Polygon>
						)
					)}

				{selected.location && (
					<InfoWindow
						position={selected.location}
						onCloseClick={() => setSelected({})}
					>
						<InfoWindowContainer>
							<div>
								<Typography variant="subtitle2">
									Titulo: {selected.title}
								</Typography>
								<Typography variant="body2">Dias:</Typography>
								{selected.operatingDays.dom ? (
									<Typography variant="body2">
										Domingo
									</Typography>
								) : (
									<></>
								)}
								{selected.operatingDays.seg ? (
									<Typography variant="body2">
										Segunda
									</Typography>
								) : (
									<></>
								)}
								{selected.operatingDays.ter ? (
									<Typography variant="body2">
										Terça
									</Typography>
								) : (
									<></>
								)}
								{selected.operatingDays.qua ? (
									<Typography variant="body2">
										Quarta
									</Typography>
								) : (
									<></>
								)}
								{selected.operatingDays.qui ? (
									<Typography variant="body2">
										Quinta
									</Typography>
								) : (
									<></>
								)}
								{selected.operatingDays.sex ? (
									<Typography variant="body2">
										Sexta
									</Typography>
								) : (
									<></>
								)}
								{selected.operatingDays.sab ? (
									<Typography variant="body2">
										Sabádo
									</Typography>
								) : (
									<></>
								)}
							</div>
							<Typography variant="body2">
								Tipo de Lixo: {selected.type}
							</Typography>
							<Typography variant="body2">
								Horário: {dateFormater(selected.start)} às{" "}
								{dateFormater(selected.finish)}
							</Typography>
							<br />
							{admin && (
								<Button
									onClick={() => handleDelete(selected.id)}
								>
									Deletar Polígono
								</Button>
							)}
						</InfoWindowContainer>
					</InfoWindow>
				)}
			</GoogleMap>
		</Container>
	) : (
		<></>
	);
};

export default ShowAllPolygons;
