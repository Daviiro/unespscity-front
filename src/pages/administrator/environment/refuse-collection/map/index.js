import React, { useState, useEffect } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	DrawingManager,
} from "@react-google-maps/api";
import { Container } from "./styles";
import { api } from "../../../../../services/api";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TimePicker from "@material-ui/lab/TimePicker";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import { Typography } from "@mui/material";
import NativeSelect from "@mui/material/NativeSelect";
import { AddInfoContainer } from "./styles";

const Map = (props) => {
	const google = window.google;
	const { center } = props;
	const [typeOfRefuse, setTypeOfRefuse] = useState("Orgânico");
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
	const [title, setTitle] = useState("");
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

	const [operatingDays, setoperatingDays] = useState({
		dom: false,
		seg: false,
		ter: false,
		qua: false,
		qui: false,
		sex: false,
		sab: false,
	});
	const current = new Date();

	const handleRefuseTypeChange = (e) => {
		e.preventDefault();
		const { value } = e.target;
		setTypeOfRefuse(value);
	};

	const handleDayChange = (event) => {
		const { name, checked } = event.target;
		setoperatingDays({
			...operatingDays,
			[name]: checked,
		});
	};
	const FormatMonth = () => {
		if (current.getMonth() < 9) {
			return "-0";
		} else {
			return "-";
		}
	};
	const FormatDay = () => {
		if (current.getDate() < 9) {
			return "-0";
		} else {
			return "-";
		}
	};

	const [startTime, setStartTime] = useState(
		new Date(
			`${current.getFullYear()}${FormatMonth()}${
				current.getMonth() + 1
			}${FormatDay()}${current.getDate()}T00:00:00.000Z`
		)
	);

	const [finishTime, setFinishTime] = useState(
		new Date(
			`${current.getFullYear()}${FormatMonth()}${
				current.getMonth() + 1
			}${FormatDay()}${current.getDate()}T00:00:00.000Z`
		)
	);

	const addPolygonToDatabase = async () => {
		const data = JSON.parse(localStorage.getItem("locationLocalStorage"));

		console.log("acionou: " + polygonss);
		if (polygonss.length === 0) {
			alert("É necessário fazer o desenho do poligno no mapa");
			return;
		}
		if (title == "") {
			alert("É necessário inserir um titulo");
			return;
		}

		try {
			api.post("/refuse", {
				data: {
					title: title,
					cityId: data.city,
					polygon: polygonss,
					operatingDays: operatingDays,
					typeOfRefuse: typeOfRefuse,
					startTime: startTime,
					finishTime: new Date(),
				},
			}).then((res) => {
				setPolygonss([]);
				setTitle("");
				console.log(res.status);
			});
		} catch (e) {
			console.log(e);
		}
	};

	const onPolygonComplete = (polygon) => {
		//console.log("aqui: " + polygon.getPath().getArray());

		//passar os caminhos para o array
		/*const paths = polygon.getPath().getArray().map((p) => {
				console.log("Lat: " + p.lat());
				setPolygonss([
					...polygonss,

					{
						lat: p.lat(),
						lng: p.lng(),
					},
				]);
				console.log("Long: " + p.lng());
			});*/
		let bounds = []; //variavel que vai conter o valor do ultimo polinomio desenhado
		const paths = polygon.getPath();

		for (var i = 0; i < paths.length; i++) {
			var point = {
				lat: paths.getAt(i).lat(),
				lng: paths.getAt(i).lng(),
			};
			bounds.push(point);
		}

		setPolygonss(bounds); /*

		///acima teste do stack overflow
		/*
		const paths = polygon
			.getPath()
			.getArray()
			.map((p) => {
				setPolygonss((current) => [
					...current,
					{
						lat: p.lat(),
						lng: p.lng(),
					},
				]);
			});
		console.log("POLY: " + polygonss);
		/*
		let aux;
		for (var i = 0; i < paths.length; i++) {
			/*setPolygonss((current) => [
				...current,
				{
					lat: paths[i].lat(),
					lng: paths[i].lng(),
				},
			]);
			const newPolygonss = [...polygonss];
			aux = {
				lat: paths[i].lat(),
				lng: paths[i].lng(),
			};
			newPolygonss.push(aux);
			setPolygonss(newPolygonss);
			console.log(paths[i].lat());
			console.log(paths[i].lng());
		}*/

		//tentar mandar o poligono completo para o backend
		/*if (bounds) {
			addPolygonToDatabase(bounds);
		}*/
		/*
		try {
			api.post("/refuse", {
				data: {
					cityId: data.city,
					polygon: bounds,
					operatingDays: operatingDays,
					startTime: new Date(),
					finishTime: new Date(),
				},
			}).then(setPolygonss([]));
		} catch (e) {
			console.log(e);
		}

		setPolygonss([
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
					onPolygonComplete={(value) => onPolygonComplete(value)}
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
			<br />
			<AddInfoContainer>
				<h4>Adicionar Zona de Recolha de Lixo</h4>

				<div>
					Para adicionar uma nova área de recolha de lixo, por favor,
					insira as informações abaixo, em seguida, desenhe o poligono
					relativo a área e as informações desejadas e po fim clique
					em "Adicionar".
				</div>
				<br />
				<TextField
					name="title"
					label="Título"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				>
					Título
				</TextField>
				<br />
				<div style={{ display: "flex", flexDirection: "row" }}>
					<FormGroup aria-label="position" column>
						<FormControlLabel
							checked={operatingDays.dom}
							control={
								<Switch
									name="dom"
									checked={operatingDays.dom}
									onChange={handleDayChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Domingo"
						/>
						<FormControlLabel
							control={
								<Switch
									name="seg"
									checked={operatingDays.seg}
									onChange={handleDayChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Segunda"
						/>
					</FormGroup>
					<FormGroup aria-label="position" column>
						<FormControlLabel
							control={
								<Switch
									name="ter"
									checked={operatingDays.ter}
									onChange={handleDayChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Terça"
						/>
						<FormControlLabel
							control={
								<Switch
									name="qua"
									checked={operatingDays.qua}
									onChange={handleDayChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Quarta"
						/>
					</FormGroup>
					<FormGroup aria-label="position" column>
						<FormControlLabel
							control={
								<Switch
									name="qui"
									checked={operatingDays.qui}
									onChange={handleDayChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Quinta"
						/>
						<FormControlLabel
							control={
								<Switch
									name="sex"
									checked={operatingDays.sex}
									onChange={handleDayChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Sexta"
						/>
					</FormGroup>
					<FormGroup aria-label="position" column>
						<FormControlLabel
							control={
								<Switch
									name="sab"
									checked={operatingDays.sab}
									onChange={handleDayChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Sábado"
						/>
					</FormGroup>
				</div>
				<div>
					<Typography variant="body2">Horário de Início</Typography>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<TimePicker
							ampm={false}
							value={startTime}
							onChange={setStartTime}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</div>
				<div>
					<Typography variant="body2">Horário de Término</Typography>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<TimePicker
							ampm={false}
							value={finishTime}
							onChange={setFinishTime}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</div>
				<div>
					<NativeSelect onChange={handleRefuseTypeChange}>
						<option key={1} value={"Orgânico"}>
							Lixo Orgânico
						</option>
						<option key={2} value={"Reciclável"}>
							Lixo Reciclável
						</option>
						<option key={3} value={"Orgânico e Reciclável"}>
							Lixo Orgânico e Reciclável
						</option>
					</NativeSelect>
				</div>
				<br />
				<Button
					variant="contained"
					onClick={() => {
						//adicionar no banco de dados
						//console.log("Bounds " + bounds);
						addPolygonToDatabase();
						//console.log("POLY " + polygonss);
						setoperatingDays({
							dom: false,
							seg: false,
							ter: false,
							qua: false,
							qui: false,
							sex: false,
							sab: false,
						});
						setTitle("");
					}}
				>
					Adicionar
				</Button>
			</AddInfoContainer>
			<br />
		</Container>
	) : (
		<></>
	);
};

export default Map;
