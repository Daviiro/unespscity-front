import React, { useState, useEffect } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	Autocomplete,
	DrawingManager,
	Polygon,
} from "@react-google-maps/api";
import { Container } from "./styles";

const Map = (props) => {
	const google = window.google;
	const { center } = props;
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPSAPIKEY,
		libraries: ["drawing"],
	});
	const containerStyle = {
		width: "100%",
		height: "500px",
	};
	const options = {
		fillColor: "lightblue",
		fillOpacity: 1,
		strokeColor: "red",
		strokeOpacity: 1,
		strokeWeight: 2,
		clickable: false,
		draggable: false,
		editable: false,
		geodesic: false,
		zIndex: 1,
	};

	const polygons = [
		{ lat: 25.774, lng: -80.19 },
		{ lat: 18.466, lng: -66.118 },
		{ lat: 32.321, lng: -64.757 },
		{ lat: 25.774, lng: -80.19 },
		{ lat: 35.774, lng: -70.19 },
		{ lat: 34.774, lng: -60.19 },
	];
	const [polygonss, setPolygonss] = useState([]);

	const onLoad = (polygon) => {
		console.log("polygon: ", polygon);
	};

	/*
	const handleAddPolygon = () => {
		//aqui eu mando pro backend usando o axios
		const data = JSON.parse(localStorage.getItem("locationLocalStorage"));
		console.log("Cidade: " + data.city);
		console.log("Titulo: ");
		console.log("Dias da semana: ");
		console.log("Horario: ");
	};

	*/

	useEffect(() => {
		console.log("POLIGONO" + polygonss.toString());
	});

	const onPolygonComplete = (polygon) => {
		//console.log("aqui: " + polygon.getPath().getArray());

		//passar os caminhos para o array
		const aux = polygon
			.getPath()
			.getArray()
			.map((p) => {
				//console.log("Lat: " + p.lat());
				setPolygonss([
					...polygonss,

					{
						lat: p.lat(),
						lng: p.lng(),
					},
				]);
				//console.log("Long: " + p.lng());
			});

		/*setPolygonss([
			...polygonss,
			{
				id_polygon: 1,
				coord: polygon.getPath().getArray(),
			},
		]);*/
	};

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
				{/**
				 * 
				 * <Polygon
					onLoad={onLoad}
					paths={[polygonss]}
					options={options}
				/>
			    */}

				<DrawingManager
					onLoad={onLoad}
					onPolygonComplete={onPolygonComplete}
					drawingMode={"polygon"}
					options={{
						drawingControlOptions: {
							position: google.maps.ControlPosition.TOP_CENTER,
							drawingModes: [
								google.maps.drawing.OverlayType.POLYGON,
							],
						},
					}}
				/>
			</GoogleMap>
		</Container>
	) : (
		<></>
	);
};

export default Map;
